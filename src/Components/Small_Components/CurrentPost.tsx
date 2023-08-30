import { useParams } from 'react-router-dom';
import { Context } from '../../Context/Context';
import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

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
            <ReactMarkdown className='current-post--p'>
                {post.content}
            </ReactMarkdown>
            <img className='current-post--img' src={post.img} />
            <div className='share--box'>
                <p>Share on:</p>
                <a className='share--btn' href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`} target='_blank' rel='noopener noreferrer'>
                    <FontAwesomeIcon icon={faXTwitter} />
                </a>
                <a className='share--btn share-link' href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`} target='_blank' rel='noopener noreferrer'>
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </div>
        </div>
    );
}
