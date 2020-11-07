module.exports = {
    basePath: process.env.NODE_ENV === "production" ? process.env.URL_DEPLOY : '',
    assetPrefix: process.env.NODE_ENV === "production" ? process.env.URL_DEPLOY : ''
}