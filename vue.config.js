const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave: false,
  transpileDependencies: true,
  devServer:{
    proxy:{
      "/api":{
        target: "http://localhost:8000",
        pathRewrite:{
          "^/api":""
        }
      }
    }
  }
})
