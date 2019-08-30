const request = (options) => {
  const headers = new Headers({
  });

  const defaults = {headers};
  // eslint-disable-next-line no-param-reassign
  options = Object.assign({}, defaults, options);
  return fetch(options.url, options)
    .then(response =>
      response.text().then(text => {
        if(!response.ok) {
          return Promise.reject(text);
        }
        return text;
      })
    );
};

export function getSVGImage(fileName) {
  return request({
    url: fileName,
    method: 'GET',
  });
}

export function getJSONSVGImage(fileName) {
  let options = {
    url: fileName,
    method: 'GET',
  };

  const headers = new Headers({
    'Content-Type': 'application/json',
  });

  const defaults = {headers};
  // eslint-disable-next-line no-param-reassign
  options = Object.assign({}, defaults, options);
  return fetch(process.env.PUBLIC_URL +options.url, options)
    .then(response =>
      response.json().then(json => {
        // console.log(response);
        if(!response.ok) {
          console.log('reject')
          return Promise.reject(json);
        }
        return json;
      })
    );



}