import React from 'react';

import Modal from './Modal';

import './styles/ClearModal.css'

export default function ClearModal (props) {
    return (
        <Modal modalOpen={props.modalOpen} handleModal={props.handleModal}>
            <p className="ClearModal__text">¿Estás seguro de borrar el contenido del editor?</p>
            <div className="ClearModal__buttons">
                <button onClick={props.handleModal} type="button" className="Modal__Button ClearModal__Cancel">Cancelar</button>
                <button onClick={props.handleClear} type="button" className="Modal__Button ClearModal__Clear">Borrar</button>
            </div>
        </Modal>
    )
}