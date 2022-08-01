//import Head from 'next/head';
import Layout from '../components/layout';
import PostList from '../components/postlist';

 // this is the home page of the blog
// it displays links/list of posts.
export default function App ({props}) {

  //console.log(props);

  

  return(
    <Layout>
      <PostList posts={props} />
    </Layout>
  );

}


export const getStaticProps = async () => {

  // fetch all posts
  const blogServer = "https://blogservant.herokuapp.com/allposts";
  const res = await fetch(blogServer);
  const ref = await res.json();
  const props = ref.map(item => {
    //return id, title, date and author for each post
    return {
      id: item._id,
      title: item.title,
      date: item.date,
      author: item.author
    }
  } );

  return({
    props : {
      props
    }
  });
}
