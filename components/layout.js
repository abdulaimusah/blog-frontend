import Header from "./header";
import Footer from "./footer";
import Head from "next/head";
import Script from "next/script";

// this is a layout component.
// it serves as generic component to
// render special components

const Layout = ({children}) => {

    return(
        <div className="min-h-screen flex flex-col font-sans " 
        style={{fontFamily: 'Poppins',}} >
            <Head>
                <title>My Blog</title>

                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
<link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">

</link>
                

            </Head>
            <Header></Header>
            <main className="p-2 md:px-8 md:py-4
             flex-grow" >
                

               {children}
            </main>
            <Footer></Footer>
            <Script src="/customjs.js" 
            stratery="afterInteractive"></Script>
        </div>
    );
}
export default Layout;