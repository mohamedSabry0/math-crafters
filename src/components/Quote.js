import { useState, useEffect } from 'react';

const Quote = () => {
  const [status, setStatus] = useState('idle');
  const [quote, setQuote] = useState({ quote: '', author: '', error: '' });

  useEffect(() => {
    async function fetchQuote() {
      setStatus('loading');
      try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=computers', {
          headers: {
            'X-Api-Key': '06j/uIU/evT89CS2c1mUvw==dobmC9GDrDgAImpN',
          },
          contentType: 'application/json',
        });

        const data = await response.json();
        setStatus('succeeded');
        setQuote({ quote: data[0].quote, author: data[0].author, error: '' });
        return data;
      } catch (error) {
        setStatus('failed');
        setQuote(...quote, { error });
        return error;
      }
    }
    if (status === 'idle') {
      fetchQuote();
    }
  }, [quote, status]);

  if (status === 'succeeded') {
    return (<p>{` today's quote: ${quote.quote} by ${quote.author}` }</p>);
  }
  if (status === 'failed') {
    return (<p>{ quote.error }</p>);
  }
  return (<p>Loading...</p>);
};

export default Quote;
