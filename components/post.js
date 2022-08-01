

//this component renders a single post on the
//post[id] dynamic page.

import DisplayDate from "./displaydate";



const Post = (props) => {
    
    const post = props.post;
    
    return(
        <section className="flex items-center justify-center" >

            <article className="rounded-sm border-zinc-200 
            drop-shadow-md shadow-orange-100 p-2 md:p-4 
            sm:w-4/5 md:3/4 lg:w-3/5 xl:w-1/2 " >

                <div class="text-3xl font-bold ...">
                    <span class="bg-clip-text text-transparent
                    bg-gradient-to-r from-pink-500
                    to-violet-500">
                       {post.title}
                    </span>
                </div>

                <small className="text-sm block
                font-light" >published {" "}
                <DisplayDate theDate={post.date} />
                </small>

                <small className="text-sm  block
                font-bold mb-4 border-b
                border-slate-100 shadow-sm
                shadow-gray-100" >writtend by {" "}{post.author}
                </small>

                <p className="text-base first-letter:text-5xl">
                    {post.body}
                </p>
            </article>
        </section>
    );
}
export default Post;