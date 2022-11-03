import React from "react";
import { Routes, Route } from "react-router-dom";

// VIEWS -------------------------------------------
import Dashboard from '../pages/Dashboard/Dashboard'
import Error from '../pages/Error/Error'
import UserIdPage from '../pages/UserIdPage/UserIdPage'
//import UserActivity from '../components/UserActivity'
//import ActivityChartForDay from '../components/ActivityChartForDay/ActivityChartForDay'
import PerformanceRadarChart from '../components/PerformanceRadarChart/PerformanceRadarChart'
import DurationSessionChart from "../components/DurationSessionChart/DurationSessionChart";
import InfoActivityforDay from "../components/InfoActivityforDay/InfoActivityforDay";

// STYLE-------------------------------------------
import './App.css';

export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Dashboard />} />
      <Route exact path="/user/:id" element={<UserIdPage />} />
      <Route exact path="/user/:id/activity" element={<InfoActivityforDay />} />
      <Route exact path="/user/:id/average-sessions" element={<DurationSessionChart />} />
      <Route exact path="/user/:id/performance" element={<PerformanceRadarChart />} />
      <Route path='/*' exact={true} element={<Error />} />
    </Routes>
  );
}