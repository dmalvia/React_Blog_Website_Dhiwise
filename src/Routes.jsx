import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import { ProtectedRoute } from "components";
const Writeondevto = React.lazy(() => import("pages/Writeondevto"));
const Writeonmedium = React.lazy(() => import("pages/Writeonmedium"));
const MediumProfile = React.lazy(() => import("pages/MediumProfile"));
const DevtoProfile = React.lazy(() => import("pages/DevtoProfile"));
const BlogPage = React.lazy(() => import("pages/BlogPage"));
const Dashboard = React.lazy(() => import("pages/Dashboard"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/blogpage" element={<BlogPage />} />
          <Route
            path="/devtoprofile"
            element={<ProtectedRoute element={DevtoProfile} />}
          />
          <Route
            path="/mediumprofile"
            element={<ProtectedRoute element={MediumProfile} />}
          />
          <Route path="/writeonmedium" element={<Writeonmedium />} />
          <Route path="/writeondevto" element={<Writeondevto />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
