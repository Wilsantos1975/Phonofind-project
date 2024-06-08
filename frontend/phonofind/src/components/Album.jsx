

function Album({album}) {
    return (
        <div>
            
            <h1>Album</h1>
            <h2>{album.album_title}</h2>
            <h3>{album.album_price}</h3>
            <p>{album.release_year}</p>
        </div>
    )
}

export default Album;