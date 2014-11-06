/**
 * Expose `getBrowserCenter`
 */

module.exports = getBrowserCenter;

/**
 * Get the browser window's center x,y coordinates
 *
 * @returns {Object}
 */
 
function getBrowserCenter() {
  var centerYCoord = (window.innerHeight / 2) + window.pageYOffset;
  var centerXCoord = (window.innerWidth / 2) + window.pageXOffset;
  return {
    y: centerYCoord,
    x: centerXCoord
  };
}
