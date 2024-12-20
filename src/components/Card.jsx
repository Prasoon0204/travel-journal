/* eslint-disable react/prop-types */
const Card = (props) => {
  return (
    <div className="flex font-inter rounded-md m-16 gap-5">
        <img className="rounded-md" src={props.img.src} alt={props.img.alt} width={160} height={168}/>
        <div className="py-5">
            <div className="flex items-center mt-4">
                <img className="mr-1" src="/src/assets/location.png" alt="location" width={12}/>
                <p className="pr-4 text-xs text-blue-950">{props.country}</p>
                <a className="text-xs text-gray-400 underline" href={props.googleMapsLink}>View On Google Maps</a>
            </div>
            <div className="font-bold text-2xl my-2">{props.title}</div>
            <p className="text-xs mt-4 mb-2 font-semibold">{props.dates}</p>
            <p className="text-xs text-blue-950">{props.text}</p>
        </div>
    </div>
  )
}

export default Card