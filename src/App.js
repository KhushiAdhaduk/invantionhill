import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./page/home";
import RequestQuotePage from "./page/request-quote";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Homepage} />
        <Route path="/request" Component={RequestQuotePage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
