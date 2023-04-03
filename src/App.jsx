import Navbar from "./Navbar";
import TravelCard from "./TravelCard";
import data from './data'

const travelCards = data.map(place => 
  <TravelCard
   title = {place.title}
   imgUrl = {place.imgUrl}
   location = {place.location}
   startDate = {place.startDate}
   endDate = {place.endDate}
   gmapsLink = {place.gmapsLink}
   description = {place.description}
  />)

export default function App() {
  return (
    <div className="">
      <Navbar />
      <section className="bg-white px-[42px] py-[24px]">
        {...travelCards}
      </section> 
    </div>
  )
}
