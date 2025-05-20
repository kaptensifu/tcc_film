import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./components/Login.js";
import FilmList from "./components/FilmList.js";
import FilmDetail from "./components/FilmDetail.js";
import AddFilm from "./components/AddFilm.js";
import UserList from "./components/UserList.js";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="films" element={<FilmList/>}/>
        <Route path="films/:id" element={<FilmDetail/>}/>
        <Route path="add-film" element={<AddFilm/>}/>
        <Route path="users" element={<UserList/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
