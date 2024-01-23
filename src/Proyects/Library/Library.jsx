import Available from "./views/Available";
import List from "./views/List";

const Library = () => {
  return (
    <div className="grid grid-cols-10 gap-4 min-h-full p-8 pb-20">
      <div className="col-span-7">
        <Available />
      </div>

      <div className="col-span-3">
        <List />
      </div>
    </div>
  )
}

export default Library;