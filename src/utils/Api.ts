import axios from 'axios';

const GET = (uri: string, param: string, data: any) => {
  axios.get('http://localhost:8080/' + uri, {
    params: param,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    data
  })
    .then(response => console.log(response))
    .catch(error => console.log(error));
};

const POST = (uri: string, data: any) => {
  axios.post('http://localhost:8080/' + uri, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    data
  })
    .then(response => console.log(response))
    .catch(error => console.log(error));
};

const PUT = (uri: string, param: string, data: any) => {
  axios.put('http://localhost:8080/' + uri, {
    params: param,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    data
  })
    .then(response => console.log(response))
    .catch(error => console.log(error));
};

const DELETE = (uri: string, param: string, data: any) => {
  axios.delete('http://localhost:8080/' + uri, {
    params: param,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    data
  })
    .then(response => console.log(response))
    .catch(error => console.log(error));
};

export {
  GET,
  POST,
  PUT,
  DELETE
};