const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#0D72B9",
              "@success-color": "#0D72B9",
              "@error-color": "#a70a49",
              "@input-placeholder-color": "rgba(0, 0, 0, 0.3)",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
