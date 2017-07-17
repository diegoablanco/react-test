import feathers from 'feathers-client';
import hooks from 'feathers-hooks';
import authentication from 'feathers-authentication-client';
import get from 'lodash/get';
import apiUrls from '../constants/api-endpoints';

const serverUrl = get(apiUrls, 'admin.login.url')
const client = feathers()
client.configure(hooks())
client.configure(feathers.rest(serverUrl).fetch(window.fetch))
client.configure(authentication({
  storage: window.localStorage
}));

export default client;