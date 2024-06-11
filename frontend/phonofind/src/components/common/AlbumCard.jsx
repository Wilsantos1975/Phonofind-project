function AlbumCard({collection}) {


const {album_name, album_title, album_price, release_year} = collection;

    console.group(collection)
    return ( 
        <div className="album-card">    
            <h1>Album</h1>
            <p>{album_name}</p>
            <h2>{album_title}</h2>
            <h3>{album_price}</h3>
            <p>{release_year}</p> 
        </div>
     );
}

export default AlbumCard;