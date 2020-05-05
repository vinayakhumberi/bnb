import React from 'react';

import { Txt } from "./style";

const Text = function (props) {
  return (
    <Txt
      data-test="text-container"
      as={props.elementType}
      {...props}
    >
      {props.text}
    </Txt>
  );
};

Text.defaultProps = {
  color: "#343434",
  fontSize: 14,
  fontWeight: 400,
  fontStyle: "normal",
  fontFamily: 'sans-serif',
  text: "",
  paddingLeft: 0,
  paddingBottom: 0,
  paddingRight: 0,
  paddingTop: 0,
  marginLeft: 0,
  marginBottom: 0,
  marginRight: 0,
  marginTop: 0,
  elementType: "div"
};

export default React.memo(Text);
