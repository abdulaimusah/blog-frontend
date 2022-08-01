import { useEffect, useState } from "react";



const DisplayDate = ({theDate}) => {

    const postDate = new Date(theDate);
    const currentDate = new Date();
    
    const elapsed= currentDate.getTime() - postDate.getTime();

    



    const getPostTime = (elapsed) => {



        if (elapsed < 60000) {
            return `${elapsed} seconds`;
        }

        else if (elapsed < 120000 ) {
            return  "1 minute" ;
        }
        else if (elapsed < 3600000 ) {
            return `${Math.floor(elapsed/60)} minutes`;
        }
        else if (elapsed < 7200000) {
            return "1 hour";
        }
        else if (elapsed < 86400000) {
            return `${Math.floor(elapsed/3600000)} hours`;
        }
        else if (elapsed < 172800000) {
            return "1 day";
        }
        else {
            return `${Math.floor(elapsed/(86400000))} days`;
        }
    }
    const instantDate = new Date();
    const [thisTime, setThistime] = useState(((new Date()).getSeconds())
    -(instantDate.getSeconds()))

    const dateDiff= getPostTime(elapsed);

    return(
        <span>
            {/*`${postDate.getFullYear()},${postDate.getMonth()}`*/}
            {dateDiff}{' '}ago{" "}
        </span>
    );
}
export default DisplayDate;