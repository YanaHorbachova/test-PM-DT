import React from 'react';
import ReactDOM from 'react-dom';
import {ReactComponent as Close} from '../../icon/close.svg'

import s from './Modal.module.css'; 
 
 const modalRoot = document.querySelector('#modal-root');
 
 const Modal = ({children, Open, toggle}) => ReactDOM.createPortal(
    <React.Fragment>
        <div className={s.modalBackdrop}>
            <div className={s.modalContent}>
                <button type="button" onClick={toggle} className={s.buttonClose}>
                    <Close/>
                </button>
                {children}
            </div>
        </div>
    </React.Fragment>,modalRoot)




  export default Modal;