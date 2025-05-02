import styled from "styled-components";

export const Container = styled.div`
  border-bottom: 9px solid #070707;
  display: flex;
`;
export const Entity = styled.div`
  color: white;
  border: 1px solid #070707;
  max-width: 690px;
  width: 99%;
  margin-bottom: 10px;
  margin: auto;
  &:first-of-type {
    margin-top: 1.5em;
  }
`;
export const Inner = styled.div`
  padding: 75px 40px;
  max-width: 800px;
  margin: auto;
  flex-direction: column;
  display: flex;
`;
export const Question = styled.div`
  font: 25px;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 2px;
  display: flex;
  font-weight: normal;
  background: #1a1919;
  padding: 0.75em 1.12em;
  align-items: center;
  color: white;
  background-image: linear-gradient(to right, #c70a80, #5a1aa2, #60a3f9);
`;
export const Text = styled.p`
  max-height: 1190px;
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  transition: max-height 0.23s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0.9em 2.1em 0.7em 1.4em;
  user-select: none;
  white-space: pre-wrap;

  @media (max-width: 550px) {
    font-size: 15px;
    line-height: 25px;
  }
  background: white;
  color: black;
`;
export const Header = styled.h1`
  color: #070707;
  line-height: 7;
  margin-top: 0 !important;
  font-size: 45px;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 26px;
  }

  color: #070707;
`;

//flex overflow-x-hidden bg-gradient-to-r from-second via-third  to-blue-400 py-1
