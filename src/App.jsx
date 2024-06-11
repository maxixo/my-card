import './App.css'
import Card from 'react-bootstrap/Card';
import Name from './assets/name';
import Description from './assets/description';


function App() {

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
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
