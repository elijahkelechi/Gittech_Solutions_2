import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  HomeLayout,
  LandingPage,
  ErrorPage,
  AboutUs,
  Services,
  ContactUs,
  Training,
  Events,
  Gallery,
  Products,
  Accessories,
} from "./pages";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "aboutUs",
        element: <AboutUs />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "training",
        element: <Training />,
      },
      {
        path: "contactUs",
        element: <ContactUs />,
      },
      {
        path: "events",
        element: <Events />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "accessories",
        element: <Accessories />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
