import bannerImg from "../../assets/images/user.png";
import MainBtn from "../mainBtn/MainBtn";

const Banner = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 justify-between items-center my-10">
      <div className="">
        <h1 className="text-2xl md:text-7xl font-black text-black ">
          One Step <br /> Closer To Your <br />{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">
            Dream Job
          </span>
        </h1>
        <p className="my-5">
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <MainBtn name={"Get Started"} />
      </div>
      <div className="">
        <img className="w-full" src={bannerImg} alt="" />
      </div>
    </section>
  );
};

export default Banner;
