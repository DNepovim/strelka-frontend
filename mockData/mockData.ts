import LogoBenja from "../assets/images/groups/benjaminci.jpg"
import LogoSvetlusky from "../assets/images/groups/svetlusky.jpg"
import LogoVlcata from "../assets/images/groups/vlcata.jpg"
import LogoSkautky from "../assets/images/groups/skautky.jpg"
import LogoSkauti from "../assets/images/groups/skauti.jpg"
import LogoRoveri from "../assets/images/groups/roveri.jpg"
import LogoOldskauti from "../assets/images/groups/oldskauti.jpg"

import Gallery1 from "../assets/images/gallery/eVPQDxHt.webp"
import Gallery2 from "../assets/images/gallery/eVPQDxHt.webp"
import Gallery3 from "../assets/images/gallery/gWxHWOCt.webp"
import Gallery4 from "../assets/images/gallery/zmrWAoUt.webp"

import Hero1 from "../assets/images/hero/holky.webp"
import Hero2 from "../assets/images/hero/jan_jakub.webp"
import Hero3 from "../assets/images/hero/ondra.webp"
import Hero4 from "../assets/images/hero/mimon.webp"

import Nik from "../assets/images/people/nik.webp"
import Me from "../assets/images/people/ja.webp"
import Vitek from "../assets/images/people/vitek.webp"
import Robot from "../assets/images/people/robot.webp"
import Ondra from "../assets/images/people/ondra.webp"
import Spina from "../assets/images/people/spina.webp"

import { PersonProps } from "../blocks/PersonList/PersonList"
import { NavLink } from "../types/Navigation"
import { ImageTextProps, Icons } from "../blocks/ImageText/ImageText"
import { HistoryProps } from "../blocks/History/History"
import { GalleryProps } from "../blocks/GalleryList/GalleryList"
import { EventProps } from "../blocks/EventList/EventList"
import { PostProps } from "../blocks/PostList/PostList"
import { HeroProps } from "../components/Hero/Hero"
import { StatisticsProps } from "../blocks/Statistics/Statistics"

export const groupData = [
  {
    name: "Benjamínci",
    address: "benjaminci",
    image: LogoBenja,
    comment: "kluci a holky od 6 do 10 let",
  },
  {
    name: "Světlušky",
    address: "svetlusky",
    image: LogoSvetlusky,
    comment: "holky od 10 do 16 let",
  },
  {
    name: "Vlčata",
    address: "vlcata",
    image: LogoVlcata,
    comment: "kluci od 10 do 15 let",
  },
  {
    name: "Skautky",
    address: "skautky",
    image: LogoSkautky,
    comment: "kluci od 10 do 15 let",
  },
  {
    name: "Skauti",
    address: "skauti",
    image: LogoSkauti,
    comment: "kluci od 10 do 15 let",
  },
  {
    name: "Roveři",
    address: "roveri",
    image: LogoRoveri,
    comment: "kluci od 10 do 15 let",
  },
  {
    name: "Oldskauti",
    address: "oldskauti",
    image: LogoOldskauti,
    comment: "kluci od 10 do 15 let",
  },
]

export const groupListData = {
  content: groupData,
  title: "Naše oddíly",
}

export const linkData: NavLink[] = [
  { name: "Úvod", address: "/" },
  {
    name: "Oddíly",
    subLinks: {
      linkPrefix: "/oddily/",
      data: groupData,
    },
  },
  {
    name: "Základny",
    subLinks: {
      linkPrefix: "/zakladny/",
      data: [
        {
          name: "Dřevomorka",
          address: "drevomorka",
          image: LogoSkauti,
          comment: "Chata na úpatí Lužických hor",
        },
        {
          name: "Puchverk",
          address: "puchverk",
          image: LogoSkautky,
          comment: "Tábořiště daleko kterého nevíme jestli chceme",
        },
        {
          name: "Bára",
          address: "bara",
          image: LogoBenja,
          comment: "Skautský dům v Kralupech nad Vltavou",
        },
      ],
    },
  },
  {
    name: "Historie",
    address: "/historie",
  },
  {
    name: "Kontakt",
    address: "/kontakt",
  },
  {
    name: "English",
    address: "/english",
  },
]

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

export const contacts: ImageTextProps = {
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
  imageUrl: "https://picsum.photos/520/350",
}

