import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

export default function Pagination(props){
    let pages = []
    for (let i = 1; i <= Math.ceil(props.totalPosts/props.postsPerPage); i++){
        pages.push(i)
    }


    const components = pages.map((page, index) => {
        return <button 
            className= {`blog--pagination-btn ${page == props.curr ? "active-btn" : ""}`} 
            key={index}
            onClick={() => {
                window.scrollTo(0, 0);
                props.setCurrentPages(page)
            }}>{page}</button>
        })
    return(
        <div className="blog--pagination">
            <FontAwesomeIcon className="pagination--icon" icon={faChevronLeft} />
            {components}
            <FontAwesomeIcon className="pagination--icon" icon={faChevronRight} />
        </div>
    )
}