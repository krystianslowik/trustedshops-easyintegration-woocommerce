(()=>{"use strict";(()=>{function e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function t(t){for(var r=1;r<arguments.length;r++){var s=null!=arguments[r]?arguments[r]:{};r%2?e(Object(s),!0).forEach((function(e){n(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):e(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t,n,r,s,a,i){try{var u=e[a](i),o=u.value}catch(e){return void n(e)}u.done?t(o):Promise.resolve(o).then(r,s)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(s,a){var i=e.apply(t,n);function u(e){r(i,s,a,u,o,"next",e)}function o(e){r(i,s,a,u,o,"throw",e)}u(void 0)}))}}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.settings=null,this.eventsLib=window.eventsLib,this.params=window.ts_easy_integration_params,this.registerEvents()}var r,i,u,o,c,h,l,p,d,f,g,E,v,b,S,y,T,_,R,m,C,w,k,N,O,A,L;return r=e,i=[{key:"sendingNotification",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"save";this.eventsLib.dispatchAction({action:this.eventsLib.EVENTS.NOTIFICATION,payload:{event:e,status:t,type:n}})}},{key:"getLocaleCallback",value:function(){this.eventsLib.dispatchAction({action:this.eventsLib.EVENTS.SET_LOCALE,payload:this.params.locale})}},{key:"getInformationOfSystemCallback",value:function(){this.eventsLib.dispatchAction({action:this.eventsLib.EVENTS.SET_INFORMATION_OF_SYSTEM,payload:{nameOfSystem:this.params.name_of_system,versionNumberOfSystem:this.params.version_of_system,versionNumberOfPlugin:this.params.version,allowsEstimatedDeliveryDate:!0,allowsEventsByOrderStatus:!1,allowsSendReviewInvitesForPreviousOrders:!0,allowsSendReviewInvitesForProduct:!0,allowsEditIntegrationCode:!0,allowsSupportWidgets:!0,useVersionNumberOfConnector:"2.0"}})}},{key:"getCredentialsCallback",value:(L=s(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getCredentials().then((function(e){t.eventsLib.dispatchAction({action:t.eventsLib.EVENTS.SET_CREDENTIALS_PROVIDED,payload:e})}));case 2:case"end":return e.stop()}}),e,this)}))),function(){return L.apply(this,arguments)})},{key:"saveCredentialsCallback",value:(A=s(regeneratorRuntime.mark((function e(t){var n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.getSettings().then((function(e){return e.client_id=t.payload.clientId,e.client_secret=t.payload.clientSecret,e})).then((function(e){return n.updateSettings(e,!0)})).then((function(){n.sendingNotification(n.eventsLib.EVENTS.SAVE_CREDENTIALS,"success")}));case 3:e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),this.sendingNotification(this.eventsLib.EVENTS.SAVE_CREDENTIALS,"error");case 9:case"end":return e.stop()}}),e,this,[[0,6]])}))),function(e){return A.apply(this,arguments)})},{key:"getSalesChannelsCallback",value:function(){this.eventsLib.dispatchAction({action:this.eventsLib.EVENTS.SET_SALES_CHANNELS_PROVIDED,payload:this.params.sales_channels})}},{key:"getOrderStatusesCallback",value:function(e){this.eventsLib.dispatchAction({action:this.eventsLib.EVENTS.SET_AVAILABLE_ORDER_STATUSES,payload:this.params.order_statuses.hasOwnProperty(e.payload.salesChannelRef)?this.params.order_statuses[e.payload.salesChannelRef]:[]})}},{key:"getMappedChannelsCallback",value:(O=s(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getChannels().then((function(e){t.eventsLib.dispatchAction({action:t.eventsLib.EVENTS.SET_MAPPED_CHANNELS,payload:e})}));case 2:case"end":return e.stop()}}),e,this)}))),function(){return O.apply(this,arguments)})},{key:"saveMappedChannelsCallback",value:(N=s(regeneratorRuntime.mark((function e(t){var n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.getSettings().then((function(e){var n=e.channels.map((function(e){return e.salesChannelRef+"_"+e.eTrustedChannelRef})),r=t.payload.map((function(e){return e.salesChannelRef+"_"+e.eTrustedChannelRef}));return n.filter((function(e){return r.indexOf(e)<0})).map((function(t){delete e.trustbadges[t],delete e.widgets[t],delete e.used_order_statuses[t]})),e.channels=t.payload,e})).then((function(e){return n.updateSettings(e)})).then((function(){n.getMappedChannelsCallback().then((function(){n.sendingNotification(n.eventsLib.EVENTS.SET_MAPPED_CHANNELS,"success")}))}));case 3:e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),this.sendingNotification(this.eventsLib.EVENTS.SET_MAPPED_CHANNELS,"error");case 9:case"end":return e.stop()}}),e,this,[[0,6]])}))),function(e){return N.apply(this,arguments)})},{key:"disconnectCallback",value:(k=s(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.disconnect().then((function(e){t.eventsLib.dispatchAction({action:t.eventsLib.EVENTS.SET_DISCONNECTED,payload:null}),t.settings=null}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),this.sendingNotification(this.eventsLib.EVENTS.SET_DISCONNECTED,"error");case 8:case"end":return e.stop()}}),e,this,[[0,5]])}))),function(){return k.apply(this,arguments)})},{key:"getUniqueId",value:function(e,t){return e+"_"+t}},{key:"getTrustbadgeCallback",value:(w=s(regeneratorRuntime.mark((function e(t){var n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getTrustbadge(this.getUniqueId(t.payload.salesChannelRef,t.payload.eTrustedChannelRef)).then((function(e){n.eventsLib.dispatchAction({action:n.eventsLib.EVENTS.SET_TRUSTBADGE_CONFIGURATION_PROVIDED,payload:e||{id:"id",children:[]}})}));case 2:case"end":return e.stop()}}),e,this)}))),function(e){return w.apply(this,arguments)})},{key:"saveTrustbadgeCallback",value:(C=s(regeneratorRuntime.mark((function e(t){var n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.getSettings().then((function(e){return e.trustbadges[n.getUniqueId(t.payload.salesChannelRef,t.payload.eTrustedChannelRef)]=t.payload,e})).then((function(e){return n.updateSettings(e)})).then((function(){n.getTrustbadgeCallback({payload:t.payload}).then((function(){n.sendingNotification(n.eventsLib.EVENTS.SAVE_TRUSTBADGE_CONFIGURATION,"success")}))}));case 3:e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),this.sendingNotification(this.eventsLib.EVENTS.SAVE_TRUSTBADGE_CONFIGURATION,"error");case 9:case"end":return e.stop()}}),e,this,[[0,6]])}))),function(e){return C.apply(this,arguments)})},{key:"getWidgetsCallback",value:(m=s(regeneratorRuntime.mark((function e(t){var n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getWidgets(this.getUniqueId(t.payload.salesChannelRef,t.payload.eTrustedChannelRef)).then((function(e){n.eventsLib.dispatchAction({action:n.eventsLib.EVENTS.SET_WIDGET_PROVIDED,payload:e})}));case 2:case"end":return e.stop()}}),e,this)}))),function(e){return m.apply(this,arguments)})},{key:"getAdditionalWidgetLocationsCallback",value:function(){this.eventsLib.dispatchAction({action:this.eventsLib.EVENTS.SET_LOCATION_FOR_WIDGET,payload:this.params.widget_locations})}},{key:"getUsedOrderStatusesCallback",value:(R=s(regeneratorRuntime.mark((function e(t){var n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getUsedOrderStatuses(this.getUniqueId(t.payload.salesChannelRef,t.payload.eTrustedChannelRef)).then((function(e){if(e)n.eventsLib.dispatchAction({action:n.eventsLib.EVENTS.SET_USED_ORDER_STATUSES,payload:{activeStatus:e,id:t.payload.id,eTrustedChannelRef:t.payload.eTrustedChannelRef,salesChannelRef:t.payload.salesChannelRef}});else{var r={name:"checkout",ID:"checkout",event_type:"checkout"};n.eventsLib.dispatchAction({action:n.eventsLib.EVENTS.SET_USED_ORDER_STATUSES,payload:{activeStatus:{service:r,product:r},id:t.payload.id,eTrustedChannelRef:t.payload.eTrustedChannelRef,salesChannelRef:t.payload.salesChannelRef}})}}));case 2:case"end":return e.stop()}}),e,this)}))),function(e){return R.apply(this,arguments)})},{key:"saveUsedOrderStatusesCallback",value:(_=s(regeneratorRuntime.mark((function e(t){var n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.getSettings().then((function(e){return e.used_order_statuses[n.getUniqueId(t.payload.salesChannelRef,t.payload.eTrustedChannelRef)]=t.payload.activeStatus,e})).then((function(e){return n.updateSettings(e)})).then((function(){n.getUsedOrderStatusesCallback({payload:t.payload}).then((function(){n.sendingNotification(n.eventsLib.EVENTS.SAVE_USED_ORDER_STATUSES,"success")}))}));case 3:e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),this.sendingNotification(this.eventsLib.EVENTS.SAVE_USED_ORDER_STATUSES,"error");case 9:case"end":return e.stop()}}),e,this,[[0,6]])}))),function(e){return _.apply(this,arguments)})},{key:"saveWidgetsCallback",value:(T=s(regeneratorRuntime.mark((function e(t){var n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.getSettings().then((function(e){return e.widgets[n.getUniqueId(t.payload.salesChannelRef,t.payload.eTrustedChannelRef)]=t.payload,e})).then((function(e){return n.updateSettings(e)})).then((function(){n.getWidgetsCallback({payload:t.payload}).then((function(){n.sendingNotification(n.eventsLib.EVENTS.SAVE_WIDGET_CHANGES,"success")}))}));case 3:e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),this.sendingNotification(this.eventsLib.EVENTS.SAVE_WIDGET_CHANGES,"error");case 9:case"end":return e.stop()}}),e,this,[[0,6]])}))),function(e){return T.apply(this,arguments)})},{key:"exportOrdersCallback",value:(y=s(regeneratorRuntime.mark((function e(t){var n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.exportOrders(1,t.payload.numberOfDays,t.payload.includeProductData,t.payload.salesChannelRef).then((function(e){var r=document.createElement("a");r.href=e,r.download="orders.csv",document.body.appendChild(r),r.click(),document.body.removeChild(r),n.eventsLib.dispatchAction({action:n.eventsLib.EVENTS.SET_EXPORT_PREVIOUS_ORDER,payload:t.payload})}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),this.sendingNotification(t,"error","exportTimeout");case 8:case"end":return e.stop()}}),e,this,[[0,5]])}))),function(e){return y.apply(this,arguments)})},{key:"registerEvents",value:(S=s(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.eventsLib.registerEvents((n(t={},this.eventsLib.EVENTS.GET_INFORMATION_OF_SYSTEM,this.getInformationOfSystemCallback.bind(this)),n(t,this.eventsLib.EVENTS.GET_LOCALE,this.getLocaleCallback.bind(this)),n(t,this.eventsLib.EVENTS.SAVE_CREDENTIALS,this.saveCredentialsCallback.bind(this)),n(t,this.eventsLib.EVENTS.GET_CREDENTIALS_PROVIDED,this.getCredentialsCallback.bind(this)),n(t,this.eventsLib.EVENTS.GET_SALES_CHANNELS_PROVIDED,this.getSalesChannelsCallback.bind(this)),n(t,this.eventsLib.EVENTS.GET_MAPPED_CHANNELS,this.getMappedChannelsCallback.bind(this)),n(t,this.eventsLib.EVENTS.SAVE_MAPPED_CHANNEL,this.saveMappedChannelsCallback.bind(this)),n(t,this.eventsLib.EVENTS.DISCONNECTED,this.disconnectCallback.bind(this)),n(t,this.eventsLib.EVENTS.GET_TRUSTBADGE_CONFIGURATION_PROVIDED,this.getTrustbadgeCallback.bind(this)),n(t,this.eventsLib.EVENTS.SAVE_TRUSTBADGE_CONFIGURATION,this.saveTrustbadgeCallback.bind(this)),n(t,this.eventsLib.EVENTS.GET_LOCATION_FOR_WIDGET,this.getAdditionalWidgetLocationsCallback.bind(this)),n(t,this.eventsLib.EVENTS.GET_WIDGET_PROVIDED,this.getWidgetsCallback.bind(this)),n(t,this.eventsLib.EVENTS.SAVE_WIDGET_CHANGES,this.saveWidgetsCallback.bind(this)),n(t,this.eventsLib.EVENTS.EXPORT_PREVIOUS_ORDER,this.exportOrdersCallback.bind(this)),n(t,this.eventsLib.EVENTS.GET_AVAILABLE_ORDER_STATUSES,this.getOrderStatusesCallback.bind(this)),n(t,this.eventsLib.EVENTS.GET_USED_ORDER_STATUSES,this.getUsedOrderStatusesCallback.bind(this)),n(t,this.eventsLib.EVENTS.SAVE_USED_ORDER_STATUSES,this.saveUsedOrderStatusesCallback.bind(this)),t));case 1:case"end":return e.stop()}}),e,this)}))),function(){return S.apply(this,arguments)})},{key:"exportOrders",value:(b=s(regeneratorRuntime.mark((function e(t,n,r){var s,a,i=this,u=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=u.length>3&&void 0!==u[3]?u[3]:"",a=u.length>4&&void 0!==u[4]?u[4]:"",e.next=4,fetch(this.getAjaxUrl("export_orders"),{headers:{"Content-Type":"application/json;charset=UTF-8"},method:"POST",body:JSON.stringify({step:t,sales_channel:s,number_of_days:n,include_product_data:r,filename_suffix:a})}).catch((function(){throw new TypeError("Error while exporting orders.")})).then((function(e){return e.json()})).then((function(e){if("done"===e.step)return e.url;if(e.hasOwnProperty("step")&&e.step>t)return i.exportOrders(e.step,e.number_of_days,e.include_product_data,e.sales_channel,e.filename_suffix);throw new TypeError("Error while exporting orders.")})).catch((function(){throw new TypeError("Error while exporting orders.")}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e,this)}))),function(e,t,n){return b.apply(this,arguments)})},{key:"getAjaxUrl",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=e+"_nonce"in this.params?this.params[e+"_nonce"]:t;return e="ts_easy_integration_"+e,this.params.ajax_url+"?action="+e+"&security="+n}},{key:"getSettings",value:(v=s(regeneratorRuntime.mark((function e(){var n,r=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.settings){e.next=7;break}return e.next=3,fetch(this.getAjaxUrl("get_settings"),{headers:{"Content-Type":"application/json;charset=UTF-8"},method:"POST",body:JSON.stringify({})}).catch((function(){throw new TypeError("Error message")}));case 3:return n=e.sent,e.next=6,n.json().then((function(e){r.settings=e.settings;var s=n.headers.get("Client-Id"),a=n.headers.get("Client-Secret");return r.settings.client_id=null!==s?atob(s):"",r.settings.client_secret=null!==a?atob(a):"",r.settings.trustbadges=t({},r.settings.trustbadges),r.settings.widgets=t({},r.settings.widgets),r.settings.used_order_statuses=t({},r.settings.used_order_statuses),r.settings})).catch((function(){throw new TypeError("Error message")}));case 6:return e.abrupt("return",e.sent);case 7:if(this.settings){e.next=9;break}throw new TypeError("Error message");case 9:return e.abrupt("return",this.settings);case 10:case"end":return e.stop()}}),e,this)}))),function(){return v.apply(this,arguments)})},{key:"updateSettingsData",value:function(e){var t=this.settings?this.settings.client_id:"",n=this.settings?this.settings.client_secret:"",r=e;return r.client_id=t,r.client_secret=n,r}},{key:"disconnect",value:(E=s(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(this.getAjaxUrl("disconnect"),{headers:{"Content-Type":"application/json;charset=UTF-8"},method:"POST",body:JSON.stringify({})}).then((function(e){return e.json()})).then((function(e){if(!e.success)throw new TypeError(e.message);return!0})).catch((function(){throw new TypeError("Error while updating settings.")}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(){return E.apply(this,arguments)})},{key:"updateSettings",value:(g=s(regeneratorRuntime.mark((function e(n){var r,s,a,i=this,u=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=u.length>1&&void 0!==u[1]&&u[1],(s=t({},n)).trustbadges=t({},n.trustbadges),s.widgets=t({},n.widgets),s.used_order_statuses=t({},n.used_order_statuses),a={"Content-Type":"application/json;charset=UTF-8"},r||(delete s.client_secret,delete s.client_id),e.next=9,fetch(this.getAjaxUrl("update_settings"),{headers:a,method:"POST",body:JSON.stringify(t({},s))}).then((function(e){return e.json()})).then((function(e){if(!e.success)throw new TypeError(e.message);if(i.settings=i.updateSettingsData(e.settings),!i.settings)throw new TypeError("Error while updating settings.");return i.settings})).catch((function(){throw new TypeError("Error while updating settings.")}));case 9:return e.abrupt("return",e.sent);case 10:case"end":return e.stop()}}),e,this)}))),function(e){return g.apply(this,arguments)})},{key:"getCredentials",value:(f=s(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={clientId:"",clientSecret:""},e.prev=1,e.next=4,this.getSettings().then((function(e){return{clientId:e.client_id,clientSecret:e.client_secret}}));case 4:return e.abrupt("return",e.sent);case 7:return e.prev=7,e.t0=e.catch(1),e.abrupt("return",t);case 10:case"end":return e.stop()}}),e,this,[[1,7]])}))),function(){return f.apply(this,arguments)})},{key:"getChannels",value:(d=s(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.getSettings().then((function(e){return e.channels}));case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",[]);case 9:case"end":return e.stop()}}),e,this,[[0,6]])}))),function(){return d.apply(this,arguments)})},{key:"getChannelBySalesRef",value:(p=s(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.getSettings().then((function(e){return e.channels.filter((function(e){return e.salesChannelRef===t}))[0]}));case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",null);case 9:case"end":return e.stop()}}),e,this,[[0,6]])}))),function(e){return p.apply(this,arguments)})},{key:"getChannelById",value:(l=s(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.getSettings().then((function(e){return e.channels.filter((function(e){return e.salesChannelRef===t&&e.eTrustedChannelRef===n}))[0]}));case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",null);case 9:case"end":return e.stop()}}),e,this,[[0,6]])}))),function(e,t){return l.apply(this,arguments)})},{key:"getTrustbadge",value:(h=s(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.getSettings().then((function(e){return e.trustbadges.hasOwnProperty(t)?e.trustbadges[t]:null}));case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",null);case 9:case"end":return e.stop()}}),e,this,[[0,6]])}))),function(e){return h.apply(this,arguments)})},{key:"getWidgets",value:(c=s(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.getSettings().then((function(e){return e.widgets.hasOwnProperty(t)?e.widgets[t]:null}));case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",null);case 9:case"end":return e.stop()}}),e,this,[[0,6]])}))),function(e){return c.apply(this,arguments)})},{key:"getUsedOrderStatuses",value:(o=s(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.getSettings().then((function(e){return e.used_order_statuses.hasOwnProperty(t)?e.used_order_statuses[t]:null}));case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",null);case 9:case"end":return e.stop()}}),e,this,[[0,6]])}))),function(e){return o.apply(this,arguments)})}],u=[{key:"Instance",get:function(){return this._instance||(this._instance=new this)}}],i&&a(r.prototype,i),u&&a(r,u),Object.defineProperty(r,"prototype",{writable:!1}),e})().Instance})()})();