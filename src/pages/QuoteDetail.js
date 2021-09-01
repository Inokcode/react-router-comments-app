import React, { useEffect } from 'react';
import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Max', text: 'ascdefghijklm' },
  { id: 'q2', author: 'Max', text: 'ascdefghijklm' },
];

const QuoteDetail = () => {
  const params = useParams();
  const { quoteId } = params;
  const match = useRouteMatch(); //commented

  //
  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);
  //

  // console.log({ match });
  // const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);
  //
  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);
  //  //
  if (status === 'pending') {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  //
  if (error) {
    return <p className="centered focused">{error}</p>;
  }
  //
  if (!loadedQuote.text) {
    return <p>No Quote found</p>;
  }
  return (
    <>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
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
