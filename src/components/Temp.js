<div className="search m-4 p-4 flex justify-center items-center">
  <input
    type="text"
    className="border border-solid border-gray-300 rounded-lg p-2"
    value={searchTxt}
    onChange={(event) => {
      setsearchTxt(event.target.value);
    }}
    placeholder="Search restaurants..."
  />
  <button
    className="px-4 py-2 bg-green-400 m-4 rounded-lg text-white"
    type="button"
    onClick={() => {
      newList1 = restraurantList.filter((restro) =>
        restro.info.name.toLowerCase().includes(searchTxt.toLowerCase())
      );
      setfilterRestro(newList1);
    }}
  >
    Search
  </button>
</div>