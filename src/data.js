const playgrounds = [
  {
    name: "Legepladsen i Prinsesse Charlottes Gade",
    id: "1",
    adresse: "Prinsesse Charlottes Gade 10, 2200 København N",
    lat: "55.692468",
    lng: "12.55399",
    bemandet: "0"
  },
  {
    name: "Legepladsen i Brønshøjparken",
    id: "2",
    adresse: "Brønshøjparken ved Frederikssundsvej/Hyrdevangen, 2700 Brønshøj",
    lat: "55.706492",
    lng: "12.507561",
    bemandet: "0"
  },
  {
    name: "Legepladsen på Brønshøj Torv",
    id: "3",
    adresse: "Brønshøj Torv ved Krabbesholmvej, 2700 Brønshøj",
    lat: "55.703285",
    lng: "12.498707",
    bemandet: "0"
  },
  {
    name: "ByOasen i De Gamles By",
    id: "135",
    adresse: "Møllegade 25C, 2200 København N",
    lat: "55.692645",
    lng: "12.557486",
    bemandet: "1"
  },
  {
    name: "Vandlegepladsen i Fælledparken",
    id: "137",
    adresse: "Fælledparken ved Edel Sauntes Allé, 2100 København Ø",
    lat: "55.700662",
    lng: "12.563639",
    bemandet: "0"
  },
  {
    name: "Den Bemandede Legeplads i Kornblomstparken",
    id: "138",
    adresse: "Øselsgade 5, 2300 København S",
    lat: "55.661542",
    lng: "12.601004",
    bemandet: "1"
  },
  {
    name: "Legepladsen i Utterslev Mose - Ved Vigen",
    id: "12",
    adresse: "ved stien bag Emdrup Kirke, 2700 Brønshøj",
    lat: "55.720977",
    lng: "12.528341",
    bemandet: "0"
  },
  {
    name: "Legepladsen i Mimersparken",
    id: "134",
    adresse: "Borgmestervangen 51, 2200 København N",
    lat: "55.704728",
    lng: "12.541301",
    bemandet: "1"
  },
  {
    name: "Legepladsen på Fuglsang Alle",
    id: "4",
    adresse: "Fuglsang Alle over for Beldringevej, 2700 Brønshøj",
    lat: "55.697704",
    lng: "12.49729",
    bemandet: "0"
  },
  {
    name: "Legepladsen på Gislingevej ved Grevingevej",
    id: "5",
    adresse: "Gislingevej/Grevingevej, 2700 Brønshøj",
    lat: "55.708272",
    lng: "12.46967",
    bemandet: "0"
  },
  {
    name: "Legepladsen i Gyngemosen ved Langhusvej",
    id: "6",
    adresse: "Gyngemosen ved Langhusvej, 2700 Brønshøj",
    lat: "55.722819",
    lng: "12.48151",
    bemandet: "0"
  },
  {
    name: "Legepladsen på Liselundvej",
    id: "7",
    adresse: "Liselundvej over for Brønshøjgårdvej 25, 2700 Brønshøj",
    lat: "55.70355",
    lng: "12.49423",
    bemandet: "0"
  },
  {
    name: "Naturlegepladsen i Rødkildeparken",
    id: "8",
    adresse: "ved Hvidkildevej, 2700 Brønshøj",
    lat: "55.699441",
    lng: "12.510595",
    bemandet: "0"
  },
  {
    name: "Legepladsen på Vestvolden ved Banefløjsstien",
    id: "13",
    adresse: "v. Banefløjsstien, 2700 Brønshøj",
    lat: "55.71378",
    lng: "12.458872",
    bemandet: "0"
  },
  {
    name: "Legepladsen på Vestvolden ved Bystævnet",
    id: "14",
    adresse: "Vestvolden ved Bystævnet, 2700 Brønshøj",
    lat: "55.717579",
    lng: "12.47635",
    bemandet: "0"
  },
  {
    name: "Legepladsen i Utterslev Mose ved Engsvinget/Hyrdevangen",
    id: "9",
    adresse: "Engsvinget over for Hyrdevangen, 2700 Brønshøj",
    lat: "55.713485",
    lng: "12.516042",
    bemandet: "0"
  },
  {
    name: "Legepladsen i Utterslev Mose ved Pilesvinget 5",
    id: "10",
    adresse:
      "Ud for Pilesvinget 5 mellem Brønshøj Kirkevej og Hvedevej, 2700 Brønshøj",
    lat: "55.712069",
    lng: "12.498413",
    bemandet: "0"
  },
  {
    name: "Legepladsen i Utterslev Mose ud for Pilesvinget 65",
    id: "11",
    adresse: "Pilesvinget for enden af Klintevej, 2700 Brønshøj",
    lat: "55.709382",
    lng: "12.487853",
    bemandet: "0"
  },
  {
    name: "Legepladsen på Vestvolden ved Mørkhøjvej",
    id: "15",
    adresse: "Vestvolden ved Mørkhøjvej, 2700 Brønshøj",
    lat: "55.717241",
    lng: "12.4705",
    bemandet: "0"
  },
  {
    name: "Legepladsen på Bispebjerg Parkallé",
    id: "16",
    adresse: "Bispebjerg Parkalle ud for Henriksvej, 2400 København NV",
    lat: "55.720119",
    lng: "12.5329",
    bemandet: "0"
  },
  {
    name: "Legepladsen i Lersøparken",
    id: "18",
    adresse:
      "tæt ved parkindgangen ved Tagensvej/Lersøstien, 2400 København NV",
    lat: "55.70954",
    lng: "12.543023",
    bemandet: "0"
  },
  {
    name: "Legepladsen på Mejsevænget",
    id: "19",
    adresse: "Mejsevænget ud for nr. 11, 2400 København NV",
    lat: "55.697681",
    lng: "12.530336",
    bemandet: "0"
  },
  {
    name: "Legepladsen på Møntmestervej",
    id: "20",
    adresse: "Møntmestervej mellem 14 og 16,  Bispebjerg",
    lat: "55.706983",
    lng: "12.520847",
    bemandet: "0"
  },
  {
    name: "Legepladsen på Rørsangervej",
    id: "21",
    adresse: "Rørsangervej 82,  Bispebjerg",
    lat: "55.702155",
    lng: "12.524655",
    bemandet: "0"
  },
  {
    name: "Legepladsen i Amorparken",
    id: "127",
    adresse: "på hjørnet af Tagensvej og Juliane Maries Vej, 2200 København N",
    lat: "55.69709",
    lng: "12.56224",
    bemandet: "0"
  },
  {
    name: "Legepladsen i Norgesgade",
    id: "22",
    adresse: "Norgesgade mellem nr. 26 og 56, 2300 København S",
    lat: "55.663488",
    lng: "12.596297",
    bemandet: "0"
  },
  {
    name: "Legepladsen i Rødegårdsparken",
    id: "23",
    adresse: "ved Øresundsvej 39, 2300 København S",
    lat: "55.661526",
    lng: "12.6112",
    bemandet: "0"
  },
  {
    name: "Legepladsen på Skotlands Plads",
    id: "24",
    adresse: "mellem Sundholmsvej 95 og 107, 2300 København S",
    lat: "55.658182",
    lng: "12.604784",
    bemandet: "0"
  },
  {
    name: "Legepladsen i Allersgade",
    id: "25",
    adresse: "i Thorsparken mellem Allersgade og Thorsgade, 2200 København N",
    lat: "55.696761",
    lng: "12.54711",
    bemandet: "0"
  },
  {
    name: "Legepladsen i Baldersgade",
    id: "26",
    adresse: "Balders Plads, 2200 København N",
    lat: "55.701211",
    lng: "12.54815",
    bemandet: "0"
  },
  {
    name: "Legepladsen på Lersø Parkallé",
    id: "27",
    adresse: "ved Gyritegade ud for Lersø Parkallé 23-57,  København N",
    lat: "55.705544",
    lng: "12.556859",
    bemandet: "0"
  },
  {
    name: "Legepladsen i Odinsgade",
    id: "28",
    adresse: "mellem Jagtvej og Thorsgade, 2200 København N",
    lat: "55.697099",
    lng: "12.55018",
    bemandet: "0"
  },
  {
    name: "Legepladsen på Damhusengen - Elvergårdsvej",
    id: "29",
    adresse: "Damhusengen for enden af Elvergårdsvej, 2720 Vanløse",
    lat: "55.681074",
    lng: "12.469921",
    bemandet: "0"
  },
  {
    name: "Legepladsen på Damhusengen - Jyllingevej",
    id: "30",
    adresse: "Jylligevej 125-127, 2720 Vanløse",
    lat: "55.690732",
    lng: "12.467392",
    bemandet: "0"
  },
  {
    name: "Legepladsen på Damhusengen ved Vanløse Byvej",
    id: "31",
    adresse: "ved Vanløse Byvej, 2720 Vanløse",
    lat: "55.687213",
    lng: "12.470962",
    bemandet: "0"
  },
  {
    name: "Legepladsen på Grøndalsvænge Alle",
    id: "36",
    adresse: "Grøndalsvænge Alle over for Morbærvej, 2720 Vanløse",
    lat: "55.692611",
    lng: "12.519066",
    bemandet: "0"
  },
  {
    name: "Legepladsen på Genforeningspladsen nord",
    id: "32",
    adresse: "ved Hulgårdsvej 86-90, 2720 Vanløse",
    lat: "55.699746",
    lng: "12.517784",
    bemandet: "0"
  },
  {
    name: "Legepladsen på Genforeningspladsen syd",
    id: "33",
    adresse: "ved Mågevej, 2720 Vanløse",
    lat: "55.698803",
    lng: "12.521574",
    bemandet: "0"
  },
  {
    name: "Legepladsen på Grøndal Torv",
    id: "34",
    adresse: "over for Godthåbsvej 203, 2720 Vanløse",
    lat: "55.693303",
    lng: "12.512988",
    bemandet: "0"
  },
  {
    name: "Legepladsen i Grøndalsparken",
    id: "35",
    adresse: "Grøndals Parkvej over for Arnestedet, 2720 Vanløse",
    lat: "55.681113",
    lng: "12.491492",
    bemandet: "0"
  },
  {
    name: "Legepladsen på Jyllingevej",
    id: "37",
    adresse: "Jyllingevej over for Jernbane Alle, 2720 Vanløse",
    lat: "55.692645",
    lng: "12.486754",
    bemandet: "0"
  },
  {
    name: "Legepladsen i Krogebjergparken",
    id: "38",
    adresse: "ved Roshagevej, 2720 Vanløse",
    lat: "55.696257",
    lng: "12.464857",
    bemandet: "0"
  },
  {
    name: "Legepladsen på Skibelundvej",
    id: "39",
    adresse: "Skibelundvej 12, 2720 Vanløse",
    lat: "55.692197",
    lng: "12.496015",
    bemandet: "0"
  },
  {
    name: "Legepladsen på Ålekistevej",
    id: "40",
    adresse: "v. Vanløse Skole, 2720 Vanløse",
    lat: "55.686819",
    lng: "12.482142",
    bemandet: "0"
  },
  {
    name: "Legepladsen i Broagergade",
    id: "41",
    adresse: "Broagergade, 1672 København V",
    lat: "55.66847",
    lng: "12.54594",
    bemandet: "0"
  },
  {
    name: "Legepladsen på Enghave Plads",
    id: "42",
    adresse: "Enghavevej mellem nr. 42 og 56, 1674 København V",
    lat: "55.667208",
    lng: "12.54494",
    bemandet: "0"
  },
  {
    name: "Legepladsen i Saxoparken",
    id: "43",
    adresse: "Matthæusgade 8, 1666 København V",
    lat: "55.670917",
    lng: "12.55125",
    bemandet: "0"
  },
  {
    name: "Legepladsen på Sjælør Boulevard",
    id: "44",
    adresse: "Sjælør Boulevard ved Mozartsvej, 2450 København SV",
    lat: "55.647932",
    lng: "12.528681",
    bemandet: "0"
  },
  {
    name: "Legepladsen i Rektorparken",
    id: "45",
    adresse: "Rektorparken, 2450 København SV",
    lat: "55.662416",
    lng: "12.53255",
    bemandet: "0"
  },
  {
    name: "Legepladsen på Carl Langes Vej",
    id: "46",
    adresse: "Carl Langes Vej mellem Eschrichtsvej og Panumsvej, 2500 Valby",
    lat: "55.663813",
    lng: "12.49882",
    bemandet: "0"
  },
  {
    name: "Legepladsen på Lykkebovej",
    id: "47",
    adresse: "Lykkebovej over for Højbovej, 2500 Valby",
    lat: "55.658645",
    lng: "12.48754",
    bemandet: "0"
  },
  {
    name: "Legepladsen på Steins Plads",
    id: "48",
    adresse: "Steins Plads, 2500 Valby",
    lat: "55.662101",
    lng: "12.50391",
    bemandet: "0"
  },
  {
    name: "Legepladsen i Trekronergade",
    id: "49",
    adresse: "Vigerslev Allé/Trekronergade, 2500 Valby",
    lat: "55.661378",
    lng: "12.519082",
    bemandet: "0"
  },
  {
    name: "Legepladsen i Valbyparken ved Cafe Rosenhaven",
    id: "50",
    adresse: "ved Hammelstrupvej 100, 2450 København SV",
    lat: "55.642458",
    lng: "12.51994",
    bemandet: "0"
  },
  {
    name: "Børnenes Årtusindskiftehave i Valbyparken (Kærestehaven)",
    id: "51",
    adresse: "Temahave i Valbyparken, 2450 København SV",
    lat: "55.640653",
    lng: "12.52066",
    bemandet: "0"
  },
  {
    name: "Legepladsen på Vigerslev Alle",
    id: "52",
    adresse: "adgang fra Kærskiftevej 151-159, 2500 Valby",
    lat: "55.656896",
    lng: "12.486906",
    bemandet: "0"
  },
  {
    name: "Legepladsen i Vigerslevparken ved Lykkebovej/Engdals Alle",
    id: "53",
    adresse: "Vigerslevparken ved Lykkebovej/Engdals Alle, 2500 Valby",
    lat: "55.657864",
    lng: "12.47833",
    bemandet: "0"
  },
  {
    name: "Legepladsen i Vigerslevparken ved Engdraget 63",
    id: "54",
    adresse: "Vigerslevparken ved Engdraget 63/Mellemleddet, 2500 Valby",
    lat: "55.66701",
    lng: "12.47922",
    bemandet: "0"
  },
  {
    name: "Legepladsen i Vigerslevparken ved Stakhaven",
    id: "55",
    adresse: "Vigerslevparken ved Stakhaven, 2500 Valby",
    lat: "55.646006",
    lng: "12.49559",
    bemandet: "0"
  },
  {
    name: "Legepladsen på Vilhelm Thomsens Allé",
    id: "56",
    adresse: "Vilhelm Thomsens Allé 42, 2500 Valby",
    lat: "55.659506",
    lng: "12.505309",
    bemandet: "0"
  },
  {
    name: "Legepladsen på Hauser Plads",
    id: "57",
    adresse: "overfor Hauser Plads 16, 1127 København K",
    lat: "55.682761",
    lng: "12.57563",
    bemandet: "0"
  },
  {
    name: "Legepladsen på Israels Plads",
    id: "58",
    adresse: "ved Ahlefeldsgade, 1361 København K",
    lat: "55.682635",
    lng: "12.56851",
    bemandet: "0"
  },
  {
    name: "Legepladsen på Kastellet ved Folke Bernadottes Alle/Grønningen",
    id: "59",
    adresse:
      "nær indgangen til Kastellet ved Grønningen/Folke Bernadottes Alle, 2100 København Ø",
    lat: "55.692685",
    lng: "12.59168",
    bemandet: "0"
  },
  {
    name: "Legepladsen i Langelinieanlægget",
    id: "60",
    adresse: "Langelinie ved Langeliniepavillonen, 1259 København K",
    lat: "55.69101",
    lng: "12.59973",
    bemandet: "0"
  },
  {
    name: "Skaterpark i Fælledparken ved Edel Sauntes Alle",
    id: "73",
    adresse: "Edel Sauntes Allé, 2100 København Ø",
    lat: "55.699512",
    lng: "12.56295",
    bemandet: "0"
  },
  {
    name: "Legepladsen i Udbygade",
    id: "84",
    adresse: "Udbygade/Guldbergsgade/Sjællandsgade, 2200 København N",
    lat: "55.694439",
    lng: "12.5537",
    bemandet: "0"
  },
  {
    name: "Legepladsen på Nikolaj Plads",
    id: "61",
    adresse: "ud for Nikolaj Plads 5 - 11, 1067 København K",
    lat: "55.678818",
    lng: "12.582044",
    bemandet: "0"
  },
  {
    name: "Legepladsen på Sankt Annæ Plads",
    id: "62",
    adresse: "ud for Sankt Annæ Plads 13, 1250 København K",
    lat: "55.658415",
    lng: "12.578316",
    bemandet: "0"
  },
  {
    name: "Legepladsen i Ørstedsparken ved Nørre Farimagsgade / Ahlefeldtsgade",
    id: "63",
    adresse: "over for Ahlefeldtsgade 16, 1359 København K",
    lat: "55.682511",
    lng: "12.566444",
    bemandet: "0"
  },
  {
    name: "Legepladsen i Østre Anlæg ved Sølvtorvet",
    id: "64",
    adresse: "Østre Anlæg ved Sølvtorvet, 1371 København K",
    lat: "55.689526",
    lng: "12.576079",
    bemandet: "0"
  },
  {
    name: "Legepladsen på Christianshavns Vold - Panterens Bastion",
    id: "65",
    adresse: "Panterens Bastion, 1424 København K",
    lat: "55.669597",
    lng: "12.58856",
    bemandet: "0"
  },
  {
    name: "Aktivitetspladserne på Prags Boulevard",
    id: "66",
    adresse: "Prags Boulevard - aktivitetspladserne langs parken,  københavn S",
    lat: "55.667078",
    lng: "12.610942",
    bemandet: "0"
  },
  {
    name: "Legepladsen på Bopa Plads",
    id: "67",
    adresse: "Viborggade/Randersgade/Løgstørgade, 2100 København Ø",
    lat: "55.705244",
    lng: "12.581127",
    bemandet: "0"
  },
  {
    name: "Legepladsen i Classens Have",
    id: "68",
    adresse: "Classensgade over for Fiskedamsgade, 2100 København Ø",
    lat: "55.69815",
    lng: "12.589651",
    bemandet: "0"
  },
  {
    name: "Legepladsen i Fredens Park",
    id: "69",
    adresse:
      "Fredensgade ved hjørnet af Søpassagen og Ryesgade, 2100 København K",
    lat: "55.693375",
    lng: "12.56824",
    bemandet: "0"
  },
  {
    name: "Legepladsen i Folkets Park",
    id: "128",
    adresse: "Stengade 50, 2200 København N",
    lat: "55.6875",
    lng: "12.55509",
    bemandet: "0"
  },
  {
    name: "Legepladsen i BaNanna Park",
    id: "129",
    adresse: "Nannasgade 6, 2200 København N",
    lat: "55.70074",
    lng: "12.55115",
    bemandet: "0"
  },
  {
    name: "Legepladsen på Rødelandsvej",
    id: "130",
    adresse: "Rødelandsvej over for nummer 3, 2300 København S",
    lat: "55.641857",
    lng: "12.593725",
    bemandet: "0"
  },
  {
    name: "Legepladsen midt i Remiseparken ved højen",
    id: "133",
    adresse: "for enden af Knapmagerstien, 2300 København S",
    lat: "55.651148",
    lng: "12.594382",
    bemandet: "0"
  },
  {
    name: "Sansehaven i Fælledparken",
    id: "70",
    adresse: "ved Trianglen, 2100 København Ø",
    lat: "55.699844",
    lng: "12.57324",
    bemandet: "2"
  },
  {
    name: "Legepladsen i Fælledparken ved Serridslevvej nord",
    id: "71",
    adresse: "Borgmester Jensens Allé/Serridslevvej, 2100 København Ø",
    lat: "55.706827",
    lng: "12.57077",
    bemandet: "0"
  },
  {
    name: "Legepladsen i Fælledparken ved Serridslevvej syd",
    id: "72",
    adresse: "over for Serridslevvej 2, 2100 København Ø",
    lat: "55.705932",
    lng: "12.57258",
    bemandet: "0"
  },
  {
    name: "Legepladsen i Livjægergade ved Rosenvængets Alle",
    id: "74",
    adresse:
      "Hjørnet af Livjægergade/Næstvedgade/Rosenvængets Allé, 2100 København Ø",
    lat: "55.700241",
    lng: "12.585161",
    bemandet: "0"
  },
  {
    name: "Legepladsen på Silkeborg Plads",
    id: "75",
    adresse: "Silkeborg Plads/Horsensgade, 2100 København Ø",
    lat: "55.704933",
    lng: "12.585134",
    bemandet: "0"
  },
  {
    name: "Legepladsen på Århus Plads",
    id: "76",
    adresse: "Århus Plads 2 - 6, 2100 København Ø",
    lat: "55.70671",
    lng: "12.582967",
    bemandet: "0"
  },
  {
    name: "Legepladsen i Musholmgade",
    id: "77",
    adresse: "Musholmgade, 2100 København Ø",
    lat: "55.711585",
    lng: "12.574732",
    bemandet: "0"
  },
  {
    name: "Legepladsen i Svendborggade",
    id: "78",
    adresse: "Svendborggade/Nyborggade, 2100 København Ø",
    lat: "55.709547",
    lng: "12.583203",
    bemandet: "0"
  },
  {
    name: "Legepladsen på Blågårds Plads",
    id: "79",
    adresse: "Blågårds Plads, 2200 København N",
    lat: "55.686614",
    lng: "12.55672",
    bemandet: "0"
  },
  {
    name: "Legepladsen på Guldbergs Plads",
    id: "80",
    adresse: "mellem Guldbergsgade og Tibirkegade, 2200 København N",
    lat: "55.696803",
    lng: "12.55386",
    bemandet: "0"
  },
  {
    name: "Legepladsen i Hans Tavsens Park vest",
    id: "81",
    adresse: "Hans Tavsens Gade 40, 2200 København N",
    lat: "55.690044",
    lng: "12.546108",
    bemandet: "1"
  },
  {
    name: "Legepladsen i Ravnsborggade/Sankt Hans Gade",
    id: "82",
    adresse: "Ravnsborggade 23/Sankt Hans Gade 13, 2200 København N",
    lat: "55.689506",
    lng: "12.563244",
    bemandet: "0"
  },
  {
    name: "Legepladsen i Sankt Hans Gade",
    id: "83",
    adresse: "Sankt Hans Gade 3 - 5, 2200 København N",
    lat: "55.68971",
    lng: "12.56313",
    bemandet: "0"
  },
  {
    name: "Legepladsen i Sætersdalparken",
    id: "85",
    adresse: "over for Sætersdalgade 1-15, 2300 København S",
    lat: "55.656251",
    lng: "12.602364",
    bemandet: "0"
  },
  {
    name: "Legepladsen på Georginevej",
    id: "87",
    adresse: "Georginevej/Gyldenlakvej, 2300 København S",
    lat: "55.64456",
    lng: "12.6134",
    bemandet: "0"
  },
  {
    name: "Legepladsen på Højdevej",
    id: "88",
    adresse: "Højdevej/Kirkegårdsvej, 2300 København S",
    lat: "55.655174",
    lng: "12.613925",
    bemandet: "0"
  },
  {
    name: "Legepladsen på Tømmergrundens/Artillerivej",
    id: "93",
    adresse: "Artillerivej ud for Axel Heides Gade, 2300 København S",
    lat: "55.65992",
    lng: "12.573885",
    bemandet: "0"
  },
  {
    name: "Legepladsen på Kastrup Fort",
    id: "89",
    adresse: "Kastrup Fort ved fortets sydlige bastion, 2300 København S",
    lat: "55.647174",
    lng: "12.64045",
    bemandet: "0"
  },
  {
    name: "Legepladsen på Sundbyøster Plads",
    id: "90",
    adresse: "Amagerbrogade ved Smyrnavej, 2300 København S",
    lat: "55.651515",
    lng: "12.61289",
    bemandet: "2"
  },
  {
    name: "Legepladsen i Sundbyvester Park",
    id: "91",
    adresse: "ved Englandsvej/Skolemagerstien, 2300 København S",
    lat: "55.650806",
    lng: "12.601297",
    bemandet: "0"
  },
  {
    name: "Legepladsen på Sundbyvester Plads",
    id: "92",
    adresse: "Sundbyvestervej/Gyldenlakvej, 2300 København S",
    lat: "55.64644",
    lng: "12.61237",
    bemandet: "0"
  },
  {
    name: "Legepladsen i Havneparken syd",
    id: "94",
    adresse: "Islands Brygge over for Halfdansgade, 2300 København S",
    lat: "55.665456",
    lng: "12.574271",
    bemandet: "0"
  },
  {
    name: "Legepladsen på Hulgårds Plads",
    id: "95",
    adresse: "Hulgårds Plads 6, 2400 København NV",
    lat: "55.705038",
    lng: "12.522326",
    bemandet: "1"
  },
  {
    name: "Legepladsen i Kildevældsparken",
    id: "96",
    adresse: "Vognmandsmarken 69, 2100 København Ø",
    lat: "55.714371",
    lng: "12.565184",
    bemandet: "1"
  },
  {
    name: "Legepladsen på Nørager Plads",
    id: "97",
    adresse: "Nørager Plads 23, 2720 Vanløse",
    lat: "55.696088",
    lng: "12.474969",
    bemandet: "1"
  },
  {
    name: "Husum Bypark ",
    id: "144",
    adresse: " Frederikssundsvej 281-299 , 2700 Brønshøj",
    lat: "55.709698",
    lng: "12.47951",
    bemandet: "0"
  },
  {
    name: "Legepladsen i Lergravsparken",
    id: "98",
    adresse: "Lergravsvej 16, 2300 København S",
    lat: "55.662397",
    lng: "12.6183",
    bemandet: "1"
  },
  {
    name: "Legepladsen på Christianshavns Vold - Elefantens Bastion",
    id: "99",
    adresse: "Christianshavns Voldgade 36, 1424 København K",
    lat: "55.669633",
    lng: "12.59324",
    bemandet: "1"
  },
  {
    name: "Bemandet legeplads i Ørstedsparken ved Nørre Farimagsgade",
    id: "100",
    adresse: "Nørre Farimagsgade 2, 1364 København K",
    lat: "55.680593",
    lng: "12.56484",
    bemandet: "1"
  },
  {
    name: "Legepladsen i Østre Anlæg ved Malmøgade",
    id: "114",
    adresse: "Stockholmsgade 24, 2100 København Ø",
    lat: "55.69049",
    lng: "12.57878",
    bemandet: "0"
  },
  {
    name: "Byggelegepladsen i Remiseparken",
    id: "101",
    adresse: "Peder Lykkesvej 73 ved Peder Skrivers Sti, 2300 København S",
    lat: "55.652277",
    lng: "12.596557",
    bemandet: "1"
  },
  {
    name: "Legepladsen i Degnestavnen",
    id: "102",
    adresse: "Degnestavnen 20, 2400 København NV",
    lat: "55.710473",
    lng: "12.525143",
    bemandet: "1"
  },
  {
    name: "Naturlegepladsen i Valbyparken",
    id: "103",
    adresse: "Hammelstrupvej 41, 2450 København SV",
    lat: "55.644416",
    lng: "12.519768",
    bemandet: "2"
  },
  {
    name: "Legepladsen på Gammelvagt",
    id: "104",
    adresse: "Gammelvagt 5, 1312 København K",
    lat: "55.687718",
    lng: "12.585606",
    bemandet: "0"
  },
  {
    name: "Den indendørs legeplads i Blegdamsremisen",
    id: "105",
    adresse: "Blegdamsvej 132 A, 2100 København Ø",
    lat: "55.698766",
    lng: "12.576527",
    bemandet: "1"
  },
  {
    name: "Legepladsen i Meinungsgade",
    id: "106",
    adresse: "Meinungsgade 13, 2200 København N",
    lat: "55.692575",
    lng: "12.553771",
    bemandet: "0"
  },
  {
    name: "Legepladsen i Husumparken",
    id: "107",
    adresse: "Nordrupvej 16, 2700 Brønshøj",
    lat: "55.704022",
    lng: "12.47075",
    bemandet: "1"
  },
  {
    name: "Legepladsen på Bispeengen",
    id: "108",
    adresse: "Hillerødgade 23 B adgang via Lundtoftegade 65, 2200 København N",
    lat: "55.695733",
    lng: "12.53609",
    bemandet: "1"
  },
  {
    name: "Legepladsen i Hans Tavsens Park øst",
    id: "111",
    adresse: "Hans Tavsens Gade 40, 2200 København N",
    lat: "55.688361",
    lng: "12.54963",
    bemandet: "1"
  },
  {
    name: "Legepladsen i Nørrebroparken",
    id: "112",
    adresse: "Stefansgade 28-30, 2200 København N",
    lat: "55.694741",
    lng: "12.54218",
    bemandet: "1"
  },
  {
    name: "Bondegårdslegepladsen i Remiseparken",
    id: "109",
    adresse: "Peder Lykkes Vej 71-73, 2300 København S",
    lat: "55.653024",
    lng: "12.598009",
    bemandet: "1"
  },
  {
    name: "Legepladsen ved Kirsebærhaven ",
    id: "110",
    adresse: "Kirsebærhaven 14, 2500 Valby",
    lat: "55.649753",
    lng: "12.502828",
    bemandet: "0"
  },
  {
    name: "Byggelegepladsen på Bredegrund",
    id: "113",
    adresse: "Bredegrund 8, 2300 København S",
    lat: "55.658687",
    lng: "12.613866",
    bemandet: "1"
  },
  {
    name: "Legepladsen i Skydebanehaven",
    id: "115",
    adresse: "Absalonsgade 12, 1658 København V",
    lat: "55.670258",
    lng: "12.553682",
    bemandet: "1"
  },
  {
    name: "Legepladsen i Wesselsgade",
    id: "116",
    adresse: "Wesselsgade 12, 2200 København N",
    lat: "55.685876",
    lng: "12.559787",
    bemandet: "1"
  },
  {
    name: "Legepladsen i Enghaveparken",
    id: "120",
    adresse: "Ejderstedgade 1, 1761 København V",
    lat: "55.667729",
    lng: "12.54162",
    bemandet: "1"
  },
  {
    name: "Trafiklegepladsen i Fælledparken",
    id: "117",
    adresse: "Gunnar Nu Hansens Plads 10, 2100 København Ø",
    lat: "55.70485",
    lng: "12.57048",
    bemandet: "1"
  },
  {
    name: "Legepladsen Elba i Filipsparken",
    id: "119",
    adresse: "Parmagade 45, 2300 København S",
    lat: "55.654245",
    lng: "12.61825",
    bemandet: "1"
  },
  {
    name: "Legepladsen i Gunløgsgade",
    id: "121",
    adresse: "Gunløgsgade 26, 2300 København S",
    lat: "55.664657",
    lng: "12.579571",
    bemandet: "1"
  },
  {
    name: "Tårnlegeplads - Fælledparken1",
    id: "122",
    adresse: "Frederik V's Vej 4, 2100 København Ø",
    lat: "55.697486",
    lng: "12.56927",
    bemandet: "1"
  },
  {
    name: "Legepladsen i Havneparken nord",
    id: "123",
    adresse: "Islands Brygge over for Vestmannagade, 2300 København S",
    lat: "55.668823",
    lng: "12.578723",
    bemandet: "0"
  },
  {
    name: "Legepladsen på Sønder Boulevard",
    id: "125",
    adresse: "Sønder Boulevard ud for nr. 103, 1720 København V",
    lat: "55.664364",
    lng: "12.54557",
    bemandet: "0"
  }
];

export default playgrounds;
