import {Row, Col } from 'react-bootstrap';
import Title from './Title';

const Header = () => {
    return(
        <div className="justify-content-center pt-5 title-container">
            <div md={6}>
                <Title title="Tu lista de tareas "/>
            </div>
        </div>
    )
}
export default Header;