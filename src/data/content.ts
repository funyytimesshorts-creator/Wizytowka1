export type Lang = 'pl' | 'en' | 'ua';

export const LANGS: Lang[] = ['pl', 'en', 'ua'];

export const LANG_LABELS: Record<Lang, string> = {
  pl: 'PL',
  en: 'EN',
  ua: 'UA',
};

/**
 * Restaurant information — all data here is fictional and easy to replace.
 * Replace these values with real restaurant data when available.
 */
export const restaurant = {
  name: 'FUOCO',
  tagline: 'Wood Fired Pizza',
  address: {
    street: 'plac Defilad 1',
    city: '00-901 Warszawa',
    country: 'Polska',
  },
  phone: '+48 512 680 430',
  email: 'kontakt@fuoco.pl',
  hours: [
    { days: { pl: 'Pon–Czw', en: 'Mon–Thu', ua: 'Пн–Чт' }, time: '12:00 – 22:00' },
    { days: { pl: 'Pią–Sob', en: 'Fri–Sat', ua: 'Пт–Сб' }, time: '12:00 – 24:00' },
    { days: { pl: 'Niedziela', en: 'Sunday', ua: 'Неділя' }, time: '13:00 – 22:00' },
  ],
  social: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
    tripadvisor: 'https://tripadvisor.com',
  },
  // Pałac Kultury i Nauki, Warszawa
  mapEmbed: 'https://maps.google.com/maps?q=Pa%C5%82ac%20Kultury%20i%20Nauki%2C%20plac%20Defilad%201%2C%20Warszawa&t=&z=16&ie=UTF8&iwloc=&output=embed',
  mapLink: 'https://www.google.com/maps/dir/?api=1&destination=Pa%C5%82ac+Kultury+i+Nauki%2C+plac+Defilad+1%2C+Warszawa',
  foundedYear: 2019,
};

/**
 * Menu items — fictional pizzas. Prices in PLN.
 * Image paths reference files in /public.
 */
export interface MenuItem {
  id: string;
  image: string;
  price: number;
  spicy?: boolean;
  vegetarian?: boolean;
  glutenFree?: boolean;
  lactoseFree?: boolean;
  category: 'classic' | 'special' | 'vegetarian';
  name: Record<Lang, string>;
  description: Record<Lang, string>;
}

