export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string; // lucide icon name
  content: string[];
  bulletPoints?: string[];
}

export const services: Service[] = [
  {
    slug: "upadlosc",
    title: "Upadłość",
    shortTitle: "Upadłość",
    description:
      "Kompleksowa obsługa postępowań upadłościowych, w tym przygotowanie wniosków i procedura pre-pack.",
    icon: "AlertTriangle",
    content: [
      "Niewypłacalność w ujęciu finansowo-ekonomicznym, to stan w którym majątek dłużnika nie wystarcza na zaspokojenie wszystkich zobowiązań. W polskim prawie stan ten musi być trwały, a dłużnik będący przedsiębiorcą powinien posiadać przeterminowane zobowiązania wobec co najmniej dwóch wierzycieli. Jednym z obowiązków niewypłacalnego przedsiębiorcy jest złożenie wniosku upadłościowego we właściwym czasie, co ma istotne znaczenie dla potencjalnej odpowiedzialności dłużnika, w tym kadry menadżerskiej, łącznie z sankcjami karnymi.",
      "Ciekawą alternatywą dla standardowego postepowania upadłościowego jest przygotowana likwidacja (tzw. pre-pack). Wraz z wnioskiem o ogłoszenie upadłości możliwe jest złożenie wniosku o zatwierdzenie warunków sprzedaży przedsiębiorstwa, jego części lub składników majątkowych stanowiących znaczną część przedsiębiorstwa na rzecz wskazanego podmiotu. Pre-pack pozwala na ograniczenie kosztów postępowania, przyspieszenie całej procedury oraz zwiększenie stopnia zaspokojenia wierzycieli.",
      "Członkowie naszego zespołu posiadają unikatowe doświadczenie w obsłudze niewypłacalnych przedsiębiorstw. Świadczyliśmy usługi od strony organu (syndyk, tymczasowy nadzorca sądowy), reprezentowaliśmy dłużników (a po ogłoszeniu upadłości upadłych), jak również wpieraliśmy wierzycieli i inwestorów w trakcie postępowań upadłościowych. Świadczymy kompleksowe usługi związane z niewypłacalnością, w tym m.in.:",
    ],
    bulletPoints: [
      "badamy kondycję finansową przedsiębiorstwa na podstawie dokumentów finansowych, z uwzględnieniem struktury zadłużenia, struktury właścicielskiej oraz wartości rynkowej przedsiębiorstwa",
      "sporządzamy ocenę możliwości przeprowadzenia postępowania upadłościowego, wraz z przedstawieniem ewentualnych ryzyk oraz rekomendacjami co do dalszego działania",
      "dokonujemy analizy czynności bezskutecznych dłużnika, w okresie 5 lat poprzedzających złożenie wniosku upadłościowego",
      "wdrażamy środki ochrony przeciwegzekucyjnej, w tym wnioski o zabezpieczenie majątku, zawieszenie egzekucji i uchylenie zajęć rachunków bankowych",
      "przygotowujemy wnioski upadłościowe",
      "przygotowujemy wnioski pre-pack",
      "opracowujemy symulację kosztów postępowania upadłościowego w różnych wariantach",
      "wyceniamy masę upadłościową oraz składniki majątkowe",
      "reprezentujemy dłużników, wierzycieli lub inwestorów przed sądem upadłościowym na wszystkich etapach postępowania",
      "kontrolujemy czynności dokonywane przez syndyka w toku postępowania",
      "zgłaszamy wierzytelności oraz zaskarżamy listy wierzytelności",
      "opracowujemy pisma procesowe oraz środki zaskarżenia",
      "sporządzamy opinie prawne z zakresu prawa upadłościowego",
    ],
  },
  {
    slug: "restrukturyzacja",
    title: "Restrukturyzacja",
    shortTitle: "Restrukturyzacja",
    description:
      "Alternatywa dla upadłości — ochrona przed wierzycielami i przywrócenie płynności finansowej.",
    icon: "RefreshCw",
    content: [
      "Nie zawsze utrata płynności finansowej oznacza powstanie stanu niewypłacalności. Alternatywą dla upadłości jest przeprowadzenie postępowania restrukturyzacyjnego. Wyróżniamy restrukturyzację pozasądową i restrukturyzację sądową uregulowaną w prawie restrukturyzacyjnym. Restrukturyzacja pozasądowa polega na zdiagnozowaniu na wczesnym etapie przyczyny problemu i zastosowaniu niezbędnych środków naprawczych.",
      "Prawo restrukturyzacyjne przewiduje 4 różne postępowania restrukturyzacyjne: postepowanie o zatwierdzenie układu, przyspieszone postępowanie układowe, postępowanie układowe oraz postępowanie sanacyjne.",
      "Jako zespół doświadczonych menadżerów oraz licencjonowanych doradców restrukturyzacyjnych posiadamy niezbędne kwalifikacje do zdiagnozowania przyczyn powstawania kłopotów finansowych i wdrożeniu niezbędnych środków. Świadczymy kompleksowe usługi związane z restrukturyzacją przedsiębiorstw, w tym m.in.:",
    ],
    bulletPoints: [
      "przeprowadzamy analizę sytuacji prawnej oraz ekonomicznej przedsiębiorstwa",
      "rekomendujemy wybór optymalnej procedury restrukturyzacyjnej",
      "wspieramy dłużnika w prowadzeniu działalności i wdrażaniu środków restrukturyzacyjnych",
      "nadzorujemy prowadzoną działalność operacyjną dłużnika",
      "wspieramy dział księgowy i prawny dłużnika",
      "wdrażamy środki restrukturyzacyjne, w tym wsparcie w pozyskaniu dofinansowania, modyfikacji struktury organizacyjnej, przygotowywanie wskaźników i prognoz finansowych",
      "przeprowadzamy symulację poziomu zaspokojenia w upadłości i restrukturyzacji",
      "przygotowujemy wnioski restrukturyzacyjne i plany restrukturyzacyjne",
      "negocjujemy warunki układu z wierzycielami",
      "reprezentujemy klientów przed sądem restrukturyzacyjnym i pozasądowymi organami postępowania",
      "sporządzamy opinie z zakresu prawa restrukturyzacyjnego",
    ],
  },
  {
    slug: "upadlosc-i-restrukturyzacja-konsumencka",
    title: "Upadłość i restrukturyzacja konsumencka",
    shortTitle: "Upadłość konsumencka",
    description:
      "Umorzenie zadłużenia dla osób fizycznych. Prowadzimy sprawę od wniosku do pełnego oddłużenia.",
    icon: "User",
    content: [
      "Upadłość konsumencka umożliwia osobom fizycznym nieprowadzącym działalności gospodarczej przeprowadzenie postępowania zmierzającego do umorzenia zadłużenia. Ogłoszenie upadłości jest możliwe wyłącznie wobec osób niewypłacalnych. Po ogłoszeniu upadłości majątek konsumenta obejmuje w zarząd syndyk, który dąży do jego spieniężenia. Po zakończeniu wszystkich czynności sąd decyduje czy konsument powinien zostać w pełni oddłużony, czy oddłużenie powinno nastąpić dopiero po zakończeniu planu spłaty wierzycieli.",
      "Alternatywą dla klasycznej upadłości konsumenckiej jest zawarcie układu z wierzycielami na zgromadzeniu wierzycieli bez ogłaszania upadłości.",
      "Nasz zespół oferuje kompleksowe usługi związane z upadłością i restrukturyzacją konsumencką. Przygotowujemy wnioski i reprezentujemy konsumentów do dnia ich pełnego oddłużenia.",
    ],
  },
  {
    slug: "prawo-spolek",
    title: "Prawo spółek",
    shortTitle: "Prawo spółek",
    description:
      "Doradztwo korporacyjne na każdym etapie. Fuzje, przejęcia, likwidacje i obsługa bieżąca spółek.",
    icon: "Briefcase",
    content: [
      "Oferujemy doradztwo przy wyborze optymalnego rodzaju spółki, z uwzględnieniem aspektów podatkowych, prawnych i biznesowych związanych ze specyfiką danej branży.",
      "Świadczymy usługi prawne związaną z obsługą korporacyjną spółek prawa handlowego, ich organów oraz wspólników lub akcjonariuszy, na każdym etapie ich funkcjonowania. Przygotowujemy wewnętrzne procedury, regulaminy, uchwały, protokoły i umowy. Doradzamy w sytuacjach spornych w spółce i reprezentujemy naszych klientów w postępowaniach polubownych i sądowych. Świadczymy również pomoc prawną w zakresie fuzji, przejęć, podziałów lub likwidacji spółek prawa handlowego.",
    ],
  },
  {
    slug: "rynek-kapitalowy",
    title: "Rynek kapitałowy",
    shortTitle: "Rynek kapitałowy",
    description:
      "Obsługa funduszy inwestycyjnych, domów maklerskich i instytucji finansowych.",
    icon: "TrendingUp",
    content: [
      "Świadczymy usługi prawne związane z obsługą funduszy inwestycyjnych, domów maklerskich i instytucji finansowych. Oferujemy m.in. sporządzanie statutów i regulaminów, warunków emisji, dokumentów związanych z procesowaniem transakcji inwestycyjnych; przygotowanie kompleksowej dokumentacji, umów inwestycyjnych oraz dokumentów term sheet.",
    ],
  },
  {
    slug: "nieruchomosci-i-inwestycje",
    title: "Nieruchomości i inwestycje",
    shortTitle: "Nieruchomości",
    description:
      "Doradztwo prawne przy transakcjach nieruchomościowych i projektach inwestycyjnych.",
    icon: "Home",
    content: [
      "Świadczymy usługi doradztwa prawnego związane z nieruchomościami i projektami inwestycyjnymi. Analizujemy i przygotowujemy umowy, weryfikujemy deweloperów i kontrahentów, sporządzamy niezbędną dokumentację do przeprowadzenia transakcji. Reprezentujemy naszych klientów w postępowaniach sądowych, administracyjnych i sądowo-administracyjnych.",
    ],
  },
  {
    slug: "podatki",
    title: "Podatki",
    shortTitle: "Podatki",
    description:
      "Doradztwo podatkowe, opinie i wnioski o wiążące interpretacje podatkowe.",
    icon: "FileText",
    content: [
      "Oferujemy doradztwo podatkowe. Analizujemy umowy oraz plany biznesowe z punktu widzenia skutków podatkowych. Opracowujemy opinie podatkowe, wnioski o wydanie wiążących interpretacji podatkowych oraz przygotowujemy dokumentację ekonomiczną i gospodarczą uzasadniającą transakcje i wdrożenie nowych modeli biznesowych.",
    ],
  },
  {
    slug: "ochrona-danych-osobowych",
    title: "Ochrona danych osobowych",
    shortTitle: "Ochrona danych (RODO)",
    description:
      "Wdrożenia RODO, audyty zgodności i dokumentacja dla sektora prywatnego i publicznego.",
    icon: "Shield",
    content: [
      "Świadczymy kompleksową pomoc prawną w zakresie ochrony danych osobowych, skierowaną zarówno do podmiotów z sektora prywatnego, jak i publicznego. Wdrażamy RODO i zapewniamy bezpieczeństwo przetwarzanych danych osobowych. Przeprowadzamy audyt zgodności z RODO oraz przygotowujemy wzorcową, dostosowaną do rodzaju działalności i branży dokumentację i polityki.",
    ],
  },
  {
    slug: "fundusze-europejskie-i-finansowanie",
    title: "Fundusze europejskie i finansowanie",
    shortTitle: "Fundusze europejskie",
    description:
      "Kompleksowe wsparcie w pozyskaniu dotacji z UE i finansowania z sektora publicznego.",
    icon: "Globe",
    content: [
      "Oferujemy kompleksowe wsparcie w pozyskaniu finansowania z sektora prywatnego i publicznego, w tym w pozyskaniu dotacji z UE. Sporządzamy niezbędną dokumentację, wspieramy w rozmowach z inwestorami oraz organami administracyjnymi.",
    ],
  },
];
