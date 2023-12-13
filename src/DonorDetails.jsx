import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const DonorDetails = ()=>{
    const [donor, setDonor] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const {id} = useParams();

    useEffect(()=>{
        axios
        .get(`https://dummyjson.com/users/${id}`)
        .then((data)=>{
            setDonor(data.data);
            setIsLoading(false);
        })
        .catch((error)=>{
            console.log(error)
        })

    },[id])

    if (isLoading) {
        return <div>DATA IS LOADING</div>;
    }

    const {firstName, lastName, age, email, phone, birthDate, image} = donor;

    return(
        <>
        <Container>

            <Row>
                <Col>
                <img src={image} alt="picture" />
                </Col>
                <Col>
                <h6>Personal info</h6>
                <p>{firstName} {lastName}</p>
                <p>Birth date: {birthDate}</p>
                <p>Age: {age}</p>
                <p>Email: {email}</p>
                <p>Phone Number: {phone} </p>

                </Col>
            </Row>
        </Container>
        
        </>
    )
}
export default DonorDetails