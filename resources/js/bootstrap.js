
try {
    window.Popper = require('popper.js').default;
    window.$ = window.jQuery = require('jquery');

    require('bootstrap');
} catch (e) {}

window.axios = require('axios');
window.axios.defaults.baseURL = 'http://techblog.test/api'

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

