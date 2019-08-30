import axios from 'axios';

const GET: any = (uri: string, param?: any) => {
  return axios.get('http://localhost:8080' + uri, {
    params: param
  });
};

const POST: any = (uri: string, data: any) => {
  return axios.post('http://localhost:8080' + uri, { data });
};

const PUT: any = (uri: string, data?: any) => {
  return axios.put('http://localhost:8080' + uri, { data });
};

const DELETE: any = (uri: string) => {
  return axios.delete('http://localhost:8080' + uri);
};

export {
  GET,
  POST,
  PUT,
  DELETE
};