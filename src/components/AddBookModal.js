import React from 'react';
import '../static/modal.scss';

export default class Modal1 extends React.Component {

    render() {
        const { show, title, submit, type, close, changeHandler }= this.props;
        return(
            <>
                {show ? 
                <div className='modalContainer'>
                    <div className='modal' onClick={(e) => e.stopPropagation()}>
                        <header className='modal_header'>
                                <h2 className='modal_header-title'>{title}</h2>
                        </header>
                        <main className='modal_content'>
                            <form onSubmit={submit}>
                                <div>
                                    <label htmlFor='reviewTitle'>{type} Title</label>
                                    <input 
                                        type="text" 
                                        placeholder="Please enter title..." 
                                        id='addBookTitle' 
                                        name='addBookTitle' 
                                        onChange={changeHandler}
                                    />
                                </div>
                                <div>
                                    <label  htmlFor='reviewTitle'>Author First Name</label>
                                    <input 
                                        type="text" 
                                        placeholder="Please enter author first name..."
                                        id='addBookAuthorFName' 
                                        name='addBookAuthorFName' 
                                        onChange={changeHandler}
                                    />
                                </div>
                                
                                <div>
                                    <label htmlFor='reviewTitle'>Author Last Name</label>
                                    <input 
                                        type="text" 
                                        placeholder="Please enter author last name..."
                                        id='addBookAuthorLName'
                                        name='addBookAuthorLName'
                                        onChange={changeHandler}
                                    />
                                </div>

                                <div>
                                    <label htmlFor='reviewTitle'>Publisher</label>
                                    <input 
                                        type="text" 
                                        placeholder="Please enter publisher name..."
                                        id='addBookPublisher'
                                        name='addBookPublisher'
                                        onChange={changeHandler}                                        
                                    />
                                </div>
                                
                                <div>
                                    <label htmlFor='reviewTitle'>Page Count</label>
                                    <input 
                                        type="text" 
                                        placeholder="Please enter page count..."
                                        id='addBookPageCount'
                                        name='addBookPageCount'
                                        onChange={changeHandler}                                           
                                    />
                                </div>
                            </form>
                            
                        </main>
                        <footer className='modal-footer'>
                            <input type="button" onClick={close} value="Cancel" />
                            <input className='submit' type='submit' value="SUBMIT" onClick={submit} />
                        </footer>
                    </div>
                </div>
                : null }
            </>
        )
    }
}