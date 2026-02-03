import React, { useEffect } from "react";

function Modal({ isOpen, onClose, children, closeOnOverlayClick = true, showCloseButton = true }) {
    useEffect(() => {
        if (isOpen === true) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'visible'
        }

        return () => {
            document.body.style.overflow = 'visible'
        }

    }, [isOpen])

    useEffect(() => {
        if (!isOpen) return

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                onClose()
            }
        }

        document.addEventListener('keydown', handleKeyDown)

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }

    }, [isOpen, onClose])

    if (!isOpen) return null; // rien n’est rendu si la modale est fermée

    return (
        <div className="overlay"  onClick={closeOnOverlayClick ? onClose : undefined}>
        <div className="modal-content"  onClick={(e) => e.stopPropagation()}>
            {children}

            {showCloseButton && (
                <button type="button" className="modal-close" onClick={onClose}>Close</button>
            )}

        </div>
        </div>
    );
}

export default Modal;