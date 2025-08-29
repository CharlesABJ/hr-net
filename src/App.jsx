import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// On importe les composants pages
const Layout = lazy(() => import("@/pages/Layout"));
const Dashboard = lazy(() => import("@/pages/Dashboard/Dashboard"));
const CreateEmployee = lazy(() =>
  import("@/pages/CreateEmployee/CreateEmployee")
);
const ViewEmployees = lazy(() => import("@/pages/ViewEmployees/ViewEmployees"));

const router = createBrowserRouter([
  {
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Layout />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        index: true,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Dashboard />
          </Suspense>
        ),
      },
      {
        path: "/create-employee",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <CreateEmployee />
          </Suspense>
        ),
      },
      {
        path: "/view-employees",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ViewEmployees />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
