import { useEffect, useState } from "react";
import SectionTitle from "../sectionTitle/SectionTitle";

const JobCategory = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategoryList = async () => {
      const res = await fetch("/categoryList.json");
      const data = await res.json();
      setCategories(data);
    };
    fetchCategoryList();
  }, []);
  return (
    <>
      <SectionTitle
        title="Job Category List"
        desc="Explore thousands of job opportunities with all the information you need. Its your future"
      />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {categories.map((cat, idx) => (
          <div key={idx} className="rounded-xl border p-5">
            <div className="w-16 h-16 rounded">
              <img className="" src={cat?.icon} alt="" />
            </div>
            <h1 className="text-lg font-medium text-black mt-4">
              {cat?.title}
            </h1>
            <p className="text-sm text-gray-400">{cat?.jobs}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default JobCategory;
