import PropTypes from "prop-types";
const NewsDetails = ({ news }) => {
  const { image_url, title, details } = news;
  console.log(news);
  return (
    <div>
      <h1 className="font-bold text-2xl mb-5">Dragon News</h1>
      <div className="space-y-5">
        <div>
          <img className="w-full" src={image_url}></img>
        </div>
        <h1 className="font-bold">{title}</h1>
        <p>{details}</p>
      </div>
    </div>
  );
};
NewsDetails.propTypes = {
  news: PropTypes.object.isRequired,
};
export default NewsDetails;
