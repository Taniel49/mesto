(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var t=function(){function t(e,n,o,r,i,u){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._userID=o,this._handleLikeCard=i,this._handleDeleteCard=u,this._owner=e.owner._id,this.id=e._id,this._name=e.name,this._link=e.link,this._likes=e.likes,this._templateSelector=n,this._handleCardClick=r,this._element=this._getTemplate(),this._cardImage=this._element.querySelector(".element__picture"),this._likeButton=this._element.querySelector(".element__like-button"),this._likeCounter=this._element.querySelector(".element__like-number")}var n,o;return n=t,(o=[{key:"_getTemplate",value:function(){return this._templateSelector.content.querySelector(".element").cloneNode(!0)}},{key:"generateCard",value:function(){return this._setEventListeners(),this._element.querySelector(".element__name").textContent=this._name,this._cardImage.src=this._link,this._cardImage.alt=this._name,this.setLikes(this._likes),this._owner===this._userID&&(this._element.querySelector(".element__delete-button").style.display="block"),this._element}},{key:"setLikes",value:function(e){this._likes=e,this._likeCounter.textContent=this._likes.length,this.isLiked()?this._likeButton.classList.add("element__like-button_liked"):this._likeButton.classList.remove("element__like-button_liked")}},{key:"isLiked",value:function(){for(var e=0;e<this._likes.length;e++)if(this._likes[e]._id===this._userID)return!0;return!1}},{key:"deleteElement",value:function(){this._element.remove()}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".element__open-picture-button").addEventListener("click",(function(){e._handleCardClick()})),this._element.querySelector(".element__delete-button").addEventListener("click",(function(){e._handleDeleteCard(e)})),this._likeButton.addEventListener("click",(function(){e._handleLikeCard()}))}}])&&e(n.prototype,o),t}();function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var o=function(){function e(t,n){var o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=o,this._container=document.querySelector(n)}var t,o;return t=e,(o=[{key:"addItem",value:function(e){this._container.prepend(this._renderer(e))}}])&&n(t.prototype,o),e}();function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var i=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._settings=t,this._form=n,this._inputList=Array.from(this._form.querySelectorAll(this._settings.inputSelector)),this._buttonElement=this._form.querySelector(this._settings.submitButtonSelector)}var t,n;return t=e,(n=[{key:"enableValidation",value:function(){this._form.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}},{key:"_showInputError",value:function(e,t){var n=this._form.querySelector(".".concat(e.id,"-error"));e.classList.add(this._settings.inputErrorClass),n.textContent=t,n.classList.add(this._settings.errorClass)}},{key:"_hideInputError",value:function(e){var t=this._form.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._settings.inputErrorClass),t.classList.remove(this._settings.errorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._toggleButtonState(),e._checkInputValidity(t)}))}))}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._settings.inactiveButtonClass),this._buttonElement.setAttribute("disabled","disabled")):(this._buttonElement.classList.remove(this._settings.inactiveButtonClass),this._buttonElement.removeAttribute("disabled"))}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}}])&&r(t.prototype,n),e}(),u=document.querySelector(".profile__edit-button"),c=document.querySelector(".profile__add-button"),a=document.querySelector(".popup__inputs_type_name"),s=document.querySelector(".popup__inputs_type_about"),l=document.querySelector("form[name=profile-info]"),p=document.querySelector("form[name=element-content]"),f=document.querySelector(".element-template"),h={inputSelector:".popup__inputs",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__inactive-submit-button",inputErrorClass:"popup__inputs_type_error",errorClass:"popup__inputs-error_active"};function _(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var y=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupElement=document.querySelector("#".concat(t)),this._closeButton=this._popupElement.querySelector(".popup__close-button"),this._closePopupByEsc=this._closePopupByEsc.bind(this)}var t,n;return t=e,(n=[{key:"openPopup",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keydown",this._closePopupByEsc)}},{key:"closePopup",value:function(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keydown",this._closePopupByEsc)}},{key:"_closePopupByEsc",value:function(e){"Escape"===e.key&&this.closePopup()}},{key:"setEventListeners",value:function(){var e=this;this._popupElement.addEventListener("click",(function(t){t.target.classList.contains("popup")&&e.closePopup()})),this._closeButton.addEventListener("click",(function(){e.closePopup()}))}}])&&_(t.prototype,n),e}();function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function m(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function v(e,t,n){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=E(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}},v(e,t,n||e)}function b(e,t){return b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},b(e,t)}function k(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(u,e);var t,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(o);if(r){var n=E(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return k(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupCardImage=t._popupElement.querySelector(".popup__picture"),t._captionImage=t._popupElement.querySelector(".popup__caption"),t}return t=u,(n=[{key:"openPopup",value:function(e,t){this._popupCardImage.src=t,this._popupCardImage.alt=e,this._captionImage.textContent=e,v(E(u.prototype),"openPopup",this).call(this)}}])&&m(t.prototype,n),u}(y);function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function w(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function L(e,t,n){return L="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=O(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}},L(e,t,n||e)}function P(e,t){return P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},P(e,t)}function C(e,t){if(t&&("object"===S(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}var R=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(u,e);var t,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=O(o);if(r){var n=O(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return C(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._formSubmit=t,n._allInputs=n._popupElement.querySelectorAll(".popup__inputs"),n._form=n._popupElement.querySelector(".form"),n}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._allInputs.forEach((function(t){return e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;this._popupElement.addEventListener("submit",(function(t){t.preventDefault(),e._formSubmit(e._getInputValues())})),L(O(u.prototype),"setEventListeners",this).call(this)}},{key:"closePopup",value:function(){this._form.reset(),L(O(u.prototype),"closePopup",this).call(this)}}])&&w(t.prototype,n),u}(y);function j(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var q=function(){function e(t,n,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userAvatarElement=document.querySelector(".".concat(o)),this._userNameElement=document.querySelector(".".concat(t)),this._userDescriptionElement=document.querySelector(".".concat(n))}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{userName:this._userNameElement.textContent,userDescription:this._userDescriptionElement.textContent,userAvatar:this._userAvatarElement.src}}},{key:"setUserInfo",value:function(e,t){this._userNameElement.textContent=e,this._userDescriptionElement.textContent=t}},{key:"setUserAvatar",value:function(e){this._userAvatarElement.src=e}}])&&j(t.prototype,n),e}();function I(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var B=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._URL=t,this._authorization=n}var t,n;return t=e,(n=[{key:"_checkResult",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getProfile",value:function(){return fetch("".concat(this._URL,"/users/me"),{headers:{authorization:this._authorization}}).then(this._checkResult)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._URL,"/cards"),{headers:{authorization:this._authorization}}).then(this._checkResult)}},{key:"postCard",value:function(e){return fetch("".concat(this._URL,"/cards"),{method:"POST",headers:{authorization:this._authorization,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,link:e.link})}).then(this._checkResult)}},{key:"patchProfile",value:function(e){return fetch("".concat(this._URL,"/users/me"),{method:"PATCH",headers:{authorization:this._authorization,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,about:e.about})}).then(this._checkResult)}},{key:"patchAvatar",value:function(e){return fetch("".concat(this._URL,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._authorization,"Content-Type":"application/json"},body:JSON.stringify({avatar:e.avatar})}).then(this._checkResult)}},{key:"putlike",value:function(e){return fetch("".concat(this._URL,"/cards/").concat(e,"/likes"),{method:"PUT",headers:{authorization:this._authorization}}).then(this._checkResult)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._URL,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:{authorization:this._authorization}}).then(this._checkResult)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._URL,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._authorization}}).then(this._checkResult)}}])&&I(t.prototype,n),e}();function T(e){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(e)}function x(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function D(e,t,n){return D="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=z(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}},D(e,t,n||e)}function A(e,t){return A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},A(e,t)}function U(e,t){if(t&&("object"===T(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function z(e){return z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},z(e)}var V=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&A(e,t)}(u,e);var t,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=z(o);if(r){var n=z(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return U(this,e)});function u(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),i.call(this,e)}return t=u,(n=[{key:"setSubmitAction",value:function(e){this._submitAction=e}},{key:"setEventListeners",value:function(){var e=this;this._popupElement.addEventListener("submit",(function(t){t.preventDefault(),e._submitAction()})),D(z(u.prototype),"setEventListeners",this).call(this)}}])&&x(t.prototype,n),u}(y),N=new B("https://mesto.nomoreparties.co/v1/cohort-28","b031c7a0-313e-4731-b83c-33069b14829c"),J=new q("profile__name","profile__about","profile__avatar"),H=new o({renderer:function(e){var n=new t(e,f,M,(function(){W.openPopup(e.name,e.link)}),(function(){!function(e){e.isLiked()?N.deleteLike(e.id).then((function(t){e.setLikes(t.likes)})).catch((function(e){console.log(e)})):N.putlike(e.id).then((function(t){e.setLikes(t.likes)})).catch((function(e){console.log(e)}))}(n)}),(function(e){F.openPopup(),F.setSubmitAction((function(){!function(e){document.querySelector(".popup__delete-button").textContent="Удаление...",N.deleteCard(e.id).then((function(t){console.log(t),F.closePopup(),e.deleteElement()})).catch((function(e){console.log(e)})).finally((function(){document.querySelector(".popup__delete-button").textContent="Да"}))}(e)})),F.setEventListeners()}));return n.generateCard()}},".page__elements"),M="";Promise.all([N.getProfile(),N.getInitialCards()]).then((function(e){var t=e[0],n=e[1];M=t._id,J.setUserInfo(t.name,t.about),J.setUserAvatar(t.avatar),n.forEach((function(e){H.addItem(e)}))})).catch((function(e){console.log(e)}));var F=new V("popup_delete"),G=new R("popup_elements",(function(e){document.querySelector(".popup__create-button").textContent="Сохранение...",N.postCard(e).then((function(e){H.addItem(e),G.closePopup()})).catch((function(e){console.log(e)})).finally((function(){document.querySelector(".popup__create-button").textContent="Создать"}))}));G.setEventListeners(),c.addEventListener("click",(function(){G.openPopup(),Y.resetValidation()}));var K=new R("popup_profile",(function(e){document.querySelector(".popup__save-button").textContent="Сохранение...",N.patchProfile(e).then((function(e){J.setUserInfo(e.name,e.about),K.closePopup()})).catch((function(e){console.log(e)})).finally((function(){document.querySelector(".popup__save-button").textContent="Сохранить"}))}));K.setEventListeners(),u.addEventListener("click",(function(){var e=J.getUserInfo(),t=e.userName,n=e.userDescription;a.value=t,s.value=n,K.openPopup(),X.resetValidation()}));var Q=new R("popup_avatar",(function(e){document.querySelector(".popup__create-button").textContent="Сохранение...",N.patchAvatar(e).then((function(e){J.setUserAvatar(e.avatar),Q.closePopup()})).catch((function(e){console.log(e)})).finally((function(){document.querySelector(".popup__create-button").textContent="Сохраннить"}))}));Q.setEventListeners(),document.querySelector(".profile__avatar-container").addEventListener("click",(function(){Q.openPopup(),X.resetValidation()}));var W=new g("popup_picture");W.setEventListeners();var X=new i(h,l),Y=new i(h,p);X.enableValidation(),Y.enableValidation()})();