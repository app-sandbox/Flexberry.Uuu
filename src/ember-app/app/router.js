import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-uuu-sdf-l');
  this.route('i-i-s-uuu-sdf-e',
  { path: 'i-i-s-uuu-sdf-e/:id' });
  this.route('i-i-s-uuu-sdf-e.new',
  { path: 'i-i-s-uuu-sdf-e/new' });
});

export default Router;
