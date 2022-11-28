import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Components/Layout/Layout";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AddEditTour from "./Pages/AddEditTour";
import Dashboard from "./Pages/Dashboard";
import SingleTour from "./Pages/SingleTour";
import Allblogs from "./Pages/Allblogs";
import { PrivateRoute } from "./Components/PrivateRoute";
import CategoryTour from "./Pages/CategoryTour";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/addtour"
            element={
              <PrivateRoute>
                <AddEditTour />
              </PrivateRoute>
            }
          />
          <Route path="/edittour/:id" element={<AddEditTour />} />
          <Route path="/category/:category" element={<CategoryTour />} />
          <Route path="/singletour/:id" element={<SingleTour />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path="/allblogs" element={<Allblogs />} />
          <Route path="/tour/search" element={<Allblogs />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
