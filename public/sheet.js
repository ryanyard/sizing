var app = angular.module('plunker', []);

app.controller('sheet', function($scope, $parse) {
    $scope.columns = ['A', 'B', 'C', 'D'];
    $scope.rows = [1, 2, 3, 4];
    $scope.cells = {};

    process = function(exp) {
      return exp.replace(/[A-Z]\d+/g, function(ref) {
        return 'compute("' + ref + '")';
      })
    }

    $scope.compute = function(cell) {
      return $parse(process($scope.cells[cell]))($scope);
    };
});
