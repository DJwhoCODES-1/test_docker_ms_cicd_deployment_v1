const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  const { SERVICE_A_URL, SERVICE_B_URL, SERVICE_C_URL, SERVICE_D_URL } =
    process.env;

  app.use(
    "/service-a",
    createProxyMiddleware({
      target: SERVICE_A_URL,
      changeOrigin: true,
      pathRewrite: { "^/service-a": "" },
    })
  );

  app.use(
    "/service-b",
    createProxyMiddleware({
      target: SERVICE_B_URL,
      changeOrigin: true,
      pathRewrite: { "^/service-b": "" },
    })
  );

  app.use(
    "/service-c",
    createProxyMiddleware({
      target: SERVICE_C_URL,
      changeOrigin: true,
      pathRewrite: { "^/service-c": "" },
    })
  );

  app.use(
    "/service-d",
    createProxyMiddleware({
      target: SERVICE_D_URL,
      changeOrigin: true,
      pathRewrite: { "^/service-d": "" },
    })
  );
};
