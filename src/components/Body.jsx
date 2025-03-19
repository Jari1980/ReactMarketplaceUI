import CardComp from "./CardComp";
import './body.css';
import advertisementsData from './data/AdvertisementData'
import { useCounterContext } from "./context.jsx";

function App() {
  
  const {background, setBackground} = useCounterContext();


  const cardElements = advertisementsData.map((data) => {

    

    const cardElement = (
      <CardComp
        key={data.id}
        id={data.id}
        title={data.title}
        description={data.description}
        img={data.image}
        contact="***"
        
      />
    );
    return cardElement;
  });

  

  return (
    <>
      <div className="container-fluid" id="body" style={{background: background}}>
        <h2 id="bodyHeadingText">
          Advertisement list
        </h2>
        <div
          className="container" id="cardContainer">
          <div className="container" >
            <div className="row row-cols-1 row-cols-sm-3 g-3" id="cardContainerInner">
              {cardElements}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
