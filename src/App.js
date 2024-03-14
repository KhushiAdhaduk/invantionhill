import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./page/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Homepage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
