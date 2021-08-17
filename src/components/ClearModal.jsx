import React from 'react';

import Modal from './Modal';

const ClearModal = (props) => {
    return (
        <Modal modalOpen={props.modalOpen} handleModal={props.handleModal}>
            <p>¿Estás seguro de borrar el contenido del editor?</p>
            <button>Cancelar</button>
            <button>Borrar</button>
        </Modal>
    )
}

export default ClearModal;