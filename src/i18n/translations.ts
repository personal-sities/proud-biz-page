export const languages = [
  { code: "uz", label: "UZ", name: "O'zbekcha" },
  { code: "ru", label: "RU", name: "Русский" },
  { code: "en", label: "EN", name: "English" },
] as const;

export type Language = (typeof languages)[number]["code"];

export const defaultLanguage: Language = "uz";

type Dict = Record<string, string | string[]>;

const uz = {
  "nav.home": "Bosh sahifa",
  "nav.services": "Xizmatlar",
  "nav.about": "Biz haqimizda",
  "nav.contact": "Aloqa",
  "nav.quote": "Narx olish",
  "nav.menu": "Menyuni ochish",
  "lang.aria": "Tilni tanlash",

  "footer.tagline":
    "O'zbekiston bo'ylab transport vositalari, ko'chmas mulk va biznesni professional baholash xizmatlari.",
  "footer.quickLinks": "Tezkor havolalar",
  "footer.contact": "Aloqa",
  "footer.hours": "Dush–Shan: 09:00 – 18:00",
  "footer.rights": "Barcha huquqlar himoyalangan.",

  "home.hero.eyebrow": "Professional baholash xizmatlari",
  "home.hero.title": "Aktivlaringizning haqiqiy qiymatini biling",
  "home.hero.subtitle":
    "ACCURATE VALUE MCHJ O'zbekiston bo'ylab transport vositalari, ko'chmas mulk va bizneslarni sertifikatlangan, mustaqil baholashni amalga oshiradi.",
  "home.hero.cta1": "Baholashga buyurtma",
  "home.hero.cta2": "Xizmatlarni ko'rish",
  "home.hero.imgAlt": "Baholash hujjatlarini ko'rib chiquvchi professional baholovchi",

  "home.services.eyebrow": "Biz nima qilamiz",
  "home.services.title": "Baholash xizmatlari",
  "home.services.subtitle":
    "Siz va biznesingiz uchun eng muhim aktivlarni aniq va asoslangan tarzda baholaymiz.",
  "home.services.learnMore": "Batafsil",

  "service.vehicle.title": "Transport vositalarini baholash",
  "service.vehicle.desc":
    "Yengil avtomobillar, yuk mashinalari va tijorat transportini sotish, sug'urta yoki huquqiy maqsadlarda mustaqil sertifikatlangan baholash.",
  "service.realestate.title": "Ko'chmas mulkni baholash",
  "service.realestate.desc":
    "Turar joy, tijorat obyektlari va yer uchastkalarining bozor qiymatini mahalliy ma'lumotlar va standartlar asosida aniqlash.",
  "service.business.title": "Biznesni baholash",
  "service.business.desc":
    "Kompaniyalar, ulushlar va nomoddiy aktivlarni qo'shilish, sotib olish va hisobot maqsadlarida to'liq baholash.",

  "home.advantages.eyebrow": "Nega bizni tanlashadi",
  "home.advantages.title": "Ishonchli baholash sherigi",
  "adv.certified.title": "Sertifikatlangan mutaxassislar",
  "adv.certified.desc":
    "Baholovchilarimiz tan olingan malakaga ega va milliy baholash standartlariga amal qiladi.",
  "adv.fast.title": "Tez natija",
  "adv.fast.desc": "Batafsil baholash hisobotini haftalar emas, kunlar ichida olasiz.",
  "adv.legal.title": "Huquqiy jihatdan haqiqiy hisobotlar",
  "adv.legal.desc":
    "Har bir hisobot sud, soliq, bank va sug'urta talablariga mos ravishda tayyorlanadi.",
  "adv.client.title": "Mijozga yo'naltirilgan xizmat",
  "adv.client.desc":
    "Har bir raqamni tushuntiramiz, shunda siz ishonch bilan qaror qabul qilasiz.",

  "home.cta.title": "Haqiqiy qiymatni bilishga tayyormisiz?",
  "home.cta.subtitle":
    "Bepul konsultatsiya va baholash bo'yicha individual taklif uchun bugun bog'laning.",
  "home.cta.button": "Bog'lanish",

  "services.hero.eyebrow": "Biz taklif qilamiz",
  "services.hero.title": "Baholash xizmatlarimiz",
  "services.hero.subtitle":
    "Bozor ma'lumotlari va milliy baholash standartlariga asoslangan mustaqil, sertifikatlangan baholash.",
  "services.vehicle.title": "Transport vositalarini baholash",
  "services.vehicle.items": [
    "Yengil avtomobillar, krossoverlar va yengil tijorat transporti",
    "Yuk mashinalari, avtobuslar va og'ir texnika",
    "Sug'urta da'volari va to'liq yo'qotish bahosi",
    "Sotib olish va sotishdan oldingi baholash",
  ],
  "services.realestate.title": "Ko'chmas mulkni baholash",
  "services.realestate.items": [
    "Turar joy kvartiralari va uylar",
    "Tijorat binolari va ofislar",
    "Yer uchastkalari va qishloq xo'jaligi yerlari",
    "Ipoteka, soliq va sud uchun hisobotlar",
  ],
  "services.business.title": "Biznesni baholash",
  "services.business.items": [
    "Kompaniya ulushlarini baholash",
    "Qo'shilish va sotib olishni qo'llab-quvvatlash",
    "Nomoddiy aktivlarni baholash",
    "Moliyaviy hisobot va nizolarni hal qilish",
  ],
  "services.cta.title": "Maxsus baholash kerakmi?",
  "services.cta.subtitle":
    "Aktivingiz haqida ayting — biz to'g'ri baholash yondashuvini tavsiya qilamiz.",
  "services.cta.button": "Narx so'rash",

  "about.hero.eyebrow": "Biz haqimizda",
  "about.hero.title": "Ishonchli mustaqil baholash tajribasi",
  "about.who.title": "Biz kimmiz",
  "about.who.p1":
    "ACCURATE VALUE MCHJ — O'zbekistonda joylashgan baholash kompaniyasi bo'lib, transport vositalari, ko'chmas mulk va bizneslarni baholashga ixtisoslashgan. Biz jismoniy shaxslar, moliya institutlari, korporativ mijozlar va yuristlar bilan ishlaymiz.",
  "about.who.p2":
    "Jamoamiz sertifikatlangan baholash tajribasini mahalliy bozorni amaliy tushunish bilan birlashtiradi. Har bir hisobot shaffof, aniq va qo'llanilgan metodologiya tushuntirilgan holda tayyorlanadi.",
  "about.mission.title": "Bizning missiyamiz",
  "about.mission.text":
    "Mijozlarimizga aktivlarini himoya qilish, asoslangan qarorlar qabul qilish va me'yoriy hamda moliyaviy talablarni bajarishda yordam beruvchi aniq, ishonchli va o'z vaqtida baholash xizmatlarini taqdim etish.",
  "about.values.title": "Bizning qadriyatlarimiz",
  "value.integrity.title": "Halollik",
  "value.integrity.desc":
    "Manfaatlar to'qnashuvidan xoli mustaqil xulosa beramiz — har bir baholash obyektiv va asoslangan.",
  "value.accuracy.title": "Aniqlik",
  "value.accuracy.desc":
    "Hisobotlarimiz tasdiqlangan ma'lumotlar, qat'iy metodologiya va mahalliy bozor bilimiga asoslangan.",
  "value.professionalism.title": "Professionallik",
  "value.professionalism.desc":
    "Milliy va xalqaro baholash standartlariga amal qilamiz, har bir loyihada aniq muloqotni saqlaymiz.",
  "value.value.title": "Qiymat",
  "value.value.desc":
    "Raqamlardan tashqari, qiymat mijoz uchun nimani anglatishini tushuntirib, yaxshi qarorlar qabul qilishga yordam beramiz.",
  "about.cta.title": "Keling, birga ishlaymiz",
  "about.cta.button": "Bog'lanish",

  "contact.hero.eyebrow": "Bog'lanish",
  "contact.hero.title": "Aloqa",
  "contact.hero.subtitle":
    "Savolingiz bormi yoki narx kerakmi? Yozing — jamoamiz tezda javob beradi.",
  "contact.form.title": "Bizga xabar yuboring",
  "contact.form.subtitle":
    "Quyidagi shaklni to'ldiring — bir ish kuni ichida javob beramiz.",
  "contact.form.name": "To'liq ism",
  "contact.form.namePlaceholder": "Ismingiz",
  "contact.form.phone": "Telefon",
  "contact.form.email": "Email",
  "contact.form.service": "Kerakli xizmat",
  "contact.form.servicePlaceholder": "Transport / Ko'chmas mulk / Biznes baholash",
  "contact.form.message": "Xabar",
  "contact.form.messagePlaceholder": "Baholash ehtiyojlaringiz haqida yozing",
  "contact.form.submit": "Xabar yuborish",
  "contact.form.sending": "Yuborilmoqda…",
  "contact.form.checkForm": "Iltimos, shaklni tekshiring.",
  "contact.form.errorGeneric": "Xatolik yuz berdi. Iltimos, qayta urinib ko'ring.",
  "contact.toast.success": "Rahmat! Murojaatingiz qabul qilindi.",
  "contact.toast.successDesc": "Jamoamiz bir ish kuni ichida siz bilan bog'lanadi.",
  "contact.info.title": "Aloqa ma'lumotlari",
  "contact.info.subtitle": "Quyidagi ma'lumotlar orqali ham bevosita bog'lanishingiz mumkin.",
  "contact.info.phone": "Telefon",
  "contact.info.email": "Email",
  "contact.info.address": "Manzil",
  "contact.info.addressValue":
    "Toshkent shahri, Shayxontohur tumani, Zarqaynar ko'chasi, 39-uy",
  "contact.info.hours": "Ish vaqti",
  "contact.info.hoursValue": "Dush–Shan: 09:00 – 18:00",
  "contact.map.aria": "ACCURATE VALUE ofisi joylashgan interaktiv xarita",
  "contact.map.open": "Google Maps'da ochish",
  "contact.form.nameRequired": "Ism kiritilishi shart",
  "contact.form.emailInvalid": "Email manzil noto'g'ri",
  "contact.form.messageRequired": "Xabar kiritilishi shart",
};

