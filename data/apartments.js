const attractions = [
    {
        id: 1,
        image:
            "https://images.unsplash.com/photo-1594157722122-8c8caadef6cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        name: "Clerigos Tower",
    },
    {
        id: 2,
        image:
            "https://images.unsplash.com/photo-1574866609688-c2f9ddcdce2f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
        name: "Music House",
    },
    {
        id: 3,
        image:
            "https://images.unsplash.com/photo-1474692295473-66ba4d54e0d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1576&q=80",
        name: "Oporto Coliseum",
    },
    {
        id: 4,
        image:
            "https://images.unsplash.com/photo-1513735492246-483525079686?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80",
        name: "D. Luís Bridge",
    },
    {
        id: 5,
        image:
            "https://images.unsplash.com/photo-1583084004995-8502ab326f8e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3155&q=80",
        name: "Douro River",
    },
];

const photos = [
    {
        brand: "opc",
        unity: "santacatarina",
        id: 1,
        link: "https://res.cloudinary.com/oporto-/image/upload/c_scale,w_600/v1622726881/Oporto%20Collection/Sta%20Catarina%20Pool/DSC_8918trat_hem6kz.jpg",
        tag: "garden",
    },
    {
        brand: "opc",
        unity: "santacatarina",
        link: "https://res.cloudinary.com/oporto-/image/upload/c_scale,w_600/v1622726881/Oporto%20Collection/Sta%20Catarina%20Pool/DSC_6795TRAT-_1_ey6gfm.jpg",
        tag: "breakfast",
    },
    {
        brand: "opc",
        unity: "santacatarina",
        link: "https://res.cloudinary.com/oporto-/image/upload/c_scale,w_600/v1622726882/Oporto%20Collection/Sta%20Catarina%20Pool/DSC_8914trat_m7gwaj.jpg",
        tag: "pool",
    },
    {
        brand: "opc",
        unity: "santacatarina",
        link: "https://res.cloudinary.com/oporto-/image/upload/c_scale,w_600/v1622726880/Oporto%20Collection/Sta%20Catarina%20Pool/DSC_8414_15_16_17_18_19_20-trat2_xhyrlf.jpg",
        tag: "gym",
    },
    {
        brand: "opc",
        unity: "santacatarina",
        link: "https://res.cloudinary.com/oporto-/image/upload/c_scale,w_600/v1622726880/Oporto%20Collection/Sta%20Catarina%20Pool/DSC_8432_3_4_5_6trat2_uvujcw.jpg",
        tag: "gym",
    },
    {
        brand: "opc",
        unity: "santacatarina",
        link: "https://res.cloudinary.com/oporto-/image/upload/c_scale,w_600/v1622726879/Oporto%20Collection/Sta%20Catarina%20Pool/DSC_7832-TRAT-2880px_a9owwg.jpg",
        tag: "living room",
    },
    {
        brand: "opc",
        unity: "santacatarina",
        link: "https://res.cloudinary.com/oporto-/image/upload/c_scale,w_600/v1622726879/Oporto%20Collection/Sta%20Catarina%20Pool/DSC_7785And12more-TRAT-2880px-_1_bdknc5.jpg",
        tag: "apartment",
    },
    {
        brand: "opc",
        unity: "santacatarina",
        link: "https://res.cloudinary.com/oporto-/image/upload/c_scale,w_600/v1622726879/Oporto%20Collection/Sta%20Catarina%20Pool/DSC_8933trat_atjtzs.jpg",
        tag: "garden",
    },
    {
        brand: "opc",
        unity: "santacatarina",
        link: "https://res.cloudinary.com/oporto-/image/upload/c_scale,w_600/v1622726879/Oporto%20Collection/Sta%20Catarina%20Pool/DSC_7566And9more-TRAT-2880px_busify.jpg",
        tag: "bedroom",
    },
    {
        brand: "opc",
        unity: "santacatarina",
        link: "https://res.cloudinary.com/oporto-/image/upload/c_scale,w_600/v1622726878/Oporto%20Collection/Sta%20Catarina%20Pool/DSC_6799TRAT-_1_f4bfh7.jpg",
        tag: "breakfast",
    },
    {
        brand: "opc",
        unity: "santacatarina",
        link: "https://res.cloudinary.com/oporto-/image/upload/c_scale,w_600/v1622726878/Oporto%20Collection/Sta%20Catarina%20Pool/DSC_8963trat_jkzz9t.jpg",
        tag: "pool",
    },
    {
        brand: "opc",
        unity: "santacatarina",
        link: "https://res.cloudinary.com/oporto-/image/upload/c_scale,w_600/v1622726878/Oporto%20Collection/Sta%20Catarina%20Pool/DSC_7674And11more-TRAT-2880px-_2_ohh5l5.jpg",
        tag: "apartment",
    },

    {
        brand: "opc",
        unity: "mouzinho",
        link: "https://res.cloudinary.com/oporto-/image/upload/c_scale,w_600/v1622726749/Oporto%20Collection/Mouzinho/DSC_0040And8moreTRAT_pk8dqo.jpg",
        tag: "apartment",
    },
    {
        brand: "opc",
        unity: "mouzinho",
        link: "https://res.cloudinary.com/oporto-/image/upload/c_scale,w_600/v1622726750/Oporto%20Collection/Mouzinho/DSC_0398_399_400_401_402_403TRAT_t8grls.jpg",
        tag: "apartment",
    },
    {
        brand: "opc",
        unity: "mouzinho",
        link: "https://res.cloudinary.com/oporto-/image/upload/c_scale,w_600/v1622726749/Oporto%20Collection/Mouzinho/DSC_0197_198_199_200_201_202_203TRAT_sbbdwl.jpg",
        tag: "apartment",
    },
    {
        brand: "opc",
        unity: "mouzinho",
        link: "https://res.cloudinary.com/oporto-/image/upload/c_scale,w_600/v1622726750/Oporto%20Collection/Mouzinho/DSC_0532And8moreTRAT_mw2c2y.jpg",
        tag: "bedroom",
    },
    {
        brand: "opc",
        unity: "mouzinho",
        link: "https://res.cloudinary.com/oporto-/image/upload/c_scale,w_600/v1622726750/Oporto%20Collection/Mouzinho/DSC_2018TRAT_mevmpl.jpg",
        tag: "breakfast",
    },
    {
        brand: "opc",
        unity: "mouzinho",
        link: "https://res.cloudinary.com/oporto-/image/upload/c_scale,w_600/v1622726749/Oporto%20Collection/Mouzinho/DSC_2076TRAT_dffngm.jpg",
        tag: "breakfast",
    },
    {
        brand: "opc",
        unity: "mouzinho",
        link: "https://res.cloudinary.com/oporto-/image/upload/c_scale,w_600/v1622726749/Oporto%20Collection/Mouzinho/DSC_1491TRAT_orvowf.jpg",
        tag: "street view",
    },
    {
        brand: "opc",
        unity: "mouzinho",
        link: "https://res.cloudinary.com/oporto-/image/upload/c_scale,w_600/v1622726751/Oporto%20Collection/Mouzinho/DSC_1958TRAT_aoeel1.jpg",
        tag: "entrance",
    },
    {
        brand: "opc",
        unity: "rosario",
        link: "https://res.cloudinary.com/oporto-/image/upload/c_scale,w_600/v1622726591/Oporto%20Collection/Rosario/DSC_3707And11more_aedlnk.jpg",
        tag: "suite",
    },
    {
        brand: "opc",
        unity: "rosario",
        link: "https://res.cloudinary.com/oporto-/image/upload/c_scale,w_600/v1622726590/Oporto%20Collection/Rosario/037-GuestHouseADonaAurora-RuaDoRosario227-Cedofeita-SMALL_ktrjjy.jpg",
        tag: "suite",
    },
    {
        brand: "opc",
        unity: "rosario",
        link: "https://res.cloudinary.com/oporto-/image/upload/c_scale,w_600/v1622726590/Oporto%20Collection/Rosario/DSC_4190And11more_oxtrp6.jpg",
        tag: "suite",
    },
    {
        brand: "opc",
        unity: "rosario",
        link: "https://res.cloudinary.com/oporto-/image/upload/c_scale,w_600/v1622726590/Oporto%20Collection/Rosario/DSC_5024And11more_yjm2iq.jpg",
        tag: "lounge",
    },
    {
        brand: "opc",
        unity: "rosario",
        link: "https://res.cloudinary.com/oporto-/image/upload/c_scale,w_600/v1622726590/Oporto%20Collection/Rosario/DSC_5100_2_4_6_jionk2.jpg",
        tag: "kitchen",
    },
    {
        brand: "opc",
        unity: "rosario",
        link: "https://res.cloudinary.com/oporto-/image/upload/c_scale,w_600/v1622726591/Oporto%20Collection/Rosario/012-GuestHouseADonaAurora-RuaDoRosario227-Cedofeita-SMALL_mdilcp.jpg",
        tag: "breakfast",
    },
    {
        brand: "opc",
        unity: "rosario",
        link: "https://res.cloudinary.com/oporto-/image/upload/c_scale,w_600/v1622726591/Oporto%20Collection/Rosario/008-GuestHouseADonaAurora-RuaDoRosario227-Cedofeita-SMALL_znqckx.jpg",
        tag: "breakfast",
    },
    {
        brand: "opc",
        unity: "rosario",
        link: "https://res.cloudinary.com/oporto-/image/upload/c_scale,w_600/v1622726590/Oporto%20Collection/Rosario/011-GuestHouseADonaAurora-RuaDoRosario227-Cedofeita-SMALL_r3snfr.jpg",
        tag: "garden",
    },
    {
        brand: "opc",
        unity: "rosario",
        link: "https://res.cloudinary.com/oporto-/image/upload/c_scale,w_600/v1622726590/Oporto%20Collection/Rosario/010-GuestHouseADonaAurora-RuaDoRosario227-Cedofeita-SMALL_jihlqj.jpg",
        tag: "garden",
    },
    {
        brand: "opc",
        unity: "fervencapalace",
        link: "https://res.cloudinary.com/oporto-/image/upload/c_scale,w_600/v1622732979/Oporto%20Collection/Fervenca%20Palace%20Gaia/Captura-de-ecra%CC%83-2021-06-03_-a%CC%80s-14.42.20_dy9evo.jpg",
        tag: "building",
    },
    {
        brand: "opc",
        unity: "fervencapalace",
        link: "https://res.cloudinary.com/oporto-/image/upload/c_scale,w_600/v1622732979/Oporto%20Collection/Fervenca%20Palace%20Gaia/Captura-de-ecra%CC%83-2021-06-03_-a%CC%80s-14.41.42_mgyqca.jpg",
        tag: "view",
    },
    {
        brand: "opc",
        unity: "fervencapalace",
        link: "https://res.cloudinary.com/oporto-/image/upload/c_scale,w_600/v1622732979/Oporto%20Collection/Fervenca%20Palace%20Gaia/FERVENCA_ANEXOS_01_-_1_etz89u.jpg",
        tag: "building",
    },
    {
        brand: "opc",
        unity: "fervencapalace",
        link: "https://res.cloudinary.com/oporto-/image/upload/c_scale,w_600/v1622732978/Oporto%20Collection/Fervenca%20Palace%20Gaia/FERVENCA_TARDOZ_02_-_1_rz1huh.jpg",
        tag: "building",
    },
    {
        brand: "opc",
        unity: "fervencapalace",
        link: "https://res.cloudinary.com/oporto-/image/upload/c_scale,w_600/v1622732978/Oporto%20Collection/Fervenca%20Palace%20Gaia/P2_APT_DIR_02_-_1_xg03a5.jpg",
        tag: "apartment",
    },
    {
        brand: "opc",
        unity: "fervencapalace",
        link: "https://res.cloudinary.com/oporto-/image/upload/c_scale,w_600/v1622732978/Oporto%20Collection/Fervenca%20Palace%20Gaia/P3_APT_DIR_00_-_1_co5mgp.jpg",
        tag: "apartment",
    },
    {
        brand: "opc",
        unity: "fervencapalace",
        link: "https://res.cloudinary.com/oporto-/image/upload/c_scale,w_600/v1622732978/Oporto%20Collection/Fervenca%20Palace%20Gaia/P0_APT_DIR_02_-_1_onedpp.jpg",
        tag: "bedroom",
    },
    {
        brand: "opc",
        unity: "fervencapalace",
        link: "https://res.cloudinary.com/oporto-/image/upload/c_scale,w_600/v1622732978/Oporto%20Collection/Fervenca%20Palace%20Gaia/FERVENC%CC%A7A_VARANDA-_1_eulzjc.jpg",
        tag: "view",
    },
    {
        brand: "opc",
        unity: "hotelcastelolive",
        link: "https://res.cloudinary.com/oporto-/image/upload/c_scale,w_600/v1622735020/Oporto%20Collection/Hotel%20Castelos%20-live/Captura-de-ecra%CC%83-2021-06-03_-a%CC%80s-16.39.42_kgml3l.jpg",
        tag: "apartment",
    },
    {
        brand: "opc",
        unity: "hotelcastelolive",
        link: "https://res.cloudinary.com/oporto-/image/upload/c_scale,w_600/v1622735020/Oporto%20Collection/Hotel%20Castelos%20-live/Captura-de-ecra%CC%83-2021-06-03_-a%CC%80s-16.40.06_eafcjv.jpg",
        tag: "coliving",
    },
    {
        brand: "opc",
        unity: "hotelcastelolive",
        link: "https://res.cloudinary.com/oporto-/image/upload/c_scale,w_600/v1622735021/Oporto%20Collection/Hotel%20Castelos%20-live/Captura-de-ecra%CC%83-2021-06-03_-a%CC%80s-16.39.13_guqddn.jpg",
        tag: "gym",
    },
    {
        brand: "opc",
        unity: "hotelcastelolive",
        link: "https://res.cloudinary.com/oporto-/image/upload/c_scale,w_600/v1622735020/Oporto%20Collection/Hotel%20Castelos%20-live/Captura-de-ecra%CC%83-2021-06-03_-a%CC%80s-16.39.53_jkxekf.jpg",
        tag: "laundry",
    },
    {
        brand: "opc",
        unity: "stacatarinaresidence",
        link: "https://res.cloudinary.com/oporto-/image/upload/c_scale,w_600/v1622734678/Oporto%20Collection/Sta%20Catarina%20Residence/residence_qsjdad.jpg",
        tag: "apartment",
    },
    {
        brand: "opc",
        unity: "marquesa",
        link: "https://res.cloudinary.com/oporto-/image/upload/c_scale,w_600/v1622734720/Oporto%20Collection/Marquesa/Captura-de-ecra%CC%83-2021-06-03_-a%CC%80s-16.33.49_ygqnz3.jpg",
        tag: "building",
    },
    {
        brand: "opc",
        unity: "marquesa",
        link: "https://res.cloudinary.com/oporto-/image/upload/c_scale,w_600/v1622734720/Oporto%20Collection/Marquesa/Captura-de-ecra%CC%83-2021-06-03_-a%CC%80s-16.34.16_tpon4g.jpg",
        tag: "building",
    },
    {
        brand: "opc",
        unity: "marquesa",
        link: "https://res.cloudinary.com/oporto-/image/upload/c_scale,w_600/v1622734720/Oporto%20Collection/Marquesa/Captura-de-ecra%CC%83-2021-06-03_-a%CC%80s-16.34.03_a7cphx.jpg",
        tag: "building",
    },
];

