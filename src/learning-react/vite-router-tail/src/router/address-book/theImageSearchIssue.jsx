
function SearchBarWithIssue() {
  return (
    <div className="flex items-center gap-2  border-solid border-b border-x-2 py-4  bg-amber-200 ">
      <img
        src="search_24.svg"
        alt="search icon"
        width={24}
        height={24}
        // max-w-none prevents the issue. but not sure the reason.
        className=""
      ></img>
      <input
        type="search"
        placeholder="Search"
        // min-w-0 solve the problem.
        className="pl-1 bg-red-500 min-w-0"
      ></input>
    </div>
  );
}

function ToolBarWithIssue() {
  return (
    <div className="w-[22rem]">
      <section className="flex flex-row gap-2 py-4 px-8 bg-amber-200">
        <SearchBarWithIssue></SearchBarWithIssue>
        <input type="button" value="New" className=""></input>
      </section>
    </div>
  );
}

export default ToolBarWithIssue;
