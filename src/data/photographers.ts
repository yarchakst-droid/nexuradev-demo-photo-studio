import type { Lang } from "@/i18n/dictionary";

function img(id: string, w: number): string {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;
}

export interface Photographer {
  id: string;
  name: string;
  role: Record<Lang, string>;
  bio: Record<Lang, string>;
  image: string;
}

export const photographers: Photographer[] = [
  {
    id: "mara-voss",
    name: "Mara Voss",
    role: {
      en: "Founder & Lead Photographer",
      uk: "Засновниця та провідна фотографка",
      ru: "Основательница и ведущий фотограф",
    },
    bio: {
      en: "Twelve years shooting weddings across three continents. Mara leads every full-day booking personally.",
      uk: "Дванадцять років знімає весілля на трьох континентах. Мара особисто веде кожне повноденне бронювання.",
      ru: "Двенадцать лет снимает свадьбы на трёх континентах. Мара лично ведёт каждое полнодневное бронирование.",
    },
    image: img("photo-1573497019940-1c28c88b4f3e", 800),
  },
  {
    id: "theo-lindqvist",
    name: "Theo Lindqvist",
    role: {
      en: "Wedding Photographer",
      uk: "Весільний фотограф",
      ru: "Свадебный фотограф",
    },
    bio: {
      en: "Trained in photojournalism - Theo shoots receptions like breaking news: fast, honest, unposed.",
      uk: "Навчався фотожурналістики - Тео знімає прийоми як гарячі новини: швидко, чесно, без постановки.",
      ru: "Учился фотожурналистике - Тео снимает приёмы как горячие новости: быстро, честно, без постановки.",
    },
    image: img("photo-1560250097-0b93528c311a", 800),
  },
  {
    id: "ines-carrara",
    name: "Ines Carrara",
    role: {
      en: "Portrait & Editorial",
      uk: "Портрет і редакційна зйомка",
      ru: "Портрет и редакционная съёмка",
    },
    bio: {
      en: "Ines runs our studio sessions and editorial bookings, with a focus on natural light and restraint.",
      uk: "Інес веде студійні сесії та редакційні проєкти, з фокусом на природне світло і стриманість.",
      ru: "Инес ведёт студийные сессии и редакционные проекты, с фокусом на естественный свет и сдержанность.",
    },
    image: img("photo-1627161683077-e34782c24d81", 800),
  },
  {
    id: "noah-bergstrom",
    name: "Noah Bergström",
    role: {
      en: "Associate Photographer",
      uk: "Асоційований фотограф",
      ru: "Ассоциированный фотограф",
    },
    bio: {
      en: "Second-shoots every wedding and leads our elopement packages. Noah edits every gallery in-house.",
      uk: "Другий фотограф на кожному весіллі, веде пакети елопменту. Ноа обробляє всі галереї в студії.",
      ru: "Второй фотограф на каждой свадьбе, ведёт пакеты элопмента. Ноа обрабатывает все галереи в студии.",
    },
    image: img("photo-1519085360753-af0119f7cbe7", 800),
  },
];
