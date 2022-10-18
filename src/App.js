import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import AppLayout from "./components/layout/appLayout";
import AuthLayout from "./components/layout/authLayout";
import { routePath } from "./constants/routePath";

const Login = lazy(() => import("./pages/auth/login/index"));
const Register = lazy(() => import("./pages/auth/register/index"));
const Dashboard = lazy(() => import("./pages/dashboard/index"));

export default function App() {
  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path={routePath.auth.home} element={<AuthLayout />}>
            <Route
              path={routePath.auth.login}
              element={
                <Suspense fallback={null}>
                  <Login />
                </Suspense>
              }
            />
            <Route
              path={routePath.auth.register}
              element={
                <Suspense fallback={null}>
                  <Register />
                </Suspense>
              }
            />
          </Route>
          <Route index element={<Navigate to={routePath.auth.login} />} />
          <Route element={<AppLayout />}>
            <Route
              path={routePath.dashboard}
              element={
                <Suspense fallback={null}>
                  <Dashboard />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
