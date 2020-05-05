import React from 'react';
import PropTypes from "prop-types";

import { Input } from "./style";

const TextInput = function (props) {
  return (
    <Input
      data-test="text-input-container"
      autoComplete="off"
      type={props.elementType}
      color={props.color}
      fontFamily={props.fontFamily}
      fontSize={props.fontSize}
      fontWeight={props.fontWeight}
      fontStyle={props.fontStyle}
      paddingLeft={props.paddingLeft}
      paddingBottom={props.paddingBottom}
      paddingRight={props.paddingRight}
      paddingTop={props.paddingTop}
      marginLeft={props.marginLeft}
      marginBottom={props.marginBottom}
      marginRight={props.marginRight}
      marginTop={props.marginTop}
      width={props.width}
      height={props.height}
      borderColor={props.borderColor}
      placeholder={props.placeHolder}
      onChange={props.onChange}
      onBlur={props.onBlur}
    />
  );
};


TextInput.defaultProps = {
  color: "#343434",
  fontSize: 14,
  fontWeight: 400,
  fontStyle: "normal",
  fontFamily: 'sans-serif',
  textAlign: "initial",
  text: "",
  paddingLeft: 0,
  paddingBottom: 0,
  paddingRight: 0,
  paddingTop: 0,
  marginLeft: 0,
  marginBottom: 0,
  marginRight: 0,
  marginTop: 0,
  elementType: "text",
  width: 200,
  height: 45,
  borderColor: '#eee',
  placeHolder: '',
  onChange: () => { },
  onBlur: () => { }
};

export default React.memo(TextInput);