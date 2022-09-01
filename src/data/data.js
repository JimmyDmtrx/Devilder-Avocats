import banquePic from '../styles/images/secteurs/banque.jpg';
import artPic from '../styles/images/secteurs/art.jpeg';
import eventPic from '../styles/images/secteurs/event.jpg';
import luxePic from '../styles/images/secteurs/luxe.jpg';
import autoPic from '../styles/images/secteurs/auto.jpg';
import ecomPic from '../styles/images/secteurs/ecom.jpg';
import agriPic from '../styles/images/secteurs/agri.jpg';
import hotelPic from '../styles/images/secteurs/hotel.jpg';
import digiPic from '../styles/images/secteurs/tech.jpeg';

let sectors = [
  {
    name: 'Bancaire & Services de paiement',
    imgurl: banquePic,
  },
  { name: 'Tech & Digital', imgurl: digiPic },
  { name: 'Évènementiel', imgurl: eventPic },
  { name: 'Luxe', imgurl: luxePic },
  { name: 'Automobile & Transport', imgurl: autoPic },
  { name: 'E-commerce', imgurl: ecomPic },
  { name: 'Agriculture', imgurl: agriPic },
  { name: 'Hôtellerie & Restauration', imgurl: hotelPic },
  { name: "Marché de l'art", imgurl: artPic },
];

export default sectors;
