import React  from 'react';
import { ListGroup} from 'react-bootstrap';

function ThemeSwitcher () {
    return(
<ListGroup variant="flush">
  <ListGroup.Item><h4>Search</h4> if your property is effected by the Texas High-Speed Rail</ListGroup.Item>
  <ListGroup.Item><h4>Educate</h4> yourself and lookup the value of your property with the CMA tool</ListGroup.Item>
  <ListGroup.Item><h4>Connect</h4> with High Speed Chat to connect with property owners effected</ListGroup.Item>
  <ListGroup.Item><h4>Contact</h4> your local elected officials and voice your concerns with the project</ListGroup.Item>
</ListGroup>
    )
}

export default ThemeSwitcher;