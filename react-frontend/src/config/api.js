let Api = '';

switch (process.env.NODE_ENV) {
    case 'development':
        Api = 'https://penguin-ai.herokuapp.com/flask/';  // Localhost
        break;
    case 'production':
        Api = 'https://penguin-ai.herokuapp.com/flask/';
        break;
    default:
        Api = 'https://penguin-ai.herokuapp.com/flask/';
}
