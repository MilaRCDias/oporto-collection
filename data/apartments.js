
import { carousel } from './carousel.js'
/* import { photos } from './photos.js' */

const units = [
    {
        name: "Santa Catarina Pool & Fitness",
        key: "stacatarinapool",
        fullname: { title: 'Santa Catarina', subtitle: 'Pool & Fitness' },
        fulltext: 'descriptions.santacatarina',
        amenities: ['pool', 'gym', 'cleaning', 'breakfast', 'kitchenette'],
        opening: "open",
        status: "open",
        thumbnail: carousel.filter(e => e.unity == "stacatarinapool")[14],
        photos: carousel.filter(e => e.unity == "stacatarinapool"),
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
        fullname: { title: 'Mouzinho', subtitle: 'Apartments' },
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
        fullname: { title: 'Rosário', subtitle: 'Luxury Suites' },
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
            address: "city/jardins-palacio-de-cristal.jpg"
        }
    },
    {
        name: "Hotel dos Castelos",
        fullname: { title: 'Hotel dos Castelos', subtitle: 'Live . Work . Sports' },
        key: 'castelos',
        fulltext: 'descriptions.castelos',
        features: ['co-working', 'lounge', 'kitchenette', 'breakfast'],
        opening: "August 2021",
        status: false,
        map: "https://goo.gl/maps/ZNARYNg3Xs4rwJjo6",
        thumbnail: carousel.filter(e => e.unity == "castelos")[0],
        photos: carousel.filter(e => e.unity == "castelos"),
        cityImage: {
            vertical: false,
            address: "https://images.unsplash.com/photo-1581371945115-efd84739c065?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
        }
    },
    {
        name: "Santa Catarina Residence",
        fullname: { title: 'Santa Catarina', subtitle: 'Residence' },
        key: 'stacatarinaresidence',
        fulltext: 'descriptions.stacatarinaresidence',
        features: ['breakfast', 'furnished', 'kitchenette', 'clenaning'],
        opening: "August 2021",
        status: false,
        thumbnail: carousel.filter(e => e.unity == "stacatarinaresidence")[0],
        photos: carousel.filter(e => e.unity == "stacatarinaresidence"),
        cityImage: {
            vertical: false,
            address: "https://images.unsplash.com/photo-1606851809718-d0ab589a9468?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80"
        }
    },
    {
        name: "Casa da Marechal",
        fullname: { title: 'Casa da Marechal', subtitle: 'Boutique Hotel' },
        key: 'marechal',
        fulltext: 'descriptions.marechal',
        features: ['breakfast', 'furnished', 'kitchenette', 'clenaning'],
        opening: "January 2022",
        status: false,
        thumbnail: carousel.filter(e => e.unity == "marechal")[0],
        photos: carousel.filter(e => e.unity == "marechal"),
        cityImage: {
            vertical: false,
            address: "https://images.unsplash.com/photo-1606851809718-d0ab589a9468?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80"
        }
    },
    {
        name: "Palácio da Fervença",
        fullname: { title: 'Palácio da Fervença', subtitle: 'Gaia' },
        key: 'fervenca',
        fulltext: 'descriptions.fervenca',
        features: ['breakfast', 'furnished', 'kitchenette', 'clenaning'],
        opening: "June 2022",
        status: false,
        thumbnail: carousel.filter(e => e.unity == "fervenca")[0],
        photos: carousel.filter(e => e.unity == "fervenca"),
        cityImage: {
            vertical: false,
            address: "https://images.unsplash.com/photo-1606851809718-d0ab589a9468?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80"
        }
    },
    {
        name: "Marquesa Palace Luxury Apartments",
        fullname: { title: 'Marquesa Palace', subtitle: 'Luxury Apartments' },
        key: 'marquesa',
        fulltext: 'descriptions.marquesa',
        features: ['breakfast', 'furnished', 'kitchenette', 'clenaning'],
        opening: "2023",
        status: false,
        thumbnail: carousel.filter(e => e.unity == "marquesa")[0],
        photos: carousel.filter(e => e.unity == "marquesa"),
        cityImage: {
            vertical: false,
            address: "https://images.unsplash.com/photo-1606851809718-d0ab589a9468?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80"
        }
    }
]

export default { units };
