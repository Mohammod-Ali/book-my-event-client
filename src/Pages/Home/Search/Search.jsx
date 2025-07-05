import React from "react";

const Search = () => {
    const searchHandle = e => {
        e.preventDefault()
        console.log(e.target.name.value)
    }
  return (
    <div
      className="hero min-h-auto"
      style={{
        backgroundImage:
          "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div>
          <h1 className="mb-5 text-5xl font-bold">
            Search Event By Event Name
          </h1>
          <div className="card bg-base-100  shrink-0 shadow-2xl">

            {/* form start here */}
            <form onSubmit={searchHandle} className="card-body rounded bg-black">
              <label className="label text-2xl ">Type Event Name</label>
              <input
                className="bg-white h-12 text-black p-2 rounded"
                type="text"
                name="name"
              />
              <input className="btn btn-outline mt-4 text-2xl" type="submit" value="Search" />
            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
