import Layout from "./components/layout";
import { useState } from 'react';


const App = () => {

    const [title, setTitle] = useState("enter title");
    const [content, setContent] = useState("write your content");
    const [submitted, setSubmitted] = useState("");
    const [isSubmitting, setIsSubmitting] =  useState(false);
    
    const [submitButton, setSubmitButton ] = 
        useState(isSubmitting ? "processing..." : "Submit");

    const submitPost = () => {
        setIsSubmitting(true);
        const options = { 
            method: "POST",
            body: {
                title: title,
                body: content
            }
        }
        fetch("api", options)
        .then(res => res.json())
        .then(res => {
            if (res === "submitted") {
                setSubmitted("post submitted");
                setTitle("");
                setContent("");
            }
            else if (res === "failed") {
                setSubmitted("failed to submit, re-submit");
            }
        } )
        .catch(err => setSubmitted("failed to submit, re-submit") )
        .finally( () => {
            setIsSubmitting(false);
            setTimeout(() => {
                setSubmitted("")
            }, 30000);
        } );
        
    }



    return(
        <Layout>
            <h1>Create a Post</h1>
            <section>
                <form>
                <div>
                    <label htmlFor="title" >Title</label>
                    <input type="text" id="title" 
                    onChange={e => setTitle(e.target.value)}
                     value={title} />
                </div>
                <div>
                    <label htmlFor="content" >Content</label>
                    <input type="textarea" id="content"
                    onChage={e => setContent(e.target.value)}
                     value={content} >
                        Write your post here
                    </input>
                </div>
                <button> {submitButton} </button>
                </form>
            </section>
        </Layout>
    )
}

export default App;