// import React, { useState, useEffect } from "react";
// import socketIOClient from "socket.io-client";
// const ENDPOINT = "https://seagroupiot.herokuapp.com";
// var connectionOptions = {
//   transports: ["websocket"],
//   autoConnect: true,
// };
// function App() {
//   const [response, setResponse] = useState("");

//   useEffect(() => {
//     const socket = socketIOClient(ENDPOINT, connectionOptions);
//     console.log("socket", socket);
//     socket.on("users", data => {
//       console.log("data", data);
//       setResponse(data);
//     });

//     //
//   }, []);

//   return (
// <div className="flex flex-row mx-auto text-center h-full w-full">
// <h1 className="text-5xl font-bold underline">
//      Rep : {response}
//     </h1>
// </div>

//   );
// }

// export default App;

import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Router, Switch, Routes, Route, Link } from 'react-router-dom';
import LoginPage from './pages/Login';
import HomePage from './pages/Home';
import Dashboard from './pages/Dashboard';
import { logout } from './actions/auth';
import { clearMessage } from './actions/message';

import { history } from './helpers/history';
function App() {
  return (
    <Router history={history}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dash" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
