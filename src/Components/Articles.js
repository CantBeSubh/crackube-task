import Article from './Article'
import TagFilter from './TagFilter'
import { data } from '../Data/ArticleData'
import "../Styles/Articles.css"

export default function Articles({ search, tag, setTag }) {
    return (
        <div>
            <TagFilter tag={tag} setTag={setTag} />
            <div className='articles'>
                <div className='articles-row'>
                    {data
                        .filter((article) => {
                            if (tag === 'All') {
                                return article
                            } else if (article.category === tag) {
                                return article
                            }
                        })
                        .filter((article) => {
                            if (search === '') {
                                return article
                            } else if (article.title.toLowerCase().includes(search.toLowerCase())) {
                                return article
                            }
                            else if (article.description.toLowerCase().includes(search.toLowerCase())) {
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
                                    date={article.date}
                                />
                            )
                        }) || <h1>No results found</h1>
                    }
                </div>
            </div>
        </div>
    )
}
