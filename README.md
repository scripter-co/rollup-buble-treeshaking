# Tree Shaking with Rollup 48 and 50

Testing bundling JSX with Buble and versions 48 and 50 of Rollup

## Test Config

We are using the following configuration:

```javascript
import buble from 'rollup-plugin-buble';

export default {
  entry: 'index.js',
  dest: 'bundle.js',
  format: 'iife',
  globals: ['inferno-component'],
  external: ['inferno-component'],
  plugins: [buble({ jsx: 'createElement' })]
}

```

## Input

We will be trying to bundle the following file:

```javascript
import {simpleComponent} from 'components';

simpleComponent();
```

## Options

- 0.48.0: `npm run 48`
- 0.50.0: `npm run 50`

--------------

## Results

**0.48.0**

```javascript
(function (Component) {
'use strict';

Component = Component && Component.hasOwnProperty('default') ? Component['default'] : Component;

function simpleComponent() {
  console.log('simple');
}

simpleComponent();

}(Component));
```

**0.50.0**

```javascript
(function (Component) {
'use strict';

Component = Component && Component.hasOwnProperty('default') ? Component['default'] : Component;

var classComponent = (function (Component$$1) {
  function classComponent () {
    Component$$1.apply(this, arguments);
  }

  if ( Component$$1 ) classComponent.__proto__ = Component$$1;
  classComponent.prototype = Object.create( Component$$1 && Component$$1.prototype );
  classComponent.prototype.constructor = classComponent;

  classComponent.prototype.render = function render () {
    return (
      createElement( 'div', null, "hello" )
    );
  };

  return classComponent;
}(Component));

function simpleComponent() {
  console.log('simple');
}

simpleComponent();

}(Component));
```
