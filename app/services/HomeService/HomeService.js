System.register([], function(exports_1) {
    var HomeService;
    return {
        setters:[],
        execute: function() {
            HomeService = (function () {
                function HomeService() {
                }
                HomeService.prototype.greet = function () {
                    return 'Olá amigo!';
                };
                return HomeService;
            })();
            exports_1("HomeService", HomeService);
        }
    }
});
//# sourceMappingURL=HomeService.js.map