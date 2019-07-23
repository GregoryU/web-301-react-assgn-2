// Import React and CSS
import React from 'react';
import styles from './Textarea.module.css';


const Textarea = (props) => {

    const { textareaLabel, textareaId, textareaName, value, onChange } = props;
    return (
        <div className={styles.divtextareastyle}>
            <label htmlfor={textareaId}>{textareaLabel}</label>
            <textarea
                id={textareaId}
                name={textareaName}
                class={styles.textareastyle}
                rows="4"
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

export default Textarea;