import  Link from 'next/link';
//this is the header component of the blog


const Header = () => {

    return(
        <header className="h-12 md:h-14 bg-pink-900 flex-shrink-0
        text-white text-sm p-2 flex items-center
        justify-between ">
            <Link href="/" >
                <button className="bg-blue-700 px-2 py-1
                active:bg-blue-500 rounded-md text-
                hover:bg-blue-500 ">
                
                    Home
                </button>
                
            </Link>
            <div className=" 
            flex items-center justify-between">
                {/*<button>Dark Toggle</button>*/}
                <Link href="/about" >
                <button className="bg-blue-700 px-2 py-1
                active:bg-blue-500 rounded-md text-sm 
                hover:bg-blue-500 ">
                    
                        About
                </button>
                    
                </Link>
            </div>
        </header>
    )
}

export default Header;