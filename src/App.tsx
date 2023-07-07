import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Navbar from "./components/Navbar";

import Add from "./components/user/Add";
import Edit from "./components/user/Edit";
import Users from "./components/user/Users";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/users/:id" element={<Users />} />
        <Route path="/add-user" element={<Add />} />
        <Route path="/edit-user/:id" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
