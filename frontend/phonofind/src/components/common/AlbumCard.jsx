function AlbumCard({ collection }) {
  const { album_title, album_price, album_release_year, album_genre, album_condition } =
    collection;
  // let filteredCollections = collections.filter((collection) => collection.album_genre === "Rock");

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full h-64 object-cover" src="https://png.pngtree.com/png-vector/20231016/ourmid/pngtree-vinyl-disc-png-image_10188179.png" alt={album_title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 truncate">{album_title}</div>
        {/* <p className="text-gray-700 text-base mb-2">{album_artist}</p> */}
        <p className="text-gray-600 text-sm mb-2">{album_genre} • {album_release_year}</p>
        <p className="text-gray-600 text-sm mb-2">Condition: {album_condition}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-bold text-gray-900">${album_price}</span>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}



export default AlbumCard;
