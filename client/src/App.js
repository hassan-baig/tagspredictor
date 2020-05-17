import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Search from "./components/search";
import Footer from "./components/footer";
import Pricing from "./components/pricing";
import Subscribe from "./components/subscribe";
import Features from "./components/features";
import BulkSearch from "./components/bulkSearch";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <Search />
      <Features />
      <BulkSearch />
      <Pricing />
      {/* <Subscribe /> */}
      <Footer />
    </div>
  );
}

export default App;
