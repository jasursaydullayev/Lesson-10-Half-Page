import { useFetch } from "../hooks/useFetch";
function Search() {
  const { data, isPending, error } = useFetch(
    "https://restcountries.com/v3.1/all"
  );
  console.log(data);

  const handleSubmit = (e) => {
    e.preventDefault();

    const query = searchText.current.value;
    console.log(query);
  };
  return (
    <div>
        <form onSubmit={handleSubmit} className="mb-[50px]">
        <input type="text" placeholder="Search for a country…" className="input input-bordered input-error w-full max-w-xs text-xl" />
        </form>
    </div>
  )
}

export default Search