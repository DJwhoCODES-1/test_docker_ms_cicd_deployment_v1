const { createProxyMiddleware } = require("http-proxy-middleware");

const serviceMap = {
  "/service-a": "http://service-a:4001",
  "/service-b": "http://service-b:4002",
  "/service-c": "http://service-c:4003",
  "/service-d": "http://service-d:4004",
  "/service-e": "http://service-e:4005",
};

function setupProxies(app) {
  Object.keys(serviceMap).forEach((route) => {
    app.use(
      route,
      createProxyMiddleware({
        target: serviceMap[route],
        changeOrigin: true,
        pathRewrite: (path) => path.replace(route, ""),
      })
    );
  });
}

module.exports = setupProxies;
