import Card from "../components/Card";
import data from "../utils/db.json";

const Proyects = () => {
  return (
    <div className="bg-gradient-to-br from-blue-400 to-indigo-900 min-h-screen overflow-auto pb-10">
      <div
        className="grid grid-cols-3 gap-1 m-0 p-10 gap-y-10 z-50"
      >
        {data.map((proyect) => (
          <Card
            key={proyect.id}
            image={proyect.image}
            name={proyect.name}
            description={proyect.description}
            path={proyect.path}
            id={proyect.id}
          />
        ))}
      </div>
    </div>
  )
}

export default Proyects;