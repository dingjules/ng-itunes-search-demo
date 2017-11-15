import 'angular-material';

import { appComponent } from './app.component';
export const appModule = angular.module('app', ['ngMaterial'])
    .component('app', appComponent)
    .name;