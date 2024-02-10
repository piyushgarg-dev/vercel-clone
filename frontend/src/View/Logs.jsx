import styled from "@emotion/styled";
import React, { useEffect, useMemo, useState } from "react";
import socketIO from "socket.io-client";
import Input from "../components/Input";
import Button from "../components/Button";

function Logs({ defaultRepo = "" }) {
  const Styled = useMemo(
    () => styled.div`
      padding: 20px;
      text-align: center;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 12px;
      @media (max-width: 768px) {
        padding: 10px;
      }
      .log-container {
        min-height: 200px;
        width: fit-content;
        max-height: 400px;
        @media (max-width: 768px) {
          max-height: 300px;
        }
        width: calc(100% - 40px);
        background: #000;
        color: #fff;
        overflow-y: auto;
        padding: 10px;
        border-radius: 8px;
        text-align: left;
        font-size: 8px;
      }
      .error-text {
        margin: 4px 2px;
        color: red;
        font-size: 12px;
        text-align: center;
      }
      .title {
        margin: 8px 0px;
      }
    `,
    []
  );
  const [repoText, setRepoText] = useState(defaultRepo);
  const [repo, setRepo] = useState(defaultRepo);
  const [error, setError] = useState("");
  const [logs, setLogs] = useState([
    "Build Successfull..",
    "Build Started...",
    "Fetching Repo...",
  ]);

  //   const socket = socketIO.connect("http://localhost:4000");
  //   useEffect(() => {
  //     socket.on("messageResponse", (data) => setLogs([...messages, data]));
  //   }, [socket]);
  const handleRepoChange = (event) => {
    setRepoText(event.target.value);
  };
  const handleRepoSubmit = () => {
    const githubRepoRegex = /^https:\/\/github\.com\/[^\/]+\/[^\/]+$/;
    if (!githubRepoRegex.test(repoText)) {
      setError("Invalid! GitHub repo link.");
      setRepo("");
    } else {
      setError("");
      setRepo(repoText);
    }
  };

  return (
    <Styled>
      <div>
        <Input
          value={repoText}
          onChange={handleRepoChange}
          placeholder={"Repo Link"}
        />
        {error && <div className="error-text">{error}</div>}
      </div>
      <Button onClick={handleRepoSubmit} text={"Refresh"} />
      {repo === "" ? (
        <div className="title">No Repo Selected</div>
      ) : (
        <>
          <div className="title">Showing logs for: {repo}</div>
          <div className="log-container">
            {logs.map((log, index) => (
              <div key={index} className="log-line">
                {log}
              </div>
            ))}
          </div>
        </>
      )}
    </Styled>
  );
}

export default Logs;
