import LogoBenja from "../assets/images/groups/benjaminci.webp"
import LogoSvetlusky from "../assets/images/groups/svetlusky.webp"
import LogoVlcata from "../assets/images/groups/vlcata.webp"
import LogoSkautky from "../assets/images/groups/skautky.webp"
import LogoSkauti from "../assets/images/groups/skauti.webp"
import LogoRoveri from "../assets/images/groups/roveri.webp"
import LogoOldskauti from "../assets/images/groups/oldskauti.webp"

import Gallery1 from "../assets/images/gallery/gallery_7.webp"
import Gallery2 from "../assets/images/gallery/gallery_2.webp"
import Gallery3 from "../assets/images/gallery/gallery_3.webp"
import Gallery4 from "../assets/images/gallery/gallery_4.webp"
import Gallery5 from "../assets/images/gallery/gallery_5.webp"
import Gallery6 from "../assets/images/gallery/gallery_6.webp"
import Gallery7 from "../assets/images/gallery/gallery_1.webp"
import MapImage from "../assets/images/map.webp"

import Hero1 from "../assets/images/hero/holky.webp"
import Hero2 from "../assets/images/hero/ondra.webp"
import Hero3 from "../assets/images/hero/mimon.webp"
import Hero4 from "../assets/images/hero/rumunsko.webp"

import Nik from "../assets/images/people/nik.webp"
import Me from "../assets/images/people/ja.webp"
import Vitek from "../assets/images/people/vitek.webp"
import Robot from "../assets/images/people/robot.webp"
import Ondra from "../assets/images/people/ondra.webp"
import Spina from "../assets/images/people/spina.webp"

import { MenuItemProps, MenuProps, SubMenuItemProps } from "../types/Navigation"
import { PersonListProps, PersonProps } from "../blocks/PersonList/PersonList"
import { Icons, ImageTextProps } from "../blocks/ImageText/ImageText"
import { HistoryProps } from "../blocks/History/History"
import {
  GalleryListProps,
  GalleryProps as GalleryPreviewProps,
} from "../blocks/GalleryList/GalleryList"
import { EventListProps } from "../blocks/EventList/EventList"
import { PostProps } from "../blocks/PostList/PostList"
import { HeroProps } from "../components/Hero/Hero"
import { StatisticsProps } from "../blocks/Statistics/Statistics"
import { UnorderedListProps } from "../components/UnordoredList/UnorderedList"
import { GalleryProps } from "../blocks/Gallery/Gallery"
import { HeaderProps } from "../blocks/Header/Header"
import {
  HorizontalAlignment,
  Line,
  List,
  ListType,
  RichText,
  RichTextItemType,
  TextNode,
} from "../types/RichText"

export const groupData: SubMenuItemProps[] = [
  {
    text: "Benjamínci",
    to: "/oddily/vlcata",
    image: LogoBenja,
    comment: "kluci a holky od 6 do 10 let",
  },
  {
    text: "Světlušky",
    to: "/oddily/vlcata",
    image: LogoSvetlusky,
    comment: "holky od 10 do 16 let",
  },
  {
    text: "Vlčata",
    to: "/oddily/vlcata",
    image: LogoVlcata,
    comment: "kluci od 10 do 15 let",
  },
  {
    text: "Skautky",
    to: "/oddily/skautky",
    image: LogoSkautky,
    comment: "kluci od 10 do 15 let",
  },
  {
    text: "Skauti",
    to: "/oddily/vlcata",
    image: LogoSkauti,
    comment: "kluci od 10 do 15 let",
  },
  {
    text: "Roveři",
    to: "/oddily/vlcata",
    image: LogoRoveri,
    comment: "kluci od 10 do 15 let",
  },
  {
    text: "Oldskauti",
    to: "/oddily/vlcata",
    image: LogoOldskauti,
    comment: "kluci od 10 do 15 let",
  },
]

export const groupListData = {
  content: groupData,
  title: "Naše oddíly",
}

