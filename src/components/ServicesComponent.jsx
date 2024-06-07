import { Button, Card, Col, Container, Row } from "react-bootstrap";
import React from 'react'

export default function Services() {
  const services = [
    {
      id: 1,
      img_1: "./public/service/brandingpattren.png",
      img_2:"./public/service/brandingOrange.png",
      title: 'Branding',
      Definition: "The brand is hope, It is also the source of inspiration for everything you do when youdeal with your customers and that is the important and emotionalthing. Your Brand and Visual identity represents an intrinsic Valu  to your company.",
      Provide: "In focal X agency, we provide:",
      provide_1: "Visual identity design.",
      provide_2: "Define Brand Identity.",
      provide_3: "Define Brand personality.",
      provide_4: "Building Your brand strategy.",
      provide_5: "Market research and competitors study.",
      footer: "We walk with you from A to Z.",
      border_radius: "ser_1"

      }
      ,
    {
      id: 2,
      img_1: "./public/service/markrtingpattren.png",
      img_2: "./public/service/markiting.png",
      title: 'Marketing',
      Definition: "Talk to your customers and tell them you and your company's story through us the way you want.Let us plan the content that will bring your audience closer to you.",
      Provide: "In our marketing agency, we provide:",
      provide_1: "E-mail marketing.",
      provide_2: "Affiliate marketing.",
      provide_3: "Influencer marketing.",
      provide_4: "Market research and Analysis",
      provide_5: "App store optimization ( ASO ).",
      provide_6: "Search engine Marketing ( SEM ).",
      border_radius: "ser_2"
    },
   

  ];

  return (
    <Container className="services_container">
      <h2>Our Services</h2>
      <Row className="my-5">
        {services.map((service) => {
          return (
            <Col key={service.id} className="my-5" lg="6" md="12" sm="12">
          
              <Card  className= {service.border_radius}
              >
              
                <Card.Body >
                <Card.Img className="img_1" src={service.img_1} />
              
                  <Card.Title className="service_line" style={{
                    marginBottom: '23px',
                    fontSize: '24px',
                  position:"relative"}}>{service.title}</Card.Title>
                  <Card.Text>{service.Definition}</Card.Text>
                  <Card.Title>{service.Provide}</Card.Title>
                  <Card.Text style={{

marginBottom:'17px',
    margin: '0px',
    color: '#8a8a8a',
    fontSize: '16px',
    fontWeight: '100'
                    }}>{service.provide_1}</Card.Text>
                  <Card.Text style={{

marginBottom:'17px',
    margin: '0px',
    color: '#8a8a8a',
    fontSize: '16px',
    fontWeight: '100'
                    }}>{service.provide_2}</Card.Text>
                  <Card.Text style={{

marginBottom:'17px',
    margin: '0px',
    color: '#8a8a8a',
    fontSize: '16px',
    fontWeight: '100'
                    }}>{service.provide_3}</Card.Text>
                  <Card.Text style={{

marginBottom:'17px',
    margin: '0px',
    color: '#8a8a8a',
    fontSize: '16px',
    fontWeight: '100'
                    }}>{service.provide_4}</Card.Text>
                  <Card.Text style={{

marginBottom:'17px',
    margin: '0px',
    color: '#8a8a8a',
    fontSize: '16px',
    fontWeight: '100'
                    }}>{service.provide_5}</Card.Text>
                  <Card.Title style={{ marginTop: '23px' }}>{service.footer}</Card.Title>
                  <Card.Img 
                  className="img_2"  src={service.img_2} />
                </Card.Body>
              </Card>



            </Col>
          );
        })}
      </Row>
    </Container>
  );
}