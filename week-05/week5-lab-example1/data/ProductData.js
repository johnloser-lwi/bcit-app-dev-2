export function getProducts(type){
    return PRODUCTDATA.filter(item => item.type === type);    
}

export function getProductById(id){
    return PRODUCTDATA.find(item => item.prodid === id);    
}

const PRODUCTDATA = [
    {
        prodid: 'T00055',
        type: 'clothing',
        desc: 't-shirt',
        price: 22.55,
    },
    {
        prodid: 'S00301',
        type: 'clothing',
        desc: 'sweat shirt',
        price: 41.23,
    },
    {
        prodid: 'S00148',
        type: 'clothing',
        desc: 'hoodie',
        price: 47.52,
    },
    {
        prodid: 'H02022',
        type: 'clothing',
        desc: 'cap',
        price: 18.29,
    },
    {
        prodid: 'P00105',
        type: 'clothing',
        desc: 'sweat pants',
        price: 45.75,
    },
    {
        prodid: 'C02323',
        type: 'decor',
        desc: 'throw pillow',
        price: 21.33,
    },
    {
        prodid: 'C05008',
        type: 'decor',
        desc: 'throw blanket',
        price: 24.25,
    },
    {
        prodid: 'D02001',
        type: 'decor',
        desc: 'wall hanging',
        price: 33.45,
    },
    {
        prodid: 'D00202',
        type: 'decor',
        desc: 'vase',
        price: 51.25,
    },
];