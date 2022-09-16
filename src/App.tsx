import Button from 'react-bootstrap/Button'

const Butao = (Botao = Button) =>{
  return ( 
    <Button as='a' variant='success'>
        Button as a danger link
      </Button>
  );
}

function App() {
  return (
    <div className="App">

    </div>
  );
}

export default App;
