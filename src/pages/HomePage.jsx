import React, { Component } from "react";
import { Container } from "react-bootstrap";
import ContactForm from "../components/contact-form/ContactForm";
import Header from "../components/header/Header";
import ContactCard from "../components/card/ContactCard";
import Footer from "../components/footer/Footer";
export class HomePage extends Component {
  render() {
    return (
      <Container>
        <ContactForm />
        <Header />
        <ContactCard />
        <Footer />
      </Container>
    );
  }
}

export default HomePage;
