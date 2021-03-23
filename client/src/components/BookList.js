import { useQuery } from '@apollo/client';
import { getBooksQuery } from '../queries/queries';


function BookList(props) {
  const { loading, error, data } = useQuery(getBooksQuery);
    if ( loading ) return <p>Loading...</p>;
    if ( error ) return <p>Error</p>;
  return data.books.map((book) =>
    (<div>
      <ul id="book-list">
        <li key={ book.id }>
          { book.name }
        </li>
      </ul>
    </div>)
  );
}

export default BookList;
