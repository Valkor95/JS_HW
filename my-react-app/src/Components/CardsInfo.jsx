import Card from 'react-bootstrap/Card';

function CardsInfo({SWInfo}) {
    return (
        <Card style={{ width: '22rem' }}>
            <Card.Body>
                <Card.Title>{SWInfo.name}</Card.Title>
                {Object.entries(SWInfo)

                    .map(([key, value]) => (
                        <div key={key+value}>
                            <Card.Subtitle className="mt-3 text-muted">{key}:</Card.Subtitle>
                            <Card.Text>
                                {value}
                            </Card.Text>
                        </div>
                    ))
                }
            </Card.Body>
        </Card>
    );
}

export default CardsInfo;