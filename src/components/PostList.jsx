import React from "react";
import './PostList.css';
import PostItem from "./PostItem";


function PostList(props) {
    const { posts, deletePost } = props;

    return (
        <div className="post-list">
            <h2>Lista postari:</h2>
            { posts.map((post, index) => {
                return <PostItem
                    deletePostItem={(id) => deletePost(id) }
                    title={ post.title }
                    body={ post.body }
                    key={ index }
                />
            })}
        </div>
    );
}








// class PostList extends React.Component {
//     constructor(props){
//         super(props);
//         this.state={}
//     }

//     render(){
//         return(
//             <div className="user-list">
//                 {
//                     this.props.posts.map((post) => {
//                         return <PostItem
//                             title = {post.title}
//                             body = {post.body}
//                             key = {post.id}

//                         />
//                     })
//                 }
//             </div>
//         )
//     }
// }





export default PostList;