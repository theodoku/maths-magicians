import { useState, useEffect } from 'react';
import './Quotes.css';

export default function Quotes() {
  const [quotes, setQuotes] = useState([]);
  const [hasError, setHasError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://api.api-ninjas.com/v1/quotes?category=success',
      {
        headers: {
          'X-Api-Key': 'yqGx60kQVVP+EHBduI38qA==UmglPareGbOtMzbd',
        },
      },
    )
      .then((response) => response.json())
      .then((data) => {
        const quotesWithId = data.map((item, index) => ({
          ...item,
          id: index,
        }));
        setQuotes(quotesWithId);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        setHasError('error fetching');
      });
  }, []);

  return (
    <div className="quotes">
      <h2><u>Quotes</u></h2>
      {isLoading && <p>Loading...</p>}
      {hasError && <p>{hasError}</p>}
      {!isLoading && !hasError && (
        <div>
          {quotes.map((quote) => (
            <div key={quote.id}>
              <p>{quote.quote}</p>
              <p>
                <b>
                  by -
                  {quote.author}
                </b>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
