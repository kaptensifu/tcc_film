import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./components/Login.js";
import FilmList from "./components/FilmList.js";
import FilmDetail from "./components/FilmDetail.js";
import AddFilm from "./components/AddFilm.js";
import UserList from "./components/UserList.js";
import Register from "./components/Register.js";
import AddRating from "./components/AddRating.js";
import { useAuth } from "./auth/AuthProvider.js";
import { setupInterceptors } from "./utils/AxiosInterceptor.js";
import { useEffect, useRef } from "react";


function App() {
  const { accessToken, setAccessToken, isAuthenticated } = useAuth();
  const interceptorsSetup = useRef(false);
  
  // Setup axios interceptors only once when authenticated
  useEffect(() => {
    // Only setup interceptors if we have a token and it hasn't been setup already
    if (accessToken && !interceptorsSetup.current) {
      console.log("Setting up interceptors in App.js");
      setupInterceptors(accessToken, setAccessToken);
      interceptorsSetup.current = true;
    }
  }, [accessToken, setAccessToken]);

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="films" element={<FilmList/>}/>
        <Route path="films/:id" element={<FilmDetail/>}/>
        <Route path="add-film" element={<AddFilm/>}/>
        <Route path="add-rating/:id" element={<AddRating/>}/>
        <Route path="users" element={<UserList/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
