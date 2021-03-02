//调试的时候接口分离(adw + adv)
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        createProxyMiddleware([
            "/api"
        ], {
            target: 'http://192.168.2.243:8765',
            changeOrigin: true,
            // pathRewrite: {
            //   "^/api": ""
            // },
        })
    );
    // app.use(
    //     createProxyMiddleware([
    //         "/management"
    //     ], {
    //         target: 'http://192.168.2.245:8088',
    //         changeOrigin: true,
    //     })
    // );
}

