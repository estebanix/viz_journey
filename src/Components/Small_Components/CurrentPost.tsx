import { useParams } from 'react-router-dom';
import { Context } from '../../Context/Context';
import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';

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
            <p className='current-post--time'><FontAwesomeIcon icon={faClock} /> {post.time}</p>
            <p className='current-post--p'>{post.content}</p>
            <img className='current-post--img' src={post.img} />
        </div>
    );
}
