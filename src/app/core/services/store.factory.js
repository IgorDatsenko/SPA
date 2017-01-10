'use strict';

export default function (app) {
    app
        .factory('store', storeFactory);

        function storeFactory () {
            return {
                "months": ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                "monthsSh": ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
            };
        }
}
