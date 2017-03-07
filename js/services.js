angular.module('moviecatApp.service', [])
    .service('$moviecatSrv', ['$window', function($window) {
        this.JSONP = function(url, params, callback) {
            var callbackName = 'callback' + new Date().getTime();
            var script = document.createElement('script');
            url += '?'
            for (var key in params) {
                url += key + '=' + params[key] + '&';
            }
            url += "callback=" + callbackName;
            script.src = url;
            document.body.appendChild(script);

            window[callbackName] = function(data) {
                callback(data);
                document.body.removeChild(script);
            }
        }
    }]);
