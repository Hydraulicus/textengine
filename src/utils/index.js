import _ from 'lodash';
import {getJSONfile} from './loadFile';

const deepFind = (JSONArray, keyPath, keyValue) => _.find(
  JSONArray, _.matchesProperty(keyPath, keyValue)
);

export {
  getJSONfile,
  deepFind
}