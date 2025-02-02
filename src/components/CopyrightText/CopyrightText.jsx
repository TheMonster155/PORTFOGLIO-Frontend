import React from "react";

const CopyrightText = () => {
  return (
    <div className="w-full text-center  py-4 mt-12">
      <p className="text-3xl sm:text-3xl md:text-[5rem] font-semibold text-white cursor-pointer transform transition duration-300 ease-in-out hover:scale-125  ">
        All rights reserved. &copy; {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default CopyrightText;
