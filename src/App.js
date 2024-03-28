import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./page/home";
import RequestQuotePage from "./page/request-quote";
import ScrollToTop from "./components/scroll-to-top";
import LogoPage from "./page/design/LogoPage";
import CustomWebDevelopmentPage from "./page/design/CustomWebDevelopmentPage";
import MobileThemePage from "./page/design/MobileThemePage";
import WebsiteDesignPage from "./page/design/WebsiteDesignPage";
import AndroidAppDevelopmentPage from "./page/mobileappdevelopment/AndroidAppDevelopmentPage";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" Component={Homepage} />
        <Route path="/request" Component={RequestQuotePage} />
        <Route path="/logo-design" Component={LogoPage} />
        <Route path="/custom-web" Component={CustomWebDevelopmentPage} />
        <Route path="/mobile-theme" Component={MobileThemePage} />
        <Route path="/website-design" Component={WebsiteDesignPage} />
        <Route
          path="/mobile-development"
          Component={AndroidAppDevelopmentPage}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
