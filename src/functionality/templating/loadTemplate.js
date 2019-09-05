import {getJSONfile} from '../../utils/index'

export default async (id, JSONS) => {

  const curTemplate = await getJSONfile(id, JSONS);

  return curTemplate

}