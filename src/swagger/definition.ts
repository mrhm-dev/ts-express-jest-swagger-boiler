const definition = {
    openapi: '3.0.0',
    info: {
        title: 'Title of The Application',
        description: 'Summary of the application',
        version: '0.0.1',
        contact: {
            name: 'HM Nayem',
            email: 'hmnayem@gmail.com',
        },
        license: {
            name: 'Apache 2.0',
            url: 'http://www.apache.org/licenses/LICENSE-2.0.html',
        },
        servers: [
            {
                description: 'Local Server',
                url: 'localhost:4400',
            },
        ],
        host: 'localhost:3000', // the host or url of the app
    },
};

export default definition;
