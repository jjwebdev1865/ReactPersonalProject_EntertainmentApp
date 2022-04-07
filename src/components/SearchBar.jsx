import { Component } from "react";
import '../static/books/searchBar.css';

export default class SearchBar extends Component {

    render() {
        const { onChangeHandler, placeholderTitle, placeholderPublisher, type, stateStatus } = this.props
        return (
            <div className="searchBar">
                <div className="booksSearchActions">
                    <input 
                        name="titleSearchBar"
                        type="search"
                        placeholder={placeholderTitle} 
                        onChange={onChangeHandler("title")}
                    />
                    <input className="searchInput"
                        name="publisherSearchBar"
                        type="search"
                        placeholder={placeholderPublisher} 
                        onChange={onChangeHandler("publisher")}
                    />
                </div>
                
            </div>
        )
    }

}