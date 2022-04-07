import React from 'react';
import '../static/modal.scss';

export default class Modal1 extends React.Component {

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
                                <div>
                                    <label htmlFor='reviewTitle'>{this.props.type} Title</label>
                                    <select id='reviewTitle' name='reviewTitle' onChange={this.props.changeHandler} required >
                                        {this.props.titles.map((title, index) => {
                                            return (
                                                <option key={index} value={title}>{title}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor='reviewRating'>{this.props.type} Rating</label>
                                    <select className='reviewRatingInput' id='reviewRating' name='reviewRating' onChange={this.props.changeHandler} required>
                                        <option value="0">Please Select a Rating</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </div>
                            </form>
                        </main>
                        <footer className='modal-footer'>
                            <input type="button" onClick={this.props.close} value="Cancel" />
                            <input className='submit' type='submit' value="SUBMIT" />
                        </footer>
                    </div>
                </div>
                
            : null}
            </>
        )
    }
}