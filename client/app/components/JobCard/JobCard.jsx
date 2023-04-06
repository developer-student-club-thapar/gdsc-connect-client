import { React, useState } from "react";
import { BsDot, BsBookmark, BsBookmarkFill } from "react-icons/bs";

function JobCard() {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const tagStyle =
    "px-3 py-2 mr-2 bg-[#eef5ff] text-blue-500 font-semibold text-xs rounded-md";

  const iconSource =
    "https://companieslogo.com/img/orig/GOOG-0ed88f7c.png?t=1633218227";
  //   const iconSource =
  //     "https://static.vecteezy.com/system/resources/previews/008/214/517/original/abstract-geometric-logo-or-infinity-line-logo-for-your-company-free-vector.jpg";
  const onBookmarkHandler = () => {
    setIsBookmarked(!isBookmarked);
  };
  return (
    <>
      <div className="px-3 pb-5 ">
        <div className="border-solid rounded-lg border-2 border-bordergray transition duration-500 ease-in-out transform hover:shadow-2xl">
          <div className="p-4">
            <div className="flex items-start flex-none">
              <div className="w-24 h-24 rounded-lg border-2 border-solid flex flex-none items-center bg-white">
                <img
                  src={iconSource}
                  alt="profile"
                  className="w-20 h-20 m-auto"
                />
              </div>
              <div className="px-2 pl-4">
                <p className="font-semibold">Web Developement Intern</p>
                <div className="flex items-center text-sm text-gray-500 font-semibold pt-2">
                  <p>Google</p>
                  <BsDot />
                  <p>India</p>
                </div>
              </div>
            </div>
            <div className="flex justify-start pt-4">
              <div className={tagStyle}>
                <p>Full-time</p>
              </div>
              <div className={tagStyle}>
                <p>Onsite</p>
              </div>
              <div className={tagStyle}>
                <p>Internship</p>
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-500 pt-4 ">
                <p className="line-clamp-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam auctor, nisl nec ultricies lacinia, nisl nisl tincidunt
                  nisl, nec aliquet nisl nisl eu nisl. Sed tincidunt, nisl nec
                  ultricies lacinia, nisl nisl tincidunt
                </p>
              </div>
            </div>
            <div className="flex items-center pt-4">
              <div className="flex items-center">
                <p className="text-sm text-gray-500">2 days ago</p>
                <BsDot className="text-gray-500" />
                <p className="text-sm text-black">719 Applicants</p>
              </div>
              <div className="ml-auto">
                <div onClick={onBookmarkHandler}>
                  {isBookmarked ? (
                    <BsBookmarkFill className="text-blue-500" />
                  ) : (
                    <BsBookmark className="text-blue-500" />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default JobCard;
