import { Component } from "react";

export default class SearchBar extends Component {

    render() {
        const { onChangeHandler, placeholderTitle, placeholderPublisher, type, stateStatus } = this.props
        return (
            <div className="searchBar">
                <label htmlFor={type+"-searchBar"} >Search:</label>
                <div>
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