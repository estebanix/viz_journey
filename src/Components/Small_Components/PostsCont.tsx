import { useContext } from "react";
import { Context } from "../../Context/Context";

export default function PostCont(){
    const {articlesData} = useContext(Context);

    const recentPosts = articlesData.map((dat) => {
        return <div className="post--box">
            <h2>{dat.title}</h2>
            <p>{dat.time}</p>
            <h5>{dat.content}</h5>
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