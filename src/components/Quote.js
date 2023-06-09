import { useState, useEffect } from 'react';

const Quote = () => {
  const [quotes, setQuotes] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchQuotes() {
      setIsLoading(true);
      try {
        const res = await fetch('https://api.api-ninjas.com/v1/quotes?category=computers', {
          headers: {
            'X-Api-Key': '06j/uIU/evT89CS2c1mUvw==dobmC9GDrDgAImpN',
          },
          contentType: 'application/json',
        });

        const json = await res.json();
        setQuotes(json);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    }
    fetchQuotes();
  }, [setQuotes, setIsLoading]);

  if (isLoading) return <div>Loading...</div>;

  if (hasError || Number(quotes.length) === 0) { return <div>Something went wrong!</div>; }

  return (
    <ul>
      {quotes.map(({ author, quote }) => (
        <li key={author}>
          {quote}
          {'\n'}
          - Said by
          {' '}
          {author}
        </li>
      ))}
    </ul>
  );
};

export default Quote;
