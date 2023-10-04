import PropTypes from "prop-types";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoot = ({ children }) => {
  const { user } = useContext(AuthContext);
  if (user) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};
PrivateRoot.propTypes = {
  children: PropTypes.node,
};
export default PrivateRoot;
