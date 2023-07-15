"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[927],{1927:function(t,e,n){n.r(e),n.d(e,{default:function(){return g}});var a=n(2791),r=n(9434),s=n(3634),c=function(t){return t.contacts.contacts},o=function(t){return t.filter},i=function(t){return t.contacts.isLoading},l=n(4270),u={form:"ContactForm_form__dhl+T",container:"ContactForm_container__qpJ1N",formImput:"ContactForm_formImput__DpgxD",formBtn:"ContactForm_formBtn__qZGY3"},m=function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,e="",n=crypto.getRandomValues(new Uint8Array(t));t--;){var a=63&n[t];e+=a<36?a.toString(36):a<62?(a-26).toString(36).toUpperCase():a<63?"_":"-"}return e},d=n(184),f=function(){var t=(0,r.v9)(c),e=(0,r.I0)();return(0,d.jsxs)("form",{className:u.form,onSubmit:function(n){n.preventDefault();var a=!1,r=n.target,c=n.target.number.value,o=n.target.name.value,i=o.toLowerCase(),l={id:m(),name:o,number:c};t.forEach((function(t){var e=t.name;e.toLowerCase()===i&&(alert("".concat(e," is currently in contacts")),a=!0,r.reset())})),a||(e((0,s.ky)(l)),r.reset())},children:[(0,d.jsx)("h1",{children:"Phonebook"}),(0,d.jsxs)("div",{className:u.container,children:[(0,d.jsx)("label",{className:u.formLabel,children:"Name"}),(0,d.jsx)("input",{type:"text",name:"name",className:u.formImput,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,d.jsx)("label",{className:u.formLabel,children:"Number"}),(0,d.jsx)("input",{type:"tel",name:"number",className:u.formImput,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,d.jsx)("button",{className:u.formBtn,type:"submit",children:"Add contact"})]})]})},h=n(4808),_={filter:"Filter_filter__vxThR"},p=function(){var t=(0,r.I0)();return(0,d.jsxs)("div",{className:_.filter,children:[(0,d.jsx)("h2",{children:"Contacts"}),(0,d.jsx)("div",{className:_.contactsLabel,children:"Find contacts by name"}),(0,d.jsx)("input",{type:"text",name:"filter",className:_.filterInput,onChange:function(e){var n=e.target.value.toLowerCase();t((0,h.T)(n))}})]})},x="ContactList_contacts__jDmyV",v="ContactList_contactsSingle__JK5oU",j="ContactList_contactsList__7leRd",b="ContactList_contactsInfo__pWN4e",C="ContactList_contactsBtn__yx6OU",N=function(){var t=(0,r.v9)(c),e=(0,r.v9)(o),n=(0,r.I0)(),a=t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}));return(0,d.jsx)("div",{className:x,children:(0,d.jsx)("ul",{className:j,children:a.map((function(t){var e=t.id,a=t.name,r=t.number;return(0,d.jsxs)("li",{className:v,children:[(0,d.jsx)("p",{className:b,children:a}),(0,d.jsxs)("p",{className:b,children:[" ",r]}),(0,d.jsx)("button",{onClick:function(){!function(t){n((0,s.GK)(t))}(e)},className:C,children:"Delete"})]},e)}))})})},g=function(){var t=(0,r.I0)(),e=(0,r.v9)(i);return(0,a.useEffect)((function(){t((0,s.yF)())}),[t]),(0,d.jsxs)("div",{children:[(0,d.jsx)(l.q,{children:(0,d.jsx)("h1",{children:"Phonebook"})}),(0,d.jsx)(f,{}),(0,d.jsx)("div",{children:e&&"Request in progress..."}),e?null:(0,d.jsx)(p,{}),(0,d.jsx)(N,{})]})}}}]);
//# sourceMappingURL=927.e3648533.chunk.js.map