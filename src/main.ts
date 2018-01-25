import {Aurelia} from 'aurelia-framework'
import environment from './environment';
import * as jquery from 'jquery';

export function configure(aurelia: Aurelia) {
  aurelia.use
    .plugin('jquery')
    .standardConfiguration()
    .feature('resources');

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }
  //require.config({ paths: { 'vs': '../node_modules/monaco-editor/dev/vs' }});
  aurelia.start().then(() => aurelia.setRoot());
}
