import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Style from "./Style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Parrrent from "./components/callback/Parrrent";
import About from "./components/About"
import Demo from "./components/Demo"
import Home from "./components/Home"
import Login from "./components/Login"
import { Route, Routes } from "react-router-dom";
import * as Protected from "./ProtectRoute/ProtectedRoute"



const App = () => {

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <Routes>
              <Route path="/" element={<><Login /></>} />
              <Route path="/home" element={<><Home /></>} />

              <Route path="/demo" element={<Protected.ProtectedRoute><Demo /></Protected.ProtectedRoute>} ></Route>
              <Route path="/about" element={<Protected.ProtectedRoute><About /></Protected.ProtectedRoute>} />
              <Route path="/parrrent" element={<Protected.ProtectedRoute><Parrrent /></Protected.ProtectedRoute>} />
              <Route path="*" element={<h1>404 not found</h1>} />
            </Routes>


          </div>
        </div>
      </div>
    </>
  );
};
export default App;
