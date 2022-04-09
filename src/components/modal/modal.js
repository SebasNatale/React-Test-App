import * as React from "react";
import { createPortal } from "react-dom";
import './modal.scss'

const Modal = ({isVisible, hideModal, eventIndex, eventValue, eventWrapper}) => {
    const events = JSON.parse(localStorage.getItem(eventWrapper))

    const handleEdit = () => {
        // Right now, because the data is being artificially loaded from the Card component,
        // every time this is used, the app just re-loads the default data, so it looks like nothing happened.
        //
        // Comment the item setters in the Card component to test this functionality.
        const newValue = prompt("Please enter your new event")
        if(newValue === "" || newValue === null) {
            alert("You must write something!")
            handleEdit()
        } else {
            events.forEach((item, index) => {
                if(item.content === eventValue) {
                    events.splice(index, 1, {
                        "id": item.id,
                        "content": newValue
                    })
                    localStorage.setItem(eventWrapper, JSON.stringify(events))
                    hideModal()
                }
            })
        }
    }
    const handleDelete = () => {     
        // Right now, because the data is being artificially loaded from the Card component,
        // every time this is used, the app just re-loads the default data, so it looks like nothing happened.
        //
        // Comment the item setters to test this functionality.
        events.forEach((item, index) => {
            if(item.content === eventValue) {
                events.splice(index, 1)
                localStorage.setItem(eventWrapper, JSON.stringify(events))
                hideModal()
            }
        })
    }

    return isVisible
        ? createPortal(
            <React.Fragment>
                <div className="modal-overlay">
                    <div aria-modal={true} aria-hidden={true} tabIndex={-1} role="dialog">
                        <h5>Edit or delete item</h5>
                        <span>
                            "<i>{eventValue}</i>"
                        </span>
                        <div className="edit-buttons">
                            <button className="btn btn-primary" onClick={handleEdit}>Edit</button>
                            <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
                        </div>
                    </div>
                    <button className="btn btn-success" onClick={hideModal}>Close</button>
                </div>
            </React.Fragment>,
            document.body
        )
    : null;
};

export default Modal;