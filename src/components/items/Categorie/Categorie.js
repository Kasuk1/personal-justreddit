
export const Categorie = ({categorie}) => {

    return (
        <div className="categorie" style={{ backgroundImage: `linear-gradient(32.83deg, rgba(0, 0, 0, 0.25) 36.35%, rgba(0, 0, 0, 0.01) 78.18%),url(${categorie.img})` }}>
            <span className="categorie__name">{categorie.name}</span>
        </div>
    )
}