export const menuItemsData: MenuItemProps[] = [
  { text: "Úvod", to: "/" },
  {
    text: "Oddíly",
    subMenu: {
      items: groupData,
    },
  },
  {
    text: "Základny",
    subMenu: {
      items: [
        {
          text: "Dřevomorka",
          to: "/zakladny",
          image: LogoSkauti,
          comment: "Chata na úpatí Lužických hor",
        },
        {
          text: "Puchverk",
          to: "/zakladny",
          image: LogoSkautky,
          comment: "Tábořiště daleko kterého nevíme jestli chceme",
        },
        {
          text: "Bára",
          to: "/zakladny",
          image: LogoBenja,
          comment: "Skautský dům v Kralupech nad Vltavou",
        },
      ],
    },
  },
  {
    text: "Historie",
    to: "/historie",
  },
  {
    text: "Kontakt",
    to: "/kontakt",
  },
  {
    text: "English",
    to: "/english",
  },
]

export const menuData: MenuProps = {
  items: menuItemsData,
}

export const headerData: HeaderProps = {
  items: menuItemsData,
}

export const personData: PersonProps[] = [
  {
    name: "David",
    surname: "Heralecky",
    nickname: "Dave",
    image: Robot,
    comment: "Vůdce střediska, vůdce roverského kmene",
    contact: {
      email: "karel.1@gmail.com",
      phone: "111222111",
    },
  },
  {
    name: "Blanka",
    surname: "Dymáčková",
    image: Nik,
    comment: "Vůdkýně 6. oddílu benjamínku",
    contact: {
      email: "karel.1@gmail.com",
      phone: "111222111",
    },
  },
  {
    name: "Ing. Olga",
    nickname: "S fakt dlouhou prezdivku",
    surname: "Měkotová Dlouha Dlouhatanska",
    image: Spina,
    comment: "Vůdkýně 3. roje světlušek Waliča Teča",
    contact: {
      email: "karel.1@gmail.com",
      phone: "111222111",
    },
  },
  {
    name: "Karel",
    nickname: "Franta I",
    surname: "Josimir",
    image: Me,
    contact: {
      email: "karel.1@gmail.com",
      phone: "111222111",
    },
  },
  {
    name: "Karel",
    nickname: "Franta I",
    surname: "Ondra",
    image: Ondra,
    contact: {
      email: "karel.1@gmail.com",
      phone: "111222111",
    },
  },
  {
    name: "Karel",
    nickname: "Franta I",
    surname: "Ondra",
    image: Vitek,
    contact: {
      email: "karel.1@gmail.com",
      phone: "111222111",
    },
  },
]

export const personListData: PersonListProps = {
  title: "Vedení střediska",
  content: personData,
}

export const contactData: ImageTextProps = {
  title: "Fakturační údaje",
  text: [
    {
      text: [
        "Junák – český skaut,",
        "středisko Střelka Kralupy nad Vltavo u , z. s.",
        "Šafaříkova 358, 278 01, Kralupy n. Vlt.",
        "vedená u Městského soudu v Praze",
        "",
        "2107489044/2700 (hlavní účet)",
        "2801050859/2010 (pro platby akcí)",
      ],
    },
  ],
  imageUrl: MapImage.src,
}

export const buildingIntroData: ImageTextProps = {
  title: "Skautský dům Bára",
  titleIsH1: true,
  imageUrl: MapImage.src,
  text: [
    {
      text: [
        "Na Báře je vybavená kuchyně, 4x WC, sprcha, připojení k internetu.",
      ],
    },
    {
      text: [
        "Ubytování ve velkých klubovnách základny Bára pro 20 až 25 lidí, nocleh na vlastních karimatkách.",
      ],
    },
    {
      text: [
        "Základna ve středu města, blízko vlak, bus, zásobování, ale i turistické trasy a lesy, skály, palouky a potoky, tůně a řeka.",
      ],
    },
    {
      text: [
        "Podmínkou rezervace je telefonní kontakt na odpovědnou osobu za skupinu ubytovaných.",
      ],
    },
  ],
}

