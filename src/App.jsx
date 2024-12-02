import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";
import CamperDetails from "./components/CamperDetails";
import Features from "./components/Features";
import Reviews from "./components/Reviews";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/campers" element={<CatalogPage />} />
        <Route path="/campers/:id" element={<CamperDetails />}>
          <Route index element={<Features />} />
          <Route path="features" element={<Features />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
