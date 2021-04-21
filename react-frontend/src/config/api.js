let Api = '';

switch (process.env.NODE_ENV) {
    case 'development':
        Api = 'http://127.0.0.1:5000/';  // Localhost
        break;
    case 'production':
        Api = 'https://penguin-ai.herokuapp.com/';
        break;
    default:
        Api = 'https://penguin-ai.herokuapp.com/';
}

export {Api};