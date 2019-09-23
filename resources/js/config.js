/**
 * Defines the API route we are using.
 */
var api_url = '';
var app_url = '';

switch( process.env.NODE_ENV ){
    case 'development':
        api_url = 'http://blog.test/api/v1';
        app_url = 'http://blog.test';
        break;
    case 'production':
        api_url = 'http://pikachuking.com/api/v1';
        app_url = 'http://pikachuking.com';
        break;
}

export const BLOG_CONFIG = {
    API_URL: api_url,
    APP_URL: app_url,
};
