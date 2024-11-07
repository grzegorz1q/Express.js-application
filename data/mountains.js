const mountains = [
    {"id": 0, "images":['everest1.jpg', 'everest2.jpg', 'everest3.png', 'everest4.jpeg'], "name":"Mount Everest", "location":"Himalaje", "height":8848, "firstAscent":"29-05-1953", "description": "Mount Everest zbudowany jest z granitów, gnejsów, wapieni i łupków. Ściany Mount Everestu mają około 3 km wysokości. Mount Everest tworzy masyw, który z trzech stron posiada lodowce. Szczyt zaliczany jest do Korony Ziemi oraz Korony Himalajów. Jako pierwsi zdobyli go Brytyjczycy w 1953 roku, natomiast zimą jako pierwsi stopy na szczycie postawili Polacy – Krzysztof Wielicki i Leszek Cichy w 1980 roku. Wspomniany szczyt w 1865 roku nazwano Mount Everest na cześć walijskiego geodety i kartografa sir George’a Everesta. Rozpoczął on prace nad mapą Indii. Wcześniej najwyższy szczyt świata nosił nazwę Szczyt XV. Po stronie chińskiej masyw został objęty ochroną w ramach rezerwatu biosfery pod nazwą Rezerwat Biosfery Czomolungmy. Everest po tybetańsku nazywany jest Czomolungmą, natomiast po nepalsku Sagarmathą. Wysokość Mount Everestu od kilku dekad jest przedmiotem sporu Nepalczyków z Chińczykami. Podawane są bowiem dwie, a często nawet trzy odrębne wysokości. Władze Nepalu powołują się na pomiary z 1831 roku, według których Mount Everest ma 8848 m n.p.m. Natomiast według chińskich badań najwyższy szczyt świata ma o cztery metry mniej - 8844 m n.p.m."},
    {"id": 1, "images":['k2_1.jpg', 'k2_2.jpg', 'k2_3.jpg', 'k2_4.jpg'], "name":"K2", "location":"Karakorum", "height":8611, "firstAscent":"31-07-1954", "description": "Miejsce w którym wznosi się K2 jest szczególne. Sąsiadują tam ze sobą bowiem wszystkie cztery ośmiotysięczniki w Karakorum. Raptem kilka kilometrów na wschód od K2 znajdziecie na mapie masyw Broad Peak, a tuż obok potężną grupę Gaszerbrumów. Zdjęcia ze szczytu K2 są też nieporównywalne z żadnymi innymi. Różnica wysokości pomiędzy wierzchołkiem K2 a otaczającymi ją szczytami to ponad 500 m. Stojąc tam, ma się Karakorum nie wokół siebie, ale u stóp. K2 budzi chyba największe emocje ze wszystkich szczytów Karakorum. Nie tylko jednak dlatego, że jest drugą pod względem wysokości górą na Ziemi. Jest uważana za najtrudniejszy ze wszystkich czternastu ośmiotysięczników. Nawet na tzw. normalnej drodze trzeba bowiem zmierzyć się z czysto wspinaczkowymi fragmentami. Na dodatek, część tych trudności pojawia się tuż pod szczytem, na wysokości przekraczającej 8000 m. K2 bywa też nazywana „Savage Mountain” czyli „brutalną górą”. To określenie, powtarzane za Georgem Bellem, uczestnikiem amerykańskiej wyprawy z 1953 roku. Rzeczywiście, jeszcze kilka lat temu statystyki mroziły krew w żyłach. Prawie co czwarty wspinacz próbujący zdobyć K2 przypłacał to życiem."}, 
    {"id": 2, "images":['giewont1.jpg', 'giewont2.webp', 'giewont3.jpg', 'giewont4.jpeg'], "name":"Giewont", "location":"Tatry", "height":1895, "firstAscent":"01-06-1830", "description": "Masyw Giewontu położony jest między Doliną Bystrej, Doliną Kondratową, Doliną Małej Łąki i Doliną Strążyską. Góruje nad Zakopanem i jest z niego znakomicie widoczny. Od strony północnej Giewont jest stromy i trudno dostępny, zbocza południowe są łagodniejsze.Szczyt znajduje się w północnej grani Kopy Kondrackiej. Masyw Giewontu złożony jest z trzech części: Wielkiego Giewontu (1895 m), Małego Giewontu (1739 m) i Długiego Giewontu (1868 m). Pomiędzy Wielkim a Małym Giewontem znajduje się Giewoncka Przełęcz (1709 m), z której opada cieszący się złą sławą (ponieważ zginęło w nim wielu turystów, którzy zboczyli ze szlaku celem skrócenia drogi powrotnej) Żleb Kirkora."}, 
    {"id": 3, "images":['nanga1.jpg', 'nanga2.jpg', 'nanga3.webp', 'nanga4.jpg'], "name":"Nanga Parbat", "location":"Himalaje", "height":8126, "firstAscent":"03-07-1956", "description": "Nanga Parbat położona jest w Kaszmirze, w północno-wschodnim Pakistanie. Od strony północnej i zachodniej masyw oblewany jest przez rzekę Indus. Najwyżej wysunięty śnieżno-skalny wierzchołek Nangi Parbat wznosi się na wysokości 8126 m n.p.m., jego drugie spiętrzenie szczytowe (od strony północnej) ma zaś wysokość 8070 m n.p.m. Od głównego wierzchołka ośmiotysięcznika odchodzą trzy granie, które są granicami trzech głównych ścian. Po stronie północno-wschodniej znajduje się ściana Rakhiot, po północno-zachodniej zaś ściana Diamir, natomiast od strony południowej biegnie ściana Rupal. 50 km na północ od szczytu Nanga Parbat mieści się trójstyk trzech wielkich łańcuchów górskich Azji – Himalajów, Karakorum i Hindukuszu."}, 
    {"id": 4, "images":['kanczen1.jpg', 'kanczen2.jpg', 'kanczen3.JPG', 'kanczen4.jpg'], "name":"Kanczendzonga", "location":"Himalaje", "height":8586, "firstAscent":"25-05-1955", "description": "Przez główny wierzchołek Kanczendzongi przebiega wschodnia granica Nepalu. W kopule szczytowej, poza nim, wyróżnić można jeszcze trzy wzniesienia, które sięgają znacznie wyżej niż 8000 m.: Yalung Kang (8505 m), Kanczendzonga Środkowa (8482 m) i Kanczendzonga Południowa (8489 m). Nieco dalej na zachód znajduje się Kangbachen liczący 7902 m. Kanczendzonga to potężna i trudna góra. Cały jej masyw jest silnie zaśnieżony i najbardziej odczuwalny jest tutaj wpływ monsunu. Po Annapurnie i Lhotse odnotowano tu najmniej wejść spośród ośmiotysięczników. Jako pierwszy Europejczyk ujrzał ją Joseph Hooker w 1848 r., zbliżył się do masywu i naszkicował pierwszą mapkę rejonu. Z kolei pierwszym alpinistą, który poważnie zainteresował się górą był Brytyjczyk, Douglas Freshfield. W roku 1899 okrążył cały masyw zwiedzając lodowiec Zemu i Kanczendzonga, i wytypował trzy drogi, którymi kolejne wyprawy próbowały atakować szczyt."},
    {"id": 5, "images":['broad1.jpg', 'broad2.jpg', 'broad3.webp', 'broad4.webp'], "name":"Broad Peak", "location":"Himalaje", "height":8051, "firstAscent":"09-06-1957", "description": "en potężny masyw wznosi się na południowy wschód od K2. Wierzchołki obu gór oddalone są od siebie zaledwie o 9 km i leżą po przeciwległych stronach lodowca Godwin-Austen. Ze względu na rozłożystość masywu, Martin Conway w 1892 nazwał go – Szeroki Szczyt (ang. Broad Peak). Ardito Desio jako pierwszy wprowadził nazwę Falchan Kangri – co w języku balti oznacza także – Szeroki Szczyt. Góra posiada kilka wierzchołków: Broad Peak główny o wysokości 8051 m, tzw. przedwierzchołek Rocky Summit 8028 m, Broad Peak Central 8011 m, Broad Peak North 7490 m, Kharut Kangri 6942 m. Od strony południowo-zachodniej wysokość względna szczytu wynosi około 3250 metrów, z czego 2300 metrów to bardzo stroma ściana górska."},
    {"id": 6, "images":['rysy1.jpg', 'rysy2.jpeg', 'rysy3.jpg', 'rysy4.jpeg'], "name":"Rysy", "location":"Tatry", "height":2501, "firstAscent":"30-07-1840", "description": "Rysy to najwyższy szczyt Tatr, leżący w Tatrach Wysokich, a zarazem najwyższy należący do Korony Gór Polski. Posiada trzy wierzchołki, z których średni co do wysokości wierzchołek północno-zachodni, leżący na granicy polsko-słowackiej, należy do Polski. Na szczycie znajduje się słupek graniczny, a nieco poniżej metalowa skrzyneczka charakterystyczna dla słowackich gór. Zarówno ze szlaku, jak i ze szczytu rozpościera się przepiękna panorama, przy dobrej pogodzie widoczność sięga ponad 200 km. Tatry to najwyższe pasmo Karpat leżące w polsko-słowackim paśmie granicznym, którego zaledwie 22% powierzchni znajduje się na terytorium Polski. Surowy klimat tatrzański sprawia, że roślinność utworzyła układ piętrowy. Wraz z wysokością lasy z przewagą buków i jaworów zmieniają się w lasy świerkowe. Nieco wyższe partie gór porastają kosodrzewiny, a powyżej 2300 m n.p.m. już tylko najwytrzymalsze gatunki roślin. Do chronionych należy dziewięćsił. Lasy zamieszkują sarny, jelenie, lisy i niedźwiedzie brunatne, natomiast powyżej linii lasu spotkamy świstaki, norniki śnieżne i kozice, będące symbolem Tatr."},
];
  
module.exports = mountains;