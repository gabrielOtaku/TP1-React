import guitar3 from '../assets/Images/guitar1.jpg'
import guitar2 from  '../assets/Images/guitar2.jpg'
import guitar1 from  '../assets/Images/guitar3.jpg'

export interface guitarData{
    id : string;
    nom : string;
    prix:  number;
    image: string;
    note: number;

}

export const guitarList: guitarData[] = [
    {
        id: '1ed',
        nom: 'American Professionnal II Stratocaster',
        prix: 500,
        image:guitar3,
        note: 4
    },
    {
        id: '2jz',
        nom: 'American Professionnal II Jazzmaster',
        prix: 550,
        image: guitar2,
        note: 9 
    },
    {
        id: '3st',
        nom: 'American Acoustasonic Stratocaster',
        prix: 1050,
        image: guitar1,
        note: 4
    }
];