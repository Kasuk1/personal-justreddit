import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export const ButtonReturn = ({ handleReturn }) => {
    return (
        <button className="button-return" onClick={handleReturn}><FontAwesomeIcon icon={faArrowLeft} /> Return</button>
    )
}
