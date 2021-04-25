let Api = '';

if (!window.location.origin) {
  window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');
}
switch (process.env.NODE_ENV) {
    case 'development':
        Api = 'http://127.00.00.1:5000';  // Localhost
        break;
    case 'production':
        Api = window.location.origin;
        break;
    default:
        Api = window.location.origin;
}

export {Api};