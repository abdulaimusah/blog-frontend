

// this is the about component of the about page.

const About = () => {

    return(
        <section className="flex items-center justify-center w-full" >
            <article className="w-full sm:w-3/4 md:3/5 lg:1/2" >
                <h1 className="p-2 bg-stone-200" >About This Site</h1>
                <p className="p-2" >This is a micro blog <br></br>
                You can view all blog posts<br></br>
                Once you sign in, you can post, update or delete
                your posts. If you have an opinion of any post,
                 you can comment</p>
            </article>
        </section>
    )
}
export default About;