import React from 'react';

import Modal from './Modal';

export default function DownloadedModal (props) {
    return (
        <Modal modalOpen={props.modalOpen} handleModal={props.handleModal} >
            <p style={{width: '100%', display: 'flex', justifyContent: 'center'}} className="DownloadedModal__text">¡Archivo descargado!</p>
        </Modal>
    )
}
