import QZone from "../QZone/QZone";
import SocialLogin from "../SocialLogin/SocialLogin";

const RightNavbar = () => {
  return (
    <div className="border space-y-5 p-3 h-[1100px]">
      <SocialLogin></SocialLogin>
      <QZone></QZone>
    </div>
  );
};

export default RightNavbar;
