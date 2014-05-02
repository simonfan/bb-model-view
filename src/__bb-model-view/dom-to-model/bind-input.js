/**
 * @module bb-model-view
 * @submodule dom-to-model-bind-input
 */
define(function (require, exports, module) {
	'use strict';

	var _ = require('lodash'),
		$ = require('jquery');

	var bindInput = require('./bind-input');

	/**
	 * Binds the value of the element selected to the attribute.
	 *
	 * @method bindInput
	 * @param selector {String|Array}
	 * @param attribute {String}
	 */
	module.exports = function bindInput(selector, attribute) {

		if (_.isArray(selector)) {

			_.each(selector, _.bind(function (sel) {

				bindInput.call(this, sel, attribute);

			}, this));

		} else {

			// console.log(typeof selector);
			// console.log('store ' + selector);

			// retrieve $el and store it.
			var $el = this.$els[selector] = this.$el.find(selector);

			if ($el.length > 0) {
				$el.data('__bb_model_view__-bound-attribute', attribute)
					.data('__bb_model_view__-selector', selector);
			}
		}
	};

});
