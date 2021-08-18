import React from 'react';

import './styles/Modal.css';

const Modal = (props) => {
    if (!props.modalOpen) {
        return null;
    }
    return (
        <div className="Modal__container">
            <div className="Modal">
                <div className="CloseModal__button-container">
                    <button className="Modal__Button CloseModal__button" onClick={props.handleModal}>
                        <i id="CloseModal" className="CloseModal fas fa-times"></i>
                    </button>
                </div>
                {props.children}
            </div>
        </div>
    );
}

export default Modal;