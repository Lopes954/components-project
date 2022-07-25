import { useEffect, useState } from "react"
import "./Modal.css"

export default function Modal() {
    const [modal, setModal] = useState(false);
    const toggleModal = ()=>{
        setModal(!modal)

    }


  return (
    <>

    <button className="btn-modal" onClick={toggleModal}>OPen</button>
{modal &&(
    <div className="overlay">
        <div className="modal">
            <div className="modal-content">
                <h2>hello modal</h2>
                <p>jlkfrjghfgfgjkljglfkjgvlkfjglkfjglkfjglfjkglkfjvkfjglkfjglkfjglkfjglkfjglkfjglfksg</p>

                <button 

                onClick={toggleModal}
                className="close-modal">close</button>
            </div>

        </div>
        
    </div>
)}
    </>

)}
