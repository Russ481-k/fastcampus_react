import React, { useState, useEffect } from 'react';

function MyComponent(props) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, [props.url]);

  function fetchData() {
    fetch(props.url)
      .then(response => response.json())
      .then(data => setData(data));
  }

  return (
    <div>
      {data ? (
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}