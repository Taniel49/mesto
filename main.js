(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var t=function(){function t(e,n,o,r,i,u){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._userIDSelector=o,this._handleLikeCard=i,this._handleDeleteCard=u,this._owner=e.owner._id,this.id=e._id,this._name=e.name,this._link=e.link,this._likes=e.likes,this._templateSelector=n,this._handleCardClick=r,this._element=this._getTemplate(),this._cardImage=this._element.querySelector(".element__picture"),this._likeButton=this._element.querySelector(".element__like-button"),this._likeCounter=this._element.querySelector(".element__like-number")}var n,o;return n=t,(o=[{key:"_getTemplate",value:function(){return this._templateSelector.content.querySelector(".element").cloneNode(!0)}},{key:"generateCard",value:function(){return this._setEventListeners(),this._element.querySelector(".element__name").textContent=this._name,this._cardImage.src=this._link,this._cardImage.alt=this._name,this.setLikes(this._likes),this._owner===this._userIDSelector&&(this._element.querySelector(".element__delete-button").style.display="block"),this._element}},{key:"setLikes",value:function(e){this._likes=e,this._likeCounter.textContent=this._likes.length,this.isLiked()?this._likeButton.classList.add("element__like-button_liked"):this._likeButton.classList.remove("element__like-button_liked")}},{key:"isLiked",value:function(){for(var e=0;e<this._likes.length;e++)if(this._likes[e]._id===this._userIDSelector)return!0;return!1}},{key:"removeLike",value:function(){this._likeButton.classList.remove("element__like-button_liked"),this._likeCounter.textContent=this._likes.length}},{key:"addLike",value:function(){this._likeButton.classList.add("element__like-button_liked"),this._likeCounter.textContent=this._likes.length}},{key:"deleteElement",value:function(){this._element.remove()}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".element__open-picture-button").addEventListener("click",(function(){e._handleCardClick()})),this._element.querySelector(".element__delete-button").addEventListener("click",(function(){e._handleDeleteCard(e)})),this._likeButton.addEventListener("click",(function(){e._handleLikeCard()}))}}])&&e(n.prototype,o),t}();function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var o=function(){function e(t,n){var o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=o,this._container=document.querySelector(n)}var t,o;return t=e,(o=[{key:"addItem",value:function(e){this._container.prepend(this._renderer(e))}}])&&n(t.prototype,o),e}();function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var i=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._settings=t,this._form=n,this._inputList=Array.from(this._form.querySelectorAll(this._settings.inputSelector)),this._buttonElement=this._form.querySelector(this._settings.submitButtonSelector)}var t,n;return t=e,(n=[{key:"enableValidation",value:function(){this._form.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}},{key:"_showInputError",value:function(e,t){var n=this._form.querySelector(".".concat(e.id,"-error"));e.classList.add(this._settings.inputErrorClass),n.textContent=t,n.classList.add(this._settings.errorClass)}},{key:"_hideInputError",value:function(e){var t=this._form.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._settings.inputErrorClass),t.classList.remove(this._settings.errorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._toggleButtonState(),e._checkInputValidity(t)}))}))}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._settings.inactiveButtonClass),this._buttonElement.setAttribute("disabled","disabled")):(this._buttonElement.classList.remove(this._settings.inactiveButtonClass),this._buttonElement.removeAttribute("disabled"))}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}}])&&r(t.prototype,n),e}(),u=document.querySelector(".profile__edit-button"),c=document.querySelector(".profile__add-button"),a=document.querySelector(".popup__inputs_type_name"),s=document.querySelector(".popup__inputs_type_about"),l=document.querySelector(".popup__inputs_type_place"),p=document.querySelector(".popup__inputs_type_picture"),f=document.querySelector(".popup__inputs_type_avatar"),h=document.querySelector("form[name=profile-info]"),_=document.querySelector("form[name=element-content]"),y=document.querySelector(".element-template"),d={inputSelector:".popup__inputs",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__inactive-submit-button",inputErrorClass:"popup__inputs_type_error",errorClass:"popup__inputs-error_active"};function m(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var v=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupElement=document.querySelector("#".concat(t)),this._closeButton=this._popupElement.querySelector(".popup__close-button"),this._closePopupByEsc=this._closePopupByEsc.bind(this)}var t,n;return t=e,(n=[{key:"openPopup",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keydown",this._closePopupByEsc)}},{key:"closePopup",value:function(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keydown",this._closePopupByEsc)}},{key:"_closePopupByEsc",value:function(e){"Escape"===e.key&&this.closePopup()}},{key:"setEventListeners",value:function(){var e=this;this._popupElement.addEventListener("click",(function(t){t.target.classList.contains("popup")&&e.closePopup()})),this._closeButton.addEventListener("click",(function(){e.closePopup()}))}}])&&m(t.prototype,n),e}();function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function k(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function g(e,t,n){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}},g(e,t,n||e)}function E(e,t){return E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},E(e,t)}function S(e,t){if(t&&("object"===b(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(u,e);var t,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(o);if(r){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return S(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupCardImage=t._popupElement.querySelector(".popup__picture"),t._captionImage=t._popupElement.querySelector(".popup__caption"),t}return t=u,(n=[{key:"openPopup",value:function(e,t){this._popupCardImage.src=t,this._popupCardImage.alt=e,this._captionImage.textContent=e,g(w(u.prototype),"openPopup",this).call(this)}}])&&k(t.prototype,n),u}(v);function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function P(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function O(e,t,n){return O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=R(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}},O(e,t,n||e)}function j(e,t){return j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},j(e,t)}function q(e,t){if(t&&("object"===C(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function R(e){return R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},R(e)}var I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(u,e);var t,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=R(o);if(r){var n=R(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return q(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._formSubmit=t,n._allInputs=n._popupElement.querySelectorAll(".popup__inputs"),n._form=n._popupElement.querySelector(".form"),n}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._allInputs.forEach((function(t){return e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;this._popupElement.addEventListener("submit",(function(t){t.preventDefault(),e._formSubmit(e._getInputValues())})),O(R(u.prototype),"setEventListeners",this).call(this)}},{key:"closePopup",value:function(){this._form.reset(),O(R(u.prototype),"closePopup",this).call(this)}}])&&P(t.prototype,n),u}(v);function B(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var T=function(){function e(t,n,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userAvatarElement=document.querySelector(".".concat(o)),this._userNameElement=document.querySelector(".".concat(t)),this._userDescriptionElement=document.querySelector(".".concat(n))}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{userName:this._userNameElement.textContent,userDescription:this._userDescriptionElement.textContent,userAvatar:this._userAvatarElement.src}}},{key:"setUserInfo",value:function(e,t,n){this._userNameElement.textContent=e,this._userDescriptionElement.textContent=t,this._userAvatarElement.src=n}}])&&B(t.prototype,n),e}();function x(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var D=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._URL=t,this._authorization=n}var t,n;return t=e,(n=[{key:"_checkResult",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getProfile",value:function(){return fetch("".concat(this._URL,"/users/me"),{headers:{authorization:this._authorization}}).then(this._checkResult)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._URL,"/cards"),{headers:{authorization:this._authorization}}).then(this._checkResult)}},{key:"postCard",value:function(e){return fetch("".concat(this._URL,"/cards"),{method:"POST",headers:{authorization:this._authorization,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,link:e.link})}).then(this._checkResult)}},{key:"patchProfile",value:function(e,t){return fetch("".concat(this._URL,"/users/me"),{method:"PATCH",headers:{authorization:this._authorization,"Content-Type":"application/json"},body:JSON.stringify({name:e,about:t})})}},{key:"patchAvatar",value:function(e){return fetch("".concat(this._URL,"/users/avatar"),{method:"PATCH",headers:{authorization:this._authorization,"Content-Type":"application/json"},body:JSON.stringify({avatar:e})})}},{key:"putlike",value:function(e){return fetch("".concat(this._URL,"/cards/").concat(e,"/likes"),{method:"PUT",headers:{authorization:this._authorization}}).then(this._checkResult)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._URL,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:{authorization:this._authorization}}).then(this._checkResult)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._URL,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._authorization}})}}])&&x(t.prototype,n),e}();function z(e){return z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},z(e)}function U(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function A(e,t,n){return A="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=J(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}},A(e,t,n||e)}function V(e,t){return V=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},V(e,t)}function N(e,t){if(t&&("object"===z(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function J(e){return J=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},J(e)}var H=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&V(e,t)}(u,e);var t,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=J(o);if(r){var n=J(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return N(this,e)});function u(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),i.call(this,e)}return t=u,(n=[{key:"setEventListeners",value:function(e){this._popupElement.addEventListener("submit",(function(t){t.preventDefault(),e()})),A(J(u.prototype),"setEventListeners",this).call(this)}}])&&U(t.prototype,n),u}(v),M=new D("https://mesto.nomoreparties.co/v1/cohort-28","b031c7a0-313e-4731-b83c-33069b14829c"),F=new T("profile__name","profile__about","profile__avatar"),G=new o({renderer:function(e){var n=new t(e,y,K,(function(){Z.openPopup(e.name,e.link)}),(function(){!function(e){e.isLiked()?M.deleteLike(e.id).then((function(t){e.setLikes(t.likes)})).catch((function(e){console.log(e)})):M.putlike(e.id).then((function(t){e.setLikes(t.likes)})).catch((function(e){console.log(e)}))}(n)}),(function(e){Q.openPopup(),Q.setEventListeners((function(){!function(e){document.querySelector(".popup__delete-button").textContent="Удаление...",M.deleteCard(e.id).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(t){console.log(t),e.deleteElement()})).catch((function(e){console.log(e)})).finally((function(){document.querySelector(".popup__delete-button").textContent="Да",Q.closePopup()}))}(e)}))}));return n.generateCard()}},".page__elements"),K="";Promise.all([M.getProfile(),M.getInitialCards()]).then((function(e){var t=e[0],n=e[1];K=t._id,F.setUserInfo(t.name,t.about,t.avatar),n.forEach((function(e){G.addItem(e)}))})).catch((function(e){console.log(e)}));var Q=new H("popup_delete"),W=new I("popup_elements",(function(){var e={name:l.value,link:p.value,likes:[]};document.querySelector(".popup__create-button").textContent="Сохранение...",M.postCard(e).then((function(e){G.addItem(e)})).catch((function(e){console.log(e)})).finally((function(){document.querySelector(".popup__create-button").textContent="Создать",W.closePopup()})),document.querySelector(".element__delete-button").style.display="block"}));W.setEventListeners(),c.addEventListener("click",(function(){W.openPopup(),ee.resetValidation()}));var X=new I("popup_profile",(function(){document.querySelector(".popup__save-button").textContent="Сохранение...",M.patchProfile(a.value,s.value).then((function(){F.setUserInfo(a.value,s.value)})).catch((function(e){console.log(e)})).finally((function(){document.querySelector(".popup__save-button").textContent="Сохранить",X.closePopup()}))}));X.setEventListeners(),u.addEventListener("click",(function(){var e=F.getUserInfo(),t=e.userName,n=e.userDescription;a.value=t,s.value=n,X.openPopup(),$.resetValidation()}));var Y=new I("popup_avatar",(function(){var e=F.getUserInfo().userAvatar;f.value=e,document.querySelector(".popup__create-button").textContent="Сохранение...",M.patchAvatar(document.querySelector(".popup__inputs_type_avatar").value).catch((function(e){console.log(e)})).finally((function(){document.querySelector(".popup__create-button").textContent="Сохраннить",Y.closePopup()}))}));Y.setEventListeners(),document.querySelector(".profile__avatar-container").addEventListener("click",(function(){Y.openPopup(),$.resetValidation()}));var Z=new L("popup_picture");Z.setEventListeners();var $=new i(d,h),ee=new i(d,_);$.enableValidation(),ee.enableValidation()})();