export const menuItems: MenuItem[] = [
  {
    id: 'margherita',
    image: '/pizza-margherita.webp',
    price: 38,
    vegetarian: true,
    glutenFree: true,
    category: 'classic',
    name: { pl: 'Margherita', en: 'Margherita', ua: 'Маргарита' },
    description: {
      pl: 'Sos pomidorowy San Marzano, mozzarella fior di latte, świeża bazylia, oliwa extra vergine.',
      en: 'San Marzano tomato sauce, fior di latte mozzarella, fresh basil, extra virgin olive oil.',
      ua: "Соус із помідорів Сан-Марцано, моцарела фіор ді латте, свіжа базиліка, олія extra vergine.",
    },
  },
  {
    id: 'diavola',
    image: '/pizza-diavola.webp',
    price: 46,
    spicy: true,
    lactoseFree: true,
    category: 'classic',
    name: { pl: 'Diavola', en: 'Diavola', ua: 'Дьявола' },
    description: {
      pl: 'Pikantne salami, mozzarella, sos pomidorowy, papryczka chili, płatki chili.',
      en: 'Spicy salami, mozzarella, tomato sauce, chili pepper, chili flakes.',
      ua: 'Гостка салямі, моцарела, томатний соус, перець чилі, пластівці чилі.',
    },
  },
  {
    id: 'prosciutto-funghi',
    image: '/pizza-prosciutto.webp',
    price: 48,
    category: 'classic',
    name: { pl: 'Prosciutto e Funghi', en: 'Prosciutto e Funghi', ua: 'Прошутто е Фунгі' },
    description: {
      pl: 'Prosciutto crudo, świeże pieczarki, mozzarella, sos pomidorowy, oregano.',
      en: 'Prosciutto crudo, fresh mushrooms, mozzarella, tomato sauce, oregano.',
      ua: 'Прошуто крудо, свіжі печериці, моцарела, томатний соус, орегано.',
    },
  },
  {
    id: 'quattro-formaggi',
    image: '/pizza-quattro-formaggi.webp',
    price: 52,
    vegetarian: true,
    category: 'classic',
    name: { pl: 'Quattro Formaggi', en: 'Quattro Formaggi', ua: 'Кватро Формаджі' },
    description: {
      pl: 'Mozzarella, gorgonzola, parmezan, fontina. Bez sosu pomidorowego.',
      en: 'Mozzarella, gorgonzola, parmesan, fontina. No tomato sauce.',
      ua: 'Моцарела, горгонзола, пармезан, фонтина. Без томатного соусу.',
    },
  },
  {
    id: 'capricciosa',
    image: '/pizza-capricciosa.webp',
    price: 50,
    category: 'classic',
    name: { pl: 'Capricciosa', en: 'Capricciosa', ua: 'Капричоза' },
    description: {
      pl: 'Szynka, pieczarki, karczochy, oliwki, mozzarella, sos pomidorowy.',
      en: 'Ham, mushrooms, artichokes, olives, mozzarella, tomato sauce.',
      ua: 'Шинка, печериці, артишоки, оливки, моцарела, томатний соус.',
    },
  },
  {
    id: 'burrata',
    image: '/pizza-burrata.webp',
    price: 58,
    vegetarian: true,
    category: 'special',
    name: { pl: 'Burrata', en: 'Burrata', ua: 'Бурата' },
    description: {
      pl: 'Kremowa burrata, pomidorki koktajlowe, bazylia, oliwa, rucola.',
      en: 'Creamy burrata, cherry tomatoes, basil, olive oil, arugula.',
      ua: 'Кремова бурата, помідри чері, базиліка, олія, рукола.',
    },
  },
  {
    id: 'tartufo',
    image: '/pizza-tartufo.webp',
    price: 68,
    category: 'special',
    name: { pl: 'Tartufo', en: 'Tartufo', ua: 'Тартуфо' },
    description: {
      pl: 'Trufel czarny, pieczarki, kremowa baza, mozzarella, oliwa truflowa.',
      en: 'Black truffle, mushrooms, cream base, mozzarella, truffle oil.',
      ua: 'Чорний трюфель, печериці, вершкова основа, моцарела, трюфельна олія.',
    },
  },
  {
    id: 'rucola',
    image: '/pizza-rucola.webp',
    price: 54,
    category: 'classic',
    name: { pl: 'Prosciutto e Rucola', en: 'Prosciutto e Rucola', ua: 'Прошутто е Рукола' },
    description: {
      pl: 'Prosciutto crudo, rucola, płatki parmezanu, mozzarella, sos pomidorowy.',
      en: 'Prosciutto crudo, arugula, parmesan shavings, mozzarella, tomato sauce.',
      ua: 'Прошуто крудо, рукола, пластівці пармезану, моцарела, томатний соус.',
    },
  },
  {
    id: 'vegetariana',
    image: '/pizza-vegetariana.webp',
    price: 44,
    vegetarian: true,
    glutenFree: true,
    lactoseFree: true,
    category: 'vegetarian',
    name: { pl: 'Orto', en: 'Orto', ua: 'Орто' },
    description: {
      pl: 'Grillowane warzywa, cukinia, bakłażan, papryka, pomidorki, mozzarella.',
      en: 'Grilled vegetables, zucchini, eggplant, bell pepper, cherry tomatoes, mozzarella.',
      ua: 'Смажені овочі, кабачок, баклажан, перець, помідри чері, моцарела.',
    },
  },
  {
    id: 'fuoco-special',
    image: '/pizza-fuoco-special.webp',
    price: 72,
    spicy: true,
    category: 'special',
    name: { pl: 'FUOCO Special', en: 'FUOCO Special', ua: 'FUOCO Спешл' },
    description: {
      pl: 'Nduja, burrata, miód, pistacje, oliwa chili. Autorska pizza szefa.',
      en: 'Nduja, burrata, honey, pistachios, chili oil. Chef\'s signature pizza.',
      ua: "Ндуйя, бурата, мед, фісташки, чилі олія. Фірмова піцца шефа.",
    },
  },
  {
    id: 'diavola-funghi',
    image: '/pizza-diavola.webp',
    price: 49,
    spicy: true,
    lactoseFree: true,
    category: 'classic',
    name: { pl: 'Diavola e Funghi', en: 'Diavola e Funghi', ua: 'Дьявола е Фунгі' },
    description: {
      pl: 'Pikantne salami, pieczarki, mozzarella, sos pomidorowy, chili.',
      en: 'Spicy salami, mushrooms, mozzarella, tomato sauce, chili.',
      ua: 'Гостка салямі, печериці, моцарела, томатний соус, чилі.',
    },
  },
  {
    id: 'margherita-vecchia',
    image: '/pizza-margherita.webp',
    price: 42,
    vegetarian: true,
    category: 'classic',
    name: { pl: 'Margherita Vecchia', en: 'Margherita Vecchia', ua: 'Маргарита Веккія' },
    description: {
      pl: 'Sos pomidorowy, mozzarella di bufala, bazylia, oliwa, sól morska.',
      en: 'Tomato sauce, buffalo mozzarella, basil, olive oil, sea salt.',
      ua: 'Томатний соус, моцарела ді буфала, базиліка, олія, морська сіль.',
    },
  },
];

