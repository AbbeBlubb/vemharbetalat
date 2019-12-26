export const pingServer = (fetch, URL) => {
  fetch(URL, {
    method: 'GET'
  })
  // Has to either return; inside {}, or => response.json() without {} nor .json();
  .then(response => response.json())
  .then(data => {
    return;
    //console.log('Server pinged and returned ' + data)
  });
};
