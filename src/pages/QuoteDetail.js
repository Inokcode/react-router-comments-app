import React from 'react';
import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Max', text: 'ascdefghijklm' },
  { id: 'q2', author: 'Max', text: 'ascdefghijklm' },
];

const QuoteDetail = () => {
  const params = useParams();
  const match = useRouteMatch(); //commented

  console.log({ match });
  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);
  if (!quote) {
    return <p>No Quote found</p>;
  }
  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      {/* <Route path={`/quotes/${params.quoteId}`} exact> */}
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            {/* <Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}> */}
            Load Comments
          </Link>
        </div>
      </Route>
      {/* <Route path={`/quotes/${params.quoteId}/comments`}> */}
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
