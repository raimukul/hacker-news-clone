import React from 'react'
import { Container, Nav } from 'react-bootstrap'
import './Footer.css'

export default function Footer() {
    return (
        <div>
            <Container>
                <div>
                    <hr className='w-100 hrStyle'></hr>
                </div>
                <Nav as="ul" className='m-auto justify-content-center'>
                    <Nav.Item as="li">
                        <Nav.Link href="/">Guidelines</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link>|</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link eventKey="link-1">FAQ</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link>|</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link eventKey="link-2">Support </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link>|</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link eventKey="link-2">API</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link>|</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link eventKey="link-2"> Security  </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link>|</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link eventKey="link-2"> Legal </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link>|</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link eventKey="link-2"> Apply to YC </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link>|</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link eventKey="link-2"> Contact  </Nav.Link>
                    </Nav.Item>
                   
                </Nav>
                <div className='main m-auto justify-content-center pt-2'>
                    <div className="input-group search">
                        <span className='searchD p-auto'>Search : 	&nbsp; </span>
                        <input type="text" className="form-control" placeholder="Search"/>
                    </div>
                    </div>
            </Container>
        </div>
    )
}
