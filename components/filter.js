import { useState } from 'react';

// this component filters posts 
// by time, likes, and keywords.

const Filter = () => {

    const [search, setSearch] = useState("search");

    const [rank, setRank] = useState("l")

    const handleFilter = () => {
        
        document.querySelector("#filter")
        .classList.toggle("hidden");

    }

    return(
        <aside className="relative" >
            <div className="mb-4" >
                {/*<div className="md:hidden" >*/}
                    <button className="text-sm md:hidden
                    bg-indigo-800 py-1 px-2 text-white
                    inline-block dropdownButton rounded-md
                    mr-4 " 
                    onClick={handleFilter} >
                        Filter
                    </button>
                {/*</div>*/}
                <input type="search" 
                className="px-1 border border-gray-300 
                drop-shadow-md shadow-gray-300 rounded-md
                outline-none mb-4 focus:border-sky-400 "
                name="search" value={search}
                onChange={ e =>setSearch(e.target.value)} />
                
            </div>
            <div id="filter" className="hidden md:block top-8 left-0
            dropdown z-10 md:z-0 absolute md:static text-white
            p-1 bg-slate-600 rounded-sm drop-shadow-md
            shadow-gray-200 md:drop-shadow-none " >
                <div>
                    <input type="radio" name="rank" id="rank1"
                    value="latest"
                    checked 
                    onChange={e=>setRank(e.target.value)} />
                    <label for="rank1">Rank by latest</label>
                </div>
                <div>
                    <input type="radio" name="rank" id="rank2"
                     value="oldest"
                     onChange={e=>setRank(e.target.value)} />
                    <label for="rank2" >Rank by oldest</label>
                </div>
            </div>

        </aside>
    )
}
export default Filter;