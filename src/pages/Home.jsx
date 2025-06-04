import { useEffect, useState } from "react";
import {getPizzas} from "../services/api/pizzaApi.jsx";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Home() {
    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        const fetchPizzas = async () => {
            const data = await getPizzas();
            setPizzas(data);
        };
        fetchPizzas();
    }, []);

    return (
        <Container className="mt-4">
            <h2 className="mb-4 text-center text-warning">Nos délicieuses pizzas</h2>
            <Row>
                {pizzas.map((pizza) => (
                    <Col md={4} sm={6} xs={12} key={pizza.id} className="mb-4">
                        <Card className="h-100 shadow-sm">
                            {/*<Card.Img variant="top" src={pizza.image_url} alt={pizza.nom} />*/}
                            <Card.Body>
                                <Card.Title>{pizza.nom}</Card.Title>
                                <Card.Text>{pizza.description}</Card.Text>
                                <Card.Text className="fw-bold text-danger">{pizza.prix} €</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

