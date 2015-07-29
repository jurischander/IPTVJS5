angular.module('starter.controllers', [])

//.controller('DashCtrl', function($scope) {})

.controller('TvCtrl', function ($scope, Chanels) {

    $scope.channels = Chanels.all();

    $scope.playStream = function (param) {

        VideoPlayer.play(param);
    };
})

.controller('SettingsCtrl', function($scope) {
  $scope.settings = {
//    enableFriends: true
  };
});
