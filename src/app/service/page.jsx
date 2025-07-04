import Image from 'next/image'
import React from 'react'
 

function ServicePage
() {
  return (
    <main>
      <section className="bg-[#e6f0f8] w-full py-10">
        <div className="container mx-auto max-w-[1200px] px-3 flex flex-col-reverse lg:flex-row items-center justify-between">

          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-semibold text-[#1e293b] leading-tight">
              We serve clients with ground breaking solutions
            </h1>
            <p className="mt-4 text-gray-500 max-w-md mx-auto lg:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition">
                See Our Services
              </button>
            </div>
          </div>

          <div className="relative w-[400px] h-[500px] ">
            <Image
              src="/Image(6).png"
              alt="woman"
              width={400}
              height={500}
              className="rounded-lg "
            />
          </div>
        </div>
      </section>
    </main>
  )
}

export default ServicePage
