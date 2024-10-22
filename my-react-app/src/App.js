import Image from "./Components/Image";
import img from "./img/SW.png"
import {Container} from "react-bootstrap";

function App() {
  return (
    <div className="App">
        <Container fluid style={{height: '100vh'}}>
             <Image
                src={img}
                alt="SWLogo"
                grid='justify-content-center align-items-start'
                rowStyle={{height: '100%' }}
                divStyle={{textAlign: 'center'}}
                imgStyle={{maxWidth: '30%', height: 'auto'}}
             />
        </Container>
    </div>
  );
}

export default App;
