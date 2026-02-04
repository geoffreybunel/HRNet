import React, { useEffect, useId } from "react";

function Modal({ isOpen, onClose, children, title, closeOnOverlayClick = true, showCloseButton = true, closeOnEsc = true }) {
    const titleId = useId();

    // Lock Scroll
    useEffect(() => {
        const originalOverflow = document.body.style.overflow;

        if (isOpen === true) {
            document.body.style.overflow = 'hidden'
        }

        return () => {
            document.body.style.overflow = originalOverflow;
        };

    }, [isOpen]);

    // Escape to Close
    useEffect(() => {
        if (!isOpen || !closeOnEsc) return;

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') onClose();
        };

        document.addEventListener('keydown', handleKeyDown)

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }

    }, [isOpen, closeOnEsc, onClose])

    if (!isOpen) return null; // Nothing to render if modal is close

    return (
        <div className="overlay"  onClick={closeOnOverlayClick ? onClose : undefined} aria-modal="true" role="dialog" aria-labelledby={title ? titleId : undefined}>
            <div className="modal-content"  onClick={(e) => e.stopPropagation()}>
                {title && <h2 id={titleId}>{title}</h2>}

                {children}

                {showCloseButton && (
                    <button type="button" className="modal-close" onClick={onClose}>Close</button>
                )}

            </div>
        </div>
    );
}

export default Modal;