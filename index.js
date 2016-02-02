(function(){
    var shortUrl = require(__dirname + "/src/url");
    module.exports = function (url) {
        return shortUrl.process(url);
    };
})();





