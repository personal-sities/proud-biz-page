import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().max(50).optional().or(z.literal("")),
  service: z.string().trim().max(150).optional().or(z.literal("")),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const submitContactInquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { data: row, error } = await supabaseAdmin
      .from("contact_inquiries")
      .insert({
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        service: data.service || null,
        message: data.message,
      })
      .select("id")
      .single();

    if (error) {
      console.error("Failed to save contact inquiry:", error.message);
      throw new Error("Could not save your inquiry. Please try again.");
    }

    return { id: row.id as string };
  });
