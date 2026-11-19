import type { Lang } from './content';

export interface Translation {
  nav: {
    about: string;
    menu: string;
    philosophy: string;
    gallery: string;
    reviews: string;
    contact: string;
    viewMenu: string;
  };
  hero: {
    title: string;
    titleAccent: string;
    subtitle: string;
    ctaMenu: string;
    ctaDiscover: string;
    scroll: string;
  };
  about: {
    label: string;
    title: string;
    p1: string;
    p2: string;
    p3: string;
    stat1Value: string;
    stat1Label: string;
    stat2Value: string;
    stat2Label: string;
    stat3Value: string;
    stat3Label: string;
  };
  philosophy: {
    label: string;
    title: string;
    subtitle: string;
  };
  menu: {
    label: string;
    title: string;
    subtitle: string;
    all: string;
    classic: string;
    special: string;
    vegetarian: string;
    spicy: string;
    veg: string;
    glutenFree: string;
    lactoseFree: string;
    search: string;
    searchPlaceholder: string;
    noResults: string;
    from: string;
    currency: string;
  };
  oven: {
    label: string;
    title: string;
    p1: string;
    p2: string;
    p3: string;
    feature1Title: string;
    feature1Desc: string;
    feature2Title: string;
    feature2Desc: string;
    feature3Title: string;
    feature3Desc: string;
  };
  gallery: {
    label: string;
    title: string;
    subtitle: string;
    close: string;
    prev: string;
    next: string;
  };
  reviews: {
    label: string;
    title: string;
    subtitle: string;
  };
  contact: {
    label: string;
    title: string;
    subtitle: string;
    address: string;
    phone: string;
    email: string;
    hours: string;
    directions: string;
    openMap: string;
    formName: string;
    formEmail: string;
    formPhone: string;
    formMessage: string;
    formSubmit: string;
    formSuccess: string;
    formErrorName: string;
    formErrorEmail: string;
    formErrorMessage: string;
    formErrorPhone: string;
    disclaimer: string;
  };
  footer: {
    description: string;
    quickLinks: string;
    contactTitle: string;
    hoursTitle: string;
    follow: string;
    rights: string;
    madeWith: string;
  };
}

