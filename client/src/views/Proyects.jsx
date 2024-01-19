import Card from "../components/Card";
import data from "../utils/db.json";

const Proyects = () => {
  return (
    <div>
      <div className="text-center mt-10">
        <h1 className="text-3xl font-extrabold">MiniProyectos</h1>
      </div>
      <div
        className="grid grid-cols-2 gap-0 m-0 p-10"
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
        ))

        }
      </div>
    </div>
  )
}

export default Proyects;