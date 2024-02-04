import SearchBar from "../components/SearchBar";

const Landing = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-screen">

        <div className="text-center justify-items-center">
          <img src="https://cdn-icons-png.flaticon.com/512/11325/11325782.png" className="h-52 w-52 mx-auto" alt="" />
          <h1 className="text-5xl font-extrabold my-5 mb-2 font-mono">Bazar Online</h1>
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default Landing;
