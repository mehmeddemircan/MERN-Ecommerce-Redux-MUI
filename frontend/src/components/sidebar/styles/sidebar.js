import styled from "styled-components/macro";

export const Container = styled.div`
  width: 200px;
  margin-top: 10px;
  padding: 10 2rem;
  margin-right: 40px; 

  @media only screen and (max-width: 810px) {
    display: none;
  }

  ul {
    list-style: none;
  }
  span {
    margin-left: 5px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 15px;
  }
`;
export const Column = styled.div`
  max-width: 250px;
`;
