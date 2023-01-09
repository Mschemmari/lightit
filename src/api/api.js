import ENV from '../../env'
// import Fetch from '../helpers/fetch'
// import Logger from '../helpers/logger'

export const API = {
    getAberturas() {
        return this._get(ENV.GET_ABERTURAS);
    },
    getTerminaciones() {
        return this._get(ENV.GET_TERMINACIONES);
    },
    getEquipamiento() {
        return this._get(ENV.GET_EQUIPAMIENTO);
    },

    _get(path) {
        const method = 'GET';
        // const headers = ENV.API.HEADERS(token);

        let url = Object.keys(params)
            .map(param => `${param}=${params[param]}`)
            .join('&');
        url = `${path}${url ? '?' : ''}${url}`;
        Logger.log(`GET ${url}`);

        return this._fetch(url, { method });
    },

    _fetch(path) {
        // fetch(path)
        //     .then(response => response.json())
        //     .then(data => console.log(data));
        //     const now = +new Date();
        return fetch(path)
            .then(res => res.json())
            .then(res => {
                Logger.log(`[${method}] end (took:' + (+${new Date() - now}) + 'ms)`);
                return res;
            })
            .catch(e => {
                // Logger.log(`ERROR: ${e}`);
                return e;
            });
    },
}
