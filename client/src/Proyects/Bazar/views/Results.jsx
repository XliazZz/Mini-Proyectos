import { useSelector } from "react-redux";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";

const Results = () => {
  const results = useSelector((state) => state?.bazar?.searchsResults) ?? [];
  const error = useSelector((state) => state?.bazar.error);

  let quantityResults = results ? results.length : 0;
  let searchName = localStorage.getItem('searchTerm');

  const allTheCategories = Array.isArray(results) ? results.map((product) => product.category) : [];  
  const uniqueCategories = [...new Set(allTheCategories)];

  return (
    <div className="justify-center sm:pb-10 sm:h-screen">
      
      <div className="my-1 sm:pt-3">
        <SearchBar name={searchName}/>
      </div>

      {Array.isArray(results) && results.length !== 0 ? (     
        <div className="justify-center mb-5 p-0 sm:text-center">
          <h2 className="font-bold text-xl mb-3 mx-1">Resultados de la búsqueda de {`"${searchName}": ${quantityResults} `}</h2>

          <div className="flex flex-wrap sm:text-center sm:justify-center sm:my-8 sm:mt-5">
            {uniqueCategories.map((category) => (
              <div key={category} className="justify-center bg-indigo-500  mx-1 my-1 px-1 rounded-sm">
                <p className="font-line uppercase text-sm">{category}</p>
              </div>
            ))}
          </div>
        </div>
        ) : (
        <div className="justify-center text-center mt-5 p-0">
          <h2 className=" text-xl mb-3 mx-1">Busca un producto!</h2>
        </div>
      )}

      <div className="grid gap-y-5 sm:grid-cols-3 sm:content-center sm:justify-center sm:justify-items-center">
        {Array.isArray(results) && results.length !== 0 && results.map((preduct) => (
          <Card 
            key={preduct.id}
            title={preduct.title}
            description={preduct.description}
            price={preduct.price}
            image={preduct.images[0]}
            rating={preduct.rating}
            id={preduct.id}
          />
        ))}
      </div>
      
      {error && (
        <div className="flex text-center mt-5 justify-center">
          <h2 className="text-white text-xl">No se encontraron resultados para {`"${searchName}"`}</h2>
        </div>
      )}
    </div>
  );
};

export default Results;