import React, { useMemo } from 'react';
import AlbumCard from "../common/AlbumCard";

function TopRock({ collections }) {
    const filteredCollections = useMemo(() => 
        collections.filter((collection) => collection.album_genre === "Rock"),
        [collections]
    );

    return (
        <div>
            <h1 className="text-5xl text-center text-blue-700">TOP ROCK</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {filteredCollections.map((collection) => (
                    <AlbumCard key={collection.album_id} collection={collection} />
                ))}
            </div>
        </div>
    );
}

export default TopRock;