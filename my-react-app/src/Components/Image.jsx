import {Col, Container, Row} from "react-bootstrap";

const Image = ({src, alt, grid , rowStyle, divStyle, imgStyle}) => {
    return (
            <Row className={grid} style={{...rowStyle}}>
                <Col xs="auto">
                    <div style={{...divStyle}}>
                        <img
                            src={src}
                            alt={alt}
                            style={{...imgStyle}}
                        />
                    </div>
                </Col>
            </Row>
    );
};

export default Image;