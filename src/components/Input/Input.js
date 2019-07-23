// Import React and CSS
import React from 'react';
import styles from './Input.module.css';

const Input = (props) => {

    const { inputId, inputLabel, inputName, inputType, value, onChange } = props;
    return (
        <div className={styles.divinputstyle}>
            <label htmlfor={inputId}>{inputLabel}</label>
            <input
                id={inputId}
                name={inputName}
                type={inputType}
                class={styles.inputstyle}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

export default Input;