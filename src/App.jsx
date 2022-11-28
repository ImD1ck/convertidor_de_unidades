import { Footer, Convert, Header, Saved } from "./components";

import "./styles/App.css";
import { useState } from "react";

const App = () => {
  const [guardados, setGuardados] = useState([]);
  return (
    <div className="layout">
      <Header />
      <main className="main">
        <Convert guardados={guardados} setGuardados={setGuardados} />
        <Saved guardados={guardados} setGuardados={setGuardados} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
