import { fileURLToPath } from 'url';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import Dotenv from 'dotenv-webpack';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
// const envPath = `.env.${process.env.NODE_ENV}`;
// require(dotenv).config({ path: envPath})

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = {
    //This property defines where the application starts
    entry: './src/main.jsx',

    //This property defines the file path and the file name which will be used for deploying the bundled file
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    //Setup loaders
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/, // Match both .js and .jsx files
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', {
                                "targets": "defaults"
                            }],
                            '@babel/preset-react'
                        ]
                    }
                }]
            },
            {
                test: /\.css$/i, // Match CSS files 
                include: path.resolve(__dirname),
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    tailwindcss,
                                    autoprefixer
                                ]
                            }
                        }
                    }] // Use style-loader and css-loader
            },
            {
                test: /\.pdf$/, //FILE
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/pdf/', // Output path for PDF files
                        },
                    },
                ],
            },
            {
                test: /\.(svg|jpg|png)$/i, //MEDIA
                type: 'asset/resource',   
                generator: {
                    filename: 'images/[name][ext]' // Output filename pattern
                }           
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i, //FONTS
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext]' // Output filename pattern
                }
            },
        ]
    },

    // Setup plugin to use a HTML file for serving bundled js files
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new Dotenv({
            systemVars: true,
        }),
    ],

    // Set webpack mode to development or production
    mode: 'development', // or 'production'

    devServer: {
        // Other devServer options...
        headers: {
            'Content-Type': 'application/javascript'
        },
        static: {
            directory: path.join(__dirname, 'dist'),
        }
    },


    resolve: {
        extensions: ['.js', '.jsx', '.css'], // Specify file extensions to resolve
        alias: {
            // Create aliases for frequently used paths
            '@components': path.resolve(__dirname, 'src', 'Components'),
            // Add more aliases as needed for your project
        },
    },
    watch: true,
};

export default config;
