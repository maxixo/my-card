import './App.css'
import Card from 'react-bootstrap/Card';
import Name from './name';
import Description from './description';
import Image from './image';


function App() {

  const firstName = "Usman";

  return (
    <Card style={{ width: '20rem' , border: '2px solid white', borderRadius: '10px'}}>
      <Card.Body>
        <h3>Hello {firstName},</h3>
         <Image />
        <Card.Title>
          <Name/>
        </Card.Title>
        <Card.Text>
          <Description/>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default App
