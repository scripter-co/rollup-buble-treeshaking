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
