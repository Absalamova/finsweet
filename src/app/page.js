import React from 'react'
import Image from "next/image";

function HomePage() {
  return (
   <main>

    <section className="bg-[#e6f0f8] w-full py-10">
      <div className="container mx-auto max-w-[1200px] px-3 flex flex-col-reverse lg:flex-row items-center justify-between">
    
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-semibold text-[#1e293b] leading-tight">
            Prosper with our <br />
            <span className="text-[#0f172a]">bespoke solutions</span>
          </h1>
          <p className="mt-4 text-gray-500 max-w-md mx-auto lg:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique
          </p>

          
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition">
              See Our Services
            </button>
            <button className="text-gray-700 font-semibold hover:underline">
              See All Services
            </button>
          </div>

          
          <div className="mt-10 text-sm text-gray-400">
            <p>Worked with 100+ Companies</p>
            <div className="flex items-center gap-6 mt-4 opacity-80 justify-center lg:justify-start">
              <Image src="/logo1.svg" alt="logo1" width={80} height={30} />
              <Image src="/logo2.svg" alt="logo2" width={80} height={30} />
              <Image src="/logo3.svg" alt="logo3" width={80} height={30} />
            </div>
          </div>
        </div>
          
          <div className="relative ">
            <Image
              src="/man.png" 
              alt="happy man"
              width={600}
              height={700}
              className="rounded-lg object-cover"
            />
          </div>
      </div>
    </section>

    <section className='container mx-auto max-w-[1200px] px-3 py-15'>
      <h2 className='text-3xl md:text-4xl font-semibold text-[#1e293b] leading-tight w-md mb-2 '>We help more than 1500  companies from all sectors</h2>
      <p className='mt-4 text-gray-500 max-w-md mx-auto lg:mx-0 mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.</p>
      <div>
        
      </div>
    </section>
   </main>
  )
}

export default HomePage
