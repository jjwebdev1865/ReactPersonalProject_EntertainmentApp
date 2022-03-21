import React from 'react';
import '../static/modal.scss';

const Modal = ({show, title, type, close, submit, titles}) => {
    let reviewObject = {
        "title": "",
        "rating": "0"
    }

    const updateBook = (status) => (event) => {
        if (status === 'title') {
           reviewObject["title"] = event.target.value
        }
        if (status === 'rating') {
            reviewObject["rating"] = event.target.value
         }
    }

    return (
      <>
        {show ? 
            <div className='modalContainer'>
                <div className='modal' onClick={(e) => e.stopPropagation()}>
                    <header className='modal_header'>
                        <h2 className='modal_header-title'>{title}</h2>
                    </header>
                    <main className='modal_content'>
                        <form action='submit'>
                            <label htmlFor='titleSelection'>{type} Title</label>
                            <select id='titleSelection' name='titleSelection' onChange={updateBook("title")} required >
                                {titles.map((title, index) => {
                                    return (
                                        <option key={index} value={title}>{title}</option>
                                    )
                                })}
                            </select>
                            <label htmlFor='ratingSelection'>{type} Rating</label>
                            <select id='ratingSelection' name='ratingSelection' onChange={updateBook("rating")} required>
                                <option value="0">Please Select a Rating</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </form>
                    </main>
                    <footer className='modal-footer'>
                        <button className='modal-close' onClick={close}>Cancel</button>
                        <button className='submit' onClick={submit(reviewObject)}>Submit</button>
                    </footer>
                </div>
            </div>
        : null}
      </>
    );
  };
  
  export default Modal;