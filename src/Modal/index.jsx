import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AppContext } from '../App';
import './Modal.css';

function Modal(props) {

    const {openModal} = useContext(AppContext);
    

    if (openModal == true) {
        return (
            <div className='modal'>
                <div className="modal-container">
                    {props.children}
                </div>
            </div>
        )
    }
}

Modal.propTypes = {
    children: PropTypes.node,
};

export default Modal;