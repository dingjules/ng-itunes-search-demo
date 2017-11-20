# Simple iTunes search example

> Single example to search for tracks on using iTunes api,
> You can click on the detail button for item details, and click to add or remove from the cart

## How to
### How to start project on dev mode
```
npm install
npm start
```

### How to run unit tests
```
npm test
```
or to run test with hot reloading
```
npm run test-watch
```
> Coverage reports are generated in _/target/coverage_

### to make production version
```
npm run build
```
> Production files are generated in _/target/dist_

## Application structure
> Single component _app_ which contains a _search area_, a _result area_ and a _cart area_

## Related libaries
1. AngularJS 1.6
1. Angular Material (because it's simple to use and nice)
1. webpack
1. karma (unit test)
1. LESS

## Limitations and TODOs
1. Add more options for searching, time, media type etc
1. Reuse some components (the item list component for example)
1. Add more information in the detail view
1. summary for cart
1. Error management
...
