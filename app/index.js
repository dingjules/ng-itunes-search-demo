import angular from 'angular';

import { appModule } from './components/app/app.module'

import './common/style.less';

angular.module('angular-itune-demo', [
    appModule
]);

angular.element(() => angular.bootstrap(document, ['angular-itune-demo'], {
    strictDi: true
}));