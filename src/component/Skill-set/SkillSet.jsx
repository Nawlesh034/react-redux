import React from 'react'
import Hyper from './Hyper'
import QuickStats from './QuickStats'
import ComparisonGraph from './Graph'
import SyllabusAnalysis from './SyllabusAnalysis'
import Question from './Question'

function SkillSet() {
  return (
        
    <div className='w-full my-4 grid gap-4 py-4'>
          <h2 className='text-gray-400 text-lg font-medium'>Skill Test</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='flex flex-col gap-5'>
              <Hyper />
              <QuickStats />
              <ComparisonGraph />
            </div>
            <div className='flex flex-col gap-5'>
              <SyllabusAnalysis />
              <Question />
            </div>
          </div>
     </div>
  )
}

export default SkillSet
