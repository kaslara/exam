import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IPhotos } from "../../interfaces/IPhoto";



const Photos: React.FC = () => {
  const [photo, setPhoto] = useState<IPhotos>()
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
    .then(res => res.json())
    .then(data => setPhoto(data))
  })

  return (
    <>

      <button
        className="px-4 py-1 ring-2 ring-blue-500 rounded-md text-gray-600 font-bold mb-2 hover:bg-blue-500 hover:text-white shadow-md"
        onClick={goBack}
      >
        Back
      </button>
      <div className="grid grid-cols-3 gap-3">photo: {photo?.albumId}</div>
    </>
  );
};

export default Photos;
