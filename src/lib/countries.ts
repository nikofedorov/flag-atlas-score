export type Continent =
  | "Европа"
  | "Азия"
  | "Африка"
  | "Северная Америка"
  | "Южная Америка"
  | "Океания";

export interface HistoricalFlag {
  years: string;
  image: string;
  description: string;
  adoptedDate?: string;
  differences?: string;
}

export interface Country {
  code: string; // ISO 3166-1 alpha-2 lowercase
  slug?: string; // english slug, e.g. "germany" — injected at module init
  name: string;
  capital: string;
  population: string;
  language: string;
  currency: string;
  continent: Continent;
  area: string;
  shortDescription: string;
  colors: string;
  symbols: string;
  adoptedYear: string;
  history: string;
  previousFlags: HistoricalFlag[];
  facts: string[];
  // Extended (optional)
  phoneCode?: string;
  government?: string;
  religions?: string;
  foundedDate?: string;
  historyShort?: string;
}

const f = (code: string) => `https://flagcdn.com/w640/${code}.png`;

export const countries: Country[] = [
  {
    code: "ru", name: "Россия", capital: "Москва", population: "146 млн",
    language: "Русский", currency: "Российский рубль (₽)", continent: "Европа",
    area: "17 098 246 км²",
    shortDescription: "Крупнейшая страна мира, охватывающая 11 часовых поясов.",
    colors: "Белый — благородство, синий — верность, красный — мужество и любовь.",
    symbols: "Три равные горизонтальные полосы без дополнительных знаков.",
    adoptedYear: "1991",
    history: "Триколор впервые поднят Петром I в конце XVII века как флаг торгового флота. Восстановлен в качестве государственного 22 августа 1991 года.",
    previousFlags: [
      { years: "1923–1991", image: f("su"), description: "Флаг СССР — красное полотнище с серпом и молотом." },
      { years: "1858–1883", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Flag_of_the_Russian_Empire_%28black-yellow-white%29.svg/640px-Flag_of_the_Russian_Empire_%28black-yellow-white%29.svg.png", description: "Имперский флаг — чёрно-жёлто-белый." },
    ],
    facts: ["Озеро Байкал — самое глубокое в мире.", "Транссибирская магистраль — самая длинная железная дорога."],
  },
  {
    code: "us", name: "США", capital: "Вашингтон", population: "333 млн",
    language: "Английский (де-факто)", currency: "Доллар США ($)",
    continent: "Северная Америка", area: "9 833 517 км²",
    shortDescription: "Федеративная республика, состоящая из 50 штатов.",
    colors: "Красный — отвага, белый — чистота, синий — справедливость.",
    symbols: "50 звёзд — штаты, 13 полос — первые колонии.",
    adoptedYear: "1960",
    history: "Базовый дизайн принят в 1777 году. Современный вариант с 50 звёздами утверждён после присоединения Гавайев.",
    previousFlags: [
      { years: "1777–1795", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Flag_of_the_United_States_%281777-1795%29.svg/640px-Flag_of_the_United_States_%281777-1795%29.svg.png", description: "Первоначальный «Звёздно-полосатый» с 13 звёздами." },
    ],
    facts: ["Третья по площади страна мира.", "Голливуд — символ мировой киноиндустрии."],
  },
  {
    code: "jp", name: "Япония", capital: "Токио", population: "125 млн",
    language: "Японский", currency: "Иена (¥)", continent: "Азия",
    area: "377 975 км²",
    shortDescription: "Островное государство, известное технологиями и культурой.",
    colors: "Белый — честность и чистота, красный круг — солнце.",
    symbols: "Красный диск Хиномару — восходящее солнце.",
    adoptedYear: "1999",
    history: "Использовался с XIX века, официально утверждён законом в 1999 году.",
    previousFlags: [
      { years: "1870–1999", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan_%281870%E2%80%931999%29.svg/640px-Flag_of_Japan_%281870%E2%80%931999%29.svg.png", description: "Слегка смещённый круг — старая версия." },
    ],
    facts: ["Страна восходящего солнца.", "Более 6800 островов в составе."],
  },
  {
    code: "de", name: "Германия", capital: "Берлин", population: "84 млн",
    language: "Немецкий", currency: "Евро (€)", continent: "Европа",
    area: "357 022 км²",
    shortDescription: "Крупнейшая экономика Европы и федеративная парламентская республика.",
    colors: "Чёрный, красный и золотой — цвета свободы и единства.",
    symbols: "Три равные горизонтальные полосы.",
    adoptedYear: "1949",
    history: "Цвета восходят к мундирам добровольцев в войне с Наполеоном.",
    previousFlags: [
      { years: "1933–1945", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_German_Reich_%281935%E2%80%931945%29.svg/640px-Flag_of_German_Reich_%281935%E2%80%931945%29.svg.png", description: "Флаг нацистской Германии." },
    ],
    facts: ["Родина Октоберфеста.", "Более 1500 сортов колбасы."],
  },
  {
    code: "fr", name: "Франция", capital: "Париж", population: "68 млн",
    language: "Французский", currency: "Евро (€)", continent: "Европа",
    area: "643 801 км²",
    shortDescription: "Страна искусства, моды и гастрономии.",
    colors: "Синий и красный — цвета Парижа, белый — цвет монархии.",
    symbols: "Триколор — символ Французской революции.",
    adoptedYear: "1794",
    history: "Принят во время Великой французской революции.",
    previousFlags: [
      { years: "1814–1830", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Royal_Standard_of_the_King_of_France.svg/640px-Royal_Standard_of_the_King_of_France.svg.png", description: "Королевский флаг с лилиями." },
    ],
    facts: ["Эйфелева башня — символ Парижа.", "Самая посещаемая страна в мире."],
  },
  {
    code: "gb", name: "Великобритания", capital: "Лондон", population: "67 млн",
    language: "Английский", currency: "Фунт стерлингов (£)", continent: "Европа",
    area: "243 610 км²",
    shortDescription: "Унитарное королевство в составе четырёх наций.",
    colors: "Белый, синий и красный — соединение крестов трёх святых.",
    symbols: "Юнион Джек — кресты Святых Георгия, Андрея и Патрика.",
    adoptedYear: "1801",
    history: "Современная форма принята после унии с Ирландией.",
    previousFlags: [
      { years: "1606–1801", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Great_Britain_%281707%E2%80%931800%29.svg/640px-Flag_of_Great_Britain_%281707%E2%80%931800%29.svg.png", description: "Флаг Королевства Великобритания." },
    ],
    facts: ["Big Ben — известный колокол.", "Левостороннее движение."],
  },
  {
    code: "it", name: "Италия", capital: "Рим", population: "59 млн",
    language: "Итальянский", currency: "Евро (€)", continent: "Европа",
    area: "301 340 км²",
    shortDescription: "Колыбель Римской империи и эпохи Возрождения.",
    colors: "Зелёный — надежда, белый — вера, красный — любовь.",
    symbols: "Три вертикальные полосы.",
    adoptedYear: "1946",
    history: "Произошёл от знамён Цизальпинской республики 1797 года.",
    previousFlags: [
      { years: "1861–1946", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy_%281861%E2%80%931946%29.svg/640px-Flag_of_Italy_%281861%E2%80%931946%29.svg.png", description: "С гербом Савойского дома." },
    ],
    facts: ["Колизей — древний амфитеатр.", "Родина пиццы и пасты."],
  },
  {
    code: "es", name: "Испания", capital: "Мадрид", population: "48 млн",
    language: "Испанский", currency: "Евро (€)", continent: "Европа",
    area: "505 990 км²",
    shortDescription: "Страна фламенко, корриды и средиземноморского солнца.",
    colors: "Красный и жёлтый — традиционные цвета испанской короны.",
    symbols: "Государственный герб на жёлтой полосе.",
    adoptedYear: "1981",
    history: "Цвета используются с 1785 года, выбраны королём Карлом III.",
    previousFlags: [
      { years: "1945–1977", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Spain_%281945%E2%80%931977%29.svg/640px-Flag_of_Spain_%281945%E2%80%931977%29.svg.png", description: "Эпоха Франко." },
    ],
    facts: ["Вторая по посещаемости страна в мире.", "Родина Сервантеса."],
  },
  {
    code: "br", name: "Бразилия", capital: "Бразилиа", population: "215 млн",
    language: "Португальский", currency: "Бразильский реал (R$)",
    continent: "Южная Америка", area: "8 515 767 км²",
    shortDescription: "Самая большая страна Южной Америки.",
    colors: "Зелёный — леса, жёлтый — золото, синий — небо.",
    symbols: "27 звёзд — штаты, лента с девизом «Порядок и прогресс».",
    adoptedYear: "1992",
    history: "Создан после провозглашения республики в 1889 году.",
    previousFlags: [
      { years: "1822–1889", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_Empire_of_Brazil_%281870-1889%29.svg/640px-Flag_of_Empire_of_Brazil_%281870-1889%29.svg.png", description: "Имперский флаг с гербом." },
    ],
    facts: ["Амазонка — крупнейшая река.", "Карнавал в Рио — известнейший в мире."],
  },
  {
    code: "cn", name: "Китай", capital: "Пекин", population: "1.41 млрд",
    language: "Китайский", currency: "Юань (¥)", continent: "Азия",
    area: "9 596 961 км²",
    shortDescription: "Древнейшая цивилизация и крупнейшая по населению страна.",
    colors: "Красный — революция, жёлтый — свет.",
    symbols: "Большая звезда — Компартия, четыре малых — народ.",
    adoptedYear: "1949",
    history: "Принят на следующий день после провозглашения КНР.",
    previousFlags: [
      { years: "1912–1928", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_China_%281912%E2%80%931928%29.svg/640px-Flag_of_China_%281912%E2%80%931928%29.svg.png", description: "Флаг Китайской Республики." },
    ],
    facts: ["Великая Китайская стена — более 21 000 км.", "Родина бумаги и пороха."],
  },
  {
    code: "in", name: "Индия", capital: "Нью-Дели", population: "1.42 млрд",
    language: "Хинди, английский", currency: "Индийская рупия (₹)",
    continent: "Азия", area: "3 287 263 км²",
    shortDescription: "Страна с богатейшей культурой и многовековой историей.",
    colors: "Шафрановый — мужество, белый — мир, зелёный — вера.",
    symbols: "Колесо Ашоки — закон и движение вперёд.",
    adoptedYear: "1947",
    history: "Принят за несколько дней до провозглашения независимости.",
    previousFlags: [
      { years: "1858–1947", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/British_Raj_Red_Ensign.svg/640px-British_Raj_Red_Ensign.svg.png", description: "Флаг Британской Индии." },
    ],
    facts: ["Тадж-Махал — символ любви.", "Самая многонаселённая демократия."],
  },
  {
    code: "au", name: "Австралия", capital: "Канберра", population: "26 млн",
    language: "Английский", currency: "Австралийский доллар (A$)",
    continent: "Океания", area: "7 692 024 км²",
    shortDescription: "Страна-континент с уникальной фауной.",
    colors: "Синий — океан, белый и красный — крест Святого Георгия.",
    symbols: "Юнион Джек, звезда Содружества и Южный Крест.",
    adoptedYear: "1908",
    history: "Дизайн выбран по итогам конкурса в 1901 году.",
    previousFlags: [
      { years: "1901–1903", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%281901%E2%80%931903%29.svg/640px-Flag_of_Australia_%281901%E2%80%931903%29.svg.png", description: "Шестиконечная звезда Содружества." },
    ],
    facts: ["Большой Барьерный риф — крупнейший в мире.", "Кенгуру и коала эндемики."],
  },
  {
    code: "ca", name: "Канада", capital: "Оттава", population: "40 млн",
    language: "Английский, французский", currency: "Канадский доллар (C$)",
    continent: "Северная Америка", area: "9 984 670 км²",
    shortDescription: "Вторая по площади страна мира.",
    colors: "Красный и белый — официальные цвета Канады с 1921 года.",
    symbols: "Кленовый лист — национальный символ.",
    adoptedYear: "1965",
    history: "Принят взамен Красного флага Канады.",
    previousFlags: [
      { years: "1957–1965", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Canadian_Red_Ensign_1957-1965.svg/640px-Canadian_Red_Ensign_1957-1965.svg.png", description: "Канадский красный флаг." },
    ],
    facts: ["Озёр больше, чем во всём остальном мире вместе взятом.", "Самая длинная береговая линия."],
  },
  {
    code: "za", name: "ЮАР", capital: "Претория", population: "60 млн",
    language: "11 официальных", currency: "Ранд (R)",
    continent: "Африка", area: "1 221 037 км²",
    shortDescription: "Радужная нация на южной оконечности Африки.",
    colors: "Шесть цветов символизируют объединение народов.",
    symbols: "Y-образная фигура — слияние истории в одно будущее.",
    adoptedYear: "1994",
    history: "Принят с окончанием апартеида и приходом Манделы.",
    previousFlags: [
      { years: "1928–1994", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_South_Africa_%281928%E2%80%931994%29.svg/640px-Flag_of_South_Africa_%281928%E2%80%931994%29.svg.png", description: "Флаг эпохи апартеида." },
    ],
    facts: ["Три столицы: Претория, Кейптаун и Блумфонтейн.", "Родина Нельсона Манделы."],
  },
  {
    code: "ar", name: "Аргентина", capital: "Буэнос-Айрес", population: "46 млн",
    language: "Испанский", currency: "Аргентинское песо ($)",
    continent: "Южная Америка", area: "2 780 400 км²",
    shortDescription: "Родина танго и Лионеля Месси.",
    colors: "Светло-голубой и белый — цвета чистого неба.",
    symbols: "Майское солнце — символ независимости.",
    adoptedYear: "1818",
    history: "Создан Мануэлем Бельграно в 1812 году.",
    previousFlags: [
      { years: "1812–1818", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina_%28alternative%29.svg/640px-Flag_of_Argentina_%28alternative%29.svg.png", description: "Без солнца в центре." },
    ],
    facts: ["Анды — самая длинная горная цепь.", "Чемпион мира 2022 года."],
  },
  {
    code: "mx", name: "Мексика", capital: "Мехико", population: "129 млн",
    language: "Испанский", currency: "Мексиканское песо ($)",
    continent: "Северная Америка", area: "1 964 375 км²",
    shortDescription: "Страна ацтеков, кактусов и яркой культуры.",
    colors: "Зелёный — надежда, белый — единство, красный — кровь героев.",
    symbols: "Орёл со змеёй на кактусе — древняя ацтекская легенда.",
    adoptedYear: "1968",
    history: "Триколор существует с 1821 года, герб несколько раз обновлялся.",
    previousFlags: [
      { years: "1934–1968", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Flag_of_Mexico_%281934-1968%29.svg/640px-Flag_of_Mexico_%281934-1968%29.svg.png", description: "Версия 1934 года." },
    ],
    facts: ["Родина шоколада.", "31 объект ЮНЕСКО."],
  },
  {
    code: "eg", name: "Египет", capital: "Каир", population: "110 млн",
    language: "Арабский", currency: "Египетский фунт (E£)",
    continent: "Африка", area: "1 010 408 км²",
    shortDescription: "Страна пирамид и древнейшей цивилизации.",
    colors: "Красный — революция, белый — мирная революция, чёрный — конец гнёта.",
    symbols: "Орёл Саладина — национальный символ.",
    adoptedYear: "1984",
    history: "Производное от Революционного флага 1952 года.",
    previousFlags: [
      { years: "1972–1984", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Flag_of_the_Federation_of_Arab_Republics.svg/640px-Flag_of_the_Federation_of_Arab_Republics.svg.png", description: "Флаг Федерации Арабских Республик." },
    ],
    facts: ["Пирамиды Гизы — единственное из 7 чудес света.", "Нил — длиннейшая река."],
  },
  {
    code: "tr", name: "Турция", capital: "Анкара", population: "85 млн",
    language: "Турецкий", currency: "Турецкая лира (₺)",
    continent: "Азия", area: "783 562 км²",
    shortDescription: "Мост между Европой и Азией.",
    colors: "Красный — традиционный цвет тюркских народов.",
    symbols: "Полумесяц и звезда — символы ислама и наследия.",
    adoptedYear: "1936",
    history: "Базируется на флаге Османской империи.",
    previousFlags: [
      { years: "1844–1923", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_the_Ottoman_Empire.svg/640px-Flag_of_the_Ottoman_Empire.svg.png", description: "Флаг Османской империи." },
    ],
    facts: ["Стамбул — единственный город на двух континентах.", "Родина тюльпанов."],
  },
  {
    code: "kr", name: "Южная Корея", capital: "Сеул", population: "52 млн",
    language: "Корейский", currency: "Вона (₩)", continent: "Азия",
    area: "100 363 км²",
    shortDescription: "Страна K-pop, технологий и тысячелетней культуры.",
    colors: "Белый — мир и чистота корейского народа.",
    symbols: "Тэгык — гармония инь и янь; четыре триграммы.",
    adoptedYear: "1948",
    history: "Создан в 1882 году, утверждён после освобождения.",
    previousFlags: [
      { years: "1882–1910", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_Korea_%281882-1910%29.svg/640px-Flag_of_Korea_%281882-1910%29.svg.png", description: "Флаг королевства Чосон." },
    ],
    facts: ["Самый быстрый интернет в мире.", "Родина Samsung и Hyundai."],
  },
  {
    code: "ch", name: "Швейцария", capital: "Берн", population: "8.8 млн",
    language: "4 официальных", currency: "Швейцарский франк (CHF)",
    continent: "Европа", area: "41 285 км²",
    shortDescription: "Альпийская страна банков, часов и шоколада.",
    colors: "Красный с белым крестом — древние цвета конфедерации.",
    symbols: "Белый равноконечный крест на красном поле.",
    adoptedYear: "1889",
    history: "Один из старейших национальных символов в Европе.",
    previousFlags: [
      { years: "1815–1889", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Flag_of_Switzerland_%28Pantone%29.svg/640px-Flag_of_Switzerland_%28Pantone%29.svg.png", description: "Ранняя версия швейцарского флага." },
    ],
    facts: ["Один из двух квадратных флагов мира.", "Нейтралитет с 1815 года."],
  },
];

export const continents: Continent[] = [
  "Европа", "Азия", "Африка", "Северная Америка", "Южная Америка", "Океания",
];

export const flagUrl = (code: string, size: 80 | 160 | 320 | 640 = 320) =>
  `https://flagcdn.com/w${size}/${code}.png`;

// --- Slug + extended metadata maps ---------------------------------------
const slugByCode: Record<string, string> = {
  ru: "russia", us: "usa", jp: "japan", de: "germany", fr: "france",
  gb: "united-kingdom", it: "italy", es: "spain", br: "brazil", cn: "china",
  in: "india", au: "australia", ca: "canada", za: "south-africa",
  ar: "argentina", mx: "mexico", eg: "egypt", tr: "turkey", kr: "south-korea",
  ch: "switzerland",
};

interface CountryExtra {
  phoneCode?: string;
  government?: string;
  religions?: string;
  foundedDate?: string;
  historyShort?: string;
}

const extraByCode: Record<string, CountryExtra> = {
  ru: { phoneCode: "+7", government: "Федеративная президентско-парламентская республика", religions: "Православие, ислам, буддизм", foundedDate: "12 июня 1990 (декларация о суверенитете)", historyShort: "Исторические корни — Киевская Русь IX века. Российская империя (1721–1917), СССР (1922–1991), современная Российская Федерация — с 1991 года." },
  us: { phoneCode: "+1", government: "Федеративная президентская республика", religions: "Христианство (преимущественно протестантизм)", foundedDate: "4 июля 1776", historyShort: "Колонии получили независимость от Великобритании в 1776 году. Конституция 1787 года заложила основу современного государства." },
  jp: { phoneCode: "+81", government: "Конституционная монархия (парламентская)", religions: "Синтоизм, буддизм", foundedDate: "660 до н. э. (легендарная)", historyShort: "Япония — старейшая непрерывно существующая монархия. После реставрации Мэйдзи (1868) — быстрая модернизация." },
  de: { phoneCode: "+49", government: "Федеративная парламентская республика", religions: "Христианство (католики, протестанты)", foundedDate: "3 октября 1990 (объединение)", historyShort: "Объединена в 1871 году Бисмарком. После Второй мировой разделена; воссоединена в 1990." },
  fr: { phoneCode: "+33", government: "Полупрезидентская республика", religions: "Католицизм, ислам", foundedDate: "843 (Верденский договор)", historyShort: "Корни — Западно-Франкское королевство. Великая французская революция (1789) сформировала современную нацию." },
  gb: { phoneCode: "+44", government: "Парламентская конституционная монархия", religions: "Англиканство, католицизм, ислам", foundedDate: "1 января 1801 (Акт об унии)", historyShort: "Образована из союза Англии, Шотландии (1707) и Ирландии (1801). Крупнейшая колониальная империя в истории." },
  it: { phoneCode: "+39", government: "Парламентская республика", religions: "Католицизм", foundedDate: "17 марта 1861 (объединение)", historyShort: "Наследница Римской империи. Объединена в 1861 году в результате Рисорджименто." },
  es: { phoneCode: "+34", government: "Парламентская конституционная монархия", religions: "Католицизм", foundedDate: "1469 (династический союз)", historyShort: "Образована браком Изабеллы Кастильской и Фердинанда Арагонского. В XVI веке — крупнейшая колониальная империя." },
  br: { phoneCode: "+55", government: "Федеративная президентская республика", religions: "Католицизм, протестантизм", foundedDate: "7 сентября 1822", historyShort: "Бывшая португальская колония. Получила независимость в 1822, стала республикой в 1889." },
  cn: { phoneCode: "+86", government: "Социалистическая однопартийная республика", religions: "Буддизм, даосизм, ислам", foundedDate: "1 октября 1949 (КНР)", historyShort: "Одна из древнейших цивилизаций — более 5000 лет. КНР провозглашена в 1949 году после гражданской войны." },
  in: { phoneCode: "+91", government: "Федеративная парламентская республика", religions: "Индуизм, ислам, христианство, сикхизм", foundedDate: "15 августа 1947", historyShort: "Получила независимость от Великобритании в 1947 году. Крупнейшая демократия мира." },
  au: { phoneCode: "+61", government: "Федеративная парламентская конституционная монархия", religions: "Христианство", foundedDate: "1 января 1901 (Федерация)", historyShort: "Британская колония с 1788 года, федерация шести колоний образована в 1901 году." },
  ca: { phoneCode: "+1", government: "Федеративная парламентская конституционная монархия", religions: "Христианство", foundedDate: "1 июля 1867", historyShort: "Образована Актом о Британской Северной Америке. Полная конституционная независимость — 1982." },
  za: { phoneCode: "+27", government: "Парламентская республика", religions: "Христианство, традиционные верования", foundedDate: "31 мая 1910 (Союз)", historyShort: "Союз ЮАС образован в 1910. Эпоха апартеида (1948–1994) завершилась с приходом Нельсона Манделы." },
  ar: { phoneCode: "+54", government: "Федеративная президентская республика", religions: "Католицизм", foundedDate: "9 июля 1816", historyShort: "Получила независимость от Испании в 1816 году в ходе войн за независимость испанской Америки." },
  mx: { phoneCode: "+52", government: "Федеративная президентская республика", religions: "Католицизм", foundedDate: "27 сентября 1821", historyShort: "Бывшая колония Новая Испания. Получила независимость в 1821 году." },
  eg: { phoneCode: "+20", government: "Президентская республика", religions: "Ислам (суннизм), христианство (копты)", foundedDate: "28 февраля 1922", historyShort: "Древнейшая цивилизация — более 5000 лет. Современный Египет получил независимость от Великобритании в 1922." },
  tr: { phoneCode: "+90", government: "Президентская республика", religions: "Ислам (суннизм)", foundedDate: "29 октября 1923", historyShort: "Турецкая Республика провозглашена Мустафой Кемалем Ататюрком в 1923 году после распада Османской империи." },
  kr: { phoneCode: "+82", government: "Президентская республика", religions: "Без религии, христианство, буддизм", foundedDate: "15 августа 1948", historyShort: "Образована после освобождения от японского колониального правления (1910–1945) и разделения Кореи." },
  ch: { phoneCode: "+41", government: "Федеративная полупрямая демократия", religions: "Католицизм, протестантизм", foundedDate: "1 августа 1291 (Союзная грамота)", historyShort: "Швейцарская Конфедерация образована в 1291 году. Современная федерация — с конституции 1848 года." },
};

// Inject slug + extended fields into the exported countries array.
countries.forEach((c) => {
  c.slug = slugByCode[c.code] ?? c.code;
  const extra = extraByCode[c.code];
  if (extra) Object.assign(c, extra);
});

export function getCountry(codeOrSlug: string) {
  const v = codeOrSlug.toLowerCase();
  return countries.find((c) => c.code === v || c.slug === v);
}

export function getCountryBySlug(slug: string) {
  const v = slug.toLowerCase();
  return countries.find((c) => c.slug === v);
}

export function similarCountries(country: Country, limit = 4) {
  return countries
    .filter((c) => c.code !== country.code && c.continent === country.continent)
    .slice(0, limit);
}

