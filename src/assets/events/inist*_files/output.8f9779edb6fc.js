var BROWSER_NOTIFICATIONS_SCRIPT_URL="/static/js/browser_notifications_sw.js";function isBrowserNotificationSupported(){return isWebPushBrowserNotificationSupported();}
function isWebPushBrowserNotificationSupported(){return"serviceWorker"in navigator&&"PushManager"in window;}
function isBrowserNotificationDenied(){if(isWebPushBrowserNotificationSupported()){return isWebPushBrowserNotificationDenied();}
return true;}
function isWebPushBrowserNotificationDenied(){return Notification.permission==="denied";}
function isSubscribedToBrowserNotifications(runIfTrue,funcToRun){if(isWebPushBrowserNotificationSupported()){return isSubscribedToWebPushBrowserNotifications(runIfTrue,funcToRun);}
return false;}
function isSubscribedToWebPushBrowserNotifications(runIfTrue,funcToRun){return navigator.serviceWorker.register(BROWSER_NOTIFICATIONS_SCRIPT_URL).then(function(registration){registration.pushManager.getSubscription().then(function(subscription){if(subscription!==null){if(runIfTrue){funcToRun();}}else if(!runIfTrue){funcToRun();}});});}
function subscribeUserToPush(userData){if(isWebPushBrowserNotificationSupported()){return subscribeUserToWebPush();}
return new Promise(function(resolve,reject){return reject();});}
function urlBase64ToUint8Array(base64String){var padding="=".repeat((4-(base64String.length%4))%4);var base64=(base64String+padding).replace(/-/g,"+").replace(/_/g,"/");var rawData=window.atob(base64);var outputArray=new Uint8Array(rawData.length);for(var i=0;i<rawData.length;++i){outputArray[i]=rawData.charCodeAt(i);}
return outputArray;}
function subscribeUserToWebPush(){return navigator.serviceWorker.register(BROWSER_NOTIFICATIONS_SCRIPT_URL).then(function(registration){var serviceWorker;if(registration.installing){serviceWorker=registration.installing;}else if(registration.waiting){serviceWorker=registration.waiting;}else if(registration.active){serviceWorker=registration.active;}
if(serviceWorker!==undefined){if(serviceWorker.state==="activated"){return _subscribeUserToWebPush(registration);}
serviceWorker.addEventListener("statechange",function(e){if(e.target.state==="activated"){return _subscribeUserToWebPush(registration);}});}});}
function _subscribeUserToWebPush(registration){var subscribeOptions={userVisibleOnly:true,applicationServerKey:urlBase64ToUint8Array("BBkRUn9Nu1Y9KwvKxeaO053jewlJ6m0JuUNSv9gfElqOga9NvLuMTq2QkAbtnPBMfodxCtY36UIilSyHL04AXKA",),};return registration.pushManager.subscribe(subscribeOptions).then(function(pushSubscription){return postSubscription(pushSubscription);});}
function unsubscribeUserFromPush(){if(isWebPushBrowserNotificationSupported()){return unsubscribeUserFromWebPush();}}
function unsubscribeUserFromWebPush(){return navigator.serviceWorker.register(BROWSER_NOTIFICATIONS_SCRIPT_URL).then(function(registration){return registration.pushManager.getSubscription();}).then(function(subscription){if(subscription!==null){subscription.unsubscribe().then(function(){return postSubscription(subscription,true);});}});}
function postSubscription(subscription,unsub){return new Promise(function(resolve,reject){var data={subscription:JSON.stringify(subscription),unsub:unsub===true,};var xhr=new XMLHttpRequest();xhr.open("POST",browser_notifications.webpushUpdateURL,true);xhr.setRequestHeader("content-type","application/x-www-form-urlencoded",);xhr.setRequestHeader("X-Requested-With","XMLHttpRequest");xhr.setRequestHeader("X-CSRFToken",browser_notifications.csrfToken);xhr.onreadystatechange=function(){if(xhr.readyState===4){if(xhr.status!==200){unsubscribeUserFromPush();reject(xhr);}else{resolve(xhr);}}};xhr.send(buildQueryString(data));});}
function buildQueryString(argMap){var result="";for(var key in argMap){if(result!==""){result+="&";}
var value=argMap[key];if(value===undefined){value="";}
result+=encodeURIComponent(key)+"="+encodeURIComponent(value);}
return result;};