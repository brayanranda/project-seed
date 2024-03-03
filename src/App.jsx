import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home"
import { Header } from "./components/Layout/Header/Header";
import { Footer } from "./components/Layout/Footer/Footer";
import About from "./pages/about";
import Sequence from "./pages/linearStructures/sequence";
import List from "./pages/linearStructures/list";
import Stacks from "./pages/linearStructures/stacks";
import Queue from "./pages/linearStructures/queue";
import HashTable from "./pages/linearStructures/hash-table";
import Downloads from "./pages/downloads";
import ScrollToTop from "./utilities/ScrollToTop";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="*" element={<>NO FOUND</>}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/downloads" element={<Downloads />}></Route>
        <Route path="/about" element={<About />}></Route>

        <Route path="linear-structures/*" element={
          <Routes>
            <Route path="sequence" element={<Sequence />} />
            <Route path="lists" element={<List />} />
            <Route path="stacks" element={<Stacks />} />
            <Route path="queue" element={<Queue />} />
            <Route path="hash-table" element={<HashTable />} />
          </Routes>
        } />
      </Routes>
      <Footer />
    </Router>
  )
}