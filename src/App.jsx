import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PropTypes from "prop-types";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import BreastPumbs from "./pages/BreastPumbs";
import InstaPosts from "./components/InstaPosts";
import FeedingBottles from "./pages/FeedingBottles";
import BabyFoods from "./pages/BabyFoods";

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.3, ease: "easeIn" } },
};

const PageLoader = ({ loading }) => {
  return loading ? (
    <div className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-90">
      <span className="loader pointer-events-auto"></span>
    </div>
  ) : null;
};

PageLoader.propTypes = {
  loading: PropTypes.bool.isRequired,
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {[
          { path: "/", element: <Home /> },
          { path: "/breast-pumbs", element: <BreastPumbs /> },
          { path: "/feeding-bottles", element: <FeedingBottles /> },
          { path: "/baby-foods", element: <BabyFoods /> },
        ].map(({ path, element }, index) => (
          <Route
            key={index}
            path={path}
            element={
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {element}
              </motion.div>
            }
          />
        ))}
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <AnimatedRoutes />
      <InstaPosts />
      <Footer />
    </Router>
  );
}

export default App;
