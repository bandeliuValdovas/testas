import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';


const Donor = ({ donor, onDeleteButtonClick }) => {
    const { id, firstName, lastName, age, gender, isDeleted } = donor
    const onShowDetailsButton = useNavigate();
    return (
        <>
{/* Conditional Rendering is nor working*/}
        {!isDeleted &&
            <Col>
                <Card style={{ width: '18rem' }}>
                    
                    <Card.Body>
                        <Card.Title>{firstName} {lastName}</Card.Title>
                        <Card.Text>
                            Age: {age}
                        </Card.Text>
                        <Card.Text>
                            Gender: {gender}
                        </Card.Text>
                        <Button
                            variant="primary"
                            onClick={() => onShowDetailsButton(`/donors/${id}`)}>Details</Button>
                        <Button
                            variant='danger'
                            onClick={() => onDeleteButtonClick(donor)}>Delete</Button>
                    </Card.Body>
                </Card>



            </Col>
}


        </>
    )
}

export default Donor;