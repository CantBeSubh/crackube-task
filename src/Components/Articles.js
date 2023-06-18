import Article from './Article'
import TagFilter from './TagFilter'
import { data } from '../ArticleData'
import "../Styles/Articles.css"



export default function Articles({ search }) {
    return (
        <div>
            <TagFilter />
            <div className='articles'>
                <div className='articles-row'>
                    {data
                        .filter((article) => {
                            search = search.toLowerCase()
                            if (search === '') {
                                return article
                            } else if (article.title.toLowerCase().includes(search)) {
                                return article
                            } else if (article.description.toLowerCase().includes(search)) {
                                return article
                            } else if (article.category.toLowerCase().includes(search)) {
                                return article
                            }
                        })
                        .map((article, index) => {
                            return (
                                <Article
                                    key={index}
                                    title={article.title}
                                    description={article.description}
                                    image={article.image}
                                    category={article.category}
                                />
                            )
                        }) || <h1>No results found</h1>
                    }
                </div>
            </div>
        </div>
    )
}
