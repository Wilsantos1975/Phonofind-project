

function Vinyl({vinyl}) {
    return (
        <div>
            <h1>Vinyl details</h1>
            <h2>{vinyl.artist}</h2>
            <h3>{vinyl.title}</h3>
            <p>{vinyl.release_year}</p>
        </div>
    )
}

export default Vinyl;