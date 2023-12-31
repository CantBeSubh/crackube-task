import moment from "moment/moment";

export default function Article({ title, description, image, category, date, layout }) {
    return (
        <div className={layout === 'Grid' ? 'articleGrid' : 'articleList'}>
            <div className="thumbnail">
                <img src={image} alt="thumbnail" className={layout === 'Grid' ? 'imgGrid' : 'imgList'} />
            </div>
            <div className="information">
                <div className="meta">
                    <div className="category">{category}</div>
                    <div className="date">
                        {moment.unix(date / 1000).fromNow()}
                    </div>
                </div>
                <div className="title">{title}</div>
                <div className="description">{description}</div>
                <a className="read-more" href="#">Read More <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
                </a>
            </div>
        </div>
    )
}
