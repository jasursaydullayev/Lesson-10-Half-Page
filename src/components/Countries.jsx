import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function Countries() {
  const { data, isPending, error } = useFetch(
    "https://restcountries.com/v3.1/all"
  );
  console.log(data);
  return (
    <div>
      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
        {data &&
          data.map((country) => {
            const {
              name: { common },
              flags: {svg},
              population,
              region,
              capital
            } = country;
            return (
          <Link key={common} to={`/SingleCountry/${common}`} className="w-full">
          <li className="card w-full bg-base-100 shadow-xl mb-[40px]">
                  <img 
                  className="h-[250px] w-full object-cover rounded-lg"
                    src={svg}
                    alt={common}
                  />
                <div className="card-body">
                  <h2 className="card-title">
                   {common}     
                   </h2>
                   <div className="text-xl">
                    <p><span className="font-semibold"> Population: </span>{population}</p>
                    <p><span className="font-semibold"> Region: </span> {region}</p>
                    <p><span className="font-semibold"> Capital: </span>{capital ? capital[0] : 'No Capital'}</p>
                   </div>
                </div>
              </li>
          </Link>
            );
          })}
      </ul>
    </div>
  );
}

export default Countries;
