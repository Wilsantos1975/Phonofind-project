import { useState, useEffect } from "react";
import Vinyl from "../components/Vinyl";

const API = import.meta.env.VITE_BASE_URL;

function Home() {
  const [vinylsData, setVinylsData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);


  const fetchData = async () => {
    try {
      const response = await fetch(`${API}/vinyls`);

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const data = await response.json();
      setVinylsData(data);
      console.log(vinylsData)
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
          {vinylsData.map((vinyl) => (
            <Vinyl key={vinyl.id} vinyl={vinyl} />
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
