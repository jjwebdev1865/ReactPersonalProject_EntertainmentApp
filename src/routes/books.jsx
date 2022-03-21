import React from 'react';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import TableHeader from '../components/table/TableHeader';

import '../static/pageStyles.css';
import jsonData from '../data/books.json';
import TableBody from '../components/table/TableBody';
import Modal from '../components/Modal';
import Modal1 from '../components/table/Modal1';


export default class Books extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            books: [],
            tableHeaders: [],
            tableContent: [],
            bookTitles:[],
            modal: false,
            reviewTitle: "",
            reviewRating: "0"
        }
    }

    toggle = (event) => {
        this.setState({modal: !this.state.modal});
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
    };

    handleContentData = () => {
        console.log("in handle content data");
        let content_data = [];
        for (let i = 0; i < this.state.books.length; i++) {
            let temp_array = [];
            for (const [key, value] of Object.entries(jsonData[i])) {
                temp_array.push(value);
            }
            content_data.push(temp_array);
        }
        this.setState({tableContent: content_data});
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
            }
        }
        console.log(book_list);
        this.handleContentData();
        this.setState({books: book_list});
        this.toggle();
        
    }

    render() {
        const current_books = this.state.tableContent;
        const headers_list = this.state.tableHeaders;
        const modal_status = this.state.modal;
        const book_titles = this.state.bookTitles;
        return(
            <div>
                <Header />
                <NavBar />
                <hr />
                <h2>Books!</h2>
                <br />
                <div>
                    <input type="button" value="ADD BOOK REVIEW" className='clickme' onClick={() => this.toggle()}/>
                    {/* <Modal show={modal_status} 
                        title="Add a Review" 
                        type="Book"
                        close={this.toggle} 
                        submit={this.handleSubmit}
                        titles={book_titles}
                    /> */}
                    <Modal1 show={modal_status} 
                        title="Add a Review" 
                        type="Book"
                        close={this.toggle} 
                        submit={this.handleSubmit}
                        titles={book_titles}
                        changeHandler={this.changeHandler}
                    />
                    
                </div>
                <br />
                <table className="bordered">
                    <TableHeader headers={headers_list} />
                    <TableBody content={current_books} type="book" />
                </table>
            </div>
        );
    }
}