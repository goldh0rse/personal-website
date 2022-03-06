// import { GetServerSidePropsContext, GetStaticPropsContext } from 'next'
import React from 'react'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data'

export const index = () => {

  return (
    <div className='flex flex-col flex-grow px-6 pt-1'>
        <h5 className='my-3 font-medium'>
          Currently pursuing a M.Sc Computerscience & engineering degree at Umeå University.
          Writing my dissertation on the subject of Node Embedding Algorithms for Product Recommendation systems.
        </h5>
        <div 
          className='flex-grow p-4 mt-5 bg-gray-400' 
          style={{marginLeft:'-1.5em', marginRight:'-1.5em'}}
        >
          <h6 className='my-3 font-bold tracking-wide text-x1'>What I offer</h6>
          <div className='grid gap-6 lg:grid-cols-2'>
            {services.map(service=> (
              <div className='bg-gray-200 rounded-lg lg:col-span-1'>
                <ServiceCard service={service} />              
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default index

// export const getServerSideProps = async (context:GetServerSidePropsContext)=>{
//   // Calculation
//   const res = await fetch('http://localhost:3000/api/services')
//   const data = await res.json()

//   return {
//     props: {
//       services: data.services,

//     },
//   }
// }

// export const getStaticProps = async (context:GetStaticPropsContext)=>{
//   // Calculation
//   const res = await fetch('http://localhost:3000/api/services')
//   const data = await res.json()

//   return {
//     props: {
//       services: data.services,

//     },
//   }
// }