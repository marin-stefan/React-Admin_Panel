import React from "react";
import notFoundImage from '../images/screen-shot-2017-11-16-at-3.50.20-pm-1.png';

function Page404() {
  return (
    <div>
      <div className=" text-center fs-1 py-5 my-5 font-monospace fst-normal">
        <p className=" badge text-warning">Error !!! </p>
        <br />
        <p className=" badge text-warning">Dear Human ,</p>
        <br />
        <p className="badge text-warning">this page does not exist</p>
      </div>
      <div className="  align-self-center text-center  py-5">
        <img
          // src="https://c.tenor.com/tpJFuWIHFa4AAAAM/steven-seagal-lost.gif"
          src={notFoundImage}
          alt="Page not found"
        />
      </div>
    </div>
  );
}

export default Page404;
