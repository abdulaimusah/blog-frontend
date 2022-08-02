import Filter from "./filter";
import Link from "next/link";
import DisplayDate from "./displaydate";

// this components lists posts
// fetched from the server.


const PostList = ({posts}) => {
    
    
        
    
    return(
        <div className="md:flex md:gap-4 items-start ">
            <Filter />
            <section className="px-4
             sm:w-4/5 md:w-2/3 lg:w-1/2
              " >
                
                <div class="text-3xl font-bold pb-4">
                    <span class="bg-clip-text text-transparent
                    bg-gradient-to-r from-pink-500
                    to-violet-500">
                       Popular Posts
                    </span>
                </div>
                <div className="flex flex-col">
                {posts.length && posts.map(post => (
                    
                    
                    <button key={post.id} role="button"
                    className=" block py-1
                    border-slate-200 border-t text-start
                    mb-1 text-base  " >
                    <Link href={`/posts/${post.id}`} >
                        <div>
                        
                        <span class="pb-2 font-bold block " >
                            {post.title}
                            
                            <span className="italic font-normal">
                            {" by "}{post.author}
                            </span>
                            </span>
                        <span className="block font-light text-sm" >
                            published {" "}
                            <DisplayDate theDate={post.date} />
                        </span>
                        </div>
                    </Link>
                    </button>
                    
                    
                ))}
                </div>
            </section>
        </div>
    )

}
export default PostList;