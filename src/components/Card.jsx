import React from 'react'

function Card({ data, loading }) {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
      {data.length ? (
        data.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-xl overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={item.Poster}
              alt={item.Title}
              className="h-60 w-full object-contain p-6 bg-gray-100 transition-transform duration-500 hover:scale-110"
            />
            <div className="p-6 flex flex-col gap-3">
              <h1 className="text-lg font-bold text-gray-900 truncate">{item.Title}</h1>
              <p className="text-sm uppercase tracking-wide font-semibold text-indigo-600">{item.Type}</p>
              <p className="text-sm text-gray-600">{item.Year}</p>
              <button className="mt-4 py-3 px-5 rounded-lg bg-red-600 text-white font-semibold shadow-md hover:bg-red-700 transition-colors duration-300">
               Watch Now
             </button>

            </div>
          </div>
        ))
      ) : (
        <p className="col-span-full text-center text-gray-400 text-lg font-medium">
          Movie not found
        </p>
      )}
    </div>
  )
}

export default Card
