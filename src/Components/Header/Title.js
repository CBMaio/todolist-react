import { PencilSquare } from 'react-bootstrap-icons';

const Title = ({ title }) => {
  return <h1> {title} <PencilSquare className="ml-3"/></h1>;
};

export default Title;
