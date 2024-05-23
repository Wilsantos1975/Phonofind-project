import { useEffect , useState} from "react";
import Vinyl from "./Vinyl";

const API = import.meta.env.VITE_BASE_URL;

function getVinyls() {
    console.log(API)
  const [vinyls, setVinyls] = useState([]);

  const fetchData = async () => {

  const response = await fetch(`${API}/vinyls`);

  console.log(response)
  };

  useEffect(() => {
    fetchData(); // Call the function inside useEffect
  }, []); // Empty dependency array to fetch data on component mount

  return (
    <div>
      <h1>Vinyls</h1>
      {vinyls.map((vinyl) => (
        <Vinyl key={vinyl.id} vinyl={vinyl} />
      ))}
    </div>
  );
}

export default getVinyls;