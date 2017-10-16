webpackHotUpdate(0,{

/***/ 1199:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {Object.defineProperty(exports,\"__esModule\",{value:true});var _getPrototypeOf=__webpack_require__(10);var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=__webpack_require__(5);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=__webpack_require__(9);var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=__webpack_require__(7);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(8);var _inherits3=_interopRequireDefault(_inherits2);var _react2=__webpack_require__(1);var _react3=_interopRequireDefault(_react2);var _reactTransformHmr3=__webpack_require__(17);var _reactTransformHmr4=_interopRequireDefault(_reactTransformHmr3);var _jsxFileName='/home/hackernm/workspace/react_native/exchange/react-native-web/app/web/components/landing/otp.js';var _Button=__webpack_require__(27);var _Button2=_interopRequireDefault(_Button);var _TextField=__webpack_require__(34);var _TextField2=_interopRequireDefault(_TextField);var _Dialog=__webpack_require__(144);var _Dialog2=_interopRequireDefault(_Dialog);var _styles=__webpack_require__(22);var _Close=__webpack_require__(185);var _Close2=_interopRequireDefault(_Close);var _color=__webpack_require__(30);var _color2=_interopRequireDefault(_color);var _classnames=__webpack_require__(6);var _classnames2=_interopRequireDefault(_classnames);var _Grid=__webpack_require__(25);var _Grid2=_interopRequireDefault(_Grid);var _variables=__webpack_require__(20);var _variables2=_interopRequireDefault(_variables);var _snack_bar=__webpack_require__(1206);var _snack_bar2=_interopRequireDefault(_snack_bar);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var _components={Otp:{displayName:'Otp'}};var _reactTransformHmr2=(0,_reactTransformHmr4.default)({filename:'/home/hackernm/workspace/react_native/exchange/react-native-web/app/web/components/landing/otp.js',components:_components,locals:[module],imports:[_react3.default]});function _wrapComponent(id){return function(Component){return _reactTransformHmr2(Component,id);};}var styles=function styles(theme){return{crossContainer:{alignSelf:'flex-end',marginTop:'-50px',color:_variables2.default.colorWhite,height:'50px',cursor:'pointer'},textField:{width:'100%',marginTop:_variables2.default.spacingUnit*3,marginBottom:_variables2.default.spacingUnit*3,fontSize:_variables2.default.spacingUnit*4+'px !important'},icon:{width:'45px',height:'45px'},buttonContainer:{width:'100%'},buttonStyle:{borderRadius:'0px',padding:_variables2.default.spacingUnit*3,backgroundColor:_variables2.default.colorPrimary,'&:hover':{backgroundColor:(0,_color2.default)(_variables2.default.colorPrimary).lighten(0.3).hex()}}};};var Otp=_wrapComponent('Otp')(function(_React$Component){(0,_inherits3.default)(Otp,_React$Component);function Otp(){var _ref;var _temp,_this,_ret;(0,_classCallCheck3.default)(this,Otp);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=(0,_possibleConstructorReturn3.default)(this,(_ref=Otp.__proto__||(0,_getPrototypeOf2.default)(Otp)).call.apply(_ref,[this].concat(args))),_this),_this.state={message:null},_this._closeSnackBar=function(event,reason){if(reason==='clickaway'){return;}_this.setState({message:null});},_this._resendOtp=function(event){var resend=_this.props.resend;resend(event);_this.setState({message:'OTP resent, please check your mobile phone'});},_temp),(0,_possibleConstructorReturn3.default)(_this,_ret);}(0,_createClass3.default)(Otp,[{key:'render',value:function render(){var _props=this.props,open=_props.open,handleRequestClose=_props.handleRequestClose,classes=_props.classes;var message=this.state.message;var openSnack=message!==null?true:false;return _react3.default.createElement('div',{__source:{fileName:_jsxFileName,lineNumber:75}},openSnack&&_react3.default.createElement(_snack_bar2.default,{message:message,open:openSnack,close:this._closeSnackBar,otp:true,__source:{fileName:_jsxFileName,lineNumber:77}}),_react3.default.createElement(_Dialog2.default,{ignoreBackdropClick:true,open:open,onRequestClose:function onRequestClose(){return handleRequestClose(false);},__source:{fileName:_jsxFileName,lineNumber:84}},_react3.default.createElement('span',{className:classes.crossContainer,onClick:function onClick(){return handleRequestClose(false);},__source:{fileName:_jsxFileName,lineNumber:89}},_react3.default.createElement(_Close2.default,{className:classes.icon,__source:{fileName:_jsxFileName,lineNumber:93}})),_react3.default.createElement(_Dialog.DialogTitle,{__source:{fileName:_jsxFileName,lineNumber:95}},'Enter OTP '),_react3.default.createElement(_Dialog.DialogContent,{__source:{fileName:_jsxFileName,lineNumber:96}},_react3.default.createElement(_Dialog.DialogContentText,{__source:{fileName:_jsxFileName,lineNumber:97}},'Please wait for 30s for OTP to arrive'),_react3.default.createElement('div',{className:'form-group',__source:{fileName:_jsxFileName,lineNumber:100}},_react3.default.createElement('div',{className:'col-xs-12 col-sm-10',__source:{fileName:_jsxFileName,lineNumber:101}},_react3.default.createElement('input',{type:'number',className:(0,_classnames2.default)('form-control',classes.textField),placeholder:'Enter OTP',__source:{fileName:_jsxFileName,lineNumber:102}})),_react3.default.createElement('div',{className:'col-xs-12 col-sm-2',__source:{fileName:_jsxFileName,lineNumber:108}},_react3.default.createElement(_Button2.default,{onClick:this._resendOtp,__source:{fileName:_jsxFileName,lineNumber:109}},'Resend OTP')))),_react3.default.createElement(_Grid2.default,{container:true,__source:{fileName:_jsxFileName,lineNumber:113}},_react3.default.createElement(_Grid2.default,{item:true,xs:12,__source:{fileName:_jsxFileName,lineNumber:114}},_react3.default.createElement(_Button2.default,{raised:true,className:(0,_classnames2.default)(classes.buttonStyle,classes.buttonContainer),color:'primary',__source:{fileName:_jsxFileName,lineNumber:115}},'Verify')))));}}]);return Otp;}(_react3.default.Component));exports.default=(0,_styles.withStyles)(styles)(Otp);\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTE5OS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvd2ViL2NvbXBvbmVudHMvbGFuZGluZy9vdHAuanM/MjM3NyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBmbG93dHlwZS9yZXF1aXJlLXZhbGlkLWZpbGUtYW5ub3RhdGlvbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdtYXRlcmlhbC11aS9CdXR0b24nO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdtYXRlcmlhbC11aS9UZXh0RmllbGQnO1xuaW1wb3J0IERpYWxvZywge1xuXHREaWFsb2dBY3Rpb25zLFxuXHREaWFsb2dDb250ZW50LFxuXHREaWFsb2dDb250ZW50VGV4dCxcblx0RGlhbG9nVGl0bGVcbn0gZnJvbSAnbWF0ZXJpYWwtdWkvRGlhbG9nJztcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdtYXRlcmlhbC11aS9zdHlsZXMnO1xuaW1wb3J0IENsb3NlSWNvbiBmcm9tICdtYXRlcmlhbC11aS1pY29ucy9DbG9zZSc7XG5pbXBvcnQgQ29sb3IgZnJvbSAnY29sb3InO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgR3JpZCBmcm9tICdtYXRlcmlhbC11aS9HcmlkJztcbmltcG9ydCBBcHBUaGVtZSBmcm9tICcuLi8uLi8uLi90aGVtZS92YXJpYWJsZXMnO1xuaW1wb3J0IFNuYWNrQmFyIGZyb20gJy4uL2NvbW1vbi9zbmFja19iYXInO1xuXG5jb25zdCBzdHlsZXMgPSB0aGVtZSA9PiAoe1xuXHRjcm9zc0NvbnRhaW5lcjoge1xuXHRcdGFsaWduU2VsZjogJ2ZsZXgtZW5kJyxcblx0XHRtYXJnaW5Ub3A6ICctNTBweCcsXG5cdFx0Y29sb3I6IEFwcFRoZW1lLmNvbG9yV2hpdGUsXG5cdFx0aGVpZ2h0OiAnNTBweCcsXG5cdFx0Y3Vyc29yOiAncG9pbnRlcidcblx0fSxcblx0dGV4dEZpZWxkOiB7XG5cdFx0d2lkdGg6ICcxMDAlJyxcblx0XHRtYXJnaW5Ub3A6IEFwcFRoZW1lLnNwYWNpbmdVbml0ICogMyxcblx0XHRtYXJnaW5Cb3R0b206IEFwcFRoZW1lLnNwYWNpbmdVbml0ICogMyxcblx0XHRmb250U2l6ZTogYCR7QXBwVGhlbWUuc3BhY2luZ1VuaXQgKiA0fXB4ICFpbXBvcnRhbnRgXG5cdH0sXG5cdGljb246IHtcblx0XHR3aWR0aDogJzQ1cHgnLFxuXHRcdGhlaWdodDogJzQ1cHgnXG5cdH0sXG5cdGJ1dHRvbkNvbnRhaW5lcjoge1xuXHRcdHdpZHRoOiAnMTAwJSdcblx0fSxcblx0YnV0dG9uU3R5bGU6IHtcblx0XHRib3JkZXJSYWRpdXM6ICcwcHgnLFx0XHRcblx0XHRwYWRkaW5nOiBBcHBUaGVtZS5zcGFjaW5nVW5pdCAqIDMsXG5cdFx0YmFja2dyb3VuZENvbG9yOiBBcHBUaGVtZS5jb2xvclByaW1hcnksXG5cdFx0JyY6aG92ZXInOiB7XG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IENvbG9yKEFwcFRoZW1lLmNvbG9yUHJpbWFyeSlcblx0XHRcdFx0LmxpZ2h0ZW4oMC4zKVxuXHRcdFx0XHQuaGV4KClcblx0XHR9XG5cdH1cbn0pO1xuXG5jbGFzcyBPdHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRzdGF0ZSA9IHtcblx0XHRtZXNzYWdlOiBudWxsXG5cdH07XG5cdF9jbG9zZVNuYWNrQmFyID0gKGV2ZW50LCByZWFzb24pID0+IHtcblx0XHRpZiAocmVhc29uID09PSAnY2xpY2thd2F5Jykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLnNldFN0YXRlKHsgbWVzc2FnZTogbnVsbCB9KTtcblx0fTtcblx0X3Jlc2VuZE90cCA9IGV2ZW50ID0+IHtcblx0XHRjb25zdCB7IHJlc2VuZCB9ID0gdGhpcy5wcm9wcztcblx0XHRyZXNlbmQoZXZlbnQpO1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0bWVzc2FnZTogJ09UUCByZXNlbnQsIHBsZWFzZSBjaGVjayB5b3VyIG1vYmlsZSBwaG9uZSdcblx0XHR9KTtcblx0fTtcblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHsgb3BlbiwgaGFuZGxlUmVxdWVzdENsb3NlLCBjbGFzc2VzIH0gPSB0aGlzLnByb3BzO1xuXHRcdGNvbnN0IHsgbWVzc2FnZSB9ID0gdGhpcy5zdGF0ZTtcblx0XHRjb25zdCBvcGVuU25hY2sgPSBtZXNzYWdlICE9PSBudWxsID8gdHJ1ZSA6IGZhbHNlO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHR7b3BlblNuYWNrICYmIChcblx0XHRcdFx0XHQ8U25hY2tCYXJcblx0XHRcdFx0XHRcdG1lc3NhZ2U9e21lc3NhZ2V9XG5cdFx0XHRcdFx0XHRvcGVuPXtvcGVuU25hY2t9XG5cdFx0XHRcdFx0XHRjbG9zZT17dGhpcy5fY2xvc2VTbmFja0Jhcn1cblx0XHRcdFx0XHRcdG90cD17dHJ1ZX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpfVxuXHRcdFx0XHQ8RGlhbG9nXG5cdFx0XHRcdFx0aWdub3JlQmFja2Ryb3BDbGlja1xuXHRcdFx0XHRcdG9wZW49e29wZW59XG5cdFx0XHRcdFx0b25SZXF1ZXN0Q2xvc2U9eygpID0+IGhhbmRsZVJlcXVlc3RDbG9zZShmYWxzZSl9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8c3BhblxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLmNyb3NzQ29udGFpbmVyfVxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gaGFuZGxlUmVxdWVzdENsb3NlKGZhbHNlKX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8Q2xvc2VJY29uIGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29ufSAvPlxuXHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHQ8RGlhbG9nVGl0bGU+RW50ZXIgT1RQIDwvRGlhbG9nVGl0bGU+XG5cdFx0XHRcdFx0PERpYWxvZ0NvbnRlbnQ+XG5cdFx0XHRcdFx0XHQ8RGlhbG9nQ29udGVudFRleHQ+XG5cdFx0XHRcdFx0XHRcdFBsZWFzZSB3YWl0IGZvciAzMHMgZm9yIE9UUCB0byBhcnJpdmVcblx0XHRcdFx0XHRcdDwvRGlhbG9nQ29udGVudFRleHQ+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTIgY29sLXNtLTEwXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwibnVtYmVyXCJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnZm9ybS1jb250cm9sJywgY2xhc3Nlcy50ZXh0RmllbGQpfVxuXHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJFbnRlciBPVFBcIlxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMiBjb2wtc20tMlwiPlxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b24gb25DbGljaz17dGhpcy5fcmVzZW5kT3RwfT5SZXNlbmQgT1RQPC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9EaWFsb2dDb250ZW50PlxuXHRcdFx0XHRcdDxHcmlkIGNvbnRhaW5lcj5cblx0XHRcdFx0XHRcdDxHcmlkIGl0ZW0geHM9ezEyfT5cblx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdHJhaXNlZFxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzZXMuYnV0dG9uU3R5bGUsXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc2VzLmJ1dHRvbkNvbnRhaW5lclxuXHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I9XCJwcmltYXJ5XCJcblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFZlcmlmeVxuXHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdDwvR3JpZD5cblx0XHRcdFx0XHQ8L0dyaWQ+XG5cdFx0XHRcdDwvRGlhbG9nPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoT3RwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcHAvd2ViL2NvbXBvbmVudHMvbGFuZGluZy9vdHAuanMiXSwibWFwcGluZ3MiOiJBQUdBO0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1199\n");

/***/ })

})