export type Lang = "en" | "uk" | "ru";

export const LANG_LABELS: Record<Lang, string> = {
  en: "EN",
  uk: "UK",
  ru: "RU",
};

export const LOCALE_TAGS: Record<Lang, string> = {
  en: "en-US",
  uk: "uk-UA",
  ru: "ru-RU",
};

interface NavLink {
  href: string;
  label: string;
}

export interface Dictionary {
  nav: {
    links: NavLink[];
    bookCta: string;
  };
  footer: {
    tagline: string;
    studioLabel: string;
    contactLabel: string;
    instagram: string;
    visits: string;
    copyright: string;
    builtWith: string;
  };
  common: {
    hoverToReveal: string;
  };
  home: {
    hero: {
      eyebrow: string;
      headline: string;
      bookCta: string;
      galleryCta: string;
    };
    featured: {
      eyebrow: string;
      title: string;
      description: string;
      viewAll: string;
    };
    approach: {
      eyebrow: string;
      title: string;
      steps: { n: string; title: string; body: string }[];
    };
    reel: {
      eyebrow: string;
      title: string;
      description: string;
    };
    team: {
      eyebrow: string;
      title: string;
      description: string;
      viewAll: string;
    };
    cta: {
      title: string;
      button: string;
    };
  };
  gallery: {
    eyebrow: string;
    title: string;
    description: string;
    categories: Record<"Wedding" | "Portrait" | "Editorial" | "Black & White", string>;
  };
  photographers: {
    eyebrow: string;
    title: string;
    description: string;
  };
  booking: {
    eyebrow: string;
    title: string;
    description: string;
    stepLabels: [string, string, string, string];
    prevMonth: string;
    nextMonth: string;
    dateHelper: (packageName: string) => string;
    fields: {
      name: string;
      email: string;
      phone: string;
      notes: string;
    };
    back: string;
    continueBtn: string;
    sendBtn: string;
    sending: string;
    successTitle: string;
    successBody: (email: string, packageName: string, date: string) => string;
    reference: string;
    errors: {
      name: string;
      email: string;
      packageInvalid: string;
      dateInvalid: string;
      generic: string;
      network: string;
    };
  };
  about: {
    eyebrow: string;
    title: string;
    description: string;
    quote: string;
    paragraph1: string;
    paragraph2: string;
    valuesEyebrow: string;
    valuesTitle: string;
    values: { title: string; body: string }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    visits: string;
    form: {
      name: string;
      email: string;
      message: string;
      send: string;
      sending: string;
      successTitle: string;
      successBody: string;
      messageTooShort: string;
    };
  };
}

