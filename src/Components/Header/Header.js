import {Row, Col } from 'react-bootstrap';
import Title from './Title';

const Header = () => {
    return(
        <Row className="justify-content-center mt-5">
            <Col md={6}>
                <Title title="ToDoList"/>
            </Col>
        </Row>
    )
}
export default Header;