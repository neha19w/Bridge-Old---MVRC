import "./App.css";
import RightPanel from "./rightPanel/RightPanel";
import LeftPanel from "./leftPanel/LeftPanel";
import Footer from "./footer/footer";
import Header from "./header/header";
import { useSelector } from "react-redux";
import ActiveFeed from "./activeFeed/ActiveFeed";

function App() {
  const showActiveFeedModal = useSelector(
    (state) => state.showActiveFeed.showActiveFeed
  );
  return (
    <div className="App">
      <div className="content-wrapper">
        <div className="left-sidebar sidebar">
          <LeftPanel />
        </div>

        <div className="header">
          <Header />{" "}
        </div>
        <div className="content-body">
          {showActiveFeedModal ? <ActiveFeed /> : null}
        </div>

        <div className="footer">
          <Footer />
        </div>

        <div className="right-sidebar sidebar2">
          <RightPanel />
        </div>
      </div>
    </div>
  );
}

export default App;
