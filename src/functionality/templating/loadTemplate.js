import _  from 'lodash'
import {getJSONfile} from '../../utils/index'

export default async (id, JSONS) => {

  const templatesCollection = _.keyBy(JSONS, 'JSONname');

  const curTemplate = await getJSONfile(id, templatesCollection);

  return curTemplate[id]
}