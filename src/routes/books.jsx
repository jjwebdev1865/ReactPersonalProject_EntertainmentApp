import React from 'react';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import TableHeader from '../components/table/TableHeader';
import jsonData from '../data/books.json';
import TableBody from '../components/table/TableBody';
import Modal from '../components/table/Modal';
import SearchBar from '../components/SearchBar';

import '../static/pageStyles.css';


export default class Books extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            books: [],
            tableHeaders: [],
            tableContent: [],
            bookTitles:[],
            modal_status: false,
            reviewTitle: "",
            reviewRating: "0",
            searchTitleField: "",
            searchPublisherField: "",
            searchFieldType: ""
        }
    }

    toggle = (status) => (event) => {
        this.setState({modal_status: status});
    }

    componentDidMount() {
        const loadData = [...jsonData];
        this.setState({books: loadData});

        let content_data = [];
        for (let i = 0; i < jsonData.length; i++) {
            let temp_array = [];
            for (const [key, value] of Object.entries(jsonData[i])) {
                temp_array.push(value);
            }
            content_data.push(temp_array);
        }

        let title_options = ["Please Select a Book Title"];
        for (let i = 0; i < jsonData.length; i++) {
            title_options.push(jsonData[i]["title"]);
        }
        
        this.setState({tableHeaders: Object.keys(loadData[0])});
        this.setState({tableContent: content_data});
        this.setState({bookTitles: title_options});
        this.setState({searchFieldType: "title"});
    };

    _helper_searchActions() {
        let { searchTitleField, searchFieldType, searchPublisherField } = this.state;
        if (searchFieldType === "title") {
            return [searchTitleField, 0];
        } else if (searchFieldType === "publisher") {
            return [searchPublisherField, 3];
        }
    }

    handleFilteredContentData = (event)  => {
        let searchFieldArray = this._helper_searchActions()
        const filteredBooks = this.state.tableContent.filter((tempBook) => {
            return tempBook[searchFieldArray[1]].toLowerCase().includes(searchFieldArray[0]);
          });
          let content_data = [];
          for (let i = 0; i < filteredBooks.length; i++) {
            let temp_array = [];
            for (const [key, value] of Object.entries(filteredBooks[i])) {
                temp_array.push(value);
            }
            content_data.push(temp_array);
          }
          return content_data
    }

    changeHandler = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value,
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        let book_list = [...this.state.books];
        for (let i = 0; i < book_list.length; i++) {
            if (this.state.reviewTitle === book_list[i]["title"]) {
                book_list[i]["reviews"] = book_list[i]["reviews"] + 1;
                book_list[i]["rating"].push(parseInt(event.target.reviewRating.value))
            }
        }
        this.handleFilteredContentData();
        this.setState({books: book_list});
        this.toggle();
    }

    onSearchChange = (searchType) => (event) => {
        let searchField = event.target.value.toLowerCase();
        if (searchType === 'title') {
            this.setState({searchTitleField: searchField})
            this.setState({searchFieldType: "title"})
            this.setState({searchPublisherField: ""})
            event.target.parentElement.children[1].value = ""
        } else if (searchType === 'publisher') {
            this.setState({searchPublisherField: searchField})
            this.setState({searchFieldType: "publisher"})
            this.setState({searchTitleField: ""})
            event.target.parentElement.children[0].value = ""
        } 
      }

    render() {
        const { bookTitles,  tableHeaders, modal_status, searchTitleField} = this.state;
        const filteredBooks = this.handleFilteredContentData(searchTitleField);
        return(
            <div>
                <Header />
                <NavBar />
                <hr />
                <h2>Books!</h2>
                <br />
                <div className='action-bar'>
                    <input 
                        type="button" 
                        value="ADD BOOK REVIEW" 
                        className='clickme' 
                        onClick={this.toggle(true)}
                    />
                    <Modal show={modal_status} 
                        title="Add a Review" 
                        type="Book"
                        close={this.toggle(false)} 
                        submit={this.handleSubmit}
                        titles={bookTitles}
                        changeHandler={this.changeHandler}
                    />
  
                </div>
                <br />
                <div>
                    <h2>Table Actions</h2>
                    <SearchBar
                        stateStatus={this.state}
                        onChangeHandler={this.onSearchChange}
                        type="Book"
                        placeholderTitle='Search Book by Title...'
                        placeholderPublisher='Search Book by Publisher...'
                    />
                    <table className="bordered">
                        <TableHeader headers={tableHeaders} />
                        <TableBody content={filteredBooks} type="book" />
                    </table>
                </div>
            </div>
        );
    }
}