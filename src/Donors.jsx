import { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Donor from "./Donor";

const Donors = () => {
    const [donorsArray, setDonorsArray] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        age: "",
        gender: "",
        bloodGroup:""
    });

    useEffect(() => {
        axios.get("https://dummyjson.com/users")
            .then((data) => {
                setDonorsArray(data.data.users)
                setIsLoading(false)
            })
            .catch((error) => {
                console.log(error.response);
            })
    }, [])



    const handleForm = (event) => {
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        axios
            .post("https://dummyjson.com/users/add", {
                firstName: formData.firstName,
                lastName: formData.lastName,
                age: formData.age,
                gender: formData.gender,
                bloodGroup: formData.bloodGroup
            })
            .then((response) => {
                console.log("response", response);
                console.log("formdata", formData);

                setDonorsArray([...donorsArray, response.data]);
            })
            .catch((error) => {
                console.log("eroor", error);
            });
    };
    console.log("donors array", donorsArray);


    const buttonControl = (donor) =>{
        console.log("donor id",donor.id)
        const id = donor.id;        

        axios
        .delete(`https://dummyjson.com/users/${id}`)
        .then((response)=>{
            console.log("delete response", response.data)  

        })
        .catch((error)=>{
            console.log(error)
        })
    }



    if (isLoading) {
        return <div>DATA IS LOADING...</div>;
    }

    return (
        <>
            <h1>Register a decision to donate</h1>
            <p>Use this form to recorder a decision to donate some or all off you organs and tissue. Fields marked * are mondatory</p>
            <form
                onSubmit={handleSubmit}
                style={{ display: "flex", flexDirection: "column" }}

            >
                <input
                    type="text"
                    name="firstName"
                    placeholder="Enter your name*"
                    required
                    onChange={handleForm} />

                <input
                    type="text"
                    name="lastName"
                    placeholder="Enter your lastname*"
                    required
                    onChange={handleForm} />

                <input
                    type="number"
                    name="age"
                    placeholder="Enter your age*"
                    required
                    onChange={handleForm} />

                <input
                    type="text"
                    name="bloodGroup"
                    placeholder="Enter yor blood group"
                    onChange={handleForm} />
              

                <input
                    type="text"
                    name="gender"
                    placeholder="Gender"
                    onChange={handleForm} />
                <button>Register</button>

                <Container>
                    <Row>
                        {donorsArray.map((donor) => {
                            return <Donor
                                key={donor.id}
                                donor={donor}
                                onDeleteButtonClick = {buttonControl}

                            />;
                        })}
                    </Row>
                </Container>





            </form>
        </>
    )
}

export default Donors;