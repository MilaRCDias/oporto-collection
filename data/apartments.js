import { carousel } from "./carousel.js";
/* import { photos } from './photos.js' */

const units = [
  {
    name: "Santa Catarina Pool & Fitness",
    key: "stacatarinapool",
    fullname: { title: "Santa Catarina", subtitle: "Pool & Fitness" },
    fulltext: "descriptions.santacatarina",
    amenities: ["pool", "gym", "cleaning", "breakfast", "kitchenette"],
    opening: "open",
    status: "open",
    thumbnail: carousel.filter((e) => e.unity == "stacatarinapool")[14],
    photos: carousel.filter((e) => e.unity == "stacatarinapool"),
    url: "https://opc-santacatarinapoolandfitness.com/",
    bookEngineUrl: "https://app.ynnovbooking.com/booking/?l=en&apikey=M47SgVH8SkXazFFGd2R1x98kankxHXDP",
    map: "https://goo.gl/maps/ZNARYNg3Xs4rwJjo6",
    address: "Rua Santa Catarina 1219, União de Freguesias do Centro, Porto",
    cityImage: {
      vertical: false,
      address:
        "https://images.unsplash.com/photo-1581371945115-efd84739c065?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
    },
  },
  {
    name: "Mouzinho Apartments",
    key: "mouzinho",
    fullname: { title: "Mouzinho", subtitle: "Apartments" },
    fulltext: "descriptions.mouzinho",
    amenities: ["kitchenette", "furnished", "cleaning", "breakfast"],
    opening: "open",
    status: "open",
    thumbnail: {
      unity: "mouzinho",
      link: "mouzinho/main.jpg",
    },
    photos: carousel.filter((e) => e.unity == "mouzinho"),
    url: "https://opc-mouzinhodasilveira.com/",
    bookEngineUrl: "https://app.ynnovbooking.com/booking/?l=en&apikey=2IZ7rHodJ2jKozt471bFD3hhai71VCU6",
    map: "https://goo.gl/maps/ZNARYNg3Xs4rwJjo6",
    address:
      "Rua Mouzinho da Silveira, 157 - 167 , União de Freguesias do Centro, Porto",
    cityImage: {
      vertical: true,
      address:
        "https://images.unsplash.com/photo-1588505910760-a8e9a240dc95?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80",
    },
  },
  {
    name: "Rosário Luxury Suites",
    fullname: { title: "Rosário", subtitle: "Luxury Suites" },
    key: "rosario",
    fulltext: "descriptions.rosario",
    amenities: ["furnished", "cleaning", "breakfast"],
    opening: "open",
    status: "open",
    thumbnail: carousel.filter((e) => e.unity == "rosario")[8],
    photos: carousel.filter((e) => e.unity == "rosario"),
    url: "https://opc-rosario.com/",
    bookEngineUrl: "https://app.ynnovbooking.com/booking/?l=en&apikey=0TutZHDQSIiTmJrF5KLW298Ohx0U3Fu2",
    map: "https://goo.gl/maps/ZNARYNg3Xs4rwJjo6",
    address: "227 Rua do Rosario, União de Freguesias do Centro, Porto",
    cityImage: {
      vertical: false,
      address: "city/jardins-palacio-de-cristal.jpg",
    },
  },
  /*   {
      name: "Hotel dos Castêlos",
      fullname: { title: "Hotel dos Castêlos", subtitle: "Live . Work . Sports" },
      key: "castelos",
      fulltext: "descriptions.castelos",
      features: ["co-working", "lounge", "kitchenette", "breakfast"],
      opening: "openings.august21",
      status: false,
      map: "https://goo.gl/maps/ZNARYNg3Xs4rwJjo6",
      thumbnail: carousel.filter((e) => e.unity == "castelos")[0],
      photos: carousel.filter((e) => e.unity == "castelos"),
      cityImage: {
        vertical: false,
        address:
          "https://images.unsplash.com/photo-1581371945115-efd84739c065?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
      },
    }, */
  {
    name: "Santa Catarina Stylish Apartments",
    fullname: { title: "Santa Catarina", subtitle: "Stylish Apartments" },
    key: "stacatarinaresidence",
    fulltext: "descriptions.stacatarinaresidence",
    features: ["breakfast", "furnished", "kitchenette", "clenaning"],
    opening: "openings.november21",
    status: false,
    thumbnail: carousel.filter((e) => e.unity == "stacatarinaresidence")[0],
    photos: carousel.filter((e) => e.unity == "stacatarinaresidence"),
    cityImage: {
      vertical: false,
      address:
        "https://images.unsplash.com/photo-1606851809718-d0ab589a9468?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80",
    },
  },
  {
    name: "Casa da Marechal",
    fullname: { title: "Casa da Marechal", subtitle: "Boutique Suites" },
    key: "marechal",
    fulltext: "descriptions.marechal",
    features: ["breakfast", "furnished", "kitchenette", "clenaning"],
    opening: "openings.january22",
    status: false,
    thumbnail: carousel.filter((e) => e.unity == "marechal")[0],
    photos: carousel.filter((e) => e.unity == "marechal"),
    cityImage: {
      vertical: false,
      address:
        "https://images.unsplash.com/photo-1606851809718-d0ab589a9468?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80",
    },
  },
  {
    name: "Palácio da Fervença",
    fullname: { title: "Palácio da Fervença", subtitle: "Luxury Apartments" },
    key: "fervenca",
    fulltext: "descriptions.fervenca",
    features: ["breakfast", "furnished", "kitchenette", "clenaning"],
    opening: "openings.june22",
    status: false,
    thumbnail: carousel.filter((e) => e.unity == "fervenca")[0],
    photos: carousel.filter((e) => e.unity == "fervenca"),
    cityImage: {
      vertical: false,
      address:
        "https://images.unsplash.com/photo-1606851809718-d0ab589a9468?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80",
    },
  },
  {
    name: "Marquesa Palace Luxury Apartments",
    fullname: { title: "Marquesa Palace", subtitle: "Luxury Apartments" },
    key: "marquesa",
    fulltext: "descriptions.marquesa",
    features: ["breakfast", "furnished", "kitchenette", "clenaning"],
    opening: "openings.start2023",
    status: false,
    thumbnail: carousel.filter((e) => e.unity == "marquesa")[0],
    photos: carousel.filter((e) => e.unity == "marquesa"),
    cityImage: {
      vertical: false,
      address:
        "https://images.unsplash.com/photo-1606851809718-d0ab589a9468?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80",
    },
  },
];

export default { units };
