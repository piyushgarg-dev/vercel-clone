import styled from "@emotion/styled";
import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";

const SubmissionPage = () => {
  const [repoLink, setRepoLink] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Submit Your Repo - Vercel Clone";
  }, []);

  const handleChange = (event) => {
    setRepoLink(event.target.value);
  };

  const handleSubmit = () => {
    console.log(repoLink);
    const githubRepoRegex = /^https:\/\/github\.com\/[^\/]+\/[^\/]+$/;
    if (!githubRepoRegex.test(repoLink)) {
      setError("Invalid! GitHub repo link.");
    } else {
      setError("");
      navigate("/logs");
    }
  };
  const Styled = useMemo(
    () => styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 20px;
      gap: 12px;
      @media (max-width: 768px) {
        padding: 10px;
      }
      .error-text {
        margin: 4px 2px;
        color: red;
        font-size: 12px;
        text-align: center;
      }
    `,
    [error]
  );
  return (
    <Styled>
      <div className="title"></div>

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
      <Button onClick={handleSubmit} text={"Submit"} />
    </Styled>
  );
};

export default SubmissionPage;
