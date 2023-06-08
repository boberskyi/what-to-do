import React from 'react';
import './App.css';
import styled from "styled-components";
import {Events} from "./components/events/Events";

const App = () => {

  const events = [
    {
      id: 1,
      imgPreview: "https://scontent-waw1-1.xx.fbcdn.net/v/t39.30808-6/351344089_669128708361143_544636765984967921_n.jpg?stp=dst-jpg_p480x480&_nc_cat=101&ccb=1-7&_nc_sid=340051&_nc_ohc=_sbmIW-oAQsAX-oTC1V&_nc_ht=scontent-waw1-1.xx&oh=00_AfDixGnp3ykn1Pj7X4wylgSi9sM50dWEoVV3FSzI2p-qxw&oe=64865CA7",
      title: "Title 1",
      date: "08.06.2023 16:00 - 08.06.2023 18:00",
      author: "Organizator",
      reviews: "***** 120 Opinie",
      location: "Rzeszów",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, maxime, qui. Dignissimos expedita laudantium possimus!"
    },
    {
      id: 2,
      imgPreview: "https://scontent-waw1-1.xx.fbcdn.net/v/t39.30808-6/323986674_720368109519608_1427014221129990171_n.jpg?stp=dst-jpg_p640x640&_nc_cat=104&ccb=1-7&_nc_sid=340051&_nc_ohc=RGEum6gL-1AAX9HKnt4&_nc_ht=scontent-waw1-1.xx&oh=00_AfCh6_F-Tja1Ryn0w5NUtOgRxCA58VOohIIUy91-2CI5Vg&oe=64865FAC",
      title: "Title 2",
      date: "08.06.2023 16:00 - 08.06.2023 18:00",
      author: "Organizator",
      reviews: "***** 120 Opinie",
      location: "Rzeszów",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, maxime, qui. Dignissimos expedita laudantium possimus!"
    },
    {
      id: 3,
      imgPreview: "https://scontent-waw1-1.xx.fbcdn.net/v/t39.30808-6/347582235_788630699574120_1776655512359367028_n.jpg?stp=dst-jpg_p640x640&_nc_cat=110&ccb=1-7&_nc_sid=340051&_nc_ohc=iztUdN8TND4AX9br8Xg&_nc_ht=scontent-waw1-1.xx&oh=00_AfCBaukDmy_LH0eORJpO_dGNuSB7nXDeAJh_xQbk0Vwqbg&oe=6486F180",
      title: "Title 3",
      date: "08.06.2023 16:00 - 08.06.2023 18:00",
      author: "Organizator",
      reviews: "***** 120 Opinie",
      location: "Kraków",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, maxime, qui. Dignissimos expedita laudantium possimus!"
    },
  ];

  return (
    <div className="App">
        <ContainerStyled>
          <Events events={events}/>
        </ContainerStyled>
    </div>
  );
}

const ContainerStyled = styled.div`
  max-width: 1440px;
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;
`

export default App;
