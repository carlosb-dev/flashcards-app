import PropTypes from 'prop-types';
import './Modal.css';
import { useContext } from 'react';
import { AppContext } from '../App';

function Modal(props) {

    const [openModal] = useContext(AppContext);
    

    if (openModal == true) {
        return (
            <div className='modal'>
                <form className="modal-container">
                    {props.children}
                </form>
            </div>
        )
    }
}

Modal.propTypes = {
    children: PropTypes.node,
};

export default Modal;