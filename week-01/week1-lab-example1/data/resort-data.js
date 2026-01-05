export function getAllResorts(){
    return RESORTDATA;
}

export function getResortById(id){

    return RESORTDATA.find(item => item.id === id);    
}

// resort list data
export const RESORTDATA = [
    {
        id: '001',
        name: 'Sunny Fun-Fun Resort', 
        active: true, 
        keyImage:'https://media.mdia.ca/img/resorts/beach-resort-01.png', 
        otherImages: [
            {key:0, uri: 'https://media.mdia.ca/img/resorts/beach-resort-01.png'},            
            {key:0, uri: 'https://media.mdia.ca/img/resorts/beach-resort-02.png'},            
            {key:0, uri: 'https://media.mdia.ca/img/resorts/beach-resort-03.png'},
            {key:0, uri: 'https://media.mdia.ca/img/resorts/beach-resort-04.png'},            
            {key:0, uri: 'https://media.mdia.ca/img/resorts/beach-resort-05.png'},            
            {key:0, uri: 'https://media.mdia.ca/img/resorts/beach-resort-06.png'},            
            {key:0, uri: 'https://media.mdia.ca/img/resorts/beach-resort-07.png'},           
            {key:0, uri: 'https://media.mdia.ca/img/resorts/beach-resort-08.png'},            
            {key:0, uri: 'https://media.mdia.ca/img/resorts/beach-resort-09.png'},            
            {key:0, uri: 'https://media.mdia.ca/img/resorts/beach-resort-10.png'},
            
        ],
        shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        longDesc: 'Phasellus feugiat scelerisque volutpat. Duis at odio quis ex lobortis mollis. Nam ultrices vel dolor vitae aliquet. Nam nec felis posuere, bibendum lacus id, tempus orci. Nunc euismod ex eu vestibulum fringilla. Nunc et nibh elit. In vestibulum justo in lacinia tristique. In consequat eleifend justo, bibendum faucibus ligula viverra et. \n\nDuis ac leo magna. Sed ut eros ullamcorper dolor tincidunt euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam porta nunc leo, et sollicitudin erat semper quis. Integer porta, nulla non dignissim sagittis, ex odio dapibus odio, ut hendrerit purus nunc ut nibh. Aenean pulvinar sapien sed orci rhoncus, in efficitur ex rutrum. Aliquam vehicula neque nec metus rutrum, nec sollicitudin dolor finibus.',
        amenities: [
            {key:0, value:'24 hour concierge service'},
            {key:1, value:'Gigantic free form outdoor swimming pool'},
            {key:2, value:'Air-port shuttle'},
            {key:3, value:'Libraries and Internet service'},
            {key:4, value:'Free Wifi Internet Access'}
        ]    
    },
    {id: '002', name: 'Alpha Resort', active: false, keyImage:'https://media.mdia.ca/img/resorts/gen-resort-01.png', shortDesc: 'Cras in turpis tincidunt, dictum justo non, cursus mi.'},
    {id: '003', name: 'Beta Resort', active: false, keyImage:'https://media.mdia.ca/img/resorts/gen-resort-02.png', shortDesc: 'Fusce ornare tellus vel lobortis cursus.'},
    {id: '004', name: 'Gamma Resort', active: false, keyImage:'https://media.mdia.ca/img/resorts/gen-resort-03.png', shortDesc: 'Etiam arcu leo, blandit maximus dolor id, tincidunt ornare sem.'},
    {id: '005', name: 'Delta Resort', active: false, keyImage:'https://media.mdia.ca/img/resorts/gen-resort-04.png', shortDesc: 'Nunc sagittis gravida nunc, sit amet rhoncus ex mattis non.'},
    {id: '006', name: 'Epsilon Resort', active: false, keyImage:'https://media.mdia.ca/img/resorts/gen-resort-05.png', shortDesc: 'Cras egestas neque vel dolor malesuada molestie.'},
    {id: '007', name: 'Zeta Resort', active: false, keyImage:'https://media.mdia.ca/img/resorts/gen-resort-06.png', shortDesc: 'Nullam urna arcu, dapibus finibus mi ut, tincidunt tincidunt nisi.'},
    {id: '008', name: 'Eta Resort', active: false, keyImage:'https://media.mdia.ca/img/resorts/gen-resort-07.png', shortDesc: 'Vivamus bibendum mollis fringilla.'},
    {id: '009', name: 'Theta Resort', active: false, keyImage:'https://media.mdia.ca/img/resorts/gen-resort-08.png', shortDesc: 'Vivamus nibh nunc, rutrum sed dictum a, tempor eu diam.'},
    {id: '010', name: 'Iota Resort', active: false, keyImage:'https://media.mdia.ca/img/resorts/gen-resort-09.png', shortDesc: 'Mauris commodo varius nibh eget fringilla.'},
    {id: '011', name: 'Kappa Resort', active: false, keyImage:'https://media.mdia.ca/img/resorts/gen-resort-10.png', shortDesc: 'Suspendisse tempus felis vitae dolor condimentum, eu convallis quam finibus.'},
    {id: '012', name: 'Lambda Resort', active: false, keyImage:'https://media.mdia.ca/img/resorts/gen-resort-11.png', shortDesc: 'Mauris tempus dapibus nunc in gravida.'}
];

