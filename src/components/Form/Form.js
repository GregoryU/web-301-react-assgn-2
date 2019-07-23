// Import React and CSS
import React from 'react';
import styles from './Form.module.css';

const Form = (props) => {
    const { children } = props;

    const handleSubmit = (event) => {
        event.preventDefault();
    }
    
    return (
        <form onSubmit={(event) => handleSubmit(event)}>
            { children }
        </form>
    );
}

export default Form;