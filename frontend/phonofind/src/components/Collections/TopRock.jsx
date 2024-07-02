import AlbumCard from "../common/AlbumCard";


function TopRock ({collections}) {
    
    let filteredCollections = collections.filter((collection) => collection.album_genre === "Rock");

    console.log(filteredCollections, collections);
    return ( 

        <div>
            <h1 className="text-5xl text-center text-blue-700">TOP ROCK</h1>
            <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-9 gap-4">
            {filteredCollections.map((collection) => {
                return (
                <AlbumCard key={collection.album_id} collection={collection} />
                );  
            }
            )}
                </div>
            </div>
     );
}

export default TopRock;