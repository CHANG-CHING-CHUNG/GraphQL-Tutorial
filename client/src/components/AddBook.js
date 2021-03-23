import { useQuery } from '@apollo/client';
import { getAuthorsQuery } from '../queries/queries';
import { useState } from 'react'

const displayAuthors = (loading, error, data) => {
  if ( loading ) return (<option disabled>Loading Authors...</option>);
  if ( error ) return (<p>Error</p>);
  return data.authors.map(author => {
    return (<option key={ author.id } value={ author.id }>{ author.name }</option>);
  })
};


function AddBook() {
  const { loading, error, data } = useQuery(getAuthorsQuery);

  const [bookName, setBookName] = useState("");
  const [bookGenre, setbookGenre] = useState("");
  const [authorId, setAuthorId] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    console.log(bookName)
    console.log(bookGenre)
    console.log(authorId)
  };

  return(
    <form onSubmit={submitForm} id="add-book">

      <div className="field">
        <label>Book name:</label>
        <input onChange={(e)=> setBookName(e.target.value)} value={bookName} type="text" />
      </div>

      <div className="field">
        <label>Genre:</label>
        <input onChange={(e) => setbookGenre(e.target.value)} value={bookGenre} type="text" />
      </div>

      <div className="field">
        <label>Author:</label>
        <select onChange={(e)=> setAuthorId(e.target.value)}>
          <option>Select author</option>
          {displayAuthors(loading,error,data)}
        </select>
      </div>

    <button>+</button>

    </form>
  );
}

export default AddBook;
