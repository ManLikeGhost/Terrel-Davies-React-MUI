import React from 'react';
import FlatIcon from '../img/Flats-Icon.png';
import HouseIcon from '../img/Houses-Icon.png';
import CommercialProjectsIcon from '../img/commercial-projects-Icon.png';
import LandIcon from '../img/Land-Icon.png';
import PropertyImage1 from '../img/houses/5.png';
import PropertyImage2 from '../img/houses/6.png';
import PropertyImage3 from '../img/houses/7.png';
import FavoriteIcon from "@material-ui/icons/Favorite";

const iconSize = { fontSize: 90 };
const iconColor = "primary";

export const portfolios = [
    {
      id: 0,
      title: "Flats",
      icon: FlatIcon,
    },
    {
      id: 1,
      title: "Houses",
      icon: HouseIcon,
    },
    {
      id: 2,
      title: "Commercial Properties",
      icon: CommercialProjectsIcon,
    },
    {
      id: 3,
      title: "Land",
      icon: LandIcon,
    },
  ];

  export const properties = [
    {
      id: 0,
      imagePath:  PropertyImage1,
      saleText:`4 Bedroom Flat with BQ for sale`,
      address:`2c Close, Admiralty Way Lekkki`,
      details: <FavoriteIcon style={iconSize} color={iconColor} />,
      
    },
    {
      id: 1,
      imagePath: PropertyImage2,
      saleText:`4 Bedroom Duplex with BQ for sale`,
      address:`10A Fola Osibo, Lekki`,
      details: <FavoriteIcon style={iconSize} color={iconColor} />,
      
    },
    {
      id: 2,
      imagePath: PropertyImage3,
      saleText:`Office spaces for sale`,
      address:`Skyline Towers, Adeola Odeku Street, V.I.`,
      details: <FavoriteIcon style={iconSize} color={iconColor} />,
    },
  ];