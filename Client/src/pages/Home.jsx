import Header from "@/components/Header";
import Landing from "@/components/Landing";
import { BrowserRouter } from "react-router-dom";

function Home() {
  return (
    <BrowserRouter>
      <Header />
      <Landing />
    </BrowserRouter>
  );
}

export default Home;
