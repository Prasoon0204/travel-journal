const Card = () => {
  return (
    <div className="flex font-inter rounded-md m-16 gap-5">
        <img className="rounded-md" src="https://scrimba.com/links/travel-journal-japan-image-url" alt="card-image" width={140} height={168}/>
        <div className="py-5">
            <div className="flex items-center mt-4">
                <img className="mr-1" src="/src/assets/location.png" alt="location" width={12}/>
                <p className="pr-4 text-xs text-blue-950">JAPAN</p>
                <a className="text-xs text-gray-400 underline" href="https://maps.app.goo.gl/6RLYZDuuuqJ7kNGZ9">View On Google Maps</a>
            </div>
            <div className="font-bold text-2xl my-2">Mount Fuji</div>
            <p className="text-xs mt-4 mb-2 font-semibold">12 Jan, 2021 - 24 Jan, 2021</p>
            <p className="text-xs text-blue-950">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
        </div>
    </div>
  )
}

export default Card