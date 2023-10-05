import PropTypes from "prop-types";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoot = ({ children }) => {
  const location = useLocation();
  console.log(location.pathname);
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="flex justify-center">
        <span className="loading loading-spinner text-primary"></span>
        <span className="loading loading-spinner text-secondary"></span>
        <span className="loading loading-spinner text-accent"></span>
        <span className="loading loading-spinner text-neutral"></span>
        <span className="loading loading-spinner text-info"></span>
        <span className="loading loading-spinner text-success"></span>
        <span className="loading loading-spinner text-warning"></span>
        <span className="loading loading-spinner text-error"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};
PrivateRoot.propTypes = {
  children: PropTypes.node,
};
export default PrivateRoot;
