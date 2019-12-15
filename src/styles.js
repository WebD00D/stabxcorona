import styled from "styled-components";
import RightSideImage from "./right-side-image2.jpg";

export const SplitPane = styled.div`
  display: flex;
  height: calc(100vh - 64px);

  @media (max-width: 972px) {
    flex-direction: column-reverse;
    height: auto;
  }
`;

export const Pane = styled.div`
  padding: 32px 64px;
  flex: 1;
  height: 100%;
  background-color: #fafafa;
  overflow-y: scroll;

  ${props =>
    props.showBG
      ? `background: linear-gradient( rgba(01,01,01,0.3), rgba(01,01,01,0.3) ), url(${RightSideImage});`
      : null}

  background-position: center;
  background-size: cover;
  background-repeat: center;

  @media (max-width: 972px) {

    padding: 32px;

      
    ${props =>
      props.showBG
        ? `min-height: 320px; background-position: top; background-attachment: fixed;`
        : null}
  }
`;

export const StabLogo = styled.img`
  height: 32px;
`;

export const CoronaLogo = styled.img`
  position: absolute;
  bottom: 32px;
  right: 64px;
  height: 64px;

  @media (max-width: 972px) {
      top: 16px;
      right: 16px;
      height: 32px;
  }
`;

export const Content = styled.div`
  padding-top: 32px;

  h1 {
    font-family: "Roboto", sans-serif;
  }

  p {
    margin-bottom: 32px;
    line-height: 1.5;
    font-family: "PT Serif", serif;
  }

  input,
  textarea {
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    padding-left: 16px;
    padding-right: 16px;
    border: none;
    outline: none;
    border-radius: 4px;
    max-width: 600px;
    width: 100%;
    -webkit-box-shadow: 3px 2px 15px -3px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 3px 2px 15px -3px rgba(0, 0, 0, 0.2);
    box-shadow: 3px 2px 15px -3px rgba(0, 0, 0, 0.2);
    transition: 0.2s ease;
    border: 2px solid #fff;
  }

  input:focus,
  input:active,
  textarea:focus,
  textarea:active {
    border: 2px solid #ccc;
  }

  input {
    margin-bottom: 32px;
    height: 48px;
  }

  textarea {
    margin-bottom: 32px;
    padding: 16px;
    resize: none;
    height: 150px;
  }

  @media (max-width: 972px) {
      padding-top: 12px;

      input, textarea {
          width: calc(100% - 32px);
      }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormLabel = styled.div`
  font-family: "Roboto", sans-serif;
  margin-bottom: 8px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 1.5;
`;

export const Button = styled.button`
  border-radius: 50px;
  height: 48px;
  background-color: #000;
  outline: none;
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: 700;
  text-transform: uppercase;
  width: 250px;
  cursor: pointer;
  transition: 0.2s ease;
  line-height: 48px;

  &:hover {
    transform: scale(1.05);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;

    &:hover {
      transform: scale(1);
    }
  }
`;

export const Error = styled.div`
  position: fixed;
  opacity: 0;
  left: 0;
  width: 100%;
  height: 32px;
  background-color: #d53b49;
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: 700;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-box-shadow: 3px 2px 15px -3px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 3px 2px 15px -3px rgba(0, 0, 0, 0.2);
  box-shadow: 3px 2px 15px -3px rgba(0, 0, 0, 0.2);
  transition: 0.2s ease;
  top: 0px;
  z-index: 2;

  &.error, &.submitted {
    opacity: 1;
  }

  &.submitted {
    background-color: #329862;
  }


`;
