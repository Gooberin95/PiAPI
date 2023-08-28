import React from 'react';
import Button from 'react-bootstrap/Button';
function MyButton(props) {
	return <Button variant="primary"> Hi, {props.text} I am a Car!</Button>
}

export default MyButton;

