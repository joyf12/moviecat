angular.module('moviecatApp.top250', [])
    .controller('top250Ctrl', ['$scope', '$moviecatSrv', '$routeParams', function($scope, $moviecatSrv, $routeParams) {
        $scope.pageid = $routeParams.pageid || 1;
        $scope.pagesize = $routeParams.pagesize || 5;
        var start = ($scope.pageid - 1) * $scope.pagesize;
        $moviecatSrv.JSONP('https://api.douban.com/v2/movie/top250', {
            count: $scope.pagesize,
            start: start
        }, function(data) {
            $scope.movie = data;
            if ($scope.pageid > 1) {
                $scope.prevPageid = $scope.pageid - 1;
            } else {
                $scope.prevPageid = 1;
            }
            $scope.pageCount = Math.ceil($scope.movie.total / $scope.pagesize);
            if ($scope.pageid < $scope.pageCount) {
                $scope.nextPageid = ($scope.pageid - 0) + 1;
            } else {
                $scope.nextPageid = $scope.pageCount;
            }
            $scope.totalCount = $scope.movie.total;
            //因为这也是属于异步赋值给$scope的并没有通知angular改变页面的值 所以要手动触发一下脏检查
            $scope.$apply();
        });
    }]);
