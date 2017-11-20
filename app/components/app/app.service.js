const ItunesSearchPath = 'https://itunes.apple.com/search';

export const appService = ($http) => {
    'ngInject';

    const getItems = (term, country) => $http.get(`${ItunesSearchPath}?term=${term}&country=${country}`);

    return {
        getItems
    }
};