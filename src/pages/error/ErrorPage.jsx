import { Link, useRouteError } from "react-router-dom";
import errorPic from "../../assets/images/3737258.jpg";
const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="w-11/12 grid grid-cols-1 md:grid-cols-2 gap-10 mx-auto">
      <div className="text-center flex items-center justify-center">
        <div className="w-fit h-fit">
          <h1 className="text-9xl font-black text-blue-500 animate-bounce">
            <span className="animate-pulse">{error?.status}</span>
          </h1>
          <h1 className="text-2xl font-bold">{error?.statusText}</h1>
          <Link className="btn btn-success text-white mt-5" to={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
      <div className="w-full h-screen py-8">
        <img className="w-full h-full" src={errorPic} alt="" />
      </div>
    </div>
  );
};

export default ErrorPage;
