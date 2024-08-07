import React, { createContext, useState, useContext } from 'react';

const PropertyContext = createContext();

const initialProperties = [
  {
    id: 1,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN_XjumRvpZwxftHaFOlCwXlzjkkGcf2ACUQ&s.jpg',
    address: '43,VadaPalani,Chennai',
    price: 'Rs.50,00,000',
    description: 'A beautiful family home with spacious rooms and a lovely garden.',
    specialOffers: '10% off for first-time buyers!',
  },
  {
    id: 2,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVj952rEsKbMQ8I3tVzHMZFOSTsvaB3ZxlLQ&s.jpg',
    address: '45,Ambur,Chennai',
    price: 'Rs.10,00,000',
    description: 'Land and Plots near bus stand.',
    specialOffers: '15% discount on cash payment!',
  },
  {
    id: 3,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfJ19wzH8GG0V5Jc0AamfHLMMFxrm0qGq1zhoMAtPwHMsuDiSSY7vKu0S0oP0St7PmaCU&usqp=CAU.jpg',
    address: '78,SaiBaba Colony,Coimbatore',
    price: 'Rs.75,00,000',
    description: 'Luxury condo with all amenities and a great neighborhood.',
    specialOffers: 'Free home insurance for one year!',
  },
//
  {
    id: 5,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvsF5iH38F1Ux7RxPAc19ZtBq2qumtdFG9aQ&s.jpg',
    address: '45, ECR Road,Chennai',
    price: 'Rs.1,20,000,000',
    description: 'Charming cottage with a beautiful garden.',
    specialOffers: 'Free home insurance for two years!',
  },
  {
    id: 6,
    image: 'https://content.jdmagicbox.com/comp/villupuram/h8/9999p4146.4146.200410190038.r9h8/catalogue/dms-real-promoters-valavanur-villupuram-estate-agents-for-land-yzcjnb6p60.jpg?clr=',
    address: '36,Anna nagar Chennai',
    price: '$1,000,000',
     description: 'Lot Size: 5,000 sq. ft.  Close to amenities and services',
    specialOffers: '20% Discount for first booking!',
  },
 
  {
    id: 7,
    image: 'https://www.tradekeyindia.com/Pimages/development-land-&-plot.jpg',
    address: '24,Hyderabad,Andhra Pradesh',
    price: '$1,200,000',
    description: 'Land and Plots near Town.',
    specialOffers: 'Registrartion is free !',
  },
  {
    id: 8,
    image: 'https://housing-images.n7net.in/4f2250e8/a7d8da10b6aca6ed1ae3017d13275e41/v0/medium.jpeg',
    address: '42,Dhamodaran st,VadaPalani',
    price: 'Rs.1,11,00,000',
    description: 'Spacious Appartment for Sale.',
    specialOffers: 'Registrartion 50% off !',
  },
  {
    id: 9,
    image: 'https://dyimg2.realestateindia.com/prop_images/2887485/1129968_1-350x350.jpg',
    address: '22,Electronic City',
    price: 'Rs.9,55,00,000',
    description: 'Villa in a busy city.',
    specialOffers: 'Discounts for existing customers who refer new buyers!',
  },
  {
    id: 10,
    image: 'https://img.staticmb.com/mbimages/project/Photo_h310_w462/2021/10/01/Project-Photo-2-G-Square-OMR-One-Chennai-5315849_600_800_310_462.jpg',
    address: '89, Ekkatuthangal, Chennai - 600032, Tamil Nadu',
    price: 'Rs.60,00,000',
    description: 'Amazing villas and apartments separately',
    specialOffers: '10% off the total purchase price for early bird buyers!',
  },
];

export const PropertyProvider = ({ children }) => {
  const [properties, setProperties] = useState(initialProperties);

  const addProperty = (property) => {
    setProperties([...properties, property]);
  };

  return (
    <PropertyContext.Provider value={{ properties, addProperty }}>
      {children}
    </PropertyContext.Provider>
  );
};

export const useProperties = () => useContext(PropertyContext);
