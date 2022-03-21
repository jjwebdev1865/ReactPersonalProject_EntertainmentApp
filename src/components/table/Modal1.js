import React from 'react';

export default class Modal1 extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         title: "",
    //         rating: "0"
    //     }
    // }

    render() {
        return (
            <>
            {this.props.show ? 
                <div className='modalContainer'>
                    <div className='modal' onClick={(e) => e.stopPropagation()}>
                    <header className='modal_header'>
                        <h2 className='modal_header-title'>{this.props.title}</h2>
                    </header>
                    <main className='modal_content'>
                        <form onSubmit={this.props.submit}>
                            <label htmlFor='reviewTitle'>{this.props.type} Title</label>
                            <select id='reviewTitle' name='reviewTitle' onChange={this.props.changeHandler} required >
                                {this.props.titles.map((title, index) => {
                                    return (
                                        <option key={index} value={title}>{title}</option>
                                    )
                                })}
                            </select>
                            <label htmlFor='reviewRating'>{this.props.type} Rating</label>
                            <select className='reviewRatingInput' id='reviewRating' name='reviewRating' onChange={this.props.changeHandler} required>
                                <option value="0">Please Select a Rating</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <footer className='modal-footer'>
                                <input type="button" onClick={this.props.close} value="Cancel" />
                                <input className='submit' type='submit' value="SUBMIT" />
                                {/* <button className='modal-close' type='button' onClick={this.props.close}>Cancel</button> */}
                                {/* <button className='submit' onClick={this.props.submit(reviewObject)}>Submit</button> */}
                            </footer>
                        </form>
                    </main>
                    </div>
                </div>
                
            : null}
            </>
        )
    }
}