## angulartics-localforage

[![NPM version][npm-image]][npm-url] [![NPM downloads][npm-downloads-image]][npm-downloads-url] [![Bower version][bower-image]][bower-url] [![Dependencies status][dep-status-image]][dep-status-url] [![MIT license][license-image]][license-url] [![Join the Slack chat][slack-image]][slack-url]

Localforage plugin for [Angulartics](https://github.com/angulartics/angulartics).


## Install

First make sure you've read installation and setup instructions for [Angulartics](https://github.com/angulartics/angulartics#install).

Then you can install this package either with `npm` or with `bower`.

### npm

```shell
npm install angulartics-localforage
```

Then add `angulartics.localforage` as a dependency for your app:

```javascript
require('angulartics')

angular.module('myApp', [
  'angulartics', 
  require('angulartics-localforage')
]);
```

> Please note that core Angulartics doesn't export the name yet, but it will once we move it into [the new organization](http://github.com/angulartics).

### bower

```shell
bower install angulartics-localforage
```

Add the `<script>` to your `index.html`:

```html
<script src="/bower_components/angulartics-localforage/dist/angulartics-localforage.min.js"></script>
```

Then add `angulartics.localforage` as a dependency for your app:

```javascript
angular.module('myApp', [
  'angulartics', 
  'angulartics.localforage'
]);
```

## Documentation

Documentation is available on the [Angulartics site](http://luisfarzati.github.io/angulartics).

### Settings

## Development

```shell
npm run build
```

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/angulartics-localforage.svg
[npm-url]: https://npmjs.org/package/angulartics-localforage
[npm-downloads-image]: https://img.shields.io/npm/dm/angulartics-localforage.svg
[npm-downloads-url]: https://npmjs.org/package/angulartics-localforage
[bower-image]: https://img.shields.io/bower/v/angulartics-localforage.svg
[bower-url]: http://bower.io/search/?q=angulartics-localforage
[dep-status-image]: https://img.shields.io/david/angulartics/angulartics-localforage.svg
[dep-status-url]: https://david-dm.org/angulartics/angulartics-localforage
[license-image]: http://img.shields.io/badge/license-MIT-blue.svg
[license-url]: LICENSE
[slack-image]: https://angulartics.herokuapp.com/badge.svg
[slack-url]: https://angulartics.herokuapp.com
