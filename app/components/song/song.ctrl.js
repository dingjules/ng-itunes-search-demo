export const SongDetailController = ($scope, $mdDialog, song, toggleAddToChart, selectedItems) => {
    'ngInject';

    $scope.song = song;
    $scope.toggleAddToChart = toggleAddToChart;
    $scope.selectedItems = selectedItems;

    $scope.playPreview = (url) => {
        let audio = new Audio(url);
        audio.play();
    }
  }