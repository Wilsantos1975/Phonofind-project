import { useState, useEffect } from "react";
import Album from "../components/Album";

const API = import.meta.env.VITE_BASE_URL;

function Home() {
  const [albumsData, setAlbumsData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);


  const fetchData = async () => {
    try {
      const response = await fetch(`${API}/albums`);

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const data = await response.json();
      setAlbumsData(data);
      console.log(albumsData)
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(); // Call the function inside useEffect
    
  }, [Home]);

  const renderVinyls = () => {
    if (loading) {
      return <div className="loading message">Loading...</div>;
    } else if (error) {
      return <div className="error message">{error}</div>;
    } else {
      return (
        <div>
          <h1>Vinyls</h1>
          {albumsData.map((album) => (
            <Album key={album.id} album={album} />
          ))}
        </div>
      );
    }
  };

  return (
    <div>
      <h1 className="p-6 text-xl ">Phonofind</h1>
      <div className=" text-3xl ">{renderVinyls()}</div>
      <h1 className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        You are in the home page , this is going to have different sections
        (components)
      </h1>
    </div>
  );
}

export default Home;
