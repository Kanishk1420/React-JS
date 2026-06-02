import { useSet } from '../useSet';
const HistorySearch = () => {
 const {handleSubmit, storedSearches, clearHistory, clearHistorybyone, searchinput, searchId} = useSet();
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor={searchId}>Search:</label>
        <input
          type="text"
          id={searchId}
          ref={searchinput}
          placeholder="Search..."
          required
        />
        <button type="submit">Search</button>
      </form>
      <h3>Search History:</h3>
      <ul>
        {storedSearches.map((search, index) => (
          <li key={index}>{search}</li>
        ))}
      </ul>
      <button onClick={clearHistory}>Clear History</button>
      <button onClick={clearHistorybyone}>Clear Last Search</button>
    </div>
  );
};

export default HistorySearch;
