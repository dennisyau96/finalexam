import { useState, useEffect } from "react";
import axios from "axios";
import BookList from "./Component/Booklist";
import AddNew from "./Component/AddNew";
import { Routes, Route, Link } from "react-router-dom";
import BookCard from "./Component/BookCard";
import "./App.css";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/new" element={<AddNew />} />
      </Routes>
    </div>
  );
}
