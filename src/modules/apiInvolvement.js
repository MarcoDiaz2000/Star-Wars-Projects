const APP_ID = 'FyW5dKnVlSNW1y3LtaAB';

// Makes a POST request to "like" an item.
const likeItem = (itemId) => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${APP_ID}/likes/`;

  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: itemId,
    }),
  }).then((response) => {
    if (!response.ok) {
      throw new Error('The API request failed');
    }
    return { success: true };
  });
};

// Gets the current "likes" from the API.
const getLikes = () => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${APP_ID}/likes/`;

  return (
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('The API request failed');
        }
        return response.text();
      })
      // If 'data' has a value, it parses to a JSON object. Otherwise, it returns an empty array.
      .then((data) => (data ? JSON.parse(data) : []))
  );
};

const getComment = (itemId) => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${APP_ID}/comments?item_id=${itemId}`;

  return (
    fetch(url)
      .then((response) => response.text())
      // If 'data' has a value, it parses to a JSON object. Otherwise, it returns an empty array.
      .then((data) => (data ? JSON.parse(data) : []))
  );
};

const addComment = (itemId, username, comment) => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${APP_ID}/comments/`;

  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: itemId,
      username,
      comment,
    }),
  }).then((response) => {
    if (!response.ok) {
      throw new Error('The API request failed');
    }
    return { success: true };
  });
};

export {
  likeItem, getLikes, getComment, addComment,
};
