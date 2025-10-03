import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EmployeeDetails from "./pages/EmployeeDetails/EmployeeDetails";

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
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <Layout />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        index: true,
        element: (
          <Suspense fallback={<div className="loading">Loading...</div>}>
            <Dashboard />
          </Suspense>
        ),
      },
      {
        path: "/create-employee",
        element: (
          <Suspense fallback={<div className="loading">Loading...</div>}>
            <CreateEmployee />
          </Suspense>
        ),
      },
      {
        path: "/view-employees",
        element: (
          <Suspense fallback={<div className="loading">Loading...</div>}>
            <ViewEmployees />
          </Suspense>
        ),
      },
      {
        path: "/view-employees/employees/:id",
        element: (
          <Suspense fallback={<div className="loading">Loading...</div>}>
            <EmployeeDetails />
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