export const vlcataContactData: ImageTextProps = {
  title: "O Klubovne",
  imageUrl: MapImage.src,
  text: [
    {
      text: [
        "Pravidelne se schazime na skautskym dome Bara v ulici safarikovi.",
      ],
    },
    {
      text: ["Z Bary casto jdeme na Hostibejk, zejmena v nezimnich mesicich."],
    },
    {
      text: [
        "Nejsnazsi způsob, jak se na Báru dostat, je pěšky. Pokud budete velmi spěchat, tak vrtulník bude možná lepší volba.",
      ],
    },
    {
      text: [
        "U vrát je zvonek. Kdyby vám nikdo neotevřel, tak zkuste zavolat někoho z vedoucích, nebo čekat dokud nepřijde někdo s klíčemi.",
      ],
    },
  ],
}

export const buildingData: ImageTextProps = {
  title: "Podrobnosti",
  imageUrl: Gallery1.src,
  text: [
    {
      icon: Icons.Marker,
      text: ["Šafaříkova 358,", "Kralupy nad Vltavou, 278 01"],
    },
    {
      icon: Icons.Bed,
      text: ["25 lidí na vlastních karimatkách"],
    },
    {
      icon: Icons.Pig,
      text: [
        "skauti: 20 Kč/osoba/noc",
        "veřejnost: 40 Kč/osoba/noc",
        "+ energie",
      ],
    },
    {
      icon: Icons.Person,
      text: ["Eva Klementová", "evitka@strelka.cz", "737 688 203"],
    },
    {
      icon: Icons.Case,
      text: [
        "kuchyňka se základním vybavením, wc, koupelna, elektřina, pitná voda, teplá voda, ústřední topení, internet (wi-fi)",
      ],
    },
  ],
}

