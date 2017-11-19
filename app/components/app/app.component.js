import tpl from './app.html'
import './app.less';

import { SongDetailController } from '../song/song.ctrl.js';
import SongDetailTpl from '../song/song.html';

class ctrl {
    constructor($http, AppService, $mdDialog) {
        'ngInject';
        this._$http = $http;
        this._AppService = AppService;

        this._$mdDialog = $mdDialog;
    }

    showDetail(item, event) {
        this._$mdDialog.show({
            controller: SongDetailController,
            templateUrl: SongDetailTpl,
            parent: angular.element(document.body),
            targetEvent: event,
            clickOutsideToClose:true,
            fullscreen: false,
            locals: { song: item }
          });
    }

    search() {
        this._getSongs();
    }

    _getSongs() {
        this._AppService.getItems(this.term.replace(/\s/g, '+')).then(
            success => {
                this.results = success.data.results;
                this.count = success.data.resultCount;
            }
        );
    }
}

export const appComponent = {
    controller: ctrl,
    templateUrl: tpl
};