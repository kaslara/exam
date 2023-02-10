import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";

interface DetailsProps {
  
}
 
const Details: React.FC<DetailsProps> = () => {
  const [details, setDetail] = useState<any>();
  const {user} = useContext(UserContext);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/details")
    .then(res => res.json())
    .then(data => setDetail(data))
  }, []);
  return (
    <div>
    <h1>name: {user.name}</h1>
    
    </div>
   );
}
 
export default Details;
