'use strict';


import * as _ from 'lodash/core';
import lodash from 'lodash';




function MainController($log, localStorage, store) {
  'ngInject';

  // $log.debug('Hello from main controller!');

  let nowDate = new Date();

	this.month = store.months[nowDate.getMonth()];
	this.year = nowDate.getFullYear();


	this.lodash_version = _.VERSION;

}

export default MainController;
