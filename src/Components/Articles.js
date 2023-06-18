import Article from './Article'
import TagFilter from './TagFilter'
import "../Styles/Articles.css"


export default function Articles() {
    return (
        <div>
            <TagFilter />
            <div className='articles'>
                <div className='articles-row'>
                    <Article
                        image="/Thumbnails/Thumbnail-1.png"
                        category="Lifestyle"
                        date="2 hours ago"
                        title="Changing people's lifestyles for the better"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus"
                    />
                    <Article
                        image="/Thumbnails/Thumbnail-2.png"
                        category="Technology"
                        date="2 hours ago"
                        title="Simple Solutions for Complex Connections"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus"
                    />
                    <Article
                        image="/Thumbnails/Thumbnail-3.png"
                        category="Sport"
                        date="2 hours ago"
                        title="All things are difficult before they are easy"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus"
                    />
                    <Article
                        image="/Thumbnails/Thumbnail-4.png"
                        category="Education"
                        date="2 hours ago"
                        title="How to Memorize everything you read?"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus"
                    />
                </div>
                <div className='articles-row'>
                    <Article
                        image="/Thumbnails/Thumbnail-1.png"
                        category="Lifestyle"
                        date="2 hours ago"
                        title="Changing people's lifestyles for the better"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus"
                    />
                    <Article
                        image="/Thumbnails/Thumbnail-2.png"
                        category="Technology"
                        date="2 hours ago"
                        title="Simple Solutions for Complex Connections"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus"
                    />
                    <Article
                        image="/Thumbnails/Thumbnail-3.png"
                        category="Sport"
                        date="2 hours ago"
                        title="All things are difficult before they are easy"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus"
                    />
                    <Article
                        image="/Thumbnails/Thumbnail-4.png"
                        category="Education"
                        date="2 hours ago"
                        title="How to Memorize everything you read?"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus"
                    />
                </div>
            </div>
        </div>
    )
}
