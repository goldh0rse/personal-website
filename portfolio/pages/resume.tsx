import React from 'react'
import Bar from '../components/Bar'
import { languages, tools } from '../data'

const resume = () => {
  return (
    <div className='px-6 py-2'>

      {/* // Education & Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className='text-2xl font-bold my3'>Education</h5>
          <div>
            <h5 className='my-2 text-xl font-bold'>M.Sc in Computerscience & Engineering</h5>
            <p className='font-semibold'>Umeå University (2017 - 2022)</p>
            <p className='my-3'>Focus on Artificial Engineering</p>
          </div>  
        </div>      
          
        <div>
          <h5 className='text-2xl font-bold my3'>Experience</h5>
          <div>
            <h5 className='my-2 text-xl font-bold'>Software developer</h5>
            <p className='font-semibold'>TietoEvry (Summer 2021)</p>
            <p className='my-3'>What did i do??</p>
          </div>  
        </div>      
      </div>

      {/* // languages & Tools */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold h5">
            Languages & Frameworks
          </h5>  
          <div className="my-2">
            {
              languages.map(language=>(<Bar data={language} key={language.name}/>))
            }
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold h5">
            Tools & Software
          </h5>
          <div className="my-2">
            {
              languages.map(tools=>(<Bar data={tools} key={tools.name}/>))
            }
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default resume