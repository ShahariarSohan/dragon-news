import Marquee from "react-fast-marquee";
const NewsHeadline = () => {
  return (
    <div className=" bg-base-200 my-3">
      <Marquee pauseOnHover={true}>
        <button className="btn btn-error mr-5 text-white">Latest</button>
        <h1 className="mr-5">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </h1>
        <h1 className="mr-5">
          Match Highlights: Brazil vs Argentina — as it happened ! Match
          Highlights: Brazil vs Argentina as...
        </h1>
        <h1 className="mr-5">
          Match Highlights: Portugal vs France — as it happened ! Match
          Highlights: Portugal vs France as...
        </h1>
      </Marquee>
    </div>
  );
};

export default NewsHeadline;
