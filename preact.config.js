import { resolve } from 'path';
const preactCliTypeScript = require('preact-cli-plugin-typescript');
import asyncPlugin from 'preact-cli-plugin-async';

/**
 * Function that mutates original webpack config.
 * Supports asynchronous changes when promise is returned.
 *
 * @param {object} config original webpack config.
 * @param {object} env options passed to CLI.
 * @param {WebpackConfigHelpers} helpers object with useful helpers when working with config.
 * */
export default function(config, env, helpers) {
    preactCliTypeScript(config);
    asyncPlugin(config);
    config.resolve.alias['preact-cli-entrypoint'] = resolve(__dirname, 'preact/index.js');
}
