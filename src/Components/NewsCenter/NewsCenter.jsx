import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const NewsHome = ({ news }) => {
  const { _id, title, image_url, details } = news || {};
  return (
    <div className="border border-gray-200">
      <h1 className="text-2xl ">{title}</h1>
      <img src={image_url}></img>
      {details.length > 200 ? (
        <p className="font-normal">
          {details.slice(0, 200)}
          <Link className="font-normal underline" to={`/news/${_id}`}>
            ReadMore....
          </Link>
        </p>
      ) : (
        <p className="font-normal">{details}</p>
      )}
    </div>
  );
};
NewsHome.propTypes = {
  news: PropTypes.object.isRequired,
};
export default NewsHome;
