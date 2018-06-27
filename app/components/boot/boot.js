System.register(['angular2/platform/browser', '../../controllers/HomeController/HomeController'], function(exports_1) {
    var browser_1, HomeController_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (HomeController_1_1) {
                HomeController_1 = HomeController_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(HomeController_1.HomeController);
        }
    }
});
//# sourceMappingURL=boot.js.map