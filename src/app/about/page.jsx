import React from 'react'
import Image from 'next/image'


function AboutPage() {
  return (
    <main>
      <section className="bg-[#e6f0f8] w-full py-10">
        <div className="container mx-auto max-w-[1200px] px-3 flex flex-col-reverse lg:flex-row items-center justify-between">

          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-semibold text-[#1e293b] leading-tight">
              We value human, organizational, and operational intelligence, not just artificial
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

          <div className="relative w-[500px] h-[600px] ">
            <Image
              src="/Image(5).png"
              alt="woman"
              width={500}
              height={600}
              className="rounded-lg "
            />
          </div>
        </div>
      </section>



      <section className=" bg-white ">
        <div className="container mx-auto max-w-[1200px] px-4 md: py-12">
          <div className='flex justify-between items-center'>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1e293b] leading-tight w-md  ">
              The energy of a start-up combined with 30 years of experience.
            </h2>
            <p className="mt-4 text-gray-500 max-w-lg mx-auto lg:mx-0 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit
              amet eros blandit, hendrerit elit at, mattis purus. Vivamus commodo
              suscipit tellus et pellentesque.
            </p>
          </div>
          <div className="flex gap-12 justify-between py-6">
            <div className='w-[220px] '>
              <p className="text-orange-500 text-4xl md:text-4xl font-semibold mb-4">15+</p>
              <h2 className='text-2xl md:text-2xl font-semibold text-[#1e293b] leading-tight w-md mb-2'>Awards received</h2>
              <p className="mt-4 text-gray-600 mx-auto lg:mx-0 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.</p>
            </div>
            <div className='w-[220px] '>
              <p className="text-orange-500 text-4xl md:text-4xl font-semibold mb-4">500+</p>
              <h2 className='text-2xl md:text-2xl font-semibold text-[#1e293b] leading-tight w-md mb-2'>Clients served</h2>
              <p className="mt-4 text-gray-600 mx-auto lg:mx-0 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.</p>
            </div>
            <div className='w-[220px] '>
              <p className="text-orange-500 text-4xl md:text-4xl font-semibold mb-4">34+</p>
              <h2 className='text-2xl md:text-2xl font-semibold text-[#1e293b] leading-tight w-md mb-2'>Employees</h2>
              <p className="mt-4 text-gray-600 mx-auto lg:mx-0 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.</p>
            </div>
            <div className='w-[220px] '>
              <p className="text-orange-500 text-4xl md:text-4xl font-semibold mb-4">130+</p>
              <h2 className='text-2xl md:text-2xl font-semibold text-[#1e293b] leading-tight w-md mb-2'>Custom solutions</h2>
              <p className="mt-4 text-gray-600  mx-auto lg:mx-0 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

export default AboutPage