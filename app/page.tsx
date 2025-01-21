import CustomFiler from "@/components/CustomFiler"
import Hero from "@/components/Hero"
import SearchBar from "@/components/SearchBar"

function Home() {
  return (
    <main className="overflow-hidden">
      <Hero/>
      <div className="mt-4 padding-x padding-y max-width" id ="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar/>
        <div className="home__filter-container">
          <CustomFiler/>
        </div>
        </div>

      </div>
    </main>
  )
}

export default Home

