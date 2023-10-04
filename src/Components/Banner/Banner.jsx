import logo from "../../assets/logo.png";
import moment from "moment";
const Banner = () => {
  return (
    <div className="text-center space-y-2">
      <img className="w-[400px] mx-auto" src={logo}></img>
      <h1 className="text-lg">Journalism Without Fear or Favour</h1>
      <h1>{moment().format("dddd, MMMM D, YYYY")}</h1>
    </div>
  );
};

export default Banner;
