import { Route, Routes } from "react-router-dom";
import Header from "@components/Header";
import Home from "@pages/HomePage";
import Footer from "@components/Footer";
import LoginPage from "@pages/LoginPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
