const CracoLessPlugin = require("craco-less");
const path = require("path");

const pathResolve = (dir) => {
  return path.resolve(__dirname, dir);
};

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      //   options: {
      //     lessLoaderOptions: {
      //       lessOptions: {
      //         modifyVars: { "@primary-color": "#1DA57A" },
      //         javascriptEnabled: true,
      //       },
      //     },
      //   },
    },
  ],
  webpack: {
    alias: {
      "@": pathResolve("src"),
      // "@mui/styled-engine": "@mui/styled-engine-sc",
    },
  },
};
