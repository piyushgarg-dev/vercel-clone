import styled from "@emotion/styled";
import Welcome from "../components/Welcome";

const Home = () => {
  const Styled = styled.div`
    padding: 20px;
    text-align: center;
    @media (max-width: 768px) {
      padding: 10px;
    }
  `;
  return (
    <Styled>
      <Welcome />
    </Styled>
  );
};

export default Home;
