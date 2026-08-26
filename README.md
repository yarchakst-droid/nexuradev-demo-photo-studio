# Loom Studio — Flagship Photography Site

Робочий флагманський demo-проєкт для портфоліо: повноцінний сайт преміальної студії весільної/портретної фотографії. 6 сторінок, 3 мови (EN/UK/RU), відео-фон на Hero, кастомний cursor-reveal ефект у галереї, tilt-картки команди, багатокроковий степер бронювання з реальним API.

## Стек

- **Next.js 16** (App Router, Turbopack) + **TypeScript**
- **Tailwind CSS 4** (CSS-first `@theme` — токени в `src/app/globals.css`, без `tailwind.config.ts`)
- **Framer Motion** — скрол-тригер розкриття секцій, cursor-reveal маска, tilt-картки, переходи степера
- **Lenis** — плавний інерційний скрол
- Реальні фото — Unsplash (`wedding photography`, `portrait photoshoot`, `editorial fashion photo`, `professional headshot`, `photo studio interior`)
- Реальне відео — Pexels (пряме посилання на .mp4, без embed-плеєра)

## Сторінки

| Маршрут | Що там |
|---|---|
| `/` | Hero з відео-фоном (autoplay/loop/muted), послідовне scroll-тригер розкриття секцій, другий відео-блок "За лаштунками" |
| `/gallery` | Masonry-галерея, cursor-reveal ефект "домальовування" альтернативного кадру |
| `/photographers` | Картки команди з 3D tilt-ефектом при наведенні |
| `/booking` | 3-кроковий степер: пакет → дата → контакти, реальний POST на `/api/booking` |
| `/about` | Історія студії, фото інтер'єру |
| `/contact` | Форма з floating-label полями, реальний POST на `/api/contact` |

## Мова: EN / UK / RU

- Перемикач у навбарі (`LanguageSwitcher`), вибір зберігається в `localStorage` через `useSyncExternalStore` (без ефектів із `setState` — сучасний паттерн, синхронізується навіть між вкладками через подію `storage`).
- `src/i18n/dictionary.ts` — весь текст сайту (nav, футер, усі 6 сторінок) на трьох мовах.
- Дані каталогу (`gallery.ts`, `photographers.ts`, `packages.ts`) теж мультимовні — `Record<Lang, string>` на кожне поле, що показується користувачу.
- API-роути (`/api/booking`, `/api/contact`) отримують `lang` у тілі запиту й повертають **локалізовані** повідомлення про помилки й підтвердження — це не тільки клієнтський UI-текст, а й реальний бекенд.

## Ключові компоненти

```
src/
├── i18n/
│   ├── dictionary.ts             # весь текст сайту на EN/UK/RU
│   └── LangContext.tsx           # useSyncExternalStore + localStorage
├── components/
│   ├── home/Hero.tsx              # відео-фон (Pexels), scroll-parallax, fade контенту
│   ├── home/StudioReel.tsx        # другий автоплей-відео блок ("За лаштунками")
│   ├── shared/CursorRevealImage.tsx  # ефект "домальовування" (clip-path circle, слідує за курсором)
│   ├── shared/TiltCard.tsx           # 3D tilt-картка (rotateX/Y через pointer)
│   ├── shared/Reveal.tsx             # обгортка whileInView для scroll-тригер анімацій
│   ├── shared/FloatingField.tsx      # інпут з floating-label мікровзаємодією
│   ├── booking/BookingStepper.tsx    # степер + виклик /api/booking (шле lang)
│   └── contact/ContactForm.tsx       # форма + виклик /api/contact (шле lang)
├── app/api/booking/route.ts      # валідація + локалізована відповідь (без БД — demo)
└── app/api/contact/route.ts      # валідація + локалізована відповідь (без БД — demo)
```

## Чому це "робочий" проєкт, а не просто фронтенд

- `/booking` і `/contact` реально шлють `POST`-запит, отримують справжню відповідь сервера (валідація на бекенді, не тільки на клієнті) і показують реальний success/error стан — не заглушку.
- Немає БД (це demo), але весь request/response цикл — справжній: спробуйте відправити форму без email — отримаєте реальну 400-помилку з бекенду, локалізовану під обрану мову.

## Запуск локально

### Одна команда з кореня репозиторію
```bash
npm run prot:loom
```
Підніме сайт на `http://localhost:3210`.

Або разом з ботом і його Mini App:
```bash
npm run prot
```

### Вручну
```bash
cd portfolio-demos/02-photo-studio-site
npm install
npm run dev
```
За замовчуванням — `http://localhost:3000` (або вкажіть `-- -p 3210`, якщо порт зайнятий іншим проєктом монорепо).

### Продакшн-білд
```bash
npm run build
npm run start
```

## Технічні нотатки

- **`next.config.ts`**: `images.remotePatterns` дозволяє `images.unsplash.com`. Важливо — поле `search` у патерні **не задане** (не `""`): порожній рядок означає "лише URL без query-параметрів", а всі посилання на Unsplash містять `?auto=format&...`, тож із `search: ""` next/image повертав би 500 на кожному фото. Відео з Pexels йдуть через звичайний `<video src>`, тому remotePatterns на них не поширюється.
- **`turbopack.root`** явно вказаний на директорію проєкту — без цього Next іноді помилково визначає корінь workspace як корінь монорепо (через кілька `package-lock.json` в дереві) і плутається з резолвом конфігу.
- **Мова через `useSyncExternalStore`, не `useEffect`+`setState`**: пряме читання `localStorage` в ефекті з подальшим `setState` ловить ESLint-правило `react-hooks/set-state-in-effect` (каскадні рендери). `useSyncExternalStore` — коректний спосіб підписатись на зовнішнє сховище без цієї проблеми, і безкоштовно дає синхронізацію між вкладками.
- **Cursor-reveal у галереї**: `useMotionValue` + `useMotionTemplate` будують `clipPath: circle(R% at X% Y%)`, що плавно розкриває другий шар `next/image` під курсором — той самий підхід, що і в `RevealImage` telegram-бота (проєкт 1), адаптований під іншу палітру й контекст.
- **Відео замість 3D**: перша версія Hero мала 3D-камеру на React Three Fiber (процедурна геометрія з примітивів), але вона виглядала невиразно без справжнього моделювання/текстур. Замінено на full-bleed autoplay-відео (реальний файл з Pexels, перевірений `curl -I` перед вбудовуванням) — надійніший і виразніший варіант без ризику "кривого" 3D.