const units = [
    {
        name: "Santa Catarina <br/> Pool & Fitness",
        rating: 9.37,
        location: "Clerigos Tower . City Center",
        resume:
            "Located within walking distance of the main tourist attractions, it presents itself as a superior quality unit, which highlights its outdoor pool, a magnificent garden, large terraces, and a gym.",
        fulltext: [
            "Located within walking distance of the main tourist attractions of the city of Porto, it presents itself as a superior quality unit, which highlights its outdoor pool, a magnificent garden, large terraces, and a gym.",
            "Carefully and elegantly decorated where comfort is present in every detail, our apartments are distinguished by their generous areas and brightness."
        ],
        amenities: ['pool', 'gym', 'cleaning', 'breakfast'],
        opening: "open",
        photos: photos.filter(e => e.unity == "santacatarina"),
        url: "https://opc-santacatarinapoolandfitness.com/",
        map: "https://goo.gl/maps/ZNARYNg3Xs4rwJjo6",
        address: "Rua Santa Catarina 1219, União de Freguesias do Centro, Porto",

    },
    {
        name: "Mouzinho Apartments",
        rating: 8.72,
        location: "Clerigos Tower . City Center",
        resume:
            "Just 300 meters from the riverside, on the charming Rua Mouzinho da Silveira, a short walk from the main tourist spots in the city.",
        fulltext: [
            "The Oporto Collection - Mouzinho da Silveira Apartments is located in the city center of Porto, a few meters walk from the riverside area and the main tourist attractions, such as Torre dos Clérigos, Palácio da Bolsa, and the iconic Livraria Lello. The traditional Rua das Flores, Avenida dos Aliados is within walking distance.",
            "All apartments have city views, air conditioning, a living room, 4K TV, Bluetooth speaker with Google Assistant, free Wi-Fi, and a mobile phone for free use during your stay.",
            "They also have a kitchenette where guests can prepare their meals. They also have the possibility to enjoy a pleasant continental breakfast in the apartment.",
            "The property offers a reception service during the day, daily cleaning, luggage storage, and a lift."
        ],
        amenities: ['kitnette', 'furnished', 'cleaning', 'breakfast'],
        opening: "open",
        map: "https://goo.gl/maps/ZNARYNg3Xs4rwJjo6",
        photos: photos.filter(e => e.unity == "mouzinho"),
        address: "Rua Mouzinho da Silveira, 157 - 167 , União de Freguesias do Centro, Porto",
    },
    {
        name: "Rosário | Luxury Suites",
        rating: 8.72,
        location: "Clerigos Tower . City Center",
        resume:
            "Just 300 meters from the riverside, on the charming Rua Mouzinho da Silveira, a short walk from the main tourist spots in the city.",
        fulltext: [
            "Oporto Collection Rosário is a typical 19th century bourgeois house, located in the artistic zone of the city, with art galleries, creative studios, restaurants and alternative shops.",
            "The Family that originally built it was undoubtedly sensitive to its architectural shape and a keen sense of solidity and elegance, which can still be seen today in the original granite walls, high ceilings, riga staircase and wild pine wood floors. It is the natural light that guides our guests to the garden of camellias. In this green, secret oasis, with ancient trees and birds, life unfolds peacefully.",
            "The fact that we only have six rooms, makes Oporto Collection Rosário an exclusive, peaceful and intimate place."
        ],
        amenities: ['lounge', 'furnished', 'cleaning', 'breakfast'],
        opening: "open",
        map: "https://goo.gl/maps/ZNARYNg3Xs4rwJjo6",
        photos: photos.filter(e => e.unity == "rosario"),
        address: "227 Rua do Rosario, União de Freguesias do Centro, Porto",
    },
    {
        name: "Hotel dos Castelos",
        rating: false,
        location: "Clerigos Tower . City Center",
        resume:
            "Just 300 meters from the riverside, on the charming Rua Mouzinho da Silveira, a short walk from the main tourist spots in the city.",
        features: "Co-working,  Lounge, Kitnette, Breakfast ",
        opening: "August 2021",
        map: "https://goo.gl/maps/ZNARYNg3Xs4rwJjo6",
        photos: photos.filter(e => e.unity == "hotelcastelolive"),
    },
    {
        name: "Santa Catarina Residence",
        rating: false,
        location: "Clerigos Tower . City Center",
        resume:
            "Just 300 meters from the riverside, on the charming Rua Mouzinho da Silveira, a short walk from the main tourist spots in the city.",
        features: "Kitnette, Furnished, Housekeeping, Breakfast",
        opening: "August 2021",
        photos: photos.filter(e => e.unity == "stacatarinaresidence"),
    },
    {
        name: "Fervença Palace Gaia",
        rating: false,
        location: "Clerigos Tower . City Center",
        resume:
            "Just 300 meters from the riverside, on the charming Rua Mouzinho da Silveira, a short walk from the main tourist spots in the city.",
        features: "Kitnette, Furnished, Housekeeping, Breakfast",
        opening: "June 2022",
        photos: photos.filter(e => e.unity == "fervencapalace"),
    },
    {
        name: "Marquesa Palace Lux Apartmnets",
        rating: false,
        location: "Clerigos Tower . City Center",
        resume:
            "Just 300 meters from the riverside, on the charming Rua Mouzinho da Silveira, a short walk from the main tourist spots in the city.",
        features: "Kitnette, Furnished, Housekeeping, Breakfast",
        opening: "2023",
        photos: photos.filter(e => e.unity == "marquesa"),
    },
]

export default { units, attractions, photos };
