/*
 * object.watch polyfill
 *
 * 2012-04-03
 *
 * By Eli Grey, http://eligrey.com
 * Public Domain.
 * NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
 * 
 * 2017-07-01
 * 
 * Edited and was understood by Filipp Zhuravlev.
 */

// object.watch
if (!Object.prototype.watch) {
	Object.defineProperty(Object.prototype, "watch", {
		  enumerable: false,
		  configurable: true, 
		  writable: false,
		  value: (prop, handler) => {
			let
			  oldval = this[prop],
			  newval = oldval,
			  getter = () => (newval),
			  setter = val => {
				oldval = newval;
				return newval = handler.call(this, prop, oldval, val);
			};
			
			if (delete this[prop]) { // can't watch constants
				Object.defineProperty(this, prop, {
					  get: getter,
					  set: setter,
					  enumerable: true,
					  configurable: true
				});
			}
		}
	});
}

// object.unwatch
if (!Object.prototype.unwatch) {
	Object.defineProperty(Object.prototype, "unwatch", {
		enumerable: false,
	    configurable: true,
	 	writable: false,
	  	value: prop => {
			let val = this[prop];
			delete this[prop]; // remove accessors
			this[prop] = val;
		}
	});
}