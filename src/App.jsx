
import './App.css'
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Commandes from "./pages/Commandes.jsx";
import Panier from "./pages/Panier.jsx";
import Admin from "./pages/Panier.jsx";
import Layout from "./Layout.jsx";


function App() {
  //const [count, setCount] = useState(0)

  return (
      <Router>
          <Layout>
              <Routes>
                  <Route path="/" element={<Home /> } />
                  <Route path="/commandes" element={<Commandes /> } />
                  <Route path="/panier" element={<Panier /> } />
                  <Route path="/admin" element={<Admin /> } />

              </Routes>
          </Layout>

      </Router>

  )
}

export default App
