-- 1. Internal schema, not exposed via the API
create schema private;

-- 2. Role-check function in the internal schema (still security definer, fixed search_path)
create or replace function private.has_role(_user_id uuid, _role public.app_role)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.user_roles
    where user_id = _user_id
      and role = _role
  )
$$;

-- 3. Lock down direct execution: no public/anon access; signed-in users and the service role
--    keep EXECUTE only because the contact_inquiries policy must evaluate it as them.
revoke execute on function private.has_role(uuid, public.app_role) from public, anon;
grant execute on function private.has_role(uuid, public.app_role) to authenticated, service_role;
grant usage on schema private to authenticated, service_role;

-- 4. Point the inquiries policy at the internal function and remove the public one
drop policy "Admins can view inquiries" on public.contact_inquiries;
drop function public.has_role(uuid, public.app_role);

create policy "Admins can view inquiries"
on public.contact_inquiries
for select
to authenticated
using (private.has_role(auth.uid(), 'admin'));