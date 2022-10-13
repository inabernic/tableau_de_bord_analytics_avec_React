import React from "react";
import { Routes, Route } from "react-router-dom";

// VIEWS -------------------------------------------
import Dashboard from '../pages/Dashboard/Dashboard'
import Error from '../pages/Error/Error'
import UserIdPage from '../pages/UserIdPage/UserIdPage'

// STYLE-------------------------------------------
import './App.css';

export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Dashboard />} />
      <Route exact path="/user/:id" element={<UserIdPage />} />
      <Route exact path="/user/:id/activity" element={<UserIdPage />} />
      <Route exact path="/user/:id/average-session" element={<UserIdPage />} />
      <Route exact path="/user/:id/performance" element={<UserIdPage />} />
      <Route path='/*' exact={true} element={<Error />} />
    </Routes>
  );
}