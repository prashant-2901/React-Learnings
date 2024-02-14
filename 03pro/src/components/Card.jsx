import React from 'react'

function Card({username = "Pro", location, src}) {
  return (
    <div className='mt-5'><figure className="md:flex bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
    {src? <img className="w-24 h-24 rounded-full mx-auto my-auto" src={src} alt="" width="384" height="512"/>: null}
    <div className="pt-6 space-y-4">
        <blockquote>
        <p className="text-lg fo">
            {username}
        </p>
        </blockquote>
        <figcaption>
        <div>
            
        </div>
        <div>
            Staff Engineer, Algolia{location}
        </div>
        </figcaption>
    </div>
    </figure></div>
  )
}

export default Card