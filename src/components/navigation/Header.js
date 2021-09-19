import React from 'react'
import { Container } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import './Header.css'

export default function Header() {
    return (
        <div className='pt-2'>
            <Container>
                <Nav defaultActiveKey="/" as="ul" className='Header'>
                    <Navbar.Brand href="/" className='font-weight-bold'>
                        <img
                            alt=""
                            src="https://news.ycombinator.com/y18.gif"
                            width="30"
                            height="30"
                            className="d-inline-block align-top logo"
                        />
                        	&nbsp;Hacker News
                    </Navbar.Brand>
                    <Nav.Item as="li">
                        <Nav.Link href="/home">new</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link>|</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link eventKey="link-1">past</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link>|</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link eventKey="link-2">comments</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link>|</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link eventKey="link-2">ask</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link>|</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link eventKey="link-2"> show </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link>|</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link eventKey="link-2">  jobs  </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link>|</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link eventKey="link-2"> submit </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </div>
    )
}
