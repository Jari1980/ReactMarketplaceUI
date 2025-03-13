
import './App.css'
import CardComp from './CardComp'
import CardGroup from 'react-bootstrap/CardGroup';

function App() {

  const advertisementsData = [
    {
        id: 1,
        title: 'Ad 1',
        description: 'This is the first advertisement',
        image: 'https://placehold.co/150',
        contact: 'contact1@example.com'
    },
    {
        id: 2,
        title: 'Ad 2',
        description: 'This is the second advertisement',
        image: 'https://placehold.co/150',
        contact: 'contact2@example.com'
    },
    {
        id: 3,
        title: 'Ad 3',
        description: 'This is the third advertisement',
        image: 'https://placehold.co/150',
        contact: 'contact3@example.com'
    },
    {
        id: 4,
        title: 'Ad 4',
        description: 'This is the fouth advertisement',
        image: 'https://placehold.co/150',
        contact: 'contact4@example.com'
    },
    {
        id: 5,
        title: 'Ad 5',
        description: 'This is the fifth advertisement',
        image: 'https://placehold.co/150',
        contact: 'contact5@example.com'
    },
    {
        id: 6,
        title: 'Ad 6',
        description: 'This is the sixth advertisement',
        image: 'https://placehold.co/150',
        contact: 'contact6@example.com'
    }
];

const cardElements = advertisementsData.map((data) => {
  const cardElement = (
    <CardComp key={data.id} title={data.title} description={data.description} img={data.image} contact={data.contact}/>
  )
  return cardElement;
})


  return (
    <>
      <div className='container'>
        <h2>Advertisement list</h2>
        <div className='container'>
          <div className='row row-cols-1 row-cols-md-3 g-3'>
          {cardElements}
          </div>
        </div>
        </div>
    </>
  )
}

export default App
