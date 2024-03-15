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
import RedBlackTree from "./pages/binary-trees/red-black-tree";
import SplayTree from "./pages/binary-trees/splay-tree";
import HeapTree from "./pages/binary-trees/heap-tree";
import NAryTree from "./pages/n-ary-trees/n-ary-tree";
import OneTwoThreeTree from "./pages/n-ary-trees/1-2-3-tree";
import BTree from "./pages/n-ary-trees/b-tree";
import BPlusTree from "./pages/n-ary-trees/b-plus-tree";
import Graph from "./pages/graphic-schema-theory/graph";

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
            <Route path="red-black-tree" element={<RedBlackTree />} />
            <Route path="splay-tree" element={<SplayTree />} />
            <Route path="heap-tree" element={<HeapTree />} />
          </Routes>
        } />

        <Route path="n-ary-trees/*" element={
          <Routes>
            <Route path="n-ary-tree" element={<NAryTree />} />
            <Route path="1-2-3-tree" element={<OneTwoThreeTree />} />
            <Route path="b-tree" element={<BTree />} />
            <Route path="b-plus-tree" element={<BPlusTree />} />
          </Routes>
        } />
        <Route path="/graphic-schema-theory/graph" element={<Graph />} /> 

      </Routes>
      <Footer />
    </Router>
  )
}