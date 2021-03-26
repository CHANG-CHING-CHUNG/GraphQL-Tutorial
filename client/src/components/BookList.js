import { useQuery } from '@apollo/client';
import { getBooksQuery } from '../queries/queries';
import { useState } from 'react';
import BookDetails from './BookDetails';


function BookList(props) {
  const [selectedBookId, setSelectedBookId ] =useState(null);
  const { loading, error, data } = useQuery(getBooksQuery);
    if ( loading ) return <p>Loading...</p>;
    if ( error ) return <p>Error</p>;
  return (
    (<div>
      <ul id="book-list">
        {
          data.books.map((book) =>
          <li key={ book.id } onClick={(e) => {setSelectedBookId(book.id)}}>
            { book.name }
          </li>
          )
          }
      </ul>
      <BookDetails selectedBookId={selectedBookId}/>
    </div>)
  )
}

export default BookList;
