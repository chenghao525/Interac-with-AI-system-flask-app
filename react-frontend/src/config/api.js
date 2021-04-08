let Api = '';

switch (process.env.NODE_ENV) {
    case 'development':
        Api = 'http://localhost:8000';  // Localhost
        // Api = 'http://10.249.46.56:8000';  // Miao Zhang
        break;
    case 'production':
        Api = 'https://api.hopon.rocks';
        break;
    default:
        Api = 'http://localhost:8000';
}

export { Api };
