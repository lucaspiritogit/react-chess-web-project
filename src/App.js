import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import MainContent from './components/MainContent';
import CardsInfo from './components/CardsInfo';
import rookImage from "./images/rook.png"
import pawnImage from "./images/pawn.png"
import horseImage from "./images/horse.png"

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="Banner">
        <Banner />
      </div>
      <div className="MainContent">
        <MainContent />
      </div>
      <div className="CardSection">
        <div className="rook">
          <CardsInfo src={rookImage} title="Learn by doing" subTitle="Play some games with the community and get tips!" />
        </div>
      <div className="pawn">
        <CardsInfo src={pawnImage} title="Read strategies" subTitle="Know the outcomes of every situation" />
      </div>
        <div className="horse">
          <CardsInfo src={horseImage} title="Have fun" subTitle="At your own pace" />
        </div>
      </div>
    </div>
    
  );
}