export type TranslationKey = keyof typeof uz;

const ru: Record<TranslationKey, string | string[]> = {
  "nav.home": "Главная",
  "nav.services": "Услуги",
  "nav.about": "О нас",
  "nav.contact": "Контакты",
  "nav.quote": "Запросить цену",
  "nav.menu": "Открыть меню",
  "lang.aria": "Выбор языка",

  "footer.tagline":
    "Профессиональная оценка транспортных средств, недвижимости и бизнеса по всему Узбекистану.",
  "footer.quickLinks": "Быстрые ссылки",
  "footer.contact": "Контакты",
  "footer.hours": "Пн–Сб: 09:00 – 18:00",
  "footer.rights": "Все права защищены.",

  "home.hero.eyebrow": "Профессиональные услуги оценки",
  "home.hero.title": "Узнайте реальную стоимость своих активов",
  "home.hero.subtitle":
    "ACCURATE VALUE MCHJ проводит сертифицированную независимую оценку транспортных средств, недвижимости и бизнеса по всему Узбекистану.",
  "home.hero.cta1": "Заказать оценку",
  "home.hero.cta2": "Наши услуги",
  "home.hero.imgAlt": "Профессиональный оценщик изучает документы для оценки",

  "home.services.eyebrow": "Чем мы занимаемся",
  "home.services.title": "Услуги оценки",
  "home.services.subtitle":
    "Мы проводим точную и обоснованную оценку активов, которые важны для вас и вашего бизнеса.",
  "home.services.learnMore": "Подробнее",

  "service.vehicle.title": "Оценка транспортных средств",
  "service.vehicle.desc":
    "Независимая сертифицированная оценка автомобилей, грузовиков и коммерческого транспорта для продажи, страхования или юридических целей.",
  "service.realestate.title": "Оценка недвижимости",
  "service.realestate.desc":
    "Точное определение рыночной стоимости жилой, коммерческой недвижимости и земельных участков на основе местных данных и стандартов.",
  "service.business.title": "Оценка бизнеса",
  "service.business.desc":
    "Комплексная оценка компаний, долей и нематериальных активов для сделок M&A и отчётности.",

  "home.advantages.eyebrow": "Почему выбирают нас",
  "home.advantages.title": "Надёжный партнёр по оценке",
  "adv.certified.title": "Сертифицированные эксперты",
  "adv.certified.desc":
    "Наши оценщики имеют признанную квалификацию и соблюдают национальные стандарты оценки.",
  "adv.fast.title": "Быстрые сроки",
  "adv.fast.desc": "Вы получите подробный отчёт об оценке за дни, а не недели.",
  "adv.legal.title": "Юридически значимые отчёты",
  "adv.legal.desc":
    "Каждый отчёт подготовлен с учётом требований суда, налоговых органов, банков и страховых компаний.",
  "adv.client.title": "Клиентоориентированный сервис",
  "adv.client.desc":
    "Мы объясняем каждую цифру, чтобы вы принимали решения уверенно.",

  "home.cta.title": "Готовы узнать реальную стоимость?",
  "home.cta.subtitle":
    "Свяжитесь с нами сегодня для бесплатной консультации и индивидуального предложения.",
  "home.cta.button": "Связаться",

  "services.hero.eyebrow": "Что мы предлагаем",
  "services.hero.title": "Наши услуги оценки",
  "services.hero.subtitle":
    "Независимая сертифицированная оценка на основе рыночных данных и национальных стандартов.",
  "services.vehicle.title": "Оценка автотранспорта",
  "services.vehicle.items": [
    "Легковые автомобили, внедорожники и лёгкий коммерческий транспорт",
    "Грузовики, автобусы и тяжёлая техника",
    "Оценка страховых случаев и полной гибели",
    "Оценка до покупки и перед продажей",
  ],
  "services.realestate.title": "Оценка недвижимости",
  "services.realestate.items": [
    "Квартиры и жилые дома",
    "Коммерческие здания и офисы",
    "Земельные участки и сельхозугодья",
    "Отчёты для ипотеки, налогов и суда",
  ],
  "services.business.title": "Оценка бизнеса",
  "services.business.items": [
    "Оценка долей компании",
    "Поддержка сделок слияния и поглощения",
    "Оценка нематериальных активов",
    "Финансовая отчётность и разрешение споров",
  ],
  "services.cta.title": "Нужна индивидуальная оценка?",
  "services.cta.subtitle":
    "Расскажите о вашем активе — мы предложим подходящий подход к оценке.",
  "services.cta.button": "Запросить цену",

  "about.hero.eyebrow": "О нас",
  "about.hero.title": "Независимая экспертиза оценки, которой можно доверять",
  "about.who.title": "Кто мы",
  "about.who.p1":
    "ACCURATE VALUE MCHJ — оценочная компания в Узбекистане, специализирующаяся на оценке транспортных средств, недвижимости и бизнеса. Мы работаем с частными лицами, финансовыми институтами, корпоративными клиентами и юристами.",
  "about.who.p2":
    "Наша команда объединяет сертифицированную экспертизу с практическим пониманием местных рынков. Каждый отчёт готовится прозрачно, точно и с ясным описанием методологии.",
  "about.mission.title": "Наша миссия",
  "about.mission.text":
    "Предоставлять понятные, достоверные и своевременные услуги оценки, которые помогают клиентам защищать активы, принимать обоснованные решения и уверенно выполнять требования регуляторов.",
  "about.values.title": "Наши ценности",
  "value.integrity.title": "Честность",
  "value.integrity.desc":
    "Мы даём независимые заключения без конфликта интересов — каждая оценка объективна и обоснована.",
  "value.accuracy.title": "Точность",
  "value.accuracy.desc":
    "Наши отчёты основаны на проверенных данных, строгой методологии и глубоком знании местного рынка.",
  "value.professionalism.title": "Профессионализм",
  "value.professionalism.desc":
    "Мы следуем национальным и международным стандартам оценки и поддерживаем ясную коммуникацию.",
  "value.value.title": "Ценность",
  "value.value.desc":
    "Помимо цифр мы помогаем клиентам принимать лучшие решения, объясняя, что означает стоимость в их контексте.",
  "about.cta.title": "Давайте работать вместе",
  "about.cta.button": "Связаться с нами",

  "contact.hero.eyebrow": "Свяжитесь с нами",
  "contact.hero.title": "Контакты",
  "contact.hero.subtitle":
    "Есть вопрос или нужна цена? Напишите нам — мы ответим оперативно.",
  "contact.form.title": "Отправьте нам сообщение",
  "contact.form.subtitle":
    "Заполните форму ниже, и мы ответим в течение одного рабочего дня.",
  "contact.form.name": "Полное имя",
  "contact.form.namePlaceholder": "Ваше имя",
  "contact.form.phone": "Телефон",
  "contact.form.email": "Email",
  "contact.form.service": "Нужная услуга",
  "contact.form.servicePlaceholder": "Транспорт / Недвижимость / Бизнес",
  "contact.form.message": "Сообщение",
  "contact.form.messagePlaceholder": "Расскажите о задаче по оценке",
  "contact.form.submit": "Отправить",
  "contact.form.sending": "Отправка…",
  "contact.form.checkForm": "Пожалуйста, проверьте форму.",
  "contact.form.errorGeneric": "Что-то пошло не так. Попробуйте ещё раз.",
  "contact.toast.success": "Спасибо! Ваш запрос получен.",
  "contact.toast.successDesc": "Мы свяжемся с вами в течение одного рабочего дня.",
  "contact.info.title": "Контактная информация",
  "contact.info.subtitle": "Вы также можете связаться с нами напрямую.",
  "contact.info.phone": "Телефон",
  "contact.info.email": "Email",
  "contact.info.address": "Адрес",
  "contact.info.addressValue":
    "г. Ташкент, Шайхантахурский район, улица Заркайнар, дом 39",
  "contact.info.hours": "Часы работы",
  "contact.info.hoursValue": "Пн–Сб: 09:00 – 18:00",
  "contact.map.aria": "Интерактивная карта с офисом ACCURATE VALUE",
  "contact.map.open": "Открыть в Google Maps",
  "contact.form.nameRequired": "Укажите имя",
  "contact.form.emailInvalid": "Неверный адрес email",
  "contact.form.messageRequired": "Введите сообщение",
};

