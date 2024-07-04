import { Routes, Route, Navigate } from "react-router";
import Layout from "../Layout/Layout";
import Map from "../pages/Map/Map";
import Information from '../pages/Information/Information';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='' element={<Layout />}>
        <Route path='/' element={<Map />} />
        <Route path='satellite/:id' element={<Information />} />
      </Route>
      <Route path='*' element={<Navigate to={"/"} />} />
    </Routes>
  );
};

export default AppRoutes;
