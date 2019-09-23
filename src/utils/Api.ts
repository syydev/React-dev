import axios from 'axios';

const GET = (uri: string, param?: any) => {
  return axios.get('http://localhost:8080' + uri, {
    params: param
  });
};

const POST = (uri: string, data: any) => {
  return axios.post('http://localhost:8080' + uri, { data });
};

const PUT = (uri: string, data?: any) => {
  return axios.put('http://localhost:8080' + uri, { data });
};

const DELETE = (uri: string) => {
  return axios.delete('http://localhost:8080' + uri);
};

export {
  GET,
  POST,
  PUT,
  DELETE
};