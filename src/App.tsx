import { RouterProvider } from "react-router-dom";
import Routes from "./routes";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    // Animate On Scroll Libary
    AOS.init();
  }, []);

  return (
    <>
      {/* Pages provider */}
      <RouterProvider router={Routes} />
    </>
  );
};

export default App;
