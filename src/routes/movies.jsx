import React from 'react';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import '../static/pageStyles.css';
import jsonData from '../data/movies.json';
import TableHeader from '../components/table/TableHeader';

export default class Movies extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            tableHeaders: [],
        }
    }

    componentDidMount() {
        const loadData = [...jsonData];
        this.setState({movies: loadData});
        this.setState({tableHeaders: Object.keys(loadData[0])})
    };

    render() {
        const current_movies = this.state.movies;
        return(
            <div>
                <Header />
                <NavBar />
                <h2>Movies!</h2>
                
                <table>
                    <TableHeader headers={this.state.tableHeaders} />
                    <tbody>
                        {current_movies.map((movie, index) => {
                            return(
                                <tr key={"movie"+index}>
                                    <td>{movie.title}</td>
                                    <td>{movie.director}</td>
                                    <td>
                                        <a target="_blank" rel="noopener noreferrer" href={movie.imdb_url}>{movie.title}</a>
                                    </td>
                                    <td>{Object.keys(movie.reviews).length}</td>
                                    <td>{movie.rating}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}