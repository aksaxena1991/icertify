import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap"
import { toAbsoluteUrl } from "../../utils"
import "./_Header.style.scss"


const HeaderComponent = () => {
    return(<Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#">
      <img
        src={toAbsoluteUrl('_iCertify/assets/img/logo.web')}
        width="50"
        height="50"
        className="d-inline-block align-top"
        alt="iCertify logo"
      />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          
          <NavDropdown title="Free Practice Tests" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            
          </NavDropdown>
          
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>)
}
export default HeaderComponent