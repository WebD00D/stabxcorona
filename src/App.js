import React, { useState, useEffect } from "react";
import {
  SplitPane,
  Pane,
  StabLogo,
  CoronaLogo,
  Content,
  Button,
  Form,
  FormLabel,
  Error
} from "./styles";
import Stab from "./stab-logo@2x.png";
import Corona from "./corona.png";

// import { notification } from "antd";
// import "antd/dist/antd.css";

function App() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");


  const maxLengthError = () => {
    const total = message.split(" ");
    if (total.length > 25) {
      return true;
    }

    return false;
  };

  const checkDisabled = () => {
    let disabled = false;
    if (email.trim() === "" || message.trim() === "" || maxLengthError()) {
      disabled = true;
    }
    return disabled;
  };

  const renderError = () => {
    const total = message.split(" ").length;
    const cx = total > 25 ? "error" : "";
    return <Error className={cx}>No more than 25 words, please :)</Error>;
  };

  const renderSuccess = () => {
    const submitted = window.location.search.includes("submitted=true")
    const cx = submitted ? "submitted" : "";
    return <Error className={cx}>Submitted! Thank you for your entry.</Error>;
  };

  return (
    <SplitPane>
      {renderSuccess()}
      {renderError()}
      <Pane>
        <a href="httsp://www.stabmag.com"><StabLogo src={Stab} /></a>
        <Content>
          <h1>
            Win The Electric Acid Surfboard Test Boards Piloted by Stephanie
            Gilmore.
          </h1>
          <p>
            The Electric Acid Surfboard Test is an exercise in diversity. We
            live in accepting times where no craft is a faux pas, so we decided
            to celebrate by pairing the world’s best surfers with every manner
            of surf craft imaginable. The second Electric Acid Surfboard Test
            was conducted by 7X World Champion Miss Stephanie Gilmore, and now,
            thanks to our amigos at Corona, the boards are yours to win. Plug
            your details in below for your chance to win a board crafted by
            Shawn Stüssy, MR, Joel Fitzgerald and more.
          </p>
          <Form name="contact" method="post" action="/?submitted=true">
            <input type="hidden" name="form-name" value="contest" />
            <FormLabel>Email Address</FormLabel>
            <input
              name="email"
              type="email"
              onChange={e => setEmail(e.currentTarget.value)}
            />
            <FormLabel>
              In 25 words or less, describe the surfing style of Miss Stephanie
              Gilmore:
            </FormLabel>
            <textarea
              name="message"
              type="text"
              onChange={e => setMessage(e.currentTarget.value)}
            />
            <Button disabled={checkDisabled()}>Submit</Button>
          </Form>
        </Content>
      </Pane>
      <Pane showBG={true}>
        <CoronaLogo src={Corona} />
      </Pane>
    </SplitPane>
  );
}

export default App;
