const ItunesSearchPath = 'https://itunes.apple.com/search';

export const appService = ($http) => {
    'ngInject';

    const getItems = term => $http.get(`${ItunesSearchPath}?term=${term}`);

    return {
        getItems
    }
};