import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./page/home";
import RequestQuotePage from "./page/request-quote";
import ScrollToTop from "./components/scroll-to-top";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" Component={Homepage} />
        <Route path="/request" Component={RequestQuotePage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
