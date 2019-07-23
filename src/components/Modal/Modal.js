// Import React and CSS
import React from 'react';
import styles from './Modal.module.css';

const Modal = (props) => {

    const { modalTitle, modalName, modalEmail, modalTopic, modalContent, children } = props;
    return (
        <div className={styles.modalcontainer}>
            <div className={styles.modalarea}>
            <h4>{modalTitle}</h4>
            <div className={ styles.modalitem }>Name: {modalName}</div>
            <div className={ styles.modalitem }>Email: {modalEmail}</div>
            <div className={ styles.modalitem }>Email: {modalTopic}</div>
            <div className={ styles.modalitem }>Topic: {modalContent}</div>
            { children }
            </div>
        </div>
    );
}

export default Modal;