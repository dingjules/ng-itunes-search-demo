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

        this.selectedItems = [];
    }

    toggleAddToChart(item, $event) {
        const indexInChart = this.selectedItems.findIndex((result) => {
            return result.trackId === item.trackId;
        });

        if (indexInChart < 0) {
            this.selectedItems.push(item);
            item.selected = true;
        } else {
            this.selectedItems.splice(indexInChart, 1);
            item.selected = false;
        }
    }

    showDetail(item, event) {
        this._$mdDialog.show({
            controller: SongDetailController,
            templateUrl: SongDetailTpl,
            parent: angular.element(document.body),
            targetEvent: event,
            clickOutsideToClose: true,
            fullscreen: false,
            locals: { song: item }
        });
    }

    search() {
        this._getSongs();
    }

    removeFromChart(index, item) {
        const targetItem = this.results.find((result) => {
            return result.trackId === item.trackId;
        });

        this.selectedItems.splice(index, 1);

        if (targetItem) {
            targetItem.selected = false;
        }
    }

    _updateWithSelectedItems() {
        this.selectedItems.map(selectedItem => {
            this.results.map((result) => {
                if (result.trackId === selectedItem.trackId) {
                    result.selected = true;
                }
            })
        });
    }

    _getSongs() {
        this._AppService.getItems(this.term.replace(/\s/g, '+')).then(
            success => {
                this.results = success.data.results;
                this.count = success.data.resultCount;
                this._updateWithSelectedItems();
            }
        );
    }
}

export const appComponent = {
    controller: ctrl,
    templateUrl: tpl
};