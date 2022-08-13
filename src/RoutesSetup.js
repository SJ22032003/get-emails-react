import React from "react";
import { Routes, Route } from "react-router-dom";

function RoutesSetup() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/about" element={<h1>About</h1>} />
      <Route path="/login" element={<h1>Login</h1>} />
      <Route path="/signup" element={<h1>Signup</h1>} />
      <Route path="/*" element={<h1>Not Found</h1>} />
    </Routes>
  );
}

export default RoutesSetup;
