//     bb-model-view
//     (c) simonfan
//     bb-model-view is licensed under the MIT terms.

define(["require","exports","module","lodash","bb-dock","lowercase-backbone","./__bb-model-view/model-to-dom/index","./__bb-model-view/dom-to-model/index"],function(e,t,n){var r=e("lodash"),i=e("bb-dock").model,s=e("lowercase-backbone"),o=e("./__bb-model-view/model-to-dom/index"),u=e("./__bb-model-view/dom-to-model/index"),a=n.exports=s.view.extend({initialize:function(){s.view.prototype.initialize.apply(this,arguments),this.initializeModelView.apply(this,arguments)},initializeModelView:function(t){t=t||{},this.map=t.map||this.map,this.parsers=t.parsers||this.parsers,this.sringifiers=t.stringifiers||this.stringifiers,this.modeld=t.modeld||i(),delete this.model,o.call(this),u.call(this),typeof t.model=="object"&&this.modeld.attach(t.model)},attach:function(t,n){return this.modeld.attach(t,n),this},detach:function(t){return this.modeld.detach(t),this},map:{},stringifiers:{},parsers:{}})});