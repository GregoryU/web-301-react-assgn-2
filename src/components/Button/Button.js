// Import React and CSS
import React from 'react';
import styles from './Button.module.css';

const Button = (props) => {
    const { buttonText } = props;
    return (
        <button className={ styles.buttonstyle }>
            { buttonText }
        </button>
    );
}

export default Button;