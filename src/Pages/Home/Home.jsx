import Banner from "../../Components/Banner/Banner"
import Container from "../../Components/Container/Container"
import FavouriteCourse from "../../Components/FavoriteCourse/FavoriteCourse"
import FeaturedCourse from "../../Components/FeaturedCourse/FeaturedCourse"
import FeaturedInstructor from "../../Components/FeaturedInstructor/FeaturedInstructor"
import Navbar from "../../Components/Navbar/Navbar"
import TrendingCourse from "../../Components/TrendingCourse/TrendingCourse"

const Home = () => {
  return (
    <div>
      <Navbar />
      <Container className="my-20">
        <div>
          <Banner/>
          <FavouriteCourse/>
          <FeaturedCourse/>
          <TrendingCourse/>
          <FeaturedInstructor/>
        </div>
      </Container>
      {/* <Out></Out> */}
    </div>
  )
}

export default Home