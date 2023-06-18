import Tag from './Tag'
import '../Styles/TagFilter.css'

export default function TagFilter() {
    return (
        <div className="tags">
            <Tag name="All" />
            <Tag name="Technology" />
            <Tag name="Education" />
            <Tag name="Lifestyle" />
            <Tag name="Healthcare" />
            <Tag name="Sport" />
            <Tag name="Food" />
        </div>
    )
}