export const building: ImageTextProps = {
  title: "Podrobnosti",
  imageUrl: "https://picsum.photos/520/350",
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
  introduction: {
    text: [
      "Pokud chceme otevřít dveře do časů minulých, bude lépe začít od pramenů. Pojďme tedy tam, kde se objevil první pramínek kralupského skautského hnutí, do čtyřicátých let 20. století.",
    ],
  },
  chapters: [
    {
      year: 2022,
      text: [
        "První skautský oddíl v Kralupech nad Vltavou založili v roce 1935 bratři Jožka Švarc ze Slaného a Zdeněk Čadek z Kralup. Oddíl měl 14 členů. Jeho vedením byl pověřen br. Fr. Šanda a br. V. Kintera. Po dvou letech činnosti byli vychováni noví vedoucí a oddíl měl v té době asi 30 členů. Jejich první klubovna byla v tehdejší mateřské škole v Přemyslově ulici (nynější skautský dům Bára).  Na fotografii vlevo je Přemyslova ulice v roce 1928.",
      ],
      image: {
        src: "https://picsum.photos/300/200",
        width: 300,
        height: 200,
      },
    },
    {
      year: 2033,
      text: [
        "Příznivcem a mecenášem 1.oddílu oddílu byl Sláva Golbergr z Prahy, Syn z bohaté rodiny, který za druhé světové války  zemřel v koncentračním táboře. Oddíl zanikl současně s rozpuštěním skautské organizace gestapem v r. 1940. Tolik ze vzpomínek br. Koláčného.",
      ],
    },
    {
      text: [
        "V roce 1946 byl skauting v Kralupech obnoven a vedení střediska se ujali br. Miloslav Puhlovský   a   br. Sláva Červenka. V Kralupech bylo neuvěřitelných 12 oddílů (z toho 5 dívčích. 5 chlapeckých, 1 vlčácký a 1 vodních skautů).",
        "Z těchto poválečných let se dochovala i kronika. Skautingu nebylo dopřáno působit déle a opět přišel zákaz, tentokrát vydaný komunistickou stranou. K obnově došlo až v uvolněném roce 1968. Vůdcem střediska se stal br.Bohumil Hála.  Povoláním byl  voják a po obsazení Varšavskou smlouvou 21.8.1968 musel odejít.  Připomeňme si, proč naše středisko přijalo název Střelka. Jméno se totiž úzce váže, právě k roku 1968. Zeptáme se pamětníků těch dob, sestra ˇXanda vypráví: „…A to nastaly ve středisku větší změny. Tou nejdůležitější bylo, že středisko převzal br. MUDr Miloš Prauz. Ten nás zavedl na řeku Střelu pod Rabštejnem a my si tam vybrali tábořiště. A v r. 69 tam byly 3 tábory:  chlapecký na Terasách, všechny smečky na Vlčácké louce a všechny dívky – skautky i světlušky na Dívčí louce.",
        "Po těchto táborech jsme schválili návrh br. Prauze na název střediska Střelka a na střediskový znak.“  V roce 1968 byly va středisku 2 chlapecké oddíly, 3 vlčácké smečky (1.2..3.), 2 dívčí oddíly a 2 roje světlušek, a klub oldskautů. Po revoluci v roce 1989 došlo opět k obnově Junáka, středisko Střelka v Kralupech vedl br. Antonín Vejrosta jeho zástupkyní byla s. Irena Zápotocká. Oddílů bylo 11 a navíc kmen dospělých.",
      ],
      image: {
        src: "https://picsum.photos/300/200",
        width: 300,
        height: 200,
      },
    },
    {
      text: [
        "V tomto roce byl založen 3. roj světlušek „Světlušky“ pod vedením s. J.Neumannové a 3.smečka vlčat pod vedením br. A.Vejrosty (Tory).. 23.5.1990 došlo k prvnímu setkání vůdců obou oddílů. Přišlo 6 děvčat a 6 chlapců. Br. Tory začal stonat a tak na vedení byla Jana sama. V září 1990 se do vedení smečky vlčat  postavil br.V.Šatava (Šaman). Turisté z Lobečku zapůjčili světluškám a vlčatům klubovnu. V průběhu roku se díky příchozím nováčkům vytvořily v roji 3 šestky a ve smečce také 3.  Černobílá fotografie je z prvního tábora „Vrát“, v červenci 1991.",
      ],
      image: {
        src: "https://picsum.photos/300/200",
        width: 300,
        height: 200,
      },
    },
    {
      text: [
        "Den sesterství. 4. dívčí oddíl připravil hru „Boj se špatnými vlastnostmi“. Mezi účastníky byl i 3. roj světlušek a 3. smečka vlčat. Pořádala se Kuličkyáda. 21. března skládalo několik světlušek slib. Vlčata postupují na Závodu světlušek a vlčat do oblastního kola. V květnu Šaman předává smečku vlčat Ježkovi (J.Šatava). Ježek chce, aby byla smečka vedena jako samostatný oddíl. V roce 1992 pořádají světlušky a vlčata poslední společný tábor. Vůdcem tábora je Šaman.",
      ],
    },
  ],
}

