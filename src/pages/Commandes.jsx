import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPizza } from "../services/api/pizzaApi";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Commandes() {
    const [pizza, setPizza] = useState({
        nom: "",
        description: "",
        prix: "",
        image_url: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPizza((prevPizza) => ({
            ...prevPizza,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createPizza(pizza);
            navigate("/");
        } catch (error) {
            console.error("Erreur lors de l'ajout de la pizza:", error);
        }
    };

    return (
        <Container className="mt-4">
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <h2 className="mb-4 text-center">Ajouter une nouvelle Pizza</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Nom</Form.Label>
                            <Form.Control
                                type="text"
                                name="nom"
                                value={pizza.nom}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                name="description"
                                value={pizza.description}
                                onChange={handleChange}
                                rows={3}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Prix</Form.Label>
                            <Form.Control
                                type="number"
                                name="prix"
                                value={pizza.prix}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>URL de l'image</Form.Label>
                            <Form.Control
                                type="text"
                                name="image_url"
                                value={pizza.image_url}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="w-100">
                            Ajouter la Pizza
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
