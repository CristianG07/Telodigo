import { Booking } from "../components/home/Booking"
import { CardsMobile } from "../components/home/CardsMobile"
import { Functions } from "../components/home/Functions"
import { Hero } from "../components/home/Hero"
import { Subscription } from "../components/home/Subscription"

export const Home = () => {
  return (
    <>
      <Hero />
      <Booking />
      <Functions />
      <CardsMobile />
      <Subscription />
    </>
  )
}