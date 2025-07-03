import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import { GoArrowRight } from "react-icons/go";
import { BiLayer } from "react-icons/bi";
import { MdAutoFixHigh } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";


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
        <p className='mt-4 text-gray-500 max-w-[700px] mx-auto lg:mx-0 mb-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.</p>

        <div className='flex w-full gap-[30px] flex-wrap justify-between'>

          <div className='w-[350px]'>
            <div className='relative w-[350px] h-[300px] mb-10'>
              <Image fill src="/Image(1).png" alt='Image' />
            </div>
            <h1 className='font-semibold text-3xl '>Business strategy</h1>
            <p className='mt-4 mb-4 text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, </p>
            <Link href="" className="flex text-orange-500 items-center w-[130px] gap-3 hover:text-blue-800 ">
              <p>Learn More</p>
              <GoArrowRight className='text-2xl' />
            </Link>
          </div>

          <div className='w-[350px]'>
            <div className='relative w-[350px] h-[300px] mb-10'>
              <Image fill src="/Image(2).png" alt='Image' />
            </div>
            <h1 className='font-semibold text-3xl '>Digitalization</h1>
            <p className='mt-4 mb-4 text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, </p>
            <Link href="" className="flex text-orange-500 items-center w-[130px] gap-3 justify-between hover:text-blue-800 ">
              <p>Learn More</p>
              <GoArrowRight className='text-2xl' />
            </Link>
          </div>

          <div className='w-[350px]'>
            <div className='relative w-[350px] h-[300px] mb-10'>
              <Image fill src="/Image(3).png" alt='Image' />
            </div>
            <h1 className='font-semibold text-3xl '>Risk assessment</h1>
            <p className='mt-4 mb-4 text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, </p>
            <Link href="" className="flex text-orange-500 items-center w-[130px] gap-3 justify-between hover:text-blue-800 ">
              <p>Learn More</p>
              <GoArrowRight className='text-2xl' />
            </Link>
          </div>
        </div>
      </section>



      <section className=' bg-[#e6f0f8]'>
        <div className='container mx-auto max-w-[1200px] px-3 py-15'>
          <div className='flex justify-between items-center mb-10'>
            <h2 className='text-3xl md:text-4xl font-semibold text-[#1e293b] leading-tight w-md mb-2 '>We are building software solution that solves your business challenges</h2>
            <p className='mt-4 text-gray-500 max-w-lg mx-auto lg:mx-0 mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.</p>
          </div>

          <div className='flex w-full gap-[30px] flex-wrap justify-between'>
            <div className='w-[350px] bg-white rounded-lg p-6'>
              <BiLayer className='text-orange-500 text-4xl my-4 ' />
              <h1 className='font-semibold text-3xl '>Invoicing</h1>
              <p className='mt-4 text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, </p>
            </div>

            <div className='w-[350px] bg-white rounded-lg p-6'>
              <MdAutoFixHigh className='text-orange-500 text-4xl my-4 ' />
              <h1 className='font-semibold text-3xl '>Support</h1>
              <p className='mt-4 text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, </p>
            </div>

            <div className='w-[350px] bg-white rounded-lg p-6'>
              <FaRegHeart className='text-orange-500 text-4xl my-4 ' />
              <h1 className='font-semibold text-3xl '>Surveying</h1>
              <p className='mt-4 text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, </p>
            </div>
          </div>
        </div>
      </section>



      <section className=" bg-white ">
        <div className="container mx-auto max-w-[1200px] px-4 md:px-20 py-12 grid md:grid-cols-2 items-center gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1e293b] leading-tight w-md mb-2 ">
              The energy of a start-up combined with 30 years of experience.
            </h2>
            <p className="mt-4 text-gray-500 max-w-lg mx-auto lg:mx-0 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit
              amet eros blandit, hendrerit elit at, mattis purus. Vivamus commodo
              suscipit tellus et pellentesque.
            </p>
            <div className="flex gap-12">
              <div>
                <p className="text-orange-500 text-3xl md:text-4xl font-semibold">15+</p>
                <p className="mt-4 text-gray-600 max-w-lg mx-auto lg:mx-0 mb-6">Awards received</p>
              </div>
              <div>
                <p className="text-orange-500 text-3xl md:text-4xl font-semibold">500+</p>
                <p className="mt-4 text-gray-600 max-w-lg mx-auto lg:mx-0 mb-6">Clients served</p>
              </div>
            </div>
          </div>
          <div className="relative w-[500px] h-[550px] ">

            <Image
              fill
              src="/Image(4).png"
              alt="client smiling"
              className='rounded-lg'
            />
          </div>
        </div>
      </section>


      <section className=" bg-[#e6f0f8] ">
        <div className='container mx-auto max-w-[1200px] px-4 md:px-20 py-12'>
          <div className="grid md:grid-cols-2 items-center gap-20">
            <div>
              <div className="flex gap-10 mb-4">
                <span className=" bg-pink-100 text-orange-400 px-2  rounded-full font-semibold hover:bg-orange-300 transition">
                  Business Strategy
                </span>
                <span className="bg-pink-100 text-orange-400 px-2  rounded-full font-semibold hover:bg-orange-300 transition">
                  Digitalization
                </span>
                <span className="bg-pink-100 text-orange-400 px-2  rounded-full font-semibold hover:bg-orange-300 transition">
                  Risk Assessment
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Helping clients with <br /> research and strategy for their business
              </h3>
              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                sit amet eros blandit, hendrerit elit at, mattis purus. Vivamus
                commodo suscipit tellus et pellentesque.
              </p>
              <p className="text-gray-600 mb-6">
                Mattis purus. Vivamus commodo suscipit tellus et pellentesque.
              </p>
              <Link href="" className="flex text-orange-500 items-center w-[200px] gap-3 hover:text-blue-800 ">
                <p>See all services</p>
                <GoArrowRight className='text-2xl' />
              </Link>
            </div>
            <div className='relative w-[350px] h-[350px] '>
              <Image
                fill
                src="/ServiceImage.png"
                alt="working together"
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>


    </main>
  )
}

export default HomePage
