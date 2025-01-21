import CustomFiler from "@/components/CustomFiler";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import { fetchCars } from "./utils";
import CarCard from "@/components/CarCard";

export async function Home() {
  const allCars = await fetchCars();
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-4 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFiler />
            <CustomFiler />
          </div>
        </div>
        {
          !isDataEmpty ? (
            <section>
              <div className="home__cars-wrappers">
              {
                allCars.map((car, index) => (<CarCard car={car}/>))
              }
              </div>
            </section>
          ):(
            <div className="home__error-container">
              <h2 className=" text-black text-xl  font-bold">Opp! no results</h2>
              <p>{allCars?.message}</p>
            </div>
          )
        }
      </div>
    </main>
  );
}

export default Home;
