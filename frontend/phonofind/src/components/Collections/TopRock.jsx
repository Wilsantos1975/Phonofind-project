import AlbumCard from "../common/AlbumCard";


function TopRock ({collections}) {
    
    let filteredCollections = collections.filter((collection) => collection.album_genre === "Rock");

    console.log(filteredCollections, collections);
    return ( 

        <div>
            <h1>TOP ROCK</h1>
            {filteredCollections.map((collection) => {
                return (
                <AlbumCard key={collection.album_id} collection={collection} />
                );  
            }
            )}
            </div>
     );
}

export default TopRock;