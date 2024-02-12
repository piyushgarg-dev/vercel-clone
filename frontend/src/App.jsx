import styled from "@emotion/styled";
import Header from "./components/Header";
import Home from "./View/Home";
import Submission from "./View/Submission";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const Styled = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    .header {
      height: 80px;
    }
    .body {
      height: calc(100% - 80px);
      display: flex;
      justify-content: center;
      align-items: center;
      overflow-x: hidden;
      overflow-y: auto;
    }
  `;

  return (
    <Router>
      <Styled>
        <Header />
        <div className="body">
          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/submission" element={<Submission />} />
          </Routes>
        </div>
      </Styled>
    </Router>
  );
}

export default App;
