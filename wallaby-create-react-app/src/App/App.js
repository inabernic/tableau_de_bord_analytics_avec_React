import React from "react";
import { Routes, Route } from "react-router-dom";

// VIEWS -------------------------------------------
import Dashboard from '../pages/Dashboard/Dashboard'
import Error from '../pages/Error/Error'
import UserIdPage from '../pages/UserIdPage/UserIdPage'
//import PerformanceRadarChart from '../components/PerformanceRadarChart/PerformanceRadarChart'
import LinkDurationSessionChart from '../components/LinkDurationSessionChart/LinkDurationSessionChart'
import InfoActivityforDay from "../components/InfoActivityforDay/InfoActivityforDay";
import LinkPerformanceRadarChart from "../components/LinkPerformanceRadarChart/LinkPerformanceRadarChart"

// STYLE-------------------------------------------
import './App.css';

export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Dashboard />} />
      <Route exact path="/user/:id" element={<UserIdPage />} />
      <Route exact path="/user/:id/activity" element={<InfoActivityforDay />} />
      <Route exact path="/user/:id/average-sessions" element={<LinkDurationSessionChart />} />
      <Route exact path="/user/:id/performance" element={<LinkPerformanceRadarChart />} />
      <Route path='/*' exact={true} element={<Error />} />
    </Routes>
  );
}