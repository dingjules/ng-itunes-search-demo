import 'angular-material';

import { appComponent } from './app.component';
import { appService } from './app.service';
export const appModule = angular.module('app', ['ngMaterial'])
    .factory('AppService', appService)
    .component('app', appComponent)
    .name;