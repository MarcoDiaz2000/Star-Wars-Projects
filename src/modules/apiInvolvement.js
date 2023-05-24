const APP_ID = 'FyW5dKnVlSNW1y3LtaAB';

// Makes a POST request to "like" an item.
function likeItem(itemId) {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${APP_ID}/likes/`;

  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: itemId,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('The API request failed');
      }
      return { success: true };
    })
    .catch((error) => {
      console.error('Error:', error); // at the end of the Project, this line will be removed.
    });
}

// Gets the current "likes" from the API.
function getLikes() {
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
      .catch((error) => {
        console.error('Error:', error); // at the end of the Project, this line will be removed.
        return [];
      })
  );
}

function getComment(itemId) {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${APP_ID}/comments?item_id=${itemId}`;

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
      .catch((error) => {
        console.error('Error:', error); // at the end of the Project, this line will be removed.
        return [];
      })
  );
}

function addComment(itemId, username, comment) {
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
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('The API request failed');
      }
      return { success: true };
    })
    .catch((error) => {
      console.error('Error:', error); // at the end of the Project, this line will be removed.
    });
}

export { likeItem, getLikes, getComment, addComment };
