export const SongDetailController = ($scope, $mdDialog, song, toggleAddToChart, selectedItems) => {
    'ngInject';

    $scope.song = song;
    $scope.toggleAddToChart = toggleAddToChart;
    $scope.selectedItems = selectedItems;
  }