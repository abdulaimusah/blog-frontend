
//this is the footer component of the blog page.


const Footer = () => {

    return(
        <footer className="flex-shrink-0 h-24 
        bg-slate-700 text-white font-medium
        flex items-center justify-between text-base " >
            <div class="text-3xl font-bold p-4">
                    <span class="bg-clip-text text-transparent
                    bg-gradient-to-r from-rose-500
                    via-purple-400
                    to-blue-500">
                       Blog posts from mongoDB sample data
                    </span>
                </div>
        </footer>
    );
}

export default Footer;