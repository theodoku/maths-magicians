import React from 'react';

const quotesData = [
  {
    id: 1,
    quote: 'Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding.',
    author: 'William Paul Thurston',
  },
  {
    id: 2,
    quote: 'Pure mathematics is, in its way, the poetry of logical ideas.',
    author: 'Albert Einstein',
  },
  {
    id: 3,
    quote: 'The only way to learn mathematics is to do mathematics.',
    author: 'Paul Halmos',
  },
  {
    id: 4,
    quote: 'Mathematics is the music of reason.',
    author: 'James Joseph Sylvester',
  },
  {
    id: 5,
    quote: 'Without mathematics, there’s nothing you can do. Everything around you is mathematics. Everything around you is numbers.',
    author: 'Shakuntala Devi',
  },
];

const Quotes = () => (
  <div className="quotes">
    {quotesData.map((quoteData) => (
      <div key={quoteData.id}>
        <p className="quote">
          &ldquo;
          {quoteData.quote}
          &rdquo;
        </p>
        <p className="author">
          by &ndash;
          {' '}
          {quoteData.author}
        </p>
      </div>
    ))}
  </div>
);

export default Quotes;