export const historyData: HistoryProps = {
  title: "Historie",
  introduction: {
    text: [
      "Pokud chceme otevřít dveře do časů minulých, bude lépe začít od pramenů. Pojďme tedy tam, kde se objevil první pramínek kralupského skautského hnutí, do čtyřicátých let 20. století.",
    ],
  },
  chapters: [
    {
      year: 1935,
      text: [
        "První skautský oddíl v Kralupech nad Vltavou založili v roce 1935 bratři Jožka Švarc ze Slaného a Zdeněk Čadek z Kralup. Oddíl měl 14 členů. Jeho vedením byl pověřen br. Fr. Šanda a br. V. Kintera. Po dvou letech činnosti byli vychováni noví vedoucí a oddíl měl v té době asi 30 členů. Jejich první klubovna byla v tehdejší mateřské škole v Přemyslově ulici (nynější skautský dům Bára).  Na fotografii vlevo je Přemyslova ulice v roce 1928.",
      ],
      image: Gallery1,
    },
    {
      year: 1940,
      text: [
        "Příznivcem a mecenášem 1.oddílu oddílu byl Sláva Golbergr z Prahy, Syn z bohaté rodiny, který za druhé světové války  zemřel v koncentračním táboře. Oddíl zanikl současně s rozpuštěním skautské organizace gestapem v r. 1940. Tolik ze vzpomínek br. Koláčného.",
      ],
    },
    {
      year: 1946,
      text: [
        "V roce 1946 byl skauting v Kralupech obnoven a vedení střediska se ujali br. Miloslav Puhlovský   a   br. Sláva Červenka. V Kralupech bylo neuvěřitelných 12 oddílů (z toho 5 dívčích. 5 chlapeckých, 1 vlčácký a 1 vodních skautů).",
        "Z těchto poválečných let se dochovala i kronika. Skautingu nebylo dopřáno působit déle a opět přišel zákaz, tentokrát vydaný komunistickou stranou. K obnově došlo až v uvolněném roce 1968. Vůdcem střediska se stal br.Bohumil Hála.  Povoláním byl  voják a po obsazení Varšavskou smlouvou 21.8.1968 musel odejít.  Připomeňme si, proč naše středisko přijalo název Střelka. Jméno se totiž úzce váže, právě k roku 1968. Zeptáme se pamětníků těch dob, sestra ˇXanda vypráví: „…A to nastaly ve středisku větší změny. Tou nejdůležitější bylo, že středisko převzal br. MUDr Miloš Prauz. Ten nás zavedl na řeku Střelu pod Rabštejnem a my si tam vybrali tábořiště. A v r. 69 tam byly 3 tábory:  chlapecký na Terasách, všechny smečky na Vlčácké louce a všechny dívky – skautky i světlušky na Dívčí louce.",
        "Po těchto táborech jsme schválili návrh br. Prauze na název střediska Střelka a na střediskový znak.“  V roce 1968 byly va středisku 2 chlapecké oddíly, 3 vlčácké smečky (1.2..3.), 2 dívčí oddíly a 2 roje světlušek, a klub oldskautů. Po revoluci v roce 1989 došlo opět k obnově Junáka, středisko Střelka v Kralupech vedl br. Antonín Vejrosta jeho zástupkyní byla s. Irena Zápotocká. Oddílů bylo 11 a navíc kmen dospělých.",
      ],
      image: Gallery2,
    },
    {
      year: 1990,
      text: [
        "V tomto roce byl založen 3. roj světlušek „Světlušky“ pod vedením s. J.Neumannové a 3.smečka vlčat pod vedením br. A.Vejrosty (Tory).. 23.5.1990 došlo k prvnímu setkání vůdců obou oddílů. Přišlo 6 děvčat a 6 chlapců. Br. Tory začal stonat a tak na vedení byla Jana sama. V září 1990 se do vedení smečky vlčat  postavil br.V.Šatava (Šaman). Turisté z Lobečku zapůjčili světluškám a vlčatům klubovnu. V průběhu roku se díky příchozím nováčkům vytvořily v roji 3 šestky a ve smečce také 3.  Černobílá fotografie je z prvního tábora „Vrát“, v červenci 1991.",
      ],
      image: Gallery6,
    },
    {
      year: 2001,
      text: [
        "Den sesterství. 4. dívčí oddíl připravil hru „Boj se špatnými vlastnostmi“. Mezi účastníky byl i 3. roj světlušek a 3. smečka vlčat. Pořádala se Kuličkyáda. 21. března skládalo několik světlušek slib. Vlčata postupují na Závodu světlušek a vlčat do oblastního kola. V květnu Šaman předává smečku vlčat Ježkovi (J.Šatava). Ježek chce, aby byla smečka vedena jako samostatný oddíl. V roce 1992 pořádají světlušky a vlčata poslední společný tábor. Vůdcem tábora je Šaman.",
      ],
    },
  ],
}

export const gallery: GalleryPreviewProps[] = [
  {
    title: "Podzimky",
    to: "/oddily/vlcata/fotky/podzimky",
    imageUrl: Gallery1.src,
    date: "12.–17. 11. 2022",
  },
  {
    title: "Vánoční výprava",
    to: "/oddily/vlcata/fotky/podzimky",
    imageUrl: Gallery2.src,
    date: "24. 12. 2022",
  },
  {
    title: "Zimní výprava",
    to: "/oddily/vlcata/fotky/podzimky",
    imageUrl: Gallery5.src,
    date: "28. 2. – 3. 3. 2023",
  },
  {
    title: "Georgiáda a Ekobrigáda",
    to: "/oddily/vlcata/fotky/podzimky",
    imageUrl: Gallery4.src,
    date: "24. 4. 2023",
  },
  {
    title: "Tábor",
    to: "/oddily/vlcata/fotky/podzimky",
    imageUrl: Gallery2.src,
    date: "1.–31. 7. 2023",
  },
  {
    title: "Zahajovácí výprava",
    to: "/oddily/vlcata/fotky/podzimky",
    imageUrl: Gallery1.src,
    date: "12.–17. 11. 2022",
  },
  {
    title: "Praha plnou strašidel",
    to: "/oddily/vlcata/fotky/podzimky",
    imageUrl: Gallery3.src,
    date: "24. 12. 2022",
  },
  {
    title: "Sametová výprava",
    to: "/oddily/vlcata/fotky/podzimky",
    imageUrl: Gallery6.src,
    date: "28. 2. – 3. 3. 2023",
  },
  {
    title: "Georgiáda",
    to: "/oddily/vlcata/fotky/podzimky",
    imageUrl: Gallery7.src,
    date: "24. 4. 2023",
  },
  {
    title: "Tábor 2023",
    to: "/oddily/vlcata/fotky/podzimky",
    imageUrl: Gallery4.src,
    date: "1.–31. 7. 2023",
  },
]

