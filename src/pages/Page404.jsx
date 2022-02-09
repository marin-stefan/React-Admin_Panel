import React from "react";

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
          src="https://c.tenor.com/tpJFuWIHFa4AAAAM/steven-seagal-lost.gif"
          alt="Actor Steven Seagal looking around confused"
        />
      </div>
    </div>
  );
}

export default Page404;
