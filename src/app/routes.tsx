import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "./pages/Home";
import PropertyListings from "./pages/PropertyListings";
import PropertyDetails from "./pages/PropertyDetails";
import Contact from "./pages/Contact";
import About from "./pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "listings", Component: PropertyListings },
      { path: "property/:id", Component: PropertyDetails },
      { path: "contact", Component: Contact },
      { path: "about", Component: About },
    ],
  },
]);
