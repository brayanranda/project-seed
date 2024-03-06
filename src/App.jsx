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

import BinaryTree from "./pages/binary-trees/binaryTree";
import BinarySearchTree from "./pages/binary-trees/binary-search-trees";
import AVLTree from "./pages/binary-trees/avl-tree";

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

        <Route path="binary-trees/*" element={
          <Routes>
            <Route path="binary-tree" element={<BinaryTree />} />
            <Route path="binary-search-trees" element={<BinarySearchTree />} />
            <Route path="avl-tree" element={<AVLTree />} />
            {/* <Route path="red-black-tree" element={<RedBlackTree />} />
            <Route path="splay-tree" element={<SplayTree />} />
            <Route path="heap-tree" element={<HeapTree />} /> */}
          </Routes>
        } />
      </Routes>
      <Footer />
    </Router>
  )
}