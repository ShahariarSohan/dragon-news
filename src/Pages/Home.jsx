import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner/Banner";
import LeftNavbar from "../Components/LeftNavbar/LeftNavbar";
import Navbar from "../Components/Navbar/Navbar";
import NewsHeadline from "../Components/NewsHeadline/NewsHeadline";
import RightNavbar from "../Components/RightNavbar/RightNavbar";
import NewsCenter from "../Components/NewsCenter/NewsCenter";

const Home = () => {
  const news = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <NewsHeadline></NewsHeadline>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7  my-10 ">
        <LeftNavbar></LeftNavbar>
        <div className="lg:col-span-2  space-y-5">
          {news?.map((anews) => (
            <NewsCenter key={anews._id} news={anews}></NewsCenter>
          ))}
        </div>
        <RightNavbar></RightNavbar>
      </div>
    </div>
  );
};

export default Home;
