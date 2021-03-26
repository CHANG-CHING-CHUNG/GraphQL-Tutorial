import { useQuery } from '@apollo/client';

import { getBookQuery } from '../queries/queries';

const displayBookDetails = (book) => {
  return (
    <div>
      <h2>{book.name}</h2>
      <p>{book.genre}</p>
      <p>{book.author.name}</p>
      <p>All books by this author: </p>
      <ul className="other-books">
        {
          book.author.books.map(item => {
            return (<li key={ item.id }>{item.name}</li>)
          })
        }
      </ul>
    </div>
  )
}

function BookDetails({ selectedBookId }) {
  console.log(selectedBookId)
  const { loading, error, data } = useQuery(getBookQuery,{
    variables:{ id:selectedBookId }
  });
    if ( loading ) return <p>Loading...</p>;
    if ( error ) return <div>No book selected...</div>;
  return (
    <div id="book-details">
      {displayBookDetails(data.book)}
    </div>
  )
}

export default BookDetails;