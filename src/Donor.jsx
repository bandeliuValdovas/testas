import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';


const Donor = ({ donor }) => {
    const { firstName, lastName, age, gender } = donor
    return (
        <>
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>{firstName} {lastName}</Card.Title>
                        <Card.Text>
                            Age: {age}
                        </Card.Text>
                        <Card.Text>
                            Gender: {gender}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>



            </Col>



        </>
    )
}

export default Donor;