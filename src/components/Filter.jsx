function Filter() {
  return (
    <div className="dropdown dropdown-bottom dropdown-start mb-[50px] bg-white ">
      <label tabIndex={0} className="btn m-1 text-base">
        Filter by Region
      </label>
      <ul
        tabIndex={0}
        className="ml-[-255px] dropdown-content z-[1] menu p-2  w-[200px] flex-wrap
        h-[56px]"
      >
        <li>
          <a>All</a>
        </li>
        <li>
          <a>Africa</a>
        </li>
        <li>
          <a>America</a>
        </li>
        <li>
          <a>Asia</a>
        </li>
        <li>
          <a>Europe</a>
        </li>
        <li>
          <a>Oceania</a>
        </li>
      </ul>
    </div>
  );
}

export default Filter;
