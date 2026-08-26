import type { Lang } from "@/i18n/dictionary";

export type GalleryCategory = "Wedding" | "Portrait" | "Editorial" | "Black & White";

export interface GalleryItem {
  id: string;
  category: GalleryCategory;
  title: Record<Lang, string>;
  image: string;
  revealImage: string;
  ratio: "portrait" | "square" | "tall" | "landscape";
}

function img(id: string, w: number): string {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "wed-01",
    category: "Wedding",
    title: { en: "First Light, Provence", uk: "Перше світло, Прованс", ru: "Первый свет, Прованс" },
    image: img("photo-1520854221256-17451cc331bf", 1000),
    revealImage: img("photo-1573676048035-9c2a72b6a12a", 1000),
    ratio: "tall",
  },
  {
    id: "wed-02",
    category: "Wedding",
    title: { en: "The Vows", uk: "Обітниці", ru: "Клятвы" },
    image: img("photo-1537633552985-df8429e8048b", 900),
    revealImage: img("photo-1519741196428-6a2175fa2557", 900),
    ratio: "square",
  },
  {
    id: "por-01",
    category: "Portrait",
    title: { en: "Studio Light, No. 4", uk: "Студійне світло, №4", ru: "Студийный свет, №4" },
    image: img("photo-1544005313-94ddf0286df2", 900),
    revealImage: img("photo-1536766768598-e09213fdcf22", 900),
    ratio: "portrait",
  },
  {
    id: "wed-03",
    category: "Wedding",
    title: { en: "Reception, Late", uk: "Прийом, пізно", ru: "Приём, поздно" },
    image: img("photo-1533091090875-1ff4acc497dd", 1000),
    revealImage: img("photo-1623783356340-95375aac85ce", 1000),
    ratio: "landscape",
  },
  {
    id: "edi-01",
    category: "Editorial",
    title: { en: "Cover Story", uk: "Історія на обкладинці", ru: "История на обложке" },
    image: img("photo-1664076458686-3449062080ac", 900),
    revealImage: img("photo-1601597565151-70c4020dc0e1", 900),
    ratio: "tall",
  },
  {
    id: "por-02",
    category: "Portrait",
    title: { en: "Quiet Room", uk: "Тиха кімната", ru: "Тихая комната" },
    image: img("photo-1674932668403-33398b81c92f", 900),
    revealImage: img("photo-1606143412458-acc5f86de897", 900),
    ratio: "square",
  },
  {
    id: "wed-04",
    category: "Wedding",
    title: { en: "Golden Hour Walk", uk: "Прогулянка в золоту годину", ru: "Прогулка в золотой час" },
    image: img("photo-1617724975854-70b5d0cedb0a", 1000),
    revealImage: img("photo-1563808599481-34a342e44508", 1000),
    ratio: "portrait",
  },
  {
    id: "bw-01",
    category: "Black & White",
    title: { en: "Contrast Study", uk: "Етюд контрасту", ru: "Этюд контраста" },
    image: img("photo-1620122303020-87ec826cf70d", 900),
    revealImage: img("photo-1597871040916-4b4c20ba08dd", 900),
    ratio: "square",
  },
  {
    id: "edi-02",
    category: "Editorial",
    title: { en: "Line & Form", uk: "Лінія і форма", ru: "Линия и форма" },
    image: img("photo-1517337775-e6af8213da96", 900),
    revealImage: img("photo-1662532577856-e8ee8b138a8b", 900),
    ratio: "landscape",
  },
  {
    id: "por-03",
    category: "Portrait",
    title: { en: "Window Light", uk: "Світло з вікна", ru: "Свет из окна" },
    image: img("photo-1532170579297-281918c8ae72", 900),
    revealImage: img("photo-1581841064838-a470c740e8ee", 900),
    ratio: "tall",
  },
  {
    id: "bw-02",
    category: "Black & White",
    title: { en: "Silence, No. 2", uk: "Тиша, №2", ru: "Тишина, №2" },
    image: img("photo-1508184964240-ee96bb9677a7", 900),
    revealImage: img("photo-1506863530036-1efeddceb993", 900),
    ratio: "portrait",
  },
  {
    id: "edi-03",
    category: "Editorial",
    title: { en: "Uptown", uk: "Аптаун", ru: "Аптаун" },
    image: img("photo-1613915617430-8ab0fd7c6baf", 1000),
    revealImage: img("photo-1629511565591-a1d494ad6c58", 1000),
    ratio: "square",
  },
  {
    id: "wed-05",
    category: "Wedding",
    title: { en: "Two Families", uk: "Дві родини", ru: "Две семьи" },
    image: img("photo-1622277430358-f4d134452e2e", 900),
    revealImage: img("photo-1562826772-be179f321470", 900),
    ratio: "landscape",
  },
  {
    id: "por-04",
    category: "Portrait",
    title: { en: "Held Still", uk: "Затримана мить", ru: "Застывшее мгновение" },
    image: img("photo-1558507652-2d9626c4e67a", 900),
    revealImage: img("photo-1519744434498-a0de604df9db", 900),
    ratio: "portrait",
  },
];
