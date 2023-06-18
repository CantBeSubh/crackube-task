import Tag from './Tag'
import { data } from '../Data/TagData'
import '../Styles/TagFilter.css'

export default function TagFilter({ tag, setTag }) {
    return (
        <div className="tags">
            {data.map((item, index) => {
                return (
                    <Tag
                        key={index}
                        name={item}
                        setTag={setTag}
                        active={tag === item ? true : false}
                    />
                )
            })}
        </div>
    )
}
