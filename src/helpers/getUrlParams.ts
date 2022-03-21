
interface URLPARAMS {
  msg: string,
  date: number
}

export default function getUrlParams(url?:string) {

  // get query string from url (optional) or window
  let queryString = url ? url.split('?')[1] : window.location.search.slice(1);

  let obj:{[key: string]: any} = {};

  // if query string exists
  if (queryString) {

    // stuff after # is not part of query string, so get rid of it
    queryString = queryString.split('#')[0];

    // split our query string into its component parts
    const arr = queryString.split('&');

    for (let i = 0; i < arr.length; i++) {
      // separate the keys and the values
      const a = arr[i].split('=');
      // obj[a[0]] = a[1];
      
      let paramName = a[0];
      let paramValue = typeof (a[1]) === 'undefined' ? true : a[1];

      obj[paramName] = paramValue;

  }}

  return obj;
}