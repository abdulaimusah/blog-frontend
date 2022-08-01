
import Layout from "../../components/layout";
import Post from "../../components/post";

// this is a dynamic page that renders
// any clicked post on the index page.
export default function App({post}) {
    
    return(
        <Layout>
            
            <Post post={post} />
        </Layout>
    );
}

export const  getStaticPaths = async () => {

  const blogapi = "https://blogservant.herokuapp.com/allposts";
  const res = await fetch(blogapi);
  const ref = await res.json();
  const paths = ref.map(item => {
    return {
      params: {
        id: item._id
      }
    }
  } );

    return {
             paths, fallback: false,
        }

}

export const getStaticProps = async ( {params} ) => { 


    const res = await
     fetch(`https://blogservant.herokuapp.com/onepost/${params.id}`);
    //console.log("res", res);
    const post = await res.json();

    return {
        props : {
            post
        }
    }
 }