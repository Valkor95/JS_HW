import Image from "./Components/Image";
import img from "./img/SW.png"
import {Button, Col, Container, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import CardsInfo from "./Components/CardsInfo";

function App() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [fetchData, setFetchData] = useState(false);

    const handleFetchData = () => {
        setFetchData(true);
    }

    useEffect(() => {
        if(!fetchData) return;

        const fetchDataFromAPI = async () => {
            setLoading(true);
            try{
                const response = await fetch('https://swapi.dev/api/planets/');
                const dataSw = await response.json();
                setData(dataSw.results);
            } catch (e){
                console.error("Error fetching data:", e);
            } finally {
                setLoading(false);
                setFetchData(false);
            }
        }

        fetchDataFromAPI();
    }, [fetchData]);

  return (
    <div className="App" key={Date.now()}>
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
                        onClick={handleFetchData}
                    >
                        Planets
                    </Button>
                </Col>
            </Row>
            {loading &&
                <Row className='justify-content-center align-items-center'>
                    <Col xs="auto">
                        <h1
                            style={{marginTop: '20px'}}
                        >
                            Loading...
                        </h1>
                    </Col>
                </Row>
            }
            {data && data.map((planet) => (
                        <Row className='justify-content-center align-items-center' style={{marginTop: '20px'}}>
                            <Col xs="auto">
                                <CardsInfo
                                    key={planet.name + Date.now()}
                                    SWInfo={planet}
                                />
                            </Col>
                        </Row>
                    ))
            }
        </Container>
    </div>
  );
}

export default App;
