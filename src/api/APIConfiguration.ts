interface APIConfig {
    /**
     * The API gateway URL.
     */
    apiGwUrl: string;

    /**
     * The CDN url.
     */
    apiCdnUrl: string;

    /**
     * Websocket url.
     */
    apiWsUrl: string;
}

let config : APIConfig = {} as APIConfig;
updateApiConfig(window.location.protocol, window.location.host);

export function updateApiConfig(protocol: string, host: string) {
    config.apiGwUrl = `${protocol}//api.${host}/api/v1`;
    config.apiCdnUrl = `${protocol}//cdn.${host}`;
    config.apiWsUrl = `${protocol}//ws.${host}`;
}

export const APIConfiguration = config;