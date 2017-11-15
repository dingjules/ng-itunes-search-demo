import angular from 'angular';

import { appModule } from './components/app/app.module'

import './common/style.less';

angular.module('angular-itune-demo', [
    appModule
])
    .config(($mdThemingProvider) => {
        'ngInject';

        $mdThemingProvider.theme('default')
            .primaryPalette('brown')
            .accentPalette('red');
    })
    ;

angular.element(() => angular.bootstrap(document, ['angular-itune-demo'], {
    strictDi: true
}));