export default function Article({ title, description, image, category, date }) {
    return (
        <div className="article">
            <div className="thumbnail">
                <img src={image} alt="thumbnail" />
            </div>
            <div className="information">
                <div className="meta">
                    <div className="category">{category}</div>
                    <div className="date">{date}</div>
                </div>
                <div className="title">{title}</div>
                <div className="description">{description}</div>
                <a className="read-more" href="#">Read more -&gt; </a>
            </div>
        </div>
    )
}