/**
 * Reviews — fictional customer testimonials.
 */
export interface Review {
  id: string;
  name: string;
  rating: number;
  text: Record<Lang, string>;
}

export const reviews: Review[] = [
  {
    id: 'r1',
    name: 'Anna Kowalska',
    rating: 5,
    text: {
      pl: 'Najlepsza pizza, jaką jadłam w Polsce. Ciasto lekkie, chrupiące brzegi, składniki najwyższej jakości. Atelier jak we Włoszech!',
      en: 'The best pizza I\'ve had in Poland. Light dough, crispy crust, top-quality ingredients. Atmosphere like in Italy!',
      ua: 'Найкраща піца, яку я їла в Польщі. Легке тісто, хрустка скоринка, інгредієнти найвищої якості. Атмосфера як в Італії!',
    },
  },
  {
    id: 'r2',
    name: 'Olena Shevchenko',
    rating: 5,
    text: {
      pl: 'Atmosfera, obsługa, smak — wszystko na najwyższym poziomie. Piec opalany drewnem robi ogromną różnicę. Polecam!',
      en: 'Atmosphere, service, taste — everything at the highest level. The wood-fired oven makes a huge difference. Highly recommend!',
      ua: 'Атмосфера, обслуговування, смак — все на найвищому рівні. Піч на дровах робить величезну різницю. Рекомендую!',
    },
  },
  {
    id: 'r3',
    name: 'Katarzyna Zielińska',
    rating: 4,
    text: {
      pl: 'Wreszcie prawdziwa pizza neapolitańska w mieście. Margherita z mozzarellą di bufala — czysta poezja. Obsługa doskonała.',
      en: 'Finally a real Neapolitan pizza in the city. Margherita with buffalo mozzarella — pure poetry. Service excellent.',
      ua: 'Нарешті справжня неаполітанська піца в місті. Маргарита з моцарелою ді буфала — чиста поезія. Обслуговування чудове.',
    },
  },
];

/**
 * Gallery images — reference files in /public.
 */
export interface GalleryImage {
  src: string;
  alt: Record<Lang, string>;
}

