import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import MassagesIndex from "./pages/Massages/index";
import MassagesDetail from "./pages/Massages/Detail";
import NotFound from "./pages/NotFound";
import './scss/style.scss';
import Pricing from "./pages/Pricing";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="massages" element={<MassagesIndex />} />
          <Route path="massages/masaz-1" element={<MassagesDetail id={1} />} />
          <Route path="massages/masaz-2" element={<MassagesDetail id={2} />} />
          <Route path="massages/masaz-3" element={<MassagesDetail id={3} />} />
          <Route path="cenik" element={<Pricing />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));