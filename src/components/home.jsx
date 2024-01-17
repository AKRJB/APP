import React, { useEffect, useState } from 'react';
import Feed from './Feed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Home = ({ data, setData }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const delay = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(delay);
  }, [])

  return (
    <main>
      {loading ? (
        <div className="loading-spinner">
          <FontAwesomeIcon icon={faSpinner} spin />
        </div>
      ) : (

        <Feed data={data} setData={setData} />
      )}
    </main>
  );
};

export default Home;
