import { useState, useEffect } from "react";
import Collections from "../components/Collections/Collections";

const API = import.meta.env.VITE_BASE_URL;

function Home() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [collections, setCollectionsData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(`${API}/albums`);

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const data = await response.json();
      // setAlbumsData(data);
      // console.log(data);
      setCollectionsData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(); // Call the function inside useEffect
  }, []);

  const renderAlbums = () => {
    if (loading) {
      return <div className="loading message">Loading...</div>;
    } else if (error) {
      return <div className="error message">{error}</div>;
    } else {
      return (
        <div>
          <Collections collections={collections} />
        </div>
      );
    }
  };

  return (
    <div>
      <h1 className="p-6 text-xl ">Phonofind</h1>
      <h1 className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        You are in the home page , this is going to have different collections
        of vinyls (components)
      </h1>
      <div className=" text-3xl ">{renderAlbums()}</div>
    </div>
  );
}

export default Home;
