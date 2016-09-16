import angular from 'angular';
import uiRouter from 'angular-ui-router';
import redux    from 'redux';
import ngRedux  from 'ng-redux';
import thunk    from 'redux-thunk';

import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import 'normalize.css';

import rootReducer from './reducers';

angular.module('app', [
    ngRedux,
    uiRouter,
    Common,
    Components
])
.config(($locationProvider, $ngReduxProvider) => {
    'ngInject';
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');

    $ngReduxProvider.createStoreWith(rootReducer, [thunk]);
})

.component('app', AppComponent);