export const galleryData: GalleryProps = {
  title: "Podzimky 2019",
  images: [
    Gallery1,
    Gallery4,
    Gallery2,
    Gallery3,
    Gallery7,
    Gallery4,
    Gallery3,
    Gallery7,
    Gallery4,
    Gallery5,
    Gallery5,
    Gallery6,
    Gallery5,
    Gallery5,
    Gallery6,
    Gallery4,
  ],
}

export const galleryListData: GalleryListProps = {
  title: "Galerie",
  content: gallery,
}

export const eventListData: EventListProps = {
  title: "Plán schůzek a výprav",
  content: [
    {
      name: "Schůzka na Hostibejku",
      date: {
        from: "22. 3.",
      },
      description:
        "Čeká nás výprava do Litoměřic. Výprava má 2 části.\n" +
        "Pro obě části platí sraz v sobotu v 9:00 na nádraží.\n" +
        "1. část-výprava do Litoměřic (konec v sobotu v Kralupech v 18:45)\n" +
        "2. část-přespání na Rusavkách ve stanech či v lesní školce (konec v 10:00 na Rusavkách)\n" +
        "\n" +
        "Druhá část není povinná, ale budeme moc rádi, pokud se zúčastníte. Nemáte se čeho bát. Pokud si ještě na přespání ve stanu netroufnete, můžeme zařídit přespání v maringotkách.\n" +
        "\n" +
        "S sebou: věci na jednodenní/dvoudenní výpravu (pokud jedete na obě části), jídlo na celý den+snídani na neděli, peníze na vlak+kartičku s vekěm, něco na opečení (moučné těsto na hady, sýr, buřt, jablko... prostě to, co máte rádi), pytel na odpadky (stačí jeden do dvojice, je to pouze pro případ, že bychom v přírodě našli nějaký nepořádek) \n" +
        "Stan vám předají vedoucí\n" +
        "\n" +
        "Těšíme se :) \n" +
        "Můry ",
    },
    {
      name: "Vánoční výprava",
      date: {
        from: "22. 3.",
        to: "23. 4.",
      },
      description:
        "Čeká nás výprava do Litoměřic. Výprava má 2 části.\n" +
        "Pro obě části platí sraz v sobotu v 9:00 na nádraží.\n" +
        "1. část-výprava do Litoměřic (konec v sobotu v Kralupech v 18:45)\n" +
        "2. část-přespání na Rusavkách ve stanech či v lesní školce (konec v 10:00 na Rusavkách)\n" +
        "\n" +
        "Druhá část není povinná, ale budeme moc rádi, pokud se zúčastníte. Nemáte se čeho bát. Pokud si ještě na přespání ve stanu netroufnete, můžeme zařídit přespání v maringotkách.\n",
    },
    {
      name: "Přechod Himaláji",
      date: {
        from: "22. 3.",
        to: "23. 4.",
      },
      description:
        "Druhá část není povinná, ale budeme moc rádi, pokud se zúčastníte. Nemáte se čeho bát. Pokud si ještě na přespání ve stanu netroufnete, můžeme zařídit přespání v maringotkách.\n" +
        "\n" +
        "S sebou: věci na jednodenní/dvoudenní výpravu (pokud jedete na obě části), jídlo na celý den+snídani na neděli, peníze na vlak+kartičku s vekěm, něco na opečení (moučné těsto na hady, sýr, buřt, jablko... prostě to, co máte rádi), pytel na odpadky (stačí jeden do dvojice, je to pouze pro případ, že bychom v přírodě našli nějaký nepořádek) \n" +
        "Stan vám předají vedoucí\n" +
        "\n" +
        "Těšíme se :) \n" +
        "Můry ",
    },
  ],
}

