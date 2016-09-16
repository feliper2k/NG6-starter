import template from './counter.html';
import controller from './counter.controller';
import './counter.styl';

const counterComponent = {
    restrict: 'E',
    bindings: {
        value: '<'
    },
    template,
    controller,
    controllerAs: 'counter'
};

export default counterComponent;