export const galleryImages: GalleryImage[] = [
  { src: '/gallery-finished-pizza.webp', alt: { pl: 'Gotowa pizza z pieca', en: 'Finished pizza from the oven', ua: 'Готова піца з печі' } },
  { src: '/oven-fire.webp', alt: { pl: 'Wnętrze pieca z płomieniami', en: 'Oven interior with flames', ua: 'Внутрішність печі з полум\'ям' } },
  { src: '/gallery-pizza-closeup.webp', alt: { pl: 'Kawałek pizzy z ciągnącą się mozzarellą', en: 'Pizza slice with stretchy mozzarella', ua: 'Шматок піци з моцарелою' } },
  { src: '/chef-dough.webp', alt: { pl: 'Kucharz wyrabiający ciasto', en: 'Chef kneading dough', ua: 'Кухар місить тісто' } },
  { src: '/gallery-oven-master.webp', alt: { pl: 'Pizzaiolo wkłada pizzę do pieca', en: 'Pizzaiolo placing pizza in the oven', ua: 'Піцайоло кладе піцу в піч' } },
  { src: '/interior.webp', alt: { pl: 'Wnętrze restauracji', en: 'Restaurant interior', ua: 'Інтер\'єр ресторану' } },
  { src: '/gallery-dough-detail.webp', alt: { pl: 'Ciasto rosnące na desce', en: 'Rising dough on a board', ua: 'Тісто, що підіймається на дошці' } },
  { src: '/gallery-interior-detail.webp', alt: { pl: 'Detal wnętrza z candlelight', en: 'Interior detail with candlelight', ua: 'Деталь інтер\'єру зі свічками' } },
  { src: '/gallery-oven-pull.webp', alt: { pl: 'Pizza wyjmowana z pieca na szufli', en: 'Pizza pulled from the oven on a peel', ua: 'Піца з печі на лопаті' } },
  { src: '/gallery-burrata-pizza.webp', alt: { pl: 'Pizza z burratą i świeżą bazylią', en: 'Pizza with burrata and fresh basil', ua: 'Піца з буратою та свіжою базилікою' } },
  { src: '/gallery-pizzaiolo-dough.webp', alt: { pl: 'Pizzaiolo formujący ciasto', en: 'Pizzaiolo shaping the dough', ua: 'Піцайоло формує тісто' } },
  { src: '/gallery-bar-detail.webp', alt: { pl: 'Detal baru w pizzerii', en: 'Pizzeria bar detail', ua: 'Деталь бару піцерії' } },
];

/**
 * Philosophy values.
 */
export interface PhilosophyValue {
  icon: string;
  title: Record<Lang, string>;
  description: Record<Lang, string>;
}

export const philosophyValues: PhilosophyValue[] = [
  {
    icon: 'flame',
    title: { pl: 'Prawdziwy ogień', en: 'Real fire', ua: 'Справжній вогонь' },
    description: {
      pl: 'Pizza wypiekana w tradycyjnym piecu opalanym drewnem dębowym w temperaturze 450°C.',
      en: 'Pizza baked in a traditional oak wood-fired oven at 450°C.',
      ua: 'Піца випікається в традиційній печі на дубових дровах за температури 450°C.',
    },
  },
  {
    icon: 'leaf',
    title: { pl: 'Najlepsze składniki', en: 'Finest ingredients', ua: 'Найкращі інгредієнти' },
    description: {
      pl: 'Mąka włoska tipo 00, pomidory San Marzano, mozzarella di bufala DOP.',
      en: 'Italian tipo 00 flour, San Marzano tomatoes, buffalo mozzarella DOP.',
      ua: "Італійське борошно tipo 00, помідори Сан-Марцано, моцарела ді буфала DOP.",
    },
  },
  {
    icon: 'award',
    title: { pl: 'Włoska tradycja', en: 'Italian tradition', ua: 'Італійська традиція' },
    description: {
      pl: 'Inspiracja autentyczną kuchnią Neapolu. Receptura przekazywana z pokolenia na pokolenie.',
      en: 'Inspired by authentic Neapolitan cuisine. Recipes passed down through generations.',
      ua: 'Натхненна автентичною неаполітанською кухнею. Рецепти передаються поколіннями.',
    },
  },
  {
    icon: 'hand',
    title: { pl: 'Rzemiosło', en: 'Craftsmanship', ua: 'Ремесло' },
    description: {
      pl: 'Dbałość o każdy szczegół. Ciasto dojrzewa 48 godzin, pizza formowana ręcznie.',
      en: 'Attention to every detail. Dough matures 48 hours, pizza shaped by hand.',
      ua: 'Увага до кожної деталі. Тісто визріває 48 годин, піца формується вручну.',
    },
  },
];

/**
 * Hero and philosophy images.
 */
export const images = {
  hero: '/hero-oven.webp',
  aboutOven: '/oven-fire.webp',
  aboutChef: '/chef-dough.webp',
  aboutInterior: '/interior.webp',
  ovenFire: '/oven-fire.webp',
};