export const postListData: PostProps[] = [
  {
    title: "Zimni prechod Brd",
    link: "/",
    date: {
      from: "1. 2.",
      to: "2. 3. 2028",
    },
    place: "Brdy",
    textPreview:
      "I pres covidove nesvary jsme se dnes sesli s dalsimi skoro 3000 skauti",
    imageSrc: Gallery7.src,
  },
  {
    title: "Zimni prechod Brd",
    link: "/",
    date: {
      from: "1. 22.",
      to: "2. 3. 2028",
    },
    place: "Brdy",
    textPreview:
      "I pres covidove nesvary jsme se dnes sesli s dalsimi skoro 3000 skauti",
    imageSrc: Gallery2.src,
  },
  {
    title: "Podzimky 2043",
    link: "/",
    date: {
      from: "4. 4. 1998",
    },
    place: "Brdy",
    textPreview:
      "I pres covidove nesvary jsme se dnes sesli s dalsimi skoro 3000 skauti",
    imageSrc: Gallery3.src,
  },
  {
    title: "Zimni prechod Brd",
    link: "/",
    date: {
      from: "32. 13. 2033",
    },
    textPreview: "Letosni podzimky probehli poklidnym zplsobem a spoustou dob",
    imageSrc: Gallery4.src,
  },
]

export const heroData: HeroProps = {
  imageUrls: [Hero1.src, Hero2.src, Hero3.src, Hero4.src],
  words: ["Dobrodružství", "Kamarádi", "Příroda", "Výzva", "Odvaha"],
}

export const textHighlightData = {
  text: [
    "Jsme skauti z Kralup nad Vltavou. Společně bojujeme za práva mexičanů a snažíme se prozasovat národní zájmy Mexické republiky.",
    "Uznáváme a ctíme naše koření, a proto doporočujeme všem aby si naplánovali vlastní výlet na Mexiko, za účelem zpestření jinak neobyčejně obyčejného života.",
  ],
}

export const statisticsData: StatisticsProps = {
  title: "Středisko v číslech",
  content: [
    {
      icon: Icons.People,
      value: 180,
      description:
        "Ve stredisku je skoro 200 registrovanych clenu. Pravidelne se schazime na strediskove Podzimni vyprave.",
    },
    {
      icon: Icons.Heart,
      value: 10,
      description:
        "Kdyby clovek mel o devet srdci vic, tak by mel celkove deset srdci, a tedy jeho tlak by bylo desetinasobne.",
    },
    {
      icon: Icons.Lily,
      value: 21,
      description:
        "Lonsky rok jsme vyslali 21 clenu strediska na vzdelavaci akce poradane Junakem.",
    },
    {
      icon: Icons.Teepee,
      value: 1250,
      description: "Tolik komárů jsme potkali na letošní tábory.",
    },
  ],
}

export const groupHeaderData = {
  title: "hello",
  links: [
    {
      to: "/oddily/vlcata",
      text: "O nás",
    },
    {
      to: "/oddily/vlcata",
      text: "Kalendář",
    },
    {
      to: "/oddily/vlcata",
      text: "Co s sebou",
    },
    {
      to: "/oddily/vlcata",
      text: "Šestky",
    },
    {
      to: "/oddily/vlcata/kontakty",
      text: "Kontakty",
    },
    {
      to: "/oddily/vlcata/fotky",
      text: "Fotky",
    },
  ],
}

