import  Link from 'next/link';
//this is the header component of the blog


const Header = () => {

    return(
        <header className="h-12 md:h-14 bg-pink-900 flex-shrink-0
        text-white text-sm p-2 flex items-center
        justify-between ">
            <Link href="/" >
                
                    Home
                
            </Link>
            <div className=" 
            flex items-center justify-between">
                {/*<button>Dark Toggle</button>*/}
                <Link href="/about" >
                    
                        About
                    
                </Link>
            </div>
        </header>
    )
}

export default Header;