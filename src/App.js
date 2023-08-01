import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

// const Home = lazy(() => import("./pages/Home"));

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<MainLayout />}>
          {/* <Route
            index
            element={
              <Suspense fallback={<PageLoader />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="create"
            element={
              <Suspense fallback={<PageLoader />}>
                <CreateEvent />
              </Suspense>
            }
          />
          <Route
            path="event"
            element={
              <Suspense fallback={<PageLoader />}>
                <Event />
              </Suspense>
            }
          />
          <Route
            path="edit"
            element={
              <Suspense fallback={<PageLoader />}>
                <EditEvent />
              </Suspense>
            }
          />
          <Route path="*" element={<Home />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
