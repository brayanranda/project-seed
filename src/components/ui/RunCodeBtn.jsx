import { useState } from "react";
import ModalPythonTutor from "./ModalPythonTutor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

export default function RunCodeBtn({name="", runner = "" }) {
    const [modal, setModal] = useState(false);

    const showModal = () => {
        setModal(!modal)
    }

    return (
        <>
            {
                modal && 
                    <ModalPythonTutor modal={modal} showModal={showModal} url={runner} />
            }
            <button
                onClick={() => { showModal() }}
                className='bg-cyan-500 py-2 px-4 rounded-md font-black duration-300 hover:scale-105 transform hover:bg-yellow-400 hover:text-yellow-950'
            >
                <FontAwesomeIcon icon={faPlayCircle} className='me-2' />
                Run code | {name}
            </button>
        </>
    )
}