import { useEffect, useRef, type FC, type ReactNode } from "react";
import { createPortal } from "react-dom"
import classes from "./Modal.module.css"

const Modal: FC<{ children: ReactNode, onClose: () => void }> = ({ children, onClose }) => {
    const dialog = useRef<HTMLDialogElement>(null)

    useEffect(() => {
        if (dialog.current){
            dialog.current.showModal()

            return () => {
                dialog.current?.close()
            }
        }
    }, [])

    return createPortal(
        <dialog className={classes.modal} ref={dialog} onClose={onClose}>
            {children}
        </dialog>, document.getElementById('modal') as HTMLElement
    )
}

export default Modal