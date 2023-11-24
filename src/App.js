import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./Paginas/Index";
import Plano from "./Paginas/Plano";
import Carregamento from "./Paginas/Carregamento";


function App() {
  return (
    <>
      <header></header>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />}></Route>
            <Route path="/plano" element={<Plano />}></Route>
            <Route  path="/Carregamento" element={<Carregamento />}></Route>
          </Routes>
        </BrowserRouter>
      <footer></footer>
    </>

  );
}

export default App;
