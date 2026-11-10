import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import HomePage from "../pages/HomePage";
import MapPage from "../pages/MapPage";
import SitePage from "../pages/SitePage";
import GalleryPage from "../pages/GalleryPage";
import VisitPage from "../pages/VisitPage";
import UmkmPage from "../pages/UmkmPage";
import NewsPage from "../pages/NewsPage";
import ManagerPage from "../pages/ManagerPage";
import { ROUTES } from "../constants/routes";
import { SHOW_UMKM_IN_NAV } from "../constants/features";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.MAP} element={<MapPage />} />
          <Route path={ROUTES.SITE} element={<SitePage />} />
          <Route path={ROUTES.GALLERY} element={<GalleryPage />} />
          <Route path={ROUTES.VISIT} element={<VisitPage />} />
          <Route
            path={ROUTES.UMKM}
            element={SHOW_UMKM_IN_NAV ? <UmkmPage /> : <Navigate to={ROUTES.HOME} replace />}
          />
          <Route path={ROUTES.NEWS} element={<NewsPage />} />
          <Route path={ROUTES.MANAGER} element={<ManagerPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
