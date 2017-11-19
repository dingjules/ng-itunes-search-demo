import tpl from './app.html'
import './app.less';

class ctrl {
    constructor($http, AppService, $mdDialog) {
        'ngInject';
        this._$http = $http;
        this._AppService = AppService;

        this._$mdDialog = $mdDialog;
    }

    goToPerson(item, event) {
        this._$mdDialog.show(
            this._$mdDialog.alert()
                .title('Navigating')
                .textContent(item)
                .ariaLabel('Person inspect demo')
                .ok('Neat!')
                .targetEvent(event)
        );
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