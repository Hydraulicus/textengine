import _  from 'lodash'
import {getJSONfile} from '../../utils/index'

export default async (id, JSONS) => {

  const templatesCollection = _.keyBy(JSONS, 'JSONname');
  // debugger
  const curTemplate = await getJSONfile(id, templatesCollection);
console.log(id, 'curTemplate =', curTemplate, curTemplate[id]);
  return curTemplate[id]

}