export const translations: Record<Lang, Translation> = {
  pl: {
    nav: {
      about: 'O nas',
      menu: 'Menu',
      philosophy: 'Nasza filozofia',
      gallery: 'Galeria',
      reviews: 'Opinie',
      contact: 'Kontakt',
      viewMenu: 'Zobacz menu',
    },
    hero: {
      title: 'Prawdziwy smak',
      titleAccent: 'ognia',
      subtitle: 'Autentyczna pizza neapolitańska wypiekana w tradycyjnym piecu opalanym drewnem dębowym. Pasja, rzemiosło i najwyższa jakość w każdym kęsie.',
      ctaMenu: 'Poznaj nasze menu',
      ctaDiscover: 'Odkryj FUOCO',
      scroll: 'Przewiń w dół',
    },
    about: {
      label: 'O restauracji',
      title: 'Historia FUOCO',
      p1: 'FUOCO narodziło się z pasji do autentycznej kuchni włoskiej. Nasza historia rozpoczęła się w 2019 roku, kiedy Marco Rossi, wnuk neapolitańskiego pizzaiolo, przywiózł do Polski rodzinne receptury i marzenie o prawdziwej pizzy z pieca opalanego drewnem.',
      p2: 'Każda pizza powstaje z mąki włoskiej tipo 00, pomidorów San Marzano z wulkanicznych pól pod Wezuwiuszem i mozzarelli di bufala DOP. Ciasto dojrzewa 48 godzin, a wypiek trwa zaledwie 90 sekund w temperaturze 450°C.',
      p3: 'Dla nas pizza to nie jedzenie — to rzemiosło. Każdy detal ma znaczenie: od temperatury wody, przez wilgotność ciasta, po moment wyciągnięcia pizzy z pieca. To pasja, którą dzielimy z naszymi gośćmi każdego dnia.',
      stat1Value: '48h',
      stat1Label: 'Dojrzewanie ciasta',
      stat2Value: '450°C',
      stat2Label: 'Temperatura pieca',
      stat3Value: '90s',
      stat3Label: 'Czas wypieku',
    },
    philosophy: {
      label: 'Nasza filozofia',
      title: 'Czym kierujemy się w kuchni',
      subtitle: 'Cztery filary, które definiują każdą pizzę FUOCO.',
    },
    menu: {
      label: 'Menu',
      title: 'Nasze pizze',
      subtitle: 'Każda pizza wypiekana w piecu opalanym drewnem dębowym. Wybierz swoją.',
      all: 'Wszystkie',
      classic: 'Klasyczne',
      special: 'Specjalne',
      vegetarian: 'Wegetariańskie',
      spicy: 'Pikantne',
      veg: 'Wege',
      glutenFree: 'Bezglutenowa',
      lactoseFree: 'Bezlaktozowa',
      search: 'Szukaj pizzy',
      searchPlaceholder: 'Wpisz nazwę pizzy lub składnik...',
      noResults: 'Nie znaleziono pizzy. Spróbuj innego wyszukiwania.',
      from: 'od',
      currency: 'zł',
    },
    oven: {
      label: 'Piec opalany drewnem',
      title: 'Sekret tkwi w ogniu',
      p1: 'Nasz piec zbudowany jest z cegły ognioodpornej i kamienia wulkanicznego z Neapolu. Opalamy go wyłącznie drewnem dębowym, które nadaje pizzy delikatny, dymny aromat.',
      p2: 'W temperaturze 450°C pizza piecze się zaledwie 90 sekund. Tak krótki czas sprawia, że ciasto pozostaje lekkie i chrupiące na zewnątrz, a miękke w środku — z charakterystycznymi przypieczeniami zwanymi "leopard spots".',
      p3: 'To właśnie ogień nadaje naszej pizzy ten niepowtarzalny smak, którego nie można odtworzyć w piecu elektrycznym. Prawdziwa pizza neapolitańska musi pochodzić z pieca opalanego drewnem.',
      feature1Title: 'Drewno dębowe',
      feature1Desc: 'Naturalne, aromatyczne opał nadający dymny charakter.',
      feature2Title: '450°C',
      feature2Desc: 'Ekstremalna temperatura dla idealnego wypieku w 90 sekund.',
      feature3Title: 'Kamień wulkaniczny',
      feature3Desc: 'Podłoga z kamieni z Neapolu kumuluje ciepło jak wulkan.',
    },
    gallery: {
      label: 'Galeria',
      title: 'Zobacz FUOCO',
      subtitle: 'Pizze, piec, wnętrze i detale włoskiej atmosfery.',
      close: 'Zamknij',
      prev: 'Poprzednie',
      next: 'Następne',
    },
    reviews: {
      label: 'Opinie klientów',
      title: 'Co mówią nasi goście',
      subtitle: 'Autentyczne opinie osób, które odwiedziły FUOCO.',
    },
    contact: {
      label: 'Kontakt',
      title: 'Odwiedź nas',
      subtitle: 'Zapraszamy do FUOCO. Rezerwacje telefonicznie lub przez formularz.',
      address: 'Adres',
      phone: 'Telefon',
      email: 'E-mail',
      hours: 'Godziny otwarcia',
      directions: 'Wyznacz trasę',
      openMap: 'Otwórz mapę',
      formName: 'Imię i nazwisko',
      formEmail: 'Adres e-mail',
      formPhone: 'Numer telefonu',
      formMessage: 'Wiadomość',
      formSubmit: 'Wyślij wiadomość',
      formSuccess: 'Dziękujemy! Wiadomość została wysłana. Skontaktujemy się z Tobą wkrótce.',
      formErrorName: 'Podaj imię i nazwisko (min. 3 znaki)',
      formErrorEmail: 'Podaj poprawny adres e-mail',
      formErrorPhone: 'Podaj poprawny numer telefonu',
      formErrorMessage: 'Wiadomość musi mieć min. 10 znaków',
      disclaimer: 'Dane kontaktowe są przykładowe i zostaną podmienione na prawdziwe.',
    },
    footer: {
      description: 'Ekskluzywna pizzeria oferująca autentyczną pizzę neapolitańską wypiekaną w tradycyjnym piecu opalanym drewnem dębowym.',
      quickLinks: 'Nawigacja',
      contactTitle: 'Kontakt',
      hoursTitle: 'Godziny otwarcia',
      follow: 'Obserwuj nas',
      rights: 'Wszelkie prawa zastrzeżone.',
      madeWith: 'Stworzone z pasją do włoskiej kuchni',
    },
  },
  en: {
    nav: {
      about: 'About',
      menu: 'Menu',
      philosophy: 'Philosophy',
      gallery: 'Gallery',
      reviews: 'Reviews',
      contact: 'Contact',
      viewMenu: 'View menu',
    },
    hero: {
      title: 'The true taste of',
      titleAccent: 'fire',
      subtitle: 'Authentic Neapolitan pizza baked in a traditional oak wood-fired oven. Passion, craftsmanship, and the highest quality in every bite.',
      ctaMenu: 'Explore our menu',
      ctaDiscover: 'Discover FUOCO',
      scroll: 'Scroll down',
    },
    about: {
      label: 'About us',
      title: 'The FUOCO Story',
      p1: 'FUOCO was born from a passion for authentic Italian cuisine. Our story began in 2019 when Marco Rossi, grandson of a Neapolitan pizzaiolo, brought family recipes and a dream of real wood-fired pizza to Poland.',
      p2: 'Every pizza is made with Italian tipo 00 flour, San Marzano tomatoes from the volcanic fields near Vesuvius, and buffalo mozzarella DOP. The dough matures for 48 hours, and baking takes just 90 seconds at 450°C.',
      p3: 'For us, pizza is not food — it is craft. Every detail matters: from water temperature, to dough humidity, to the exact moment the pizza leaves the oven. This is a passion we share with our guests every day.',
      stat1Value: '48h',
      stat1Label: 'Dough maturation',
      stat2Value: '450°C',
      stat2Label: 'Oven temperature',
      stat3Value: '90s',
      stat3Label: 'Baking time',
    },
    philosophy: {
      label: 'Our philosophy',
      title: 'What guides our kitchen',
      subtitle: 'Four pillars that define every FUOCO pizza.',
    },
    menu: {
      label: 'Menu',
      title: 'Our pizzas',
      subtitle: 'Each pizza baked in an oak wood-fired oven. Choose yours.',
      all: 'All',
      classic: 'Classic',
      special: 'Special',
      vegetarian: 'Vegetarian',
      spicy: 'Spicy',
      veg: 'Veg',
      glutenFree: 'Gluten-free',
      lactoseFree: 'Lactose-free',
      search: 'Search pizzas',
      searchPlaceholder: 'Type a pizza name or ingredient...',
      noResults: 'No pizzas found. Try a different search.',
      from: 'from',
      currency: 'PLN',
    },
    oven: {
      label: 'Wood-fired oven',
      title: 'The secret is in the fire',
      p1: 'Our oven is built from firebrick and volcanic stone from Naples. We fuel it exclusively with oak wood, which gives the pizza a delicate, smoky aroma.',
      p2: 'At 450°C the pizza bakes in just 90 seconds. This short time keeps the dough light and crispy on the outside, soft on the inside — with characteristic char marks known as "leopard spots".',
      p3: 'It is the fire that gives our pizza its unique flavor, impossible to reproduce in an electric oven. True Neapolitan pizza must come from a wood-fired oven.',
      feature1Title: 'Oak wood',
      feature1Desc: 'Natural, aromatic fuel giving a smoky character.',
      feature2Title: '450°C',
      feature2Desc: 'Extreme temperature for a perfect 90-second bake.',
      feature3Title: 'Volcanic stone',
      feature3Desc: 'A floor of Neapolitan stones that holds heat like a volcano.',
    },
    gallery: {
      label: 'Gallery',
      title: 'See FUOCO',
      subtitle: 'Pizzas, the oven, interiors, and details of Italian atmosphere.',
      close: 'Close',
      prev: 'Previous',
      next: 'Next',
    },
    reviews: {
      label: 'Customer reviews',
      title: 'What our guests say',
      subtitle: 'Authentic reviews from people who visited FUOCO.',
    },
    contact: {
      label: 'Contact',
      title: 'Visit us',
      subtitle: 'Welcome to FUOCO. Reservations by phone or through the form.',
      address: 'Address',
      phone: 'Phone',
      email: 'Email',
      hours: 'Opening hours',
      directions: 'Get directions',
      openMap: 'Open map',
      formName: 'Full name',
      formEmail: 'Email address',
      formPhone: 'Phone number',
      formMessage: 'Message',
      formSubmit: 'Send message',
      formSuccess: 'Thank you! Your message has been sent. We will contact you soon.',
      formErrorName: 'Please enter your name (min. 3 characters)',
      formErrorEmail: 'Please enter a valid email address',
      formErrorPhone: 'Please enter a valid phone number',
      formErrorMessage: 'Message must be at least 10 characters',
      disclaimer: 'Contact details are sample data and will be replaced with real ones.',
    },
    footer: {
      description: 'An exclusive pizzeria offering authentic Neapolitan pizza baked in a traditional oak wood-fired oven.',
      quickLinks: 'Navigation',
      contactTitle: 'Contact',
      hoursTitle: 'Opening hours',
      follow: 'Follow us',
      rights: 'All rights reserved.',
      madeWith: 'Created with passion for Italian cuisine',
    },
  },
  ua: {
    nav: {
      about: 'Про нас',
      menu: 'Меню',
      philosophy: 'Наша філософія',
      gallery: 'Галерея',
      reviews: 'Відгуки',
      contact: 'Контакти',
      viewMenu: 'Дивитися меню',
    },
    hero: {
      title: 'Справжній смак',
      titleAccent: 'вогню',
      subtitle: 'Автентична неаполітанська піца, випечена в традиційній печі на дубових дровах. Пристрасть, ремесло та найвища якість у кожному шматку.',
      ctaMenu: 'Переглянути меню',
      ctaDiscover: 'Відкрити FUOCO',
      scroll: 'Гортайте вниз',
    },
    about: {
      label: 'Про ресторан',
      title: 'Історія FUOCO',
      p1: 'FUOCO народилося з пристрасті до автентичної італійської кухні. Наша історія почалася у 2019 році, коли Марко Россі, онук неаполітанського піцайоло, привіз до Польщі родинні рецепти та мрію про справжню піцу з печі на дровах.',
      p2: 'Кожна піца створюється з італійського борошна tipo 00, помідорів Сан-Марцано з вулканічних полів біля Везувію та моцарели ді буфала DOP. Тісто визріває 48 годин, а випікання триває лише 90 секунд за температури 450°C.',
      p3: 'Для нас піца — це не їжа, а ремесло. Кожна деталь має значення: від температури води до вологості тіста і моменту, коли піца виходить з печі. Це пристрасть, якою ми ділимося з нашими гостями щодня.',
      stat1Value: '48год',
      stat1Label: 'Визрівання тіста',
      stat2Value: '450°C',
      stat2Label: 'Температура печі',
      stat3Value: '90с',
      stat3Label: 'Час випікання',
    },
    philosophy: {
      label: 'Наша філософія',
      title: 'Що веде нашу кухню',
      subtitle: 'Чотири стовпи, які визначають кожну піцу FUOCO.',
    },
    menu: {
      label: 'Меню',
      title: 'Наші піци',
      subtitle: 'Кожна піца випікається в печі на дубових дровах. Оберіть свою.',
      all: 'Усі',
      classic: 'Класичні',
      special: 'Спеціальні',
      vegetarian: 'Вегетаріанські',
      spicy: 'Гострі',
      veg: 'Веге',
      glutenFree: 'Без глютену',
      lactoseFree: 'Без лактози',
      search: 'Пошук піци',
      searchPlaceholder: 'Введіть назву піци або інгредієнт...',
      noResults: 'Піцу не знайдено. Спробуйте інший пошук.',
      from: 'від',
      currency: 'зл',
    },
    oven: {
      label: 'Піч на дровах',
      title: 'Таємниця у вогні',
      p1: 'Наша піч побудована з вогнетривкої цегли та вулканічного каменю з Неаполя. Палимо виключно дубовими дровами, які надають піці ніжного, димного аромату.',
      p2: 'За температури 450°C піца печеться лише 90 секунд. Такий короткий час робить тісто легким і хрустким зовні, м\'яким всередині — з характерними підпалинами, званими "леопардовими плямами".',
      p3: 'Саме вогонь надає нашій піці той неповторний смак, який неможливо відтворити в електричній печі. Справжня неаполітанська піца має виходити з печі на дровах.',
      feature1Title: 'Дубові дрова',
      feature1Desc: 'Природне, ароматне паливо з димним характером.',
      feature2Title: '450°C',
      feature2Desc: 'Екстремальна температура для ідеального випікання за 90 секунд.',
      feature3Title: 'Вулканічний камінь',
      feature3Desc: 'Под з неаполітанського каменю, що тримає тепло як вулкан.',
    },
    gallery: {
      label: 'Галерея',
      title: 'Побачити FUOCO',
      subtitle: 'Піци, піч, інтер\'єр та деталі італійської атмосфери.',
      close: 'Закрити',
      prev: 'Попереднє',
      next: 'Наступне',
    },
    reviews: {
      label: 'Відгуки клієнтів',
      title: 'Що кажуть наші гості',
      subtitle: 'Автентичні відгуки людей, які відвідали FUOCO.',
    },
    contact: {
      label: 'Контакти',
      title: 'Відвідайте нас',
      subtitle: 'Запрошуємо до FUOCO. Бронювання телефоном або через форму.',
      address: 'Адреса',
      phone: 'Телефон',
      email: 'Електронна пошта',
      hours: 'Години роботи',
      directions: 'Прокласти маршрут',
      openMap: 'Відкрити карту',
      formName: "Ім'я та прізвище",
      formEmail: 'Адреса електронної пошти',
      formPhone: 'Номер телефону',
      formMessage: 'Повідомлення',
      formSubmit: 'Надіслати повідомлення',
      formSuccess: 'Дякуємо! Ваше повідомлення надіслано. Ми зв\'яжемося з вами незабаром.',
      formErrorName: "Введіть ім'я та прізвище (мін. 3 символи)",
      formErrorEmail: 'Введіть коректну адресу електронної пошти',
      formErrorPhone: 'Введіть коректний номер телефону',
      formErrorMessage: 'Повідомлення має містити мін. 10 символів',
      disclaimer: 'Контактні дані є прикладом і будуть замінені на справжні.',
    },
    footer: {
      description: 'Ексклюзивна піцерія, що пропонує автентичну неаполітанську піцу, випечену в традиційній печі на дубових дровах.',
      quickLinks: 'Навігація',
      contactTitle: 'Контакти',
      hoursTitle: 'Години роботи',
      follow: 'Стежте за нами',
      rights: 'Усі права захищені.',
      madeWith: 'Створено з пристрастю до італійської кухні',
    },
  },
};
