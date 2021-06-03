const attractions = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1594157722122-8c8caadef6cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        name: "Clerigos Tower"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1574866609688-c2f9ddcdce2f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
        name: "Music House"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1474692295473-66ba4d54e0d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1576&q=80",
        name: "Oporto Coliseum"
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1513735492246-483525079686?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80",
        name: "D. Luís Bridge"
    },
    {
        id: 5,
        image: "https://images.unsplash.com/photo-1583084004995-8502ab326f8e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3155&q=80",
        name: "Douro River"
    }
]

const newphotos = [
    {
        brand: "opc",
        unity: "santacatarina",
        id: 1,
        link: "https://static.wixstatic.com/media/b1e563_8bbd15e785dd454993d8f70da2b9a9ad~mv2.png/v1/fill/w_798,h_1322,al_c,q_90,usm_0.66_1.00_0.01/b1e563_8bbd15e785dd454993d8f70da2b9a9ad~mv2.webp",
        tag: "garden"
    }

]

const photos = {
    book: "https://static.wixstatic.com/media/b1e563_00358c31c0cc4edc945f97e5f1d439d2~mv2.png/v1/fill/w_336,h_120,al_c,q_85,usm_0.66_1.00_0.01/livro_reclamacoes-500x-207-w.webp",
    cleanSafe:
        "http://oportostreetaldas.com/wp-content/uploads/2021/02/Clean-Safe-DGS-logo-1.png",
    impactoCapital:
        "https://static.wixstatic.com/media/b1e563_e44e967d8f9d41cfa771eae8718e3f96~mv2.png/v1/crop/x_141,y_106,w_554,h_381/fill/w_264,h_200,al_c,q_85,usm_0.66_1.00_0.01/Logo-IC_cores.webp",
    santacatarina:
        "https://static.wixstatic.com/media/b1e563_8bbd15e785dd454993d8f70da2b9a9ad~mv2.png/v1/fill/w_798,h_1322,al_c,q_90,usm_0.66_1.00_0.01/b1e563_8bbd15e785dd454993d8f70da2b9a9ad~mv2.webp",
    rio:
        "https://static.wixstatic.com/media/b1e563_20162dcfe2414f3387ebff56899519ff~mv2.jpg/v1/fill/w_786,h_1322,al_c,q_85,usm_0.66_1.00_0.01/b1e563_20162dcfe2414f3387ebff56899519ff~mv2.webp",
    mouzinho:
        "https://static.wixstatic.com/media/b1e563_8bf0f040b5bb4cd88f5d3f44c4516d0d~mv2.jpg/v1/fill/w_2834,h_1260,al_b,q_90,usm_0.66_1.00_0.01/b1e563_8bf0f040b5bb4cd88f5d3f44c4516d0d~mv2.webp",
    poolFitnessRoom:
        "https://static.wixstatic.com/media/b1e563_39dcc02a8f304177a3613e05f6440750~mv2.jpg/v1/fill/w_1440,h_1014,al_c,q_85/b1e563_39dcc02a8f304177a3613e05f6440750~mv2.webp",
    poolFitnessRoom2:
        "https://static.wixstatic.com/media/b1e563_4818026213ca45949a19eab4ccfab961~mv2.jpg/v1/fill/w_1440,h_1014,al_c,q_85/b1e563_4818026213ca45949a19eab4ccfab961~mv2.webp",
    poolFitnessBedroom:
        "https://static.wixstatic.com/media/b1e563_8a971ffbd30948c3b194f51ecf9bc9b0~mv2.png/v1/fill/w_1996,h_1403,al_c,q_95,usm_0.66_1.00_0.01/b1e563_8a971ffbd30948c3b194f51ecf9bc9b0~mv2.webp",
    poolFitnessPool:
        "https://static.wixstatic.com/media/b1e563_ac7e6606517a4ce885cf43538e883aed~mv2.png/v1/fill/w_2010,h_1404,al_c,q_95,usm_0.66_1.00_0.01/b1e563_ac7e6606517a4ce885cf43538e883aed~mv2.webp",
    poolFitnessReception:
        "https://static.wixstatic.com/media/b1e563_1708b1c4e71d42b984a2510a703bb19b~mv2.jpg/v1/fill/w_1996,h_1403,al_c,q_90,usm_0.66_1.00_0.01/b1e563_1708b1c4e71d42b984a2510a703bb19b~mv2.webp",
    poolFitnessLiving:
        "https://static.wixstatic.com/media/b1e563_d405d84060d74dde8fa7bb60669e0dbd~mv2.png/v1/fill/w_1996,h_1403,al_c,q_95,usm_0.66_1.00_0.01/b1e563_d405d84060d74dde8fa7bb60669e0dbd~mv2.webp",
    poolFitnessGym: "https://static.wixstatic.com/media/b1e563_e185f99406bc4d16acef1178a1e72ad2~mv2.png/v1/fill/w_1000,h_703,al_c,q_90/b1e563_e185f99406bc4d16acef1178a1e72ad2~mv2.webp",
    marquesaFacade: "https://static.wixstatic.com/media/b1e563_f0d39f253a06465e83fcd9751eba02f4~mv2.png/v1/fill/w_392,h_506,al_c,q_85/b1e563_f0d39f253a06465e83fcd9751eba02f4~mv2.webp",
    fervencaFacade: "https://static.wixstatic.com/media/b1e563_9bfa53def2f243d6a8933de50de9ab52~mv2.png/v1/fill/w_1120,h_1520,al_c,q_90,usm_0.66_1.00_0.01/b1e563_9bfa53def2f243d6a8933de50de9ab52~mv2.webp",
    stCatResidenceLiving: "https://static.wixstatic.com/media/b1e563_ff83a24ef5a34ca1bf5447af2b60066f~mv2.png/v1/fill/w_1088,h_564,al_c,q_90/b1e563_ff83a24ef5a34ca1bf5447af2b60066f~mv2.webp",
    castellos: "https://static.wixstatic.com/media/b1e563_45e5232a1f734a3c915e27738b8bbf79~mv2.jpeg/v1/fill/w_456,h_645,al_c,q_80/b1e563_45e5232a1f734a3c915e27738b8bbf79~mv2.webp",
    rosario: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/264140528.webp?k=ef84e440afc950ede1935bacc2959adeb353c9da7f361b605a2aaac58a1fdbf9&o="
}
const units = [
    {
        name: "Santa Catarina | Pool & Fitness",
        rating: 9.37,
        location: "Clerigos Tower . City Center",
        resume:
            "Located within walking distance of the main tourist attractions, it presents itself as a superior quality unit, which highlights its outdoor pool, a magnificent garden, large terraces, and a gym.",
        fulltext: [
            "Located within walking distance of the main tourist attractions of the city of Porto, it presents itself as a superior quality unit, which highlights its outdoor pool, a magnificent garden, large terraces, and a gym.",
            "Carefully and elegantly decorated where comfort is present in every detail, our apartments are distinguished by their generous areas and brightness."
        ],
        features: "Pool, Gym, Housekeeping, Breakfast",
        opening: "open",
        photos: newphotos.filter(e => e.unity == "santacatarina"),
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
            "Located within walking distance of the main tourist attractions of the city of Porto, it presents itself as a superior quality unit, which highlights its outdoor pool, a magnificent garden, large terraces, and a gym.",
            "Carefully and elegantly decorated where comfort is present in every detail, our apartments are distinguished by their generous areas and brightness."
        ],
        features: "Kitnette, Furnished, Housekeeping, Breakfast",
        opening: "open",
        map: "https://goo.gl/maps/ZNARYNg3Xs4rwJjo6",
        photos: newphotos.filter(e => e.unity == "santacatarina"),
        address: "Rua Mouzinho da Silveira, 157 - 167 , União de Freguesias do Centro, Porto",
    },
    {
        name: "Rosário | Luxury Suites",
        rating: 8.72,
        location: "Clerigos Tower . City Center",
        resume:
            "Just 300 meters from the riverside, on the charming Rua Mouzinho da Silveira, a short walk from the main tourist spots in the city.",
        fulltext: [
            "Located within walking distance of the main tourist attractions of the city of Porto, it presents itself as a superior quality unit, which highlights its outdoor pool, a magnificent garden, large terraces, and a gym.",
            "Carefully and elegantly decorated where comfort is present in every detail, our apartments are distinguished by their generous areas and brightness."
        ],
        features: "Furnished, Housekeeping, Breakfast",
        opening: "open",
        map: "https://goo.gl/maps/ZNARYNg3Xs4rwJjo6",
        photos: newphotos.filter(e => e.unity == "santacatarina"),
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
        photos: [photos.castellos],
    },
    {
        name: "Santa Catarina Residence",
        rating: false,
        location: "Clerigos Tower . City Center",
        resume:
            "Just 300 meters from the riverside, on the charming Rua Mouzinho da Silveira, a short walk from the main tourist spots in the city.",
        features: "Kitnette, Furnished, Housekeeping, Breakfast",
        opening: "August 2021",
        photos: [photos.stCatResidenceLiving],
    },
    {
        name: "Fervença Palace Gaia",
        rating: false,
        location: "Clerigos Tower . City Center",
        resume:
            "Just 300 meters from the riverside, on the charming Rua Mouzinho da Silveira, a short walk from the main tourist spots in the city.",
        features: "Kitnette, Furnished, Housekeeping, Breakfast",
        opening: "June 2022",
        photos: [photos.fervencaFacade],
    },
    {
        name: "Marquesa Palace Lux Apartmnets",
        rating: false,
        location: "Clerigos Tower . City Center",
        resume:
            "Just 300 meters from the riverside, on the charming Rua Mouzinho da Silveira, a short walk from the main tourist spots in the city.",
        features: "Kitnette, Furnished, Housekeeping, Breakfast",
        opening: "2023",
        photos: [photos.marquesaFacade],
    },
]

export default { photos, units, attractions, newphotos };