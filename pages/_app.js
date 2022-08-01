import "../styles/globals.css";
import Script from "next/script";



const MyApp = ({Component, pageProps}) => {
    
    
    return(
        <Component {...pageProps}>
            <Script strategy="afterInteractive">
                {/*
                    document.addEventListener("click", e => {
 
                        if (!( e.target.matches(".dropdownButton")) && 
                        !(e.target.matches(".dropdown")) ) {
                            var dropdowns = document.querySelectorAll(".dropdown");
                            for (let i=0; i<dropdowns.length; i++) {
                              let openDropdown = dropdowns[i];
                    
                              if (!(openDropdown.classList.contains("hidden")) 
                              && !(openDropdown.contains(e.target))) {
                                openDropdown.classList.add("hidden");
                              }
                            }
                        }
                      })
                    */}
            </Script>
        </Component>
    );
}

export default MyApp;