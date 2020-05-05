import React, {useState, useEffect, useRef} from "react";
import PropTypes from "prop-types";
import { Container, MessageSpace } from "./style";
import Text from '../../../../components/Text/Text';
import TextInput from '../../../../components/TextInput/TextInput';
const EMAIL_REGEX = new RegExp(/^(?=.{5,}$)[A-Za-z0-9!#$%^&*()_+-=]+[.]{0,3}[A-Za-z0-9!#$%^&*()_+-=]+[@]{1}[a-zA-Z]+[.]{1}[a-zA-Z]+[.]{0,1}[a-zA-Z]+$/);

const EmailField = function (props) {
  const [showMessage, setShowMessage] = useState('');
  const [valid, setValid] = useState(false);
  const emailRef = useRef('');
  useEffect(() => {
    props.updateEmail({
      value: emailRef.current,
      status: valid
    })
  }, [valid]);
  const handleTextChange = (e) => {
    const data = e.target.value;
    if (showMessage) setShowMessage("");
    if (valid) setValid(false);
    emailRef.current = data;
    verifyEmail(data, false);
  };
  const handleVerify = (e) => {
    const data = e.target.value;
    verifyEmail(data, true);
  };

  const verifyEmail = (data, error) => {
    if (data.length === 0 && error) {
      setShowMessage("Email is mandatory");
    } else {
      if (EMAIL_REGEX.test(data)) {
        setValid(true);
      } else {
        if (error) setShowMessage("Should be a valid email");
      }
    }
  };
  return (
    <Container data-test="email-field-container">
      <TextInput
        elementType="text"
        marginTop={10}
        marginBottom={0}
        paddingTop={10}
        paddingBottom={10}
        paddingLeft={10}
        paddingRight={10}
        width="100%"
        placeHolder="Enter your Email"
        borderColor={showMessage ? '#ec445c' : '#eee'}
        onChange={handleTextChange}
        onBlur={handleVerify}
      />
      <MessageSpace>
        {showMessage && <Text
          text={showMessage}
          color="#ec445c"
          paddingTop={5}
          paddingLeft={5}
        />}
      </MessageSpace>
    </Container>
  );
};
EmailField.propTypes = {
  updateEmail: PropTypes.func
};

EmailField.defaultProps = {
  updateEmail: () => {}
};

export default EmailField;
