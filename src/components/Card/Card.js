// Import React and CSS
import React from 'react';
import styles from './Card.module.css';

const Card = (props) => {
    const { children} = props;
    return (
        <div className={ styles.cardstyle }>
            { children }
        </div>
    );
}

export default Card;