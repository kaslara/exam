import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../components/homepage";
import UserPage from "../components/user";
import Album from "../components/user/Album";
import Details from "../components/user/Details";
import Photos from "../components/user/Photos";
import Todos from "../components/user/todos";


const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
          <Route path="/user/:id" element={<UserPage />}>
            <Route>
          <Route path="albums" element={<Album />}/>
          <Route path="details" element={<Details/>}/>
          <Route path="photos" element={<Photos />}/>
          <Route path="todos" element={<Todos />}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
