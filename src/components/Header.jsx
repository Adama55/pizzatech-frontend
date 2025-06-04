import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";

function Header() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Simuler l'état utilisateur (à remplacer par un vrai appel)
        const fetchUserData = async () => {
            const userData = {
                isAuthenticated: true,
                isAdmin: true,
                name: "Jean Pizza",
            };
            setUser(userData);
        };
        fetchUserData();
    }, []);

    const handleLogout = () => {
        // Simule la déconnexion
        setUser(null);
    };

    return (
        <Navbar expand="lg" className="bg-dark navbar-dark shadow-sm py-3" sticky="top">
            <Container fluid>
                <Navbar.Brand href="/" className="text-warning fw-bold fs-4">
                    🍕 PizzaTech
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="main-navbar" />
                <Navbar.Collapse id="main-navbar">
                    <Nav className="ms-auto align-items-center">
                        <Nav.Link href="/" className="text-light mx-2">Accueil</Nav.Link>
                        <Nav.Link href="/menu" className="text-light mx-2">Menu</Nav.Link>
                        <Nav.Link href="/commandes" className="text-light mx-2">Commandes</Nav.Link>
                        <Nav.Link href="/panier" className="text-light mx-2 d-flex align-items-center">
                            <FaShoppingCart className="me-1" /> Panier
                        </Nav.Link>

                        {user?.isAdmin && (
                            <Nav.Link href="/admin" className="text-danger fw-semibold mx-2">
                                Admin
                            </Nav.Link>
                        )}

                        {user?.isAuthenticated ? (
                            <>
                                <Nav.Link href="/profil" className="text-light mx-2 d-flex align-items-center">
                                    <FaUserCircle className="me-1" /> {user.name}
                                </Nav.Link>
                                <Nav.Link onClick={handleLogout} className="text-light mx-2">
                                    Déconnexion
                                </Nav.Link>
                            </>
                        ) : (
                            <>
                                <Nav.Link href="/login" className="text-light mx-2">Connexion</Nav.Link>
                                <Nav.Link href="/register" className="text-light mx-2">Créer un compte</Nav.Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
