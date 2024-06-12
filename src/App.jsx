import './App.css'
import Card from 'react-bootstrap/Card';
import Name from './name';
import Description from './description';
import Image from './image';
import Price from './price';



function App() {

  const firstName = "Usman";

  return (
    <Card style={{ width: '20rem' , border: '2px solid white', borderRadius: '10px'}}>
      <Card.Body>
         <Image />  {/*Card Image  */}
        <Card.Title>
          <Name/>   {/*Card Name  */}
        </Card.Title>
        <Card.Text>
          <Description/> {/*Card Description  */}
        </Card.Text>
       <h4 style={{fontFamily:"-moz-initial"}}><Price/> </h4> {/*Card Price  */}
      </Card.Body>
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        {firstName ? <p>Hello {firstName}</p> : <p>Hello there</p>}
      </div>
    </Card>
     
  )
}

export default App
