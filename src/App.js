import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
// import { BrowserRouter as Router, BrowserRouter, Route } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useContext } from "react";
import { Context } from "./context/Context";


function App() {
  const { user } = useContext(Context);
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/posts" element={<Home />} />
        <Route exact path="/post/:id" element={<Single/>} />
        <Route path="/register" element={user ? <Home/> : <Register/>}/>
        <Route path="/login" element={user ? <Home/> : <Login/>}/>
        <Route path="/write" element={user ? <Write/> : <Register/>}/>
        <Route path="/settings" element={user ? <Settings/> : <Register/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
