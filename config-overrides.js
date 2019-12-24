const { override, fixBabelImports, addLessLoader } = require("customize-cra");
const theme = require('./src/context/theme').theme;

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      "@primary-color": theme.color.dark,
      'border-radius-base': '16px',
      'border-width-base': '2px',
      'btn-height-base': '34px',
      'btn-height-lg': '42px',
      'btn-height-sm': '26px',
      'pagination-item-size': '34px',
      'pagination-item-size-sm': '26px',
    }
  })
);
