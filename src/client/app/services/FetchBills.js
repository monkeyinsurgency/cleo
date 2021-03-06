import "isomorphic-fetch";
import { API_URL } from "../Constants";

const apiUrl = API_URL;

const FetchBills = (endPoint, payload = {}, method = "get", headers = {}) => {
  const request = {
    method,
    headers,
    ...(method !== "get"
      ? {
          body: JSON.stringify(payload)
        }
      : {})
  };

  const requestUrl = `${apiUrl}${endPoint}`;

  return fetch(requestUrl, request)
    .then(response =>
      response
        .json()
        .then(json => ({ json, response }))
        .catch(() => ({ json: {}, response }))
    )
    .then(({ json, response }) => {
      if (response.ok === false) {
        throw json;
      }
      return json;
    })
    .catch(e => {
      if (e.response && e.response.json) {
        return e.response.json().then(json => {
          if (json) throw json;
          throw e;
        });
      }
      throw e;
    });
};

export { FetchBills };
