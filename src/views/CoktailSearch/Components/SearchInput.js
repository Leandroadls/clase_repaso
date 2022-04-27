function SearchInput (props){
    return(
        <div>
            <input onChange={props.handleChange} className="taskInput" value={props.value} placeholder="Search a coktail"/>
            <button onClick={props.handleSubmit} className="searchButton">Search</button>
        </div>
    )
}

export default SearchInput;