const en: Record<TranslationKey, string | string[]> = {
  "nav.home": "Home",
  "nav.services": "Services",
  "nav.about": "About",
  "nav.contact": "Contact",
  "nav.quote": "Get a Quote",
  "nav.menu": "Toggle menu",
  "lang.aria": "Select language",

  "footer.tagline":
    "Professional valuation services for vehicles, real estate, and businesses across Uzbekistan.",
  "footer.quickLinks": "Quick Links",
  "footer.contact": "Contact",
  "footer.hours": "Mon–Sat: 09:00 – 18:00",
  "footer.rights": "All rights reserved.",

  "home.hero.eyebrow": "Professional Valuation Services",
  "home.hero.title": "Know the True Value of Your Assets",
  "home.hero.subtitle":
    "ACCURATE VALUE MCHJ delivers certified, independent valuation of motor vehicles, real estate, and businesses across Uzbekistan.",
  "home.hero.cta1": "Request a Valuation",
  "home.hero.cta2": "Explore Services",
  "home.hero.imgAlt": "Professional appraiser reviewing valuation documents",

  "home.services.eyebrow": "What We Do",
  "home.services.title": "Valuation Services",
  "home.services.subtitle":
    "We provide precise, defensible valuations for the assets that matter most to you and your business.",
  "home.services.learnMore": "Learn more",

  "service.vehicle.title": "Vehicle Valuation",
  "service.vehicle.desc":
    "Independent, certified appraisal of cars, trucks, and commercial vehicles for sale, insurance, or legal purposes.",
  "service.realestate.title": "Real Estate Valuation",
  "service.realestate.desc":
    "Accurate market-value assessments for residential, commercial, and land properties based on local data and standards.",
  "service.business.title": "Business Valuation",
  "service.business.desc":
    "Comprehensive valuation of companies, shares, and intangible assets for mergers, acquisitions, and reporting.",

  "home.advantages.eyebrow": "Why Choose Us",
  "home.advantages.title": "Trusted Valuation Partner",
  "adv.certified.title": "Certified Experts",
  "adv.certified.desc":
    "Our appraisers hold recognized qualifications and follow national valuation standards.",
  "adv.fast.title": "Fast Turnaround",
  "adv.fast.desc": "Receive your detailed valuation report within days, not weeks.",
  "adv.legal.title": "Legally Valid Reports",
  "adv.legal.desc":
    "Every report is prepared to support court, tax, banking, and insurance requirements.",
  "adv.client.title": "Client-Focused Service",
  "adv.client.desc":
    "We explain every figure so you can make informed decisions with confidence.",

  "home.cta.title": "Ready to Discover the Real Value?",
  "home.cta.subtitle":
    "Contact us today for a free consultation and a tailored quote for your valuation needs.",
  "home.cta.button": "Get in Touch",

  "services.hero.eyebrow": "What We Offer",
  "services.hero.title": "Our Valuation Services",
  "services.hero.subtitle":
    "Independent, certified appraisals backed by market data and national valuation standards.",
  "services.vehicle.title": "Motor Vehicle Valuation",
  "services.vehicle.items": [
    "Passenger cars, SUVs, and light commercial vehicles",
    "Trucks, buses, and heavy machinery",
    "Insurance claim and total-loss assessments",
    "Pre-purchase and pre-sale appraisals",
  ],
  "services.realestate.title": "Real Estate Valuation",
  "services.realestate.items": [
    "Residential apartments and houses",
    "Commercial buildings and offices",
    "Land plots and agricultural properties",
    "Mortgage, tax, and court valuation reports",
  ],
  "services.business.title": "Business Valuation",
  "services.business.items": [
    "Company share valuation",
    "Mergers and acquisitions support",
    "Intangible asset appraisal",
    "Financial reporting and dispute resolution",
  ],
  "services.cta.title": "Need a Custom Valuation?",
  "services.cta.subtitle":
    "Tell us about your asset and we'll recommend the right appraisal approach.",
  "services.cta.button": "Request a Quote",

  "about.hero.eyebrow": "About Us",
  "about.hero.title": "Independent Valuation Expertise You Can Trust",
  "about.who.title": "Who We Are",
  "about.who.p1":
    "ACCURATE VALUE MCHJ is a valuation company based in Uzbekistan, specializing in the appraisal of motor vehicles, real estate, and businesses. We work with individuals, financial institutions, corporate clients, and legal professionals who need reliable, well-documented value opinions.",
  "about.who.p2":
    "Our team combines certified valuation expertise with a practical understanding of local markets. Every report we issue is prepared with transparency, precision, and a clear explanation of the methodology used.",
  "about.mission.title": "Our Mission",
  "about.mission.text":
    "To provide clear, credible, and timely valuation services that help our clients protect their assets, make informed decisions, and meet regulatory and financial requirements with confidence.",
  "about.values.title": "Our Values",
  "value.integrity.title": "Integrity",
  "value.integrity.desc":
    "We deliver independent opinions free from conflicts of interest, ensuring every valuation is objective and defensible.",
  "value.accuracy.title": "Accuracy",
  "value.accuracy.desc":
    "Our reports are grounded in verified data, rigorous methodology, and deep local market knowledge.",
  "value.professionalism.title": "Professionalism",
  "value.professionalism.desc":
    "We follow national and international valuation standards, maintaining clear communication throughout every engagement.",
  "value.value.title": "Value",
  "value.value.desc":
    "Beyond numbers, we help clients make better decisions by explaining what value means in their specific context.",
  "about.cta.title": "Let's Work Together",
  "about.cta.button": "Contact Us",

  "contact.hero.eyebrow": "Get in Touch",
  "contact.hero.title": "Contact Us",
  "contact.hero.subtitle":
    "Have a question or need a quote? Reach out and our team will respond promptly.",
  "contact.form.title": "Send Us a Message",
  "contact.form.subtitle":
    "Fill out the form below and we'll get back to you within one business day.",
  "contact.form.name": "Full Name",
  "contact.form.namePlaceholder": "Your name",
  "contact.form.phone": "Phone",
  "contact.form.email": "Email",
  "contact.form.service": "Service Needed",
  "contact.form.servicePlaceholder": "Vehicle / Real Estate / Business valuation",
  "contact.form.message": "Message",
  "contact.form.messagePlaceholder": "Tell us about your valuation needs",
  "contact.form.submit": "Send Message",
  "contact.form.sending": "Sending…",
  "contact.form.checkForm": "Please check the form.",
  "contact.form.errorGeneric": "Something went wrong. Please try again.",
  "contact.toast.success": "Thank you! Your inquiry has been received.",
  "contact.toast.successDesc": "Our team will get back to you within one business day.",
  "contact.info.title": "Contact Information",
  "contact.info.subtitle": "You can also reach us directly using the details below.",
  "contact.info.phone": "Phone",
  "contact.info.email": "Email",
  "contact.info.address": "Address",
  "contact.info.addressValue":
    "39 Zarqaynar Street, Shaykhantakhur District, Tashkent, Uzbekistan",
  "contact.info.hours": "Working Hours",
  "contact.info.hoursValue": "Mon–Sat: 09:00 – 18:00",
  "contact.map.aria": "Interactive map showing the ACCURATE VALUE office",
  "contact.map.open": "Open in Google Maps",
  "contact.form.nameRequired": "Name is required",
  "contact.form.emailInvalid": "Invalid email address",
  "contact.form.messageRequired": "Message is required",
};

export const dictionaries: Record<Language, Dict> = { uz, ru, en };
