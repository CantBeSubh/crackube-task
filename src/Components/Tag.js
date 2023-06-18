export default function Tag({ name, active, setTag }) {
    const classname = active ? 'tag active' : 'tag'
    return (
        <div className={classname} onClick={e => setTag(name)}>
            {name}
        </div>
    )
}
