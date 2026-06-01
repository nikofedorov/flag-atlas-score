// Marketplace links — editable from the future admin panel.
export interface Marketplace {
  id: "ozon" | "wildberries" | "avito";
  name: string;
  url: string;
  description: string;
  cta: string;
  gradient: string;
}

export const marketplaces: Marketplace[] = [
  {
    id: "ozon",
    name: "Ozon",
    url: "https://www.ozon.ru/",
    description:
      "Крупный российский маркетплейс. Быстрая доставка по всей России и СНГ, удобный возврат.",
    cta: "Купить на Ozon",
    gradient: "from-[#005bff] to-[#2476ff]",
  },
  {
    id: "wildberries",
    name: "Wildberries",
    url: "https://www.wildberries.ru/",
    description:
      "Доставка до пункта выдачи рядом с домом по всей России, Беларуси, Казахстану и Армении.",
    cta: "Купить на Wildberries",
    gradient: "from-[#cb11ab] to-[#7d1de8]",
  },
  {
    id: "avito",
    name: "Avito",
    url: "https://www.avito.ru/",
    description:
      "Официальный магазин и предложения от продавцов: новые комплекты и выгодные цены.",
    cta: "Найти на Avito",
    gradient: "from-[#04e061] to-[#00a046]",
  },
];
