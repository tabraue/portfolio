import React from 'react'

function Projects() {
  return (
    <section className="text-lg m-3 p-9 flex flex-col justify-center border-solid border-green-d border-2 text-defaultTextColor">
      <h1 className="text-4xl pb-3">Proyectos</h1>
      <div className='grid grid-cols-4 gap-6'>
        <div className='border-solid border-green-d border-2'>proyecto</div>
        <div className='border-solid border-green-d border-2'>proyecto</div>
        <div className='border-solid border-green-d border-2'>proyecto</div>
        <div className='border-solid border-green-d border-2'>proyecto</div>
        <div className='border-solid border-green-d border-2'>proyecto</div>
      </div>
    </section>
  )
}

export default Projects