import logo from './logo.svg';
import './App.css';
import GeneralAlert from './components/alert/alert';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

function App() {
  const [show, setShow] = useState(false);
  const [showAll, setShowAll] = useState(true);

  const handleChange = () =>{
    setShow(!show);
    setShowAll(true);
  }
  return (
    <div className="App">
       <Button className='mb-5' variant='dark' onClick={handleChange}>Show Alert</Button>;
       <GeneralAlert variant='danger' showAll={showAll} show={show} setShow={setShow} />
      <GeneralAlert variant='info' showAll={showAll} show={show}  setShow={setShow} />
      <GeneralAlert variant='success' showAll={showAll} show={show} setShow={setShow} />
    </div>
  );
}

export default App;


