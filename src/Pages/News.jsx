import { useLoaderData, useParams } from "react-router-dom";
import Banner from "../Components/Banner/Banner";
import RightNavbar from "../Components/RightNavbar/RightNavbar";
import NewsDetails from "../Components/NewsDetails/NewsDetails";

const News = () => {
  const { id } = useParams();
  const allNews = useLoaderData();
  const news = allNews?.find((singleNews) => singleNews._id === id);
  return (
    <div>
      <Banner></Banner>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7  my-10 ">
        <div className="lg:col-span-3  space-y-5">
          <NewsDetails key={news._id} news={news}></NewsDetails>
        </div>
        <RightNavbar></RightNavbar>
      </div>
    </div>
  );
};

export default News;
