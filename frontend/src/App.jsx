import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Navbar from "./Components/Navbar";
import Login from "./Components/Login"
import Register from './Components/Register';
import { Artists } from './Components/Artists';
import { Songs } from './Components/Songs';
import { AddSong } from './Components/AddSong';
import { AddArtist } from './Components/AddArtist';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/songs" element={<Songs />} />
          <Route path="/addsong" element={<AddSong />} />
          <Route path="/addartist" element={<AddArtist />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
