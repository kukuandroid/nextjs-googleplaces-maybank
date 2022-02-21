import React from 'react'

const PlaceCard = ({
  name,
  place_id,
  business_status,
  vicinity,
  icon,
  types
}) => {
  return (
    <div key={place_id} className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="flex items-center ">
        <img className="w-6 h-6" src={icon} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold text-md mb-2">{name}</div>
          <p className="text-gray-700 text-sm">
            {business_status} | {vicinity}
          </p>
        </div>
      </div>
      <div className="px-6 pt-4 pb-2">
        {types.map((y) => (
          <span key={y} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {y}
          </span>
        ))}
      </div>
    </div>
  )
}

export default PlaceCard
