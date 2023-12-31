import { Alert } from "react-bootstrap";

const Message = ({ variant, children }) => {
  console.log(children)
  return <Alert variant={variant}>{children}</Alert>;
};

Message.defaultProps = {
  variant: "info",
};

export default Message;
