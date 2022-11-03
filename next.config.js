/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    webpack(config) {
        config.module.rules.push({
            test: /\.(le|c)ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: "css-loader"
                },
                {
                    loader: "less-loader",
                    options: {
                        sourceMap: true,
                        lessOptions: {
                            javascriptEnabled: true,
                            importLoaders: false
                        }
                    }
                }
            ]
        });

        config.plugins.push(
            new MiniCssExtractPlugin({
                filename: "static/css/[name].css",
                chunkFilename: "static/css/[contenthash].css"
            })
        );

        return config;
    }
};

module.exports = nextConfig;
