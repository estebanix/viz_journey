import { useContext } from "react";
import { Context } from "../../Context/Context";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { Link } from "react-router-dom";

export default function PostCont(){
    const {articlesData} = useContext(Context);

    const recentPosts = articlesData.map((dat) => {
        return <div className="post--box">
            <h2><Link to={`/${dat.name}`} >{dat.title}</Link></h2>
            <p><FontAwesomeIcon icon={faClock} /> {dat.time}</p>
            <h4>{dat.content}</h4>
            <img src={dat.img} />
        </div>
    })
    return(
        <main className="main-screen-about--container posts-cont">
            <h1>Recent posts</h1>
            {recentPosts}
        </main>
    );
}