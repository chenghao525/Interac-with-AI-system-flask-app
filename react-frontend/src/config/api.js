let Api = '';

switch (process.env.NODE_ENV) {
    case 'development':
        Api = 'https://penguin-ai.herokuapp.com/';  // Localhost
        break;
    case 'production':
        Api = 'https://penguin-ai.herokuapp.com/';
        break;
    default:
        Api = 'https://penguin-ai.herokuapp.com/';
}

export { Api };
