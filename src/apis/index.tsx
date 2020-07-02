import { IApi } from './types';

import restfulApi from './restfulApi';
import localApi from './localApi';

const  api = (): IApi => {
  const environment: string = process.env.REACT_APP_ENV || ''; 

  if (environment === 'production') {
    return restfulApi('');
  }  else if (environment === 'staging') {
    return restfulApi('');
  } else if (environment === 'development') {
    return restfulApi('');
  } else {
    return localApi();
  }
}

export default api();