export const gallery: GalleryProps[] = [
  {
    name: "Podzimky",
    link: "/",
    imageUrl: "http://picsum.photos/300/200",
    date: "12.–17. 11. 2022",
  },
  {
    name: "Vánoční výprava",
    link: "/",
    imageUrl: "http://picsum.photos/300/200",
    date: "24. 12. 2022",
  },
  {
    name: "Zimní výprava",
    link: "/",
    imageUrl: "http://picsum.photos/300/200",
    date: "28. 2. – 3. 3. 2023",
  },
  {
    name: "Georgiáda a Ekobrigáda",
    link: "/",
    imageUrl: "http://picsum.photos/300/200",
    date: "24. 4. 2023",
  },
  {
    name: "Tábor",
    link: "/",
    imageUrl: "http://picsum.photos/300/200",
    date: "1.–31. 7. 2023",
  },
]

export const eventListData: EventProps[] = [
  {
    name: "Velikonoce na Slovensko",
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
      "Druhá část není povinná, ale budeme moc rádi, pokud se zúčastníte. Nemáte se čeho bát. Pokud si ještě na přespání ve stanu netroufnete, můžeme zařídit přespání v maringotkách.\n" +
      "\n" +
      "S sebou: věci na jednodenní/dvoudenní výpravu (pokud jedete na obě části), jídlo na celý den+snídani na neděli, peníze na vlak+kartičku s vekěm, něco na opečení (moučné těsto na hady, sýr, buřt, jablko... prostě to, co máte rádi), pytel na odpadky (stačí jeden do dvojice, je to pouze pro případ, že bychom v přírodě našli nějaký nepořádek) \n" +
      "Stan vám předají vedoucí\n" +
      "\n" +
      "Těšíme se :) \n" +
      "Můry ",
  },
  {
    name: "Velikonoce na Slovensko",
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
    name: "Velikonoce na Slovensko",
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
]

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
    imageSrc: "http://picsum.photos/300/200",
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
    imageSrc: "http://picsum.photos/300/200",
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
    imageSrc: "http://picsum.photos/300/200",
  },
  {
    title: "Zimni prechod Brd",
    link: "/",
    date: {
      from: "32. 13. 2033",
    },
    textPreview: "Letosni podzimky probehli poklidnym zplsobem a spoustou dob",
    imageSrc: "http://picsum.photos/300/200",
  },
]

export const heroData: HeroProps = {
  imageUrls: [Hero1.src, Hero2.src, Hero3.src, Hero4.src],
  words: [
    "Dobrodružství",
    "Kamarádi",
    "Příroda",
    "Výzva",
    "Odvaha",
    "LRRSKKAKPPS",
  ],
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
      icon: Icons.Lily,
      value: 1000,
      description:
        "Za dva roky se nam podarilo ziskat dostatecne uspory na dalsich 4 roky cinnosti.",
    },
    {
      icon: Icons.Heart,
      value: 10,
      description:
        "Za dva roky se nam podarilo ziskat dostatecne uspory na dalsich 4 roky cinnosti.",
    },
    {
      icon: Icons.People,
      value: 10000,
      description:
        "Za dva roky se nam podarilo ziskat dostatecne uspory na dalsich 4 roky cinnosti.",
    },
    {
      icon: Icons.Teepee,
      value: 1000,
      description:
        "Za dva roky se nam podarilo ziskat dostatecne uspory na dalsich 4 roky cinnosti.",
    },
  ],
}
