const prefix = process.env.NODE_ENV === 'production' && "/briefcase";

module.exports = {
    basePath: prefix,
    assetPrefix: prefix
}