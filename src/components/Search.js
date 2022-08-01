const Search = (props) => {
    return (
        <input type="search" placeholder="search phone" onChange={props.searchChanged} />
    )
}

export default Search;