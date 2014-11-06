var test = require('tape');
var getBrowserCenter = require('../');


/**
 * Tested on mid 2011 MBA (1400 x 900) Google Chrome
 */


test('getBrowserCenter', function(t) {
  t.plan(3);
  
  t.deepEqual(getBrowserCenter(), {x: 716.5, y: 252.5});

  scrollTo(0, 500);
  t.deepEqual(getBrowserCenter(), {x: 716.5, y: 752.5});

  scrollTo(200, 500);
  t.deepEqual(getBrowserCenter(), {x: 916.5, y: 752.5});
});
