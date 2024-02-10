import React from "react";
import Button from "./Button";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/submission");
  };
  const Styled = styled.div`
    .title {
      color: #fff;
      font-size: 32px;
    }
    .welcome-text {
      color: #666;
      font-size: 16px;
      line-height: 1.5;
      margin: 20px 0;
    }
    .btn-container {
      display: flex;
      justify-content: center;
    }
  `;

  return (
    <Styled>
      <div className="title">Welcome to the Vercel Clone App!</div>
      <div className="welcome-text">
        This project is a clone of Vercel, a company known for maintaining the
        Next.js web development framework. The architecture of Vercel is built
        around composable architecture, and deployments are handled through Git
        repositories. Vercel is a member of the MACH Alliance.
      </div>
      <div className="btn-container">
        <Button onClick={handleButtonClick} text={"Get Started"} />
      </div>
    </Styled>
  );
}

export default Welcome;
