import React from 'react';
import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Max', text: 'ascdefghijklm' },
  { id: 'q2', author: 'Max', text: 'ascdefghijklm' },
];

const AllQuotes = () => {
  return (
    <>
      <QuoteList quotes={DUMMY_QUOTES} />
    </>
  );
};

export default AllQuotes;
