import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import { Dashboard } from "./components/Dashboard";
import { MasterForm } from "./components/MasterForm";
import { Layout } from "./components/Layout";
import { PostConfirmation } from "./components/PostConfirmation";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="list-your-property" element={<MasterForm />} />
        <Route path="post-confirmation" element={<PostConfirmation />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />;
    </>
  );
}

export default App;
