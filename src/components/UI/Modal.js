import ReactDOM from "react-dom"
import styles from "./Modal.module.css"
import { Fragment } from "react"

const Backdrop = props => {
    return <div className={styles.backdrop} onClick={props.onClose}></div>
 }

const ModalOverlay = props => { 
    return <div className={styles.modal}>
        <div className={styles.overlay}>{props.children}</div>
    </div>
}
const portalElement = document.getElementById("overlays")

const Modal = props => { 
    return (<Fragment>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </Fragment>)

}
export default Modal