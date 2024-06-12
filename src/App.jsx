import './App.css'
import Card from 'react-bootstrap/Card';
import Name from './name';
import Description from './description';
import Image from './image';
import Price from './price';



function App() {

  const firstName = "Usman";

  return (
    <>
    <Card style={{ width: '20rem' , border: '2px solid white', borderRadius: '10px' , margin:"auto"}}>
      <Card.Body>
    
        <Card.Title>
          <Name/>   {/*Card Name  */}
        </Card.Title>
        <Card.Text>
          <Description/> {/*Card Description  */}
        </Card.Text>
       <h4 style={{fontFamily:"-moz-initial"}}><Price/> </h4> {/*Card Price  */}
       <div style={{ marginTop: '20px', textAlign: 'center',  margin:"auto" }}>
        {firstName ? (
          < >
            <p>Hello {firstName}</p>
            <Image /> {/*Card Image  */}
          </>
        ) : (
          <p>Hello there</p>
        )}
      </div> 
      </Card.Body>
    </Card>
  
    </>
     
  )
}

export default App
