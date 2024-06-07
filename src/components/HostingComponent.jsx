import React from 'react'
import { Button, Card, Col, Container, Row } from "react-bootstrap";
let hostings = [
  {
    id: 1,
    title: 'Basic',
    useFor: "for very small businesses and freelancers.",
    price: '$25/mo',
    description_1: "Disk Space: 500 M.B",
    description_2: "Bandwidth: 500 G.B",
    description_3: "SubDomains: Unlimited",
    description_4: "Parked Domains: Unlimited",
    description_5: "E-mail Accounts: Unlimited",
    description_6: "Cpanel (control panel): Yes",
    description_7: "Money Back Guarantee: 14 Days",
    buttonTitle: "You will have 1 Gift",
    class:"hosting_card1"

  },
  {
    id: 2,
    title: 'Pro',
    useFor: "for Individuals that need sharing vlogs or need huge portfolio.",
    price: '$5/mo',
    description_1: "Disk Space: 3000 M.B",
    description_2: "Bandwidth: 3 TERA",
    description_3: "SubDomains: Unlimited",
    description_4: "Parked Domains: Unlimited",
    description_5: "E-mail Accounts: Unlimited",
    description_6: "Cpanel (control panel): Yes",
    description_7: "Money Back Guarantee: 14 Days",
    buttonTitle: "1 Gift per/mo for year",
    class:"hosting_card2"


  },
  {
    id: 3,
    title: 'Business',
    useFor: "for Team that need sharing and reporting.",
    price: '$8/mo',
    discount: '5% Discount during 2022',
    description_1: "Disk Space: 5000 M.B",
    description_2: "Bandwidth: 5 TERA",
    description_3: "SubDomains: Unlimited",
    description_4: "Parked Domains: Unlimited",
    description_5: "E-mail Accounts: Unlimited",
    description_6: "Cpanel (control panel): Yes",
    description_7: "Money Back Guarantee: 14 Days",
    buttonTitle: "3 Gifts per/mo for year",
    class:"hosting_card3"


  },
  {
    id: 4,
    title: 'Enterprise',
    useFor: "for large companies that need admins & security",
    price: '$12/mo',
    discount: '8% Discount during 2022',
    description_1: "Disk Space: 10000 M.B",
    description_2: "Bandwidth: 10 TERA",
    description_3: "SubDomains: Unlimited",
    description_4: "Parked Domains: Unlimited",
    description_5: "E-mail Accounts: Unlimited",
    description_6: "Cpanel (control panel): Yes",
    description_7: "Money Back Guarantee: 14 Days",
    buttonTitle: "Just Call Us",
    class:"hosting_card4"


  },

]



export default function HostingCompponent() {
  return (
    <div className="hosting">
      
      
          



      <Container className="hosting_container">
      <h2>Hosting Pricing</h2>
        <Row className="my-5">
          <div className='con'>      {hostings.map((hosting) => {
          return (
            <Col key={hosting.id} className="my-5">
           
              <Card  className= {hosting.class}
              >
              
                <Card.Body >
                  <Card.Title className="hosting_line" style={{
                    marginTop: '-18px',
                    fontSize: '24px',
                  position:"relative"}}>{hosting.title}</Card.Title>
                  <Card.Text style={{fontSize:'14px'}}>{hosting.useFor}</Card.Text>           
                  <Card.Title className='price'>{hosting.price}</Card.Title>
                  <Card.Text style={{margin:'0px',fontSize:'14px'}}>{hosting.description_1}</Card.Text>    
                  <Card.Text style={{margin:'0px', fontSize:'14px'}} >{hosting.description_2}</Card.Text>    
                  <Card.Text style={{margin:'0px' ,fontSize:'14px'}} >{hosting.description_3}</Card.Text>    
                  <Card.Text style={{margin:'0px' ,fontSize:'14px'}} >{hosting.description_4}</Card.Text>    
                  <Card.Text style={{margin:'0px' ,fontSize:'14px'}} >{hosting.description_5}</Card.Text>    
                  <Card.Text style={{margin:'0px' ,fontSize:'14px'}} >{hosting.description_6}</Card.Text>    
                  <Card.Text style={{margin:'0px' ,fontSize:'14px'}} >{hosting.description_7}</Card.Text>    
                  <button >{hosting.buttonTitle}</button>
                </Card.Body>
              </Card>



            </Col>
          );
        })}</div>

      </Row>
    </Container>




    </div>
  )
}
