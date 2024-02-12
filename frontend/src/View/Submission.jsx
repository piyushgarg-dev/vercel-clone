import styled from "@emotion/styled";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import apiService from "../service/apiService";
import { io } from "socket.io-client";

const SubmissionPage = () => {
  const [repoLink, setRepoLink] = useState("");
  const [slug, setSlug] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeSlug, setActiveSlug] = useState("");
  const [url, setUrl] = useState("");
  const [logs, setLogs] = useState([]);

  const logContainerRef = useRef(null);

  const handleSocketIncommingMessage = useCallback((message) => {
    if (typeof message === "string") {
      setLogs((prev) => [...prev, message]);
    } else {
      const { log } = JSON.parse(message);
      setLogs((prev) => [...prev, log]);
    }
    logContainerRef.current.scrollTop = 0;
  }, []);

  useEffect(() => {
    document.title = "Submit Your Repo - Vercel Clone";
  }, []);

  const handleChange = (event) => {
    setRepoLink(event.target.value);
  };

  const handleSubmit = () => {
    console.log(repoLink);
    const githubRepoRegex = /^https:\/\/github\.com\/[^/]+\/[^/]+$/;
    if (!githubRepoRegex.test(repoLink)) {
      setError("Invalid! GitHub repo link.");
    } else {
      setError("");
      setLoading(true);
      apiService("http://localhost:9000/project", "POST", {
        gitURL: repoLink,
        slug,
      })
        .then((data) => {
          const { projectSlug, url } = data.data;
          setActiveSlug(projectSlug);
          setUrl(url);
        })
        .catch((error) => {
          console.log(error);
          window.alert("Error in submitting the repo");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  let socket = useRef(null);

  useEffect(() => {
    if (!socket.current) {
      socket.current = io("http://localhost:9002");
    }
  }, []);

  useEffect(() => {
    if (!activeSlug) return;
    setLogs([]);
    socket.current.emit("subscribe", `logs:${activeSlug}`);
  }, [activeSlug]);

  useEffect(() => {
    socket.current.on("message", handleSocketIncommingMessage);
    return () => {
      socket.current.off("message", handleSocketIncommingMessage);
    };
  }, [handleSocketIncommingMessage]);

  const handleReset = () => {
    setRepoLink("");
    setSlug("");
    setError("");
    setLoading(false);
    setActiveSlug("");
    setUrl("");
    setLogs([]);
  };
  const Styled = useMemo(
    () => styled.div`
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .submit-view,
      .log-view {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 20px;
        gap: 12px;
        @media (max-width: 768px) {
          padding: 10px;
        }
      }
      .error-text {
        margin: 4px 2px;
        color: red;
        font-size: 12px;
        text-align: center;
      }
      .url-container {
        padding: 4px 8px;
        background: #646cff;
        color: white;
        border-radius: 4px;
      }
      .log-container {
        min-height: 200px;
        width: fit-content;
        max-height: 400px;
        @media (max-width: 768px) {
          max-height: 300px;
        }
        width: calc(100vw - 40px);
        background: #000;
        color: #fff;
        overflow-y: auto;
        padding: 10px;
        border-radius: 8px;
        text-align: left;
        font-size: 8px;
        display: flex;
        flex-direction: column;
        text-align: left;
      }
      .new-submission {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
      }
      .url {
        text-align: center;
      }
    `,
    []
  );

  return (
    <Styled>
      {!activeSlug ? (
        <div className="submit-view">
          <div className="label">GitHub Repo Link:</div>
          <div>
            <Input
              type="text"
              value={repoLink}
              onChange={handleChange}
              placeholder="https://github.com/username/repo"
            />
            {error && <div className="error-text">{error}</div>}
          </div>
          <Input
            type="text"
            value={slug}
            onChange={(event) => {
              setSlug(event.target.value);
            }}
            placeholder="Slug (Optional)"
          />
          <Button
            onClick={loading ? () => {} : handleSubmit}
            text={loading ? "In Progress" : "Deploy"}
          />
        </div>
      ) : (
        <div className="log-view">
          {url && (
            <div className="url">
              Preview URL:{" "}
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="url-container"
              >
                {url}
              </a>
            </div>
          )}
          <div className="title">Showing logs for: {activeSlug}</div>
          <div className="log-container" ref={logContainerRef}>
            {logs.map((log, index) => (
              <div key={index} className="log-line">
                {log}
              </div>
            ))}
          </div>
        </div>
      )}
      {activeSlug && (
        <div className="new-submission">
          <Button text={"New Submission"} onClick={handleReset} />
        </div>
      )}
    </Styled>
  );
};

export default SubmissionPage;
