import * as CounterActions from '../../actions/counter';

function CounterController($ngRedux) {
    'ngInject';

    // redux connection
    let $onDestroy;
    function $onInit() {
        $onDestroy = $ngRedux.connect(mapStateToThis, CounterActions)(this);

        // Which part of the Redux global state does our component want to receive?
        function mapStateToThis(state) {
            return {
                value: state.counter
            };
        }
    }

    Object.assign(this, { $onInit, $onDestroy });
}


export default CounterController;
