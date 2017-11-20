import angular from 'angular';

import angular from 'angular';
import { appModule } from './components/app/app.module'

import './common/style.less';

const module = angular.module('angular-itune-demo', [
    appModule
])
.name;

angular.element(() => angular.bootstrap(document, [module], {
    strictDi: true
}));