export const vlcataIntroData: UnorderedListProps = {
  items: [
    "Jsme chlapecký skautský oddíl se zajímavým programem, dobrým mladým kolektivem vedoucích a mnoha jedinečnými skauty a vlčaty* (zde se dozvíte o vlčatech, skautský web je zde)",
    "Jsme členy spolku Junák – český skaut, patříme do střediska Střelka* v Kralupech nad Vltavou",
    "Fungujeme díky dobrovolnické práci 4 vedoucích, občasné pomoci roverů* a střediska",
    "Každý týden se scházíme na Báře na 2 hodinovou schůzku, 1 – 2x měsíčně jezdíme na výpravu a v létě vyrážíme na tábor pod tee-pee*.",
    "Jsme oddíl s rozšířenou duchovní výchovou, ale vítáme mezi nás všechny, které skauting oslovil tak, jako nás.",
  ],
}

export const shortTextNode: TextNode = {
  content: "Hello there, ",
}

export const shortBoldTextNode: TextNode = {
  content: "General Kenobi. ",
  isBold: true,
}

export const shortLink: TextNode = {
  content: "google ",
  to: "www.google.com",
}

export const shortBoldLink: TextNode = {
  content: "skaut.cz ",
  isBold: true,
  to: "https://www.skaut.cz",
}

export const longLink: TextNode = {
  content: "this is some veeeery long link with many words ",
  to: "https://www.canon.co.uk",
}

export const longBoldLink: TextNode = {
  content: "someveryconvolutedurlwithnospacesinbetweeen ",
  isBold: true,
  to: "https://www.apple.com",
}

export const longTextNode: TextNode = {
  content:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
}

export const shortLine: Line = {
  nodes: [shortTextNode, shortBoldLink, shortTextNode],
}

export const longLine: Line = {
  nodes: [
    shortTextNode,
    shortBoldTextNode,
    longTextNode,
    shortLink,
    longTextNode,
    longLink,
    longTextNode,
  ],
}

export const textBlockWithList: List = {
  items: [
    [
      {
        content: { lines: [shortLine, shortLine] },
        type: RichTextItemType.TextBlock,
      },
      {
        content: { lines: [shortLine, shortLine] },
        type: RichTextItemType.TextBlock,
      },
    ],
    [
      {
        content: { lines: [shortLine] },
        type: RichTextItemType.TextBlock,
      },
      {
        content: {
          items: [
            [
              {
                content: { lines: [shortLine] },
                type: RichTextItemType.TextBlock,
              },
            ],
            [
              {
                content: { lines: [shortLine] },
                type: RichTextItemType.TextBlock,
              },
            ],
          ],
          type: ListType.Ordered,
        },
        type: RichTextItemType.List,
      },
      {
        content: { lines: [longLine] },
        type: RichTextItemType.TextBlock,
      },
    ],
    [
      {
        content: {
          lines: [{ nodes: [shortTextNode, longBoldLink, longTextNode] }],
        },
        type: RichTextItemType.TextBlock,
      },
    ],
  ],
}

export const richTextData: RichText = {
  items: [
    {
      content: {
        lines: [longLine],
        figure: { image: Gallery1, alignment: HorizontalAlignment.Left },
      },
      type: RichTextItemType.TextBlock,
    },
    {
      content: {
        lines: [longLine],
        figure: { image: Gallery1, alignment: HorizontalAlignment.Right },
      },
      type: RichTextItemType.TextBlock,
    },
    {
      content: {
        ...textBlockWithList,
        type: ListType.Unordered,
      },
      type: RichTextItemType.List,
    },
    {
      content: {
        lines: [longLine],
        figure: { image: Gallery1, alignment: HorizontalAlignment.Left },
      },
      type: RichTextItemType.TextBlock,
    },
  ],
}
