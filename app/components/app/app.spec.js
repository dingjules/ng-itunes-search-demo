import angular from 'angular';
import 'angular-mocks/angular-mocks';

import { appModule } from './app.module';

describe('Component: App', () => {
    beforeEach(angular.mock.module('app'));
    let element;

    beforeEach(inject(($compile, $rootScope, $httpBackend) => {
        $httpBackend
            .expectGET(/.*/)
            .respond(200, { foo: 'bar' });
        const scope = $rootScope.$new();
        element = angular.element('<app></app>');
        $compile(element)(scope);
        scope.$apply();
        $httpBackend.flush();
    }));

    it('should render something', () => {
        expect(element.html())
            .not
            .toBe(`<app></app>`);
    });

    describe('Controller: app', () => {
        let ctrl;

        beforeEach(inject(() => {
            ctrl = element.controller('app');
        }));

        it('should toggleAddToChart', () => {
            expect(ctrl.toggleAddToChart).toBeDefined();

            const item = {trackId: 1},
            selectedItems = [{trackId: 0}];

            ctrl.toggleAddToChart(item, selectedItems);
            expect(selectedItems[0].trackId).toBe(0);
            expect(selectedItems[1].trackId).toBe(1);
            ctrl.toggleAddToChart(item, selectedItems);
            expect(selectedItems.length).toBe(1);
        });
    });


});
