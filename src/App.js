import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {product,owner} from './components/product.js';

import Name from './components/name';
import Description from './components/description';
import Price from './components/price';
import Owner from './components/owner';
import { Card } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Card style={{ width: '25rem',
         margin: 'auto',
          marginTop: '50px',
          boxShadow: '0 4px 8px 0 rgba(0,0,0,0.5)' }}>
        <Card.Img variant="top" src={product.imageUrl} />
        <Card.Body>
          <Card.Title><Name name={product.name} /></Card.Title>
          <Card.Text>
            <Description description={product.description} />
            <Price price={product.price} />
          </Card.Text>
        </Card.Body>
        <Card.Footer><h6>Hello There !! My Name Is</h6><Owner nameOwner={owner.nameOwner} lastName={owner.lastName}/></Card.Footer>
      </Card>
    </div>
  );
}

export default App;