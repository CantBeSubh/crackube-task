import '../Styles/SearchBar.css'

export default function SearchBar({ search, setSearch, layout, setLayout }) {
    return (
        <div className="search-bar">
            <h1>We tackle interseting topics everyday</h1>
            <div className='container'>
                <div className='search-box'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>

                    <input
                        type="text"
                        placeholder="Find Courses"
                        onChange={e => setSearch(e.target.value)}
                        value={search}
                    />
                </div>
                <div className='layouts'>
                    <div className='layout' onClick={e => setLayout('List')}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={layout === "List" ? "yellow" : "currentColor"} class="w-6 h-6">
                            <path fill-rule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75H12a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div className='layout' onClick={e => setLayout('Grid')}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={layout === "Grid" ? "yellow" : "currentColor"} class="w-6 h-6">
                            <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
                        </svg>

                    </div>
                </div>
            </div>
        </div>
    )
}
