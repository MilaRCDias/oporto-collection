import { photos } from './photos.js'

const units = [
    {
        name: "Santa Catarina Pool & Fitness",
        key: "stacatarinapool",
        location: "Clerigos Tower . City Center",
        fulltext: 'descriptions.santacatarina',
        amenities: ['pool', 'gym', 'cleaning', 'breakfast', 'kitchenette'],
        opening: "open",
        status: "open",
        photos: photos.filter(e => e.unity == "santacatarina"),
        url: "https://opc-santacatarinapoolandfitness.com/",
        map: "https://goo.gl/maps/ZNARYNg3Xs4rwJjo6",
        address: "Rua Santa Catarina 1219, União de Freguesias do Centro, Porto",
        cityImage: {
            vertical: false,
            address: "https://images.unsplash.com/photo-1581371945115-efd84739c065?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
        }

    },
    {
        name: "Mouzinho Apartments",
        key: "mouzinho",
        location: "Clerigos Tower . City Center",
        fulltext: 'descriptions.mouzinho',
        amenities: ['kitchenette', 'furnished', 'cleaning', 'breakfast'],
        opening: "open",
        status: "open",
        photos: photos.filter(e => e.unity == "mouzinho"),
        url: "https://opc-mouzinhodasilveira.com/",
        map: "https://goo.gl/maps/ZNARYNg3Xs4rwJjo6",
        address: "Rua Mouzinho da Silveira, 157 - 167 , União de Freguesias do Centro, Porto",
        cityImage: {
            vertical: true,
            address: "https://images.unsplash.com/photo-1588505910760-a8e9a240dc95?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80"
        }
    },
    {
        name: "Rosário Luxury Suites",
        location: "Clerigos Tower . City Center",
        key: "rosario",
        fulltext: 'descriptions.rosario',
        amenities: ['lounge', 'furnished', 'cleaning', 'breakfast'],
        opening: "open",
        status: "open",
        photos: photos.filter(e => e.unity == "rosario"),
        url: "https://opc-rosario.com/",
        map: "https://goo.gl/maps/ZNARYNg3Xs4rwJjo6",
        address: "227 Rua do Rosario, União de Freguesias do Centro, Porto",
        cityImage: {
            vertical: false,
            address: "https://images.unsplash.com/photo-1606851809718-d0ab589a9468?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80"
        }
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

export default { units };
