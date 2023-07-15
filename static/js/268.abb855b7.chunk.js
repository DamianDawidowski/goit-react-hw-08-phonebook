"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[268],{6268:function(e,n,i){i.r(n),i.d(n,{default:function(){return g}});var r=i(8206),a=i(4087),l=i(5946),s=i(1087),t=i(4270),o=i(4942),d=i(1413),u=i(9439),c=i(2791),m=i(9434),v=i(9273),h=i(2392),p=i(8208),f=i(5442),x=i(6012),b=i(184),Z=function(){var e=(0,m.I0)(),n=(0,c.useState)({name:"",email:"",password:""}),i=(0,u.Z)(n,2),r=i[0],l=i[1],s=function(e){l((0,d.Z)((0,d.Z)({},r),{},(0,o.Z)({},e.target.name,e.target.value)))};return(0,b.jsxs)(a.xu,{as:"form",onSubmit:function(n){n.preventDefault(),e((0,v.z2)(r)),l({name:"",email:"",password:""})},py:"4",mx:"auto",children:[(0,b.jsxs)(h.NI,{id:"name",isRequired:!0,children:[(0,b.jsx)(p.l,{focus:{color:"blue.600"},children:"Username"}),(0,b.jsx)(f.I,{placeholder:"* Enter your username",width:"100%",type:"text",name:"name",value:r.name,onChange:s})]}),(0,b.jsxs)(h.NI,{mt:"10px",id:"email",isRequired:!0,children:[(0,b.jsx)(p.l,{focus:{color:"blue.600"},children:"Email"}),(0,b.jsx)(f.I,{placeholder:"* Enter your email adress",width:"100%",type:"email",name:"email",value:r.email,onChange:s})]}),(0,b.jsxs)(h.NI,{mt:"10px",id:"password",isRequired:!0,children:[(0,b.jsx)(p.l,{focus:{color:"blue.600"},children:"Password"}),(0,b.jsx)(f.I,{placeholder:"* Enter your password",width:"100%",type:"password",name:"password",value:r.password,onChange:s})]}),(0,b.jsx)(x.z,{mt:"20px",colorScheme:"blue",variant:"solid",type:"submit",children:"Register"})]})};function g(){return(0,b.jsxs)(r.W,{maxW:"2xl",centerContent:!0,children:[(0,b.jsx)(t.q,{children:(0,b.jsx)("title",{children:"Registration"})}),(0,b.jsxs)(a.xu,{padding:"6",mt:"10",children:[(0,b.jsx)(l.X,{size:"xl",children:"Create your new Phonebook account"}),(0,b.jsx)(Z,{}),"Already have an account?"," ",(0,b.jsx)(s.Link,{to:"/login",style:{textDecoration:"underline"},children:"Sign in here."})]})]})}},2392:function(e,n,i){i.d(n,{NI:function(){return q},NJ:function(){return j},e:function(){return g}});var r=i(1413),a=i(5987),l=i(9439),s=i(9886),t=i(4591),o=i(7872),d=i(9219),u=i(2996),c=i(7797),m=i(6992),v=i(2791),h=i(184),p=["id","isRequired","isInvalid","isDisabled","isReadOnly"],f=["getRootProps","htmlProps"],x=(0,s.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),b=(0,l.Z)(x,2),Z=b[0],g=b[1],y=(0,s.k)({strict:!1,name:"FormControlContext"}),I=(0,l.Z)(y,2),N=I[0],j=I[1];var q=(0,o.G)((function(e,n){var i=(0,d.jC)("Form",e),s=function(e){var n=e.id,i=e.isRequired,s=e.isInvalid,o=e.isDisabled,d=e.isReadOnly,u=(0,a.Z)(e,p),c=(0,v.useId)(),h=n||"field-".concat(c),f="".concat(h,"-label"),x="".concat(h,"-feedback"),b="".concat(h,"-helptext"),Z=(0,v.useState)(!1),g=(0,l.Z)(Z,2),y=g[0],I=g[1],N=(0,v.useState)(!1),j=(0,l.Z)(N,2),q=j[0],R=j[1],k=(0,v.useState)(!1),_=(0,l.Z)(k,2),C=_[0],F=_[1],P=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)({id:b},e),{},{ref:(0,t.lq)(n,(function(e){e&&R(!0)}))})}),[b]),w=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)({},e),{},{ref:n,"data-focus":(0,m.PB)(C),"data-disabled":(0,m.PB)(o),"data-invalid":(0,m.PB)(s),"data-readonly":(0,m.PB)(d),id:void 0!==e.id?e.id:f,htmlFor:void 0!==e.htmlFor?e.htmlFor:h})}),[h,o,C,s,d,f]),D=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)({id:x},e),{},{ref:(0,t.lq)(n,(function(e){e&&I(!0)})),"aria-live":"polite"})}),[x]),O=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)((0,r.Z)({},e),u),{},{ref:n,role:"group"})}),[u]),S=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)({},e),{},{ref:n,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!i,isInvalid:!!s,isReadOnly:!!d,isDisabled:!!o,isFocused:!!C,onFocus:function(){return F(!0)},onBlur:function(){return F(!1)},hasFeedbackText:y,setHasFeedbackText:I,hasHelpText:q,setHasHelpText:R,id:h,labelId:f,feedbackId:x,helpTextId:b,htmlProps:u,getHelpTextProps:P,getErrorMessageProps:D,getRootProps:O,getLabelProps:w,getRequiredIndicatorProps:S}}((0,u.Lr)(e)),o=s.getRootProps,x=(s.htmlProps,(0,a.Z)(s,f)),b=(0,m.cx)("chakra-form-control",e.className);return(0,h.jsx)(N,{value:x,children:(0,h.jsx)(Z,{value:i,children:(0,h.jsx)(c.m.div,(0,r.Z)((0,r.Z)({},o({},n)),{},{className:b,__css:i.container}))})})}));q.displayName="FormControl",(0,o.G)((function(e,n){var i=j(),a=g(),l=(0,m.cx)("chakra-form__helper-text",e.className);return(0,h.jsx)(c.m.div,(0,r.Z)((0,r.Z)({},null==i?void 0:i.getHelpTextProps(e,n)),{},{__css:a.helperText,className:l}))})).displayName="FormHelperText"},8208:function(e,n,i){i.d(n,{l:function(){return v}});var r=i(1413),a=i(5987),l=i(2392),s=i(7872),t=i(9219),o=i(2996),d=i(7797),u=i(6992),c=i(184),m=["className","children","requiredIndicator","optionalIndicator"],v=(0,s.G)((function(e,n){var i,s=(0,t.mq)("FormLabel",e),v=(0,o.Lr)(e),p=(v.className,v.children),f=v.requiredIndicator,x=void 0===f?(0,c.jsx)(h,{}):f,b=v.optionalIndicator,Z=void 0===b?null:b,g=(0,a.Z)(v,m),y=(0,l.NJ)(),I=null!=(i=null==y?void 0:y.getLabelProps(g,n))?i:(0,r.Z)({ref:n},g);return(0,c.jsxs)(d.m.label,(0,r.Z)((0,r.Z)({},I),{},{className:(0,u.cx)("chakra-form__label",v.className),__css:(0,r.Z)({display:"block",textAlign:"start"},s),children:[p,(null==y?void 0:y.isRequired)?x:Z]}))}));v.displayName="FormLabel";var h=(0,s.G)((function(e,n){var i=(0,l.NJ)(),a=(0,l.e)();if(!(null==i?void 0:i.isRequired))return null;var s=(0,u.cx)("chakra-form__required-indicator",e.className);return(0,c.jsx)(d.m.span,(0,r.Z)((0,r.Z)({},null==i?void 0:i.getRequiredIndicatorProps(e,n)),{},{__css:a.requiredIndicator,className:s}))}));h.displayName="RequiredIndicator"},5442:function(e,n,i){i.d(n,{I:function(){return f}});var r=i(1413),a=i(5987),l=i(2392),s=i(6992),t=["isDisabled","isInvalid","isReadOnly","isRequired"],o=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function d(e){var n=function(e){var n,i,t,d=(0,l.NJ)(),u=e.id,c=e.disabled,m=e.readOnly,v=e.required,h=e.isRequired,p=e.isInvalid,f=e.isReadOnly,x=e.isDisabled,b=e.onFocus,Z=e.onBlur,g=(0,a.Z)(e,o),y=e["aria-describedby"]?[e["aria-describedby"]]:[];(null==d?void 0:d.hasFeedbackText)&&(null==d?void 0:d.isInvalid)&&y.push(d.feedbackId);(null==d?void 0:d.hasHelpText)&&y.push(d.helpTextId);return(0,r.Z)((0,r.Z)({},g),{},{"aria-describedby":y.join(" ")||void 0,id:null!=u?u:null==d?void 0:d.id,isDisabled:null!=(n=null!=c?c:x)?n:null==d?void 0:d.isDisabled,isReadOnly:null!=(i=null!=m?m:f)?i:null==d?void 0:d.isReadOnly,isRequired:null!=(t=null!=v?v:h)?t:null==d?void 0:d.isRequired,isInvalid:null!=p?p:null==d?void 0:d.isInvalid,onFocus:(0,s.v0)(null==d?void 0:d.onFocus,b),onBlur:(0,s.v0)(null==d?void 0:d.onBlur,Z)})}(e),i=n.isDisabled,d=n.isInvalid,u=n.isReadOnly,c=n.isRequired,m=(0,a.Z)(n,t);return(0,r.Z)((0,r.Z)({},m),{},{disabled:i,readOnly:u,required:c,"aria-invalid":(0,s.Qm)(d),"aria-required":(0,s.Qm)(c),"aria-readonly":(0,s.Qm)(u)})}var u=i(7872),c=i(9219),m=i(2996),v=i(7797),h=i(184),p=["htmlSize"],f=(0,u.G)((function(e,n){var i=e.htmlSize,l=(0,a.Z)(e,p),t=(0,c.jC)("Input",l),o=d((0,m.Lr)(l)),u=(0,s.cx)("chakra-input",e.className);return(0,h.jsx)(v.m.input,(0,r.Z)((0,r.Z)({size:i},o),{},{__css:t.field,ref:n,className:u}))}));f.displayName="Input",f.id="Input"},5946:function(e,n,i){i.d(n,{X:function(){return m}});var r=i(1413),a=i(5987),l=i(7872),s=i(9219),t=i(2996),o=i(7797),d=i(6992),u=i(184),c=["className"],m=(0,l.G)((function(e,n){var i=(0,s.mq)("Heading",e),l=(0,t.Lr)(e),m=(l.className,(0,a.Z)(l,c));return(0,u.jsx)(o.m.h2,(0,r.Z)((0,r.Z)({ref:n,className:(0,d.cx)("chakra-heading",e.className)},m),{},{__css:i}))}));m.displayName="Heading"},8206:function(e,n,i){i.d(n,{W:function(){return m}});var r=i(1413),a=i(5987),l=i(7872),s=i(2996),t=i(9219),o=i(7797),d=i(6992),u=i(184),c=["className","centerContent"],m=(0,l.G)((function(e,n){var i=(0,s.Lr)(e),l=i.className,m=i.centerContent,v=(0,a.Z)(i,c),h=(0,t.mq)("Container",e);return(0,u.jsx)(o.m.div,(0,r.Z)((0,r.Z)({ref:n,className:(0,d.cx)("chakra-container",l)},v),{},{__css:(0,r.Z)((0,r.Z)({},h),m&&{display:"flex",flexDirection:"column",alignItems:"center"})}))}));m.displayName="Container"}}]);
//# sourceMappingURL=268.abb855b7.chunk.js.map