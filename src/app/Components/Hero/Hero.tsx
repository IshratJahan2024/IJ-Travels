import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className="min-h-screen w-{100%} bg-blue-400">
        <Image className=" center-2 top-5 z-10 lg:w-[300px] xl:w-[320px] h-auto my-4 mx-4"

        src="/air crafe.webp"
        width={250} height={500}
        
        alt="hero bg"/>

        <section className="hero">
          <h1 className="flex item-center text-4xl text-red-600">Your Gateway to Unforgettable Journeys </h1>
            <div className="flex">
                <p className="font-black text-1xl items-center">
                 Where are you flying from,Where do you want to go,Select your departure destination,
                 where we transform your travel dreams into unforgettable experiences. As a premier tourism company of Pakistan


                   </p>

            </div> 

            <h1 className="text-center text-4xl font-style:italic; hover:text-blue-800">About Us</h1>
            <br />
            <p>
            Our Group Tours are meticulously crafted to foster camaraderie among travelers while 
            exploring breathtaking destinations worldwide. From culturally immersive adventures 
            to thrilling escapades, our itineraries cater to varied interests and ensure a seamless, 
            memorable journey for all.At Deluxe Holidays, we aim to redefine travel by crafting journeys
             that resonate with your aspirations, ensuring each moment is brimming with discovery and delight. 
             Join us and embark on a voyage that transcends expectations, creating cherished memories that last
              a lifetime.
            </p>

            <h1 className="text-center text-4xl  hover:text-blue-800">Our Pakages</h1>
            <br />

            <p>
            Moreover, our commitment extends to facilitating transformative religious tourism experiences, 
            providing pilgrims with opportunities for spiritual fulfillment through visits to sacred sites
             and cultural immersion.
            </p>
            <h1 className="text-center text-4xl  hover:text-blue-800">Tours</h1>
            <br />

            <p>
            Kashmir 4 DAYS By Deluxe Holidays Departures: Any Time ☆03 Nights Stay ☆Islamabad To Islamabad 
            ☆Breakfast ☆Bussiness Class Train Tickets Return ☆Luxury Transport Included Sightseeings
             Muzaffarabad Bazaar , Kohala , Peer Chenasi , Dhani Water Fall , Kutton Water Fall , 
             Upper Neelum Valley , Arthmaqam ♧All Taxes & Service Charges Included.

             <br />
             Swat Kallam 4 DAYS* By Deluxe Holidays Departures: Any Time ☆03 Nights Stay ☆Islamabad To 
             Islamabad ☆Breakfast ☆Luxury Transport Included Sightseeings Khanpur Dam , Swat Motorway Tunel
              , Behrain Bazaar , Ushu Forest , Pallugha Point , Mahudand Lake ,Madyan Troyth Fish Farm ♧All
              Taxes & Service Charges Included.

                            
            </p>
            <h1 className="text-center text-4xl hover:text-blue-800">Contact Us</h1>
            <br />

            <p>
              Explore the world for your self, for futher detail contact us.
              <br />
              Email:ijtravels@gmail.com
              <br />
              Phone: (021) 123 4567 890
              <br />
              Addres: 000 Avenue road /Karachi
              <br />

            </p>

        </section>
        <br />
        <button className="bg-purple-600 border-radius: 1rem;">Click Me</button>
      
    </div>
  )
}

export default Hero
