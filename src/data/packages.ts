import type { Lang } from "@/i18n/dictionary";

export interface BookingPackage {
  id: string;
  name: Record<Lang, string>;
  duration: Record<Lang, string>;
  price: number;
  description: Record<Lang, string>;
  includes: Record<Lang, string[]>;
}

export const bookingPackages: BookingPackage[] = [
  {
    id: "portrait-session",
    name: { en: "Portrait Session", uk: "Портретна сесія", ru: "Портретная сессия" },
    duration: { en: "1.5 hours", uk: "1,5 години", ru: "1,5 часа" },
    price: 380,
    description: {
      en: "A focused studio or on-location session for individuals, couples, or families.",
      uk: "Сфокусована сесія в студії або на локації - для одного, пари чи родини.",
      ru: "Сфокусированная сессия в студии или на локации - для одного, пары или семьи.",
    },
    includes: {
      en: ["1.5-hour session", "1 location", "30+ edited images", "Online gallery"],
      uk: ["Сесія 1,5 години", "1 локація", "30+ оброблених фото", "Онлайн-галерея"],
      ru: ["Сессия 1,5 часа", "1 локация", "30+ обработанных фото", "Онлайн-галерея"],
    },
  },
  {
    id: "elopement",
    name: { en: "Elopement", uk: "Елопмент", ru: "Элопмент" },
    duration: { en: "4 hours", uk: "4 години", ru: "4 часа" },
    price: 1450,
    description: {
      en: "Intimate coverage for small ceremonies - just the two of you, or a handful of guests.",
      uk: "Камерне висвітлення невеликих церемоній - лише ви двоє, або жменька гостей.",
      ru: "Камерное освещение небольших церемоний - только вы вдвоём, или горстка гостей.",
    },
    includes: {
      en: ["4-hour coverage", "1 photographer", "150+ edited images", "Online gallery", "Print release"],
      uk: ["4 години зйомки", "1 фотограф", "150+ оброблених фото", "Онлайн-галерея", "Право на друк"],
      ru: ["4 часа съёмки", "1 фотограф", "150+ обработанных фото", "Онлайн-галерея", "Право на печать"],
    },
  },
  {
    id: "wedding-full-day",
    name: { en: "Wedding - Full Day", uk: "Весілля - повний день", ru: "Свадьба - полный день" },
    duration: { en: "10 hours", uk: "10 годин", ru: "10 часов" },
    price: 3200,
    description: {
      en: "Full-day editorial coverage, from getting-ready through the last dance.",
      uk: "Повноденне редакційне висвітлення - від збору нареченої до останнього танцю.",
      ru: "Полнодневное редакционное освещение - от сборов невесты до последнего танца.",
    },
    includes: {
      en: ["10-hour coverage", "2 photographers", "500+ edited images", "Online gallery", "Engagement session"],
      uk: ["10 годин зйомки", "2 фотографи", "500+ оброблених фото", "Онлайн-галерея", "Love story сесія"],
      ru: ["10 часов съёмки", "2 фотографа", "500+ обработанных фото", "Онлайн-галерея", "Love story сессия"],
    },
  },
  {
    id: "editorial-brand",
    name: { en: "Editorial / Brand", uk: "Редакційна / Бренд", ru: "Редакционная / Бренд" },
    duration: { en: "Half day", uk: "Пів дня", ru: "Половина дня" },
    price: 1200,
    description: {
      en: "Editorial-style shoots for brands, teams, and personal projects.",
      uk: "Зйомки в редакційному стилі для брендів, команд та особистих проєктів.",
      ru: "Съёмки в редакционном стиле для брендов, команд и личных проектов.",
    },
    includes: {
      en: ["Half-day session", "Concept consultation", "40+ edited images", "Commercial usage rights"],
      uk: ["Сесія на півдня", "Консультація з концепції", "40+ оброблених фото", "Права на комерційне використання"],
      ru: ["Сессия на полдня", "Консультация по концепции", "40+ обработанных фото", "Права на коммерческое использование"],
    },
  },
];
