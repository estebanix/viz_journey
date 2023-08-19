import { useParams } from 'react-router-dom';
import { Context } from '../../Context/Context';
import { useContext } from 'react';

export default function CurrentPost() {
    const { postName } = useParams();
    const {articlesData} = useContext(Context);

    const post = articlesData.find(post => post.name === postName);
    
    if (!post) {
        return <p>Post not found.</p>;
    }
    
    return (
        <div className='current-post--container'>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
}
