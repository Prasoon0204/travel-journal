import '/src/App.css';
const Header = () => {
  return (
    <div className=" font-inter h-5 flex justify-center items-center gap-4 py-10 red">
        <img className='invert' src="/assets/globe.png" alt="globe image" width={40}/>
        <h1 className='text-white font-bold text-2xl'>My Travel Journal</h1>
    </div>
  )
}

export default Header