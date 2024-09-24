import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AlbumCard from "../components/common/AlbumCard";


const API = import.meta.env.VITE_BASE_URL;

function DisplayAlbum() {
  const { id } = useParams();
  const [album, setAlbum] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchAlbum = async () => {
    try {
      const response = await fetch(`${API}/albums/`);
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      console.log(data);
      setAlbum(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAlbum();
  }, [id]);

const renderSingleAlbum = () => {   
    if (loading) {
      return <div className="loading message">Loading...</div>;
    } else if (error) {
      return <div className="error message">{error}</div>;
    } else {
      return (
        <div>
         <div className="">
            <h1 className="text-3xl font-bold">{album.album_title}</h1>

         </div>
        </div>
      );
    }
  } 


  return (
    <div>
    <h1 className="p-6 text-xl ">Single Album</h1>
    <div className=" text-3xl ">{renderSingleAlbum()}</div>

    </div>
  );
}

export default DisplayAlbum;
