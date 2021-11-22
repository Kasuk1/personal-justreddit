import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const FilterOption = ({name, icon}) => {
    return (
        <div className="filter__option" role="button">
            <FontAwesomeIcon icon={icon} className="filter__option--icon" />
            <p className="filter__option--text">{name}</p>
        </div>
    )
}
