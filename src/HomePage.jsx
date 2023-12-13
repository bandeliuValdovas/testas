import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import reactLogo from "./assets/react.svg";


const HomePage = () => {
    const onButtonClick = useNavigate();

    return (
        <>
            <Container fluid>
                <Row>
                    <Col>
                        <img src={reactLogo} alt="Logo" />
                    </Col>
                    <Col>
                        
                            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni beatae aspernatur error, laborum officia maxime tempora </div>
                            <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam commodi nostrum
                            </div>
                            <Button onClick={() => onButtonClick(`/donors`)}>
                                Enter
                            </Button>

                        
                    </Col>
                </Row>
            </Container>


        </>
    )
}
export default HomePage;