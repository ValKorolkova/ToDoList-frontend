import { FiEdit3 } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

export const MyLists = ({ text, updatingInInput, deleteList}) => {

    return(
        <div >
            <p className="myList task">{ text }</p>
            <div className="iconConteiner">
                <FiEdit3 className="icon" onClick={updatingInInput} />
                <RiDeleteBin6Line className="icon" onClick={deleteList} />
            </div>
        </div>
       

    )
}