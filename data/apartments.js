
import { carousel } from './carousel.js'
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
        thumbnail: carousel.filter(e => e.unity == "santacatarina")[14],
        photos: carousel.filter(e => e.unity == "santacatarina"),
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
        thumbnail: {
            unity: "mouzinho",
            link: "mouzinho/main.jpg",
        },
        photos: carousel.filter(e => e.unity == "mouzinho"),
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
        thumbnail: carousel.filter(e => e.unity == "rosario")[8],
        photos: carousel.filter(e => e.unity == "rosario"),
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
        location: "Clerigos Tower . City Center",
        key: 'castelos',
        fulltext: 'descriptions.castelos',
        features: ['co-working', 'lounge', 'kitchenette', 'breakfast'],
        opening: "August 2021",
        status: false,
        map: "https://goo.gl/maps/ZNARYNg3Xs4rwJjo6",
        thumbnail: photos.filter(e => e.unity == "hotelcastelolive")[0],
        photos: photos.filter(e => e.unity == "hotelcastelolive"),
        cityImage: {
            vertical: false,
            address: "https://images.unsplash.com/photo-1581371945115-efd84739c065?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
        }
    },
    {
        name: "Santa Catarina Residence",
        key: 'santacatarinaresidence',
        fulltext: 'descriptions.santacatarinaresidence',
        location: "Clerigos Tower . City Center",
        features: ['breakfast', 'furnished', 'kitchenette', 'clenaning'],
        opening: "August 2021",
        status: false,
        thumbnail: photos.filter(e => e.unity == "santacatarinaresidence")[0],
        photos: photos.filter(e => e.unity == "santacatarinaresidence"),
        cityImage: {
            vertical: false,
            address: "https://images.unsplash.com/photo-1606851809718-d0ab589a9468?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80"
        }
    },
    {
        name: "Fervença Palace Gaia",
        key: 'fervenca',
        fulltext: 'descriptions.fervenca',
        location: "Clerigos Tower . City Center",
        features: ['breakfast', 'furnished', 'kitchenette', 'clenaning'],
        opening: "June 2022",
        status: false,
        thumbnail: carousel.filter(e => e.unity == "fervencapalace")[0],
        photos: carousel.filter(e => e.unity == "fervencapalace"),
        cityImage: {
            vertical: false,
            address: "https://images.unsplash.com/photo-1606851809718-d0ab589a9468?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80"
        }
    },
    {
        name: "Marquesa Palace Lux Apartmnets",
        key: 'Marquesa',
        fulltext: 'descriptions.marquesa',
        location: "Clerigos Tower . City Center",
        features: ['breakfast', 'furnished', 'kitchenette', 'clenaning'],
        opening: "2023",
        status: false,
        thumbnail: carousel.filter(e => e.unity == "marquesa")[0],
        photos: carousel.filter(e => e.unity == "marquesa"),
        cityImage: {
            vertical: false,
            address: "https://images.unsplash.com/photo-1606851809718-d0ab589a9468?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80"
        }
    },
]

export default { units };
