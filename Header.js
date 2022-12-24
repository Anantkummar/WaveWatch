// import {SearchIcon} from '@heroicons/react@v1/solid'

function Header() {
  return (
    <header>
      <div className="flex itmes-center space-x-2 md:space-x-10">
      <h1 className="text-2xl">WaveWatch</h1>
        <ul className="hidden space-x-4 md:flex">
          <li className="headerlink">Home</li>
          <li className="headerlink">Tv Shows</li>
          <li className="headerlink">Movies</li>
          <li className="headerlink">New & Popular</li>
          <li className="headerlink">My List</li>
        </ul>
      </div>
      
      <div>
        {/* <SearchIcon className="hidden h-6 w-6 sm:inline" /> */}
        {/* <p class name="hidden lg:inline">kids <p/> */}
      </div>
    </header>
  )
}

export default Header