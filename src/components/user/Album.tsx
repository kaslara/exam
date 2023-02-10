import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Layout from "../../containers/Layouts";
import { IAlbum } from "../../interfaces/IAlbum";

interface AlbumProps {
}
 
const Album: React.FC<AlbumProps> = () => {
    const [album, setAlbum] = useState<IAlbum[]>([]);

    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/albums")
      .then(res => res.json())
      .then(data => setAlbum(data))
    }, []);
    return (
    
      <div>
        {album.map(a => <div>{a.title}</div>)}
      </div>
      
     );
     <Outlet />
  }

 
export default Album;
