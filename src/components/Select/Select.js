// Import React and CSS
import React from 'react';
import styles from './Select.module.css';


const Select = (props) => {
    const { selectLabel, selectId, selectName, optionOne, optionTwo, optionThree, optionFour, value, onChange } = props;
    return (
        <div className={styles.divselectstyle}>
            <label htmlfor={selectId}>{selectLabel}</label>
            <select id={selectId} name={selectName} className={styles.selectstyle} value={value} onChange={onChange}>
                <option value={optionOne}>{optionOne}</option>
                <option value={optionTwo}>{optionTwo}</option>
                <option value={optionThree}>{optionThree}</option>
                <option value={optionFour}>{optionFour}</option>
            </select>
        </div>
    );
}

export default Select;