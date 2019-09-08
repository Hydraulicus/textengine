import _ from 'lodash'
import loadTemplate from './templating/loadTemplate'
import parseTemplate from './templating/parseTemplate'
import templates from './../assets/templates/'

export default async (initialProps) => {

  const JSONTemplate = await loadTemplate('template0', templates);
  const parsedTemplate = await parseTemplate(JSONTemplate);
  // console.log('EVENTIALLY parsedTemplate =', parsedTemplate);

  return {
    ...(_.defaultsDeep(parsedTemplate, initialProps))
  }

}