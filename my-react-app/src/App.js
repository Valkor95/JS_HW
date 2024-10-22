import Image from "./Components/Image";
import img from "./img/SW.png"
import {Button, Col, Container, Row} from "react-bootstrap";

function App() {
  return (
    <div className="App">
        <Container fluid style={{height: '100vh'}}>
             <Image
                src={img}
                alt="SWLogo"
                grid='justify-content-center align-items-start'
                rowStyle={{height: 'auto' }}
                divStyle={{textAlign: 'center'}}
                imgStyle={{maxWidth: '30%', height: 'auto'}}
             />
            <Row className='justify-content-center align-items-center'>
                <Col xs="auto">
                    <Button
                        variant="primary"
                        style={{marginTop: '20px'}}
                    >
                        Planets
                    </Button>
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default App;