const en: Dictionary = {
  nav: {
    links: [
      { href: "/", label: "Home" },
      { href: "/gallery", label: "Gallery" },
      { href: "/photographers", label: "Photographers" },
      { href: "/booking", label: "Booking" },
      { href: "/about", label: "Studio" },
      { href: "/contact", label: "Contact" },
    ],
    bookCta: "Book a session",
  },
  footer: {
    tagline:
      "Editorial wedding and portrait photography, based wherever the light is best. Every frame is shot on assignment - nothing staged, nothing stock.",
    studioLabel: "Studio",
    contactLabel: "Contact",
    instagram: "Instagram",
    visits: "Studio visits by appointment",
    copyright: "Loom Studio. Demo project for the NexuraDev portfolio.",
    builtWith: "Built with Next.js & Framer Motion.",
  },
  common: {
    hoverToReveal: "Hover to reveal",
  },
  home: {
    hero: {
      eyebrow: "Editorial Wedding & Portrait Studio",
      headline: "Every frame - a moment that won't happen again.",
      bookCta: "Book a session",
      galleryCta: "View the gallery",
    },
    featured: {
      eyebrow: "Selected Work",
      title: "A quiet record of real days.",
      description: "A handful of frames from recent weddings, portrait sessions, and editorial shoots.",
      viewAll: "View full gallery",
    },
    approach: {
      eyebrow: "How It Works",
      title: "Four steps, no surprises.",
      steps: [
        {
          n: "01",
          title: "Consultation",
          body: "A call or studio visit to talk through the day, the light, and what you actually want remembered.",
        },
        {
          n: "02",
          title: "The Shoot",
          body: "We work quietly and move fast - most of what we shoot is unposed, caught between the planned moments.",
        },
        {
          n: "03",
          title: "Editing",
          body: "Every frame is hand-graded in-house. No presets, no batch filters - each gallery is edited on its own.",
        },
        {
          n: "04",
          title: "Delivery",
          body: "A private online gallery within 3–4 weeks, ready to download, share, and print at full resolution.",
        },
      ],
    },
    reel: {
      eyebrow: "Behind the Scenes",
      title: "Still shot on real film, some of it.",
      description: "A short loop from the studio - loading film, checking light, between takes.",
    },
    team: {
      eyebrow: "The Studio",
      title: "Four photographers. One editing style.",
      description: "Every gallery - regardless of who shot it - is graded to the same quiet, warm palette.",
      viewAll: "Meet the team",
    },
    cta: {
      title: "Let's make something worth keeping.",
      button: "Check availability",
    },
  },
  gallery: {
    eyebrow: "Gallery",
    title: "A selection of recent work.",
    description: "Hover any frame to reveal a second angle, or the color grade we almost used instead.",
    categories: {
      Wedding: "Wedding",
      Portrait: "Portrait",
      Editorial: "Editorial",
      "Black & White": "Black & White",
    },
  },
  photographers: {
    eyebrow: "The Team",
    title: "Four people, one shared eye for light.",
    description:
      "Every photographer at Loom trains together and edits to the same in-house style - so your gallery looks consistent no matter who was behind the camera.",
  },
  booking: {
    eyebrow: "Booking",
    title: "Check availability.",
    description: "Three quick steps - pick a package, a date, and tell us where to send the confirmation.",
    stepLabels: ["Package", "Date", "Your details", "Confirmed"],
    prevMonth: "Previous month",
    nextMonth: "Next month",
    dateHelper: (pkg) => `Choose a preferred date for ${pkg}. We'll confirm exact availability by email.`,
    fields: {
      name: "Full name",
      email: "Email",
      phone: "Phone (optional)",
      notes: "Anything we should know? (optional)",
    },
    back: "← Back",
    continueBtn: "Continue",
    sendBtn: "Send request",
    sending: "Sending…",
    successTitle: "Request received",
    successBody: (email, pkg, date) =>
      `We'll email you at ${email} within one business day to confirm ${pkg} on ${date}.`,
    reference: "Reference",
    errors: {
      name: "Please enter your name.",
      email: "Please enter a valid email address.",
      packageInvalid: "Please select a valid package.",
      dateInvalid: "Please select a delivery date.",
      generic: "Something went wrong. Please try again.",
      network: "Couldn't reach the server. Please try again.",
    },
  },
  about: {
    eyebrow: "About Loom",
    title: "A studio built around one idea: get out of the way.",
    description:
      "Loom Studio started in 2016 as a two-person wedding team. Today we're four photographers working out of one small studio - still shooting every wedding the same way we did the first one.",
    quote: "We built Loom because every studio we shot for wanted us to shoot like everyone else.",
    paragraph1:
      "Mara Voss founded Loom Studio after ten years shooting for other people's brands. The idea was simple: keep the team small, keep the editing consistent, and never let a gallery leave the studio looking like a template.",
    paragraph2:
      "That's still the whole pitch. We shoot weddings, portraits, and editorial work the same unhurried way - close attention, minimal direction, and a lot of trust in natural light.",
    valuesEyebrow: "What We Believe",
    valuesTitle: "Three things we don't compromise on.",
    values: [
      {
        title: "Shot, not staged",
        body: "We photograph what's actually happening. Direction is light, never forced expressions or fake candids.",
      },
      {
        title: "Edited in-house",
        body: "No outsourced retouching. The four of us grade every gallery ourselves, to the same warm palette.",
      },
      {
        title: "Small by design",
        body: "We take on a limited number of weddings each year so every couple gets the full studio's attention.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Have a date in mind? Tell us about it.",
    description:
      "For bookings, use the booking page - it's faster. For everything else - press, collaborations, questions - this form reaches the whole studio.",
    visits: "Studio visits by appointment only",
    form: {
      name: "Full name",
      email: "Email",
      message: "Tell us about your project",
      send: "Send message",
      sending: "Sending…",
      successTitle: "Message sent",
      successBody: "We usually reply within one business day.",
      messageTooShort: "Please write a few more words about your project.",
    },
  },
};

const uk: Dictionary = {
  nav: {
    links: [
      { href: "/", label: "Головна" },
      { href: "/gallery", label: "Галерея" },
      { href: "/photographers", label: "Фотографи" },
      { href: "/booking", label: "Бронювання" },
      { href: "/about", label: "Студія" },
      { href: "/contact", label: "Контакти" },
    ],
    bookCta: "Забронювати зйомку",
  },
  footer: {
    tagline:
      "Редакційна весільна та портретна фотографія - там, де найкраще світло. Кожен кадр знятий наживо, жодних постановок і стокових фото.",
    studioLabel: "Студія",
    contactLabel: "Контакти",
    instagram: "Instagram",
    visits: "Відвідування студії - за попереднім записом",
    copyright: "Loom Studio. Demo-проєкт для портфоліо NexuraDev.",
    builtWith: "Створено на Next.js & Framer Motion.",
  },
  common: {
    hoverToReveal: "Наведіть, щоб побачити",
  },
  home: {
    hero: {
      eyebrow: "Редакційна студія весільної та портретної фотографії",
      headline: "Кожен кадр - момент, який більше не повториться.",
      bookCta: "Забронювати зйомку",
      galleryCta: "Переглянути галерею",
    },
    featured: {
      eyebrow: "Обрані роботи",
      title: "Тихий літопис справжніх днів.",
      description: "Кілька кадрів з нещодавніх весіль, портретних сесій та редакційних зйомок.",
      viewAll: "Уся галерея",
    },
    approach: {
      eyebrow: "Як це працює",
      title: "Чотири кроки, без сюрпризів.",
      steps: [
        {
          n: "01",
          title: "Консультація",
          body: "Дзвінок або зустріч у студії, щоб обговорити день, світло і те, що ви справді хочете запам'ятати.",
        },
        {
          n: "02",
          title: "Зйомка",
          body: "Ми працюємо тихо і швидко - більшість кадрів непостановочні, зловлені між запланованими моментами.",
        },
        {
          n: "03",
          title: "Обробка",
          body: "Кожен кадр обробляється вручну в студії. Без пресетів і масових фільтрів - кожна галерея редагується окремо.",
        },
        {
          n: "04",
          title: "Передача",
          body: "Приватна онлайн-галерея протягом 3–4 тижнів, готова до завантаження, поширення й друку в повній якості.",
        },
      ],
    },
    reel: {
      eyebrow: "За лаштунками",
      title: "Дещо й досі знімаємо на плівку.",
      description: "Короткий відео-луп зі студії - заряджання плівки, перевірка світла, між дублями.",
    },
    team: {
      eyebrow: "Студія",
      title: "Чотири фотографи. Один стиль обробки.",
      description: "Кожна галерея - незалежно від того, хто знімав - обробляється в тій самій теплій палітрі.",
      viewAll: "Познайомитись із командою",
    },
    cta: {
      title: "Створімо щось варте того, щоб зберегти.",
      button: "Перевірити дати",
    },
  },
  gallery: {
    eyebrow: "Галерея",
    title: "Добірка нещодавніх робіт.",
    description: "Наведіть на будь-яке фото, щоб побачити другий ракурс - або кольорокорекцію, яку ми ледь не обрали.",
    categories: {
      Wedding: "Весілля",
      Portrait: "Портрет",
      Editorial: "Редакційна",
      "Black & White": "Ч/Б",
    },
  },
  photographers: {
    eyebrow: "Команда",
    title: "Четверо людей з одним відчуттям світла.",
    description:
      "Кожен фотограф Loom навчається разом з командою і обробляє фото в одному внутрішньому стилі - тож ваша галерея виглядатиме цілісно, хто б не був за камерою.",
  },
  booking: {
    eyebrow: "Бронювання",
    title: "Перевірити дати.",
    description: "Три швидкі кроки - оберіть пакет, дату і куди надіслати підтвердження.",
    stepLabels: ["Пакет", "Дата", "Ваші дані", "Підтверджено"],
    prevMonth: "Попередній місяць",
    nextMonth: "Наступний місяць",
    dateHelper: (pkg) => `Оберіть бажану дату для «${pkg}». Точну доступність підтвердимо на email.`,
    fields: {
      name: "Повне ім'я",
      email: "Email",
      phone: "Телефон (необов'язково)",
      notes: "Щось, що варто знати? (необов'язково)",
    },
    back: "← Назад",
    continueBtn: "Далі",
    sendBtn: "Надіслати запит",
    sending: "Надсилаємо…",
    successTitle: "Запит отримано",
    successBody: (email, pkg, date) =>
      `Ми напишемо вам на ${email} протягом робочого дня, щоб підтвердити «${pkg}» на ${date}.`,
    reference: "Номер запиту",
    errors: {
      name: "Будь ласка, вкажіть ім'я.",
      email: "Будь ласка, вкажіть коректний email.",
      packageInvalid: "Будь ласка, оберіть пакет.",
      dateInvalid: "Будь ласка, оберіть дату.",
      generic: "Щось пішло не так. Спробуйте ще раз.",
      network: "Не вдалося з'єднатися з сервером. Спробуйте ще раз.",
    },
  },
  about: {
    eyebrow: "Про Loom",
    title: "Студія, побудована на одній ідеї: не заважати.",
    description:
      "Loom Studio почалась у 2016 як команда з двох людей, що знімала весілля. Сьогодні нас четверо фотографів в одній невеликій студії - і ми досі знімаємо кожне весілля так само, як перше.",
    quote: "Ми створили Loom, бо кожна студія, для якої ми знімали, хотіла, щоб ми знімали як усі.",
    paragraph1:
      "Мара Восс заснувала Loom Studio після десяти років зйомок для чужих брендів. Ідея була простою: тримати команду невеликою, обробку - послідовною, і ніколи не давати галереї виглядати як шаблон.",
    paragraph2:
      "Це й досі вся філософія. Ми знімаємо весілля, портрети та редакційні проєкти в одному неспішному темпі - уважно, з мінімумом режисури і великою довірою до природного світла.",
    valuesEyebrow: "У що ми віримо",
    valuesTitle: "Три речі, якими ми не поступаємось.",
    values: [
      {
        title: "Знято, не поставлено",
        body: "Ми фотографуємо те, що справді відбувається. Режисура - це світло, а не вимушені емоції чи фальшива спонтанність.",
      },
      {
        title: "Обробка тільки в студії",
        body: "Без аутсорс-ретуші. Ми вчотирьох обробляємо кожну галерею самі, в одній теплій палітрі.",
      },
      {
        title: "Свідомо невелика команда",
        body: "Ми беремо обмежену кількість весіль на рік, щоб кожна пара отримала повну увагу студії.",
      },
    ],
  },
  contact: {
    eyebrow: "Контакти",
    title: "Є на думці дата? Розкажіть нам.",
    description:
      "Для бронювання скористайтесь сторінкою бронювання - це швидше. Для всього іншого - преса, співпраця, питання - ця форма доходить до всієї студії.",
    visits: "Відвідування студії - лише за попереднім записом",
    form: {
      name: "Повне ім'я",
      email: "Email",
      message: "Розкажіть про ваш проєкт",
      send: "Надіслати повідомлення",
      sending: "Надсилаємо…",
      successTitle: "Повідомлення надіслано",
      successBody: "Зазвичай відповідаємо протягом робочого дня.",
      messageTooShort: "Будь ласка, напишіть трохи більше про ваш проєкт.",
    },
  },
};

const ru: Dictionary = {
  nav: {
    links: [
      { href: "/", label: "Главная" },
      { href: "/gallery", label: "Галерея" },
      { href: "/photographers", label: "Фотографы" },
      { href: "/booking", label: "Бронирование" },
      { href: "/about", label: "Студия" },
      { href: "/contact", label: "Контакты" },
    ],
    bookCta: "Забронировать съёмку",
  },
  footer: {
    tagline:
      "Редакционная свадебная и портретная фотография - там, где лучший свет. Каждый кадр снят вживую, никаких постановок и стоковых фото.",
    studioLabel: "Студия",
    contactLabel: "Контакты",
    instagram: "Instagram",
    visits: "Посещение студии - по предварительной записи",
    copyright: "Loom Studio. Demo-проект для портфолио NexuraDev.",
    builtWith: "Создано на Next.js & Framer Motion.",
  },
  common: {
    hoverToReveal: "Наведите, чтобы увидеть",
  },
  home: {
    hero: {
      eyebrow: "Редакционная студия свадебной и портретной фотографии",
      headline: "Каждый кадр - момент, который больше не повторится.",
      bookCta: "Забронировать съёмку",
      galleryCta: "Смотреть галерею",
    },
    featured: {
      eyebrow: "Избранные работы",
      title: "Тихая летопись настоящих дней.",
      description: "Несколько кадров с недавних свадеб, портретных сессий и редакционных съёмок.",
      viewAll: "Вся галерея",
    },
    approach: {
      eyebrow: "Как это работает",
      title: "Четыре шага, без сюрпризов.",
      steps: [
        {
          n: "01",
          title: "Консультация",
          body: "Звонок или встреча в студии, чтобы обсудить день, свет и то, что вы действительно хотите запомнить.",
        },
        {
          n: "02",
          title: "Съёмка",
          body: "Мы работаем тихо и быстро - большинство кадров непостановочные, пойманные между запланированными моментами.",
        },
        {
          n: "03",
          title: "Обработка",
          body: "Каждый кадр обрабатывается вручную в студии. Без пресетов и массовых фильтров - каждая галерея редактируется отдельно.",
        },
        {
          n: "04",
          title: "Передача",
          body: "Приватная онлайн-галерея в течение 3–4 недель, готовая к загрузке, публикации и печати в полном качестве.",
        },
      ],
    },
    reel: {
      eyebrow: "За кадром",
      title: "Кое-что всё ещё снимаем на плёнку.",
      description: "Короткий видео-луп из студии - зарядка плёнки, проверка света, между дублями.",
    },
    team: {
      eyebrow: "Студия",
      title: "Четыре фотографа. Один стиль обработки.",
      description: "Каждая галерея - независимо от того, кто снимал - обрабатывается в одной тёплой палитре.",
      viewAll: "Познакомиться с командой",
    },
    cta: {
      title: "Создадим то, что стоит сохранить.",
      button: "Проверить даты",
    },
  },
  gallery: {
    eyebrow: "Галерея",
    title: "Подборка недавних работ.",
    description: "Наведите на любой кадр, чтобы увидеть второй ракурс - или цветокоррекцию, которую мы чуть не выбрали.",
    categories: {
      Wedding: "Свадьба",
      Portrait: "Портрет",
      Editorial: "Редакционная",
      "Black & White": "Ч/Б",
    },
  },
  photographers: {
    eyebrow: "Команда",
    title: "Четыре человека с одним чувством света.",
    description:
      "Каждый фотограф Loom обучается вместе с командой и обрабатывает фото в едином внутреннем стиле - поэтому ваша галерея выглядит цельно, кто бы ни был за камерой.",
  },
  booking: {
    eyebrow: "Бронирование",
    title: "Проверить даты.",
    description: "Три быстрых шага - выберите пакет, дату и куда отправить подтверждение.",
    stepLabels: ["Пакет", "Дата", "Ваши данные", "Подтверждено"],
    prevMonth: "Предыдущий месяц",
    nextMonth: "Следующий месяц",
    dateHelper: (pkg) => `Выберите желаемую дату для «${pkg}». Точную доступность подтвердим по email.`,
    fields: {
      name: "Полное имя",
      email: "Email",
      phone: "Телефон (необязательно)",
      notes: "Что-то, что стоит знать? (необязательно)",
    },
    back: "← Назад",
    continueBtn: "Далее",
    sendBtn: "Отправить запрос",
    sending: "Отправляем…",
    successTitle: "Запрос получен",
    successBody: (email, pkg, date) =>
      `Мы напишем вам на ${email} в течение рабочего дня, чтобы подтвердить «${pkg}» на ${date}.`,
    reference: "Номер запроса",
    errors: {
      name: "Пожалуйста, укажите имя.",
      email: "Пожалуйста, укажите корректный email.",
      packageInvalid: "Пожалуйста, выберите пакет.",
      dateInvalid: "Пожалуйста, выберите дату.",
      generic: "Что-то пошло не так. Попробуйте ещё раз.",
      network: "Не удалось связаться с сервером. Попробуйте ещё раз.",
    },
  },
  about: {
    eyebrow: "О Loom",
    title: "Студия, построенная на одной идее: не мешать.",
    description:
      "Loom Studio начиналась в 2016 как команда из двух человек, снимавшая свадьбы. Сегодня нас четверо фотографов в одной небольшой студии - и мы всё ещё снимаем каждую свадьбу так же, как первую.",
    quote: "Мы создали Loom, потому что каждая студия, для которой мы снимали, хотела, чтобы мы снимали как все.",
    paragraph1:
      "Мара Восс основала Loom Studio после десяти лет съёмок для чужих брендов. Идея была простой: держать команду небольшой, обработку - последовательной, и никогда не позволять галерее выглядеть как шаблон.",
    paragraph2:
      "Это и сейчас вся философия. Мы снимаем свадьбы, портреты и редакционные проекты в одном неспешном темпе - внимательно, с минимумом режиссуры и большим доверием к естественному свету.",
    valuesEyebrow: "Во что мы верим",
    valuesTitle: "Три вещи, в которых мы не идём на компромисс.",
    values: [
      {
        title: "Снято, а не поставлено",
        body: "Мы фотографируем то, что действительно происходит. Режиссура - это свет, а не вымученные эмоции или фальшивая непринуждённость.",
      },
      {
        title: "Обработка только в студии",
        body: "Без аутсорс-ретуши. Мы вчетвером обрабатываем каждую галерею сами, в одной тёплой палитре.",
      },
      {
        title: "Осознанно небольшая команда",
        body: "Мы берём ограниченное количество свадеб в год, чтобы каждая пара получила полное внимание студии.",
      },
    ],
  },
  contact: {
    eyebrow: "Контакты",
    title: "Есть дата на примете? Расскажите нам.",
    description:
      "Для бронирования используйте страницу бронирования - это быстрее. Для всего остального - пресса, сотрудничество, вопросы - эта форма доходит до всей студии.",
    visits: "Посещение студии - только по предварительной записи",
    form: {
      name: "Полное имя",
      email: "Email",
      message: "Расскажите о вашем проекте",
      send: "Отправить сообщение",
      sending: "Отправляем…",
      successTitle: "Сообщение отправлено",
      successBody: "Обычно отвечаем в течение рабочего дня.",
      messageTooShort: "Пожалуйста, напишите чуть больше о вашем проекте.",
    },
  },
};

export const DICTIONARIES: Record<Lang, Dictionary> = { en, uk, ru };
