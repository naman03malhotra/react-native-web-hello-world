webpackHotUpdate(0,{

/***/ 1199:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {Object.defineProperty(exports,\"__esModule\",{value:true});var _getPrototypeOf=__webpack_require__(10);var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=__webpack_require__(5);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=__webpack_require__(9);var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=__webpack_require__(7);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(8);var _inherits3=_interopRequireDefault(_inherits2);var _react2=__webpack_require__(1);var _react3=_interopRequireDefault(_react2);var _reactTransformHmr3=__webpack_require__(17);var _reactTransformHmr4=_interopRequireDefault(_reactTransformHmr3);var _jsxFileName='/home/hackernm/workspace/react_native/exchange/react-native-web/app/web/components/landing/otp.js';var _Button=__webpack_require__(27);var _Button2=_interopRequireDefault(_Button);var _TextField=__webpack_require__(34);var _TextField2=_interopRequireDefault(_TextField);var _Dialog=__webpack_require__(144);var _Dialog2=_interopRequireDefault(_Dialog);var _Progress=__webpack_require__(40);var _styles=__webpack_require__(22);var _Close=__webpack_require__(185);var _Close2=_interopRequireDefault(_Close);var _color=__webpack_require__(30);var _color2=_interopRequireDefault(_color);var _classnames=__webpack_require__(6);var _classnames2=_interopRequireDefault(_classnames);var _Grid=__webpack_require__(25);var _Grid2=_interopRequireDefault(_Grid);var _variables=__webpack_require__(20);var _variables2=_interopRequireDefault(_variables);var _snack_bar=__webpack_require__(1206);var _snack_bar2=_interopRequireDefault(_snack_bar);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var _components={Otp:{displayName:'Otp'}};var _reactTransformHmr2=(0,_reactTransformHmr4.default)({filename:'/home/hackernm/workspace/react_native/exchange/react-native-web/app/web/components/landing/otp.js',components:_components,locals:[module],imports:[_react3.default]});function _wrapComponent(id){return function(Component){return _reactTransformHmr2(Component,id);};}var styles=function styles(theme){return{crossContainer:{alignSelf:'flex-end',marginTop:'-50px',color:_variables2.default.colorWhite,height:'50px',cursor:'pointer'},textFieldContainer:{marginTop:_variables2.default.spacingUnit*2,marginBottom:_variables2.default.spacingUnit*2},textField:{width:'100%',fontSize:_variables2.default.spacingUnit*4+'px !important'},icon:{width:'45px',height:'45px'},buttonContainer:{width:'100%'},buttonStyle:{borderRadius:'0px',padding:_variables2.default.spacingUnit*3,backgroundColor:_variables2.default.colorPrimary,'&:hover':{backgroundColor:(0,_color2.default)(_variables2.default.colorPrimary).lighten(0.3).hex()}},fabProgress:{color:_variables2.default.colorPrimary}};};var Otp=_wrapComponent('Otp')(function(_React$Component){(0,_inherits3.default)(Otp,_React$Component);function Otp(){var _ref;var _temp,_this,_ret;(0,_classCallCheck3.default)(this,Otp);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=(0,_possibleConstructorReturn3.default)(this,(_ref=Otp.__proto__||(0,_getPrototypeOf2.default)(Otp)).call.apply(_ref,[this].concat(args))),_this),_this.state={message:null,goodmsg:true,otp:''},_this._closeSnackBar=function(event,reason){if(reason==='clickaway'){return;}_this.setState({message:null});},_this._resendOtp=function(event){var resend=_this.props.resend;resend(event);_this.setState({message:'OTP resent, please check your mobile phone',goodmsg:true});},_temp),(0,_possibleConstructorReturn3.default)(_this,_ret);}(0,_createClass3.default)(Otp,[{key:'render',value:function render(){var _props=this.props,open=_props.open,handleRequestClose=_props.handleRequestClose,classes=_props.classes,loading=_props.loading;var _state=this.state,message=_state.message,goodmsg=_state.goodmsg;var openSnack=message!==null?true:false;return _react3.default.createElement('div',{__source:{fileName:_jsxFileName,lineNumber:84}},openSnack&&_react3.default.createElement(_snack_bar2.default,{message:message,open:openSnack,close:this._closeSnackBar,otp:true,__source:{fileName:_jsxFileName,lineNumber:86}}),_react3.default.createElement(_Dialog2.default,{ignoreBackdropClick:true,open:open,onRequestClose:function onRequestClose(){return handleRequestClose(false);},__source:{fileName:_jsxFileName,lineNumber:93}},!loading&&_react3.default.createElement('span',{className:classes.crossContainer,onClick:function onClick(){return handleRequestClose(false);},__source:{fileName:_jsxFileName,lineNumber:99}},_react3.default.createElement(_Close2.default,{className:classes.icon,__source:{fileName:_jsxFileName,lineNumber:103}})),_react3.default.createElement(_Dialog.DialogTitle,{__source:{fileName:_jsxFileName,lineNumber:106}},'Enter OTP '),_react3.default.createElement(_Dialog.DialogContent,{__source:{fileName:_jsxFileName,lineNumber:107}},_react3.default.createElement(_Dialog.DialogContentText,{__source:{fileName:_jsxFileName,lineNumber:108}},'Please wait for 30s for OTP to arrive'),_react3.default.createElement('div',{className:(0,_classnames2.default)('form-group',message&&goodmsg&&'has-success',message&&!goodmsg&&'has-error'),__source:{fileName:_jsxFileName,lineNumber:111}},_react3.default.createElement('div',{className:(0,_classnames2.default)('col-xs-12','col-sm-10',classes.textFieldContainer),__source:{fileName:_jsxFileName,lineNumber:112}},_react3.default.createElement('input',{type:'number',className:(0,_classnames2.default)('form-control',classes.textField),placeholder:'Enter OTP',__source:{fileName:_jsxFileName,lineNumber:119}}),message&&_react3.default.createElement('label',{className:'control-label',htmlFor:'inputError',__source:{fileName:_jsxFileName,lineNumber:125}},message)),_react3.default.createElement('div',{className:'col-xs-12 col-sm-2',__source:{fileName:_jsxFileName,lineNumber:130}},_react3.default.createElement(_Button2.default,{onClick:this._resendOtp,__source:{fileName:_jsxFileName,lineNumber:131}},'Resend OTP')))),_react3.default.createElement(_Grid2.default,{container:true,__source:{fileName:_jsxFileName,lineNumber:135}},_react3.default.createElement(_Grid2.default,{item:true,xs:12,__source:{fileName:_jsxFileName,lineNumber:136}},_react3.default.createElement(_Button2.default,{raised:true,className:(0,_classnames2.default)(classes.buttonStyle,classes.buttonContainer),color:'primary',disabled:loading,__source:{fileName:_jsxFileName,lineNumber:137}},!loading?'Verify':_react3.default.createElement(_Progress.CircularProgress,{size:24,className:classes.fabProgress,__source:{fileName:_jsxFileName,lineNumber:149}}))))));}}]);return Otp;}(_react3.default.Component));exports.default=(0,_styles.withStyles)(styles)(Otp);\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTE5OS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvd2ViL2NvbXBvbmVudHMvbGFuZGluZy9vdHAuanM/MjM3NyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBmbG93dHlwZS9yZXF1aXJlLXZhbGlkLWZpbGUtYW5ub3RhdGlvbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdtYXRlcmlhbC11aS9CdXR0b24nO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdtYXRlcmlhbC11aS9UZXh0RmllbGQnO1xuaW1wb3J0IERpYWxvZywge1xuXHREaWFsb2dBY3Rpb25zLFxuXHREaWFsb2dDb250ZW50LFxuXHREaWFsb2dDb250ZW50VGV4dCxcblx0RGlhbG9nVGl0bGVcbn0gZnJvbSAnbWF0ZXJpYWwtdWkvRGlhbG9nJztcbmltcG9ydCB7IENpcmN1bGFyUHJvZ3Jlc3MgfSBmcm9tICdtYXRlcmlhbC11aS9Qcm9ncmVzcyc7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnbWF0ZXJpYWwtdWkvc3R5bGVzJztcbmltcG9ydCBDbG9zZUljb24gZnJvbSAnbWF0ZXJpYWwtdWktaWNvbnMvQ2xvc2UnO1xuaW1wb3J0IENvbG9yIGZyb20gJ2NvbG9yJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IEdyaWQgZnJvbSAnbWF0ZXJpYWwtdWkvR3JpZCc7XG5pbXBvcnQgQXBwVGhlbWUgZnJvbSAnLi4vLi4vLi4vdGhlbWUvdmFyaWFibGVzJztcbmltcG9ydCBTbmFja0JhciBmcm9tICcuLi9jb21tb24vc25hY2tfYmFyJztcblxuY29uc3Qgc3R5bGVzID0gdGhlbWUgPT4gKHtcblx0Y3Jvc3NDb250YWluZXI6IHtcblx0XHRhbGlnblNlbGY6ICdmbGV4LWVuZCcsXG5cdFx0bWFyZ2luVG9wOiAnLTUwcHgnLFxuXHRcdGNvbG9yOiBBcHBUaGVtZS5jb2xvcldoaXRlLFxuXHRcdGhlaWdodDogJzUwcHgnLFxuXHRcdGN1cnNvcjogJ3BvaW50ZXInXG5cdH0sXG5cdHRleHRGaWVsZENvbnRhaW5lcjoge1xuXHRcdG1hcmdpblRvcDogQXBwVGhlbWUuc3BhY2luZ1VuaXQgKiAyLFxuXHRcdG1hcmdpbkJvdHRvbTogQXBwVGhlbWUuc3BhY2luZ1VuaXQgKiAyXG5cdH0sXG5cdHRleHRGaWVsZDoge1xuXHRcdHdpZHRoOiAnMTAwJScsXG5cdFx0Zm9udFNpemU6IGAke0FwcFRoZW1lLnNwYWNpbmdVbml0ICogNH1weCAhaW1wb3J0YW50YFxuXHR9LFxuXHRpY29uOiB7XG5cdFx0d2lkdGg6ICc0NXB4Jyxcblx0XHRoZWlnaHQ6ICc0NXB4J1xuXHR9LFxuXHRidXR0b25Db250YWluZXI6IHtcblx0XHR3aWR0aDogJzEwMCUnXG5cdH0sXG5cdGJ1dHRvblN0eWxlOiB7XG5cdFx0Ym9yZGVyUmFkaXVzOiAnMHB4Jyxcblx0XHRwYWRkaW5nOiBBcHBUaGVtZS5zcGFjaW5nVW5pdCAqIDMsXG5cdFx0YmFja2dyb3VuZENvbG9yOiBBcHBUaGVtZS5jb2xvclByaW1hcnksXG5cdFx0JyY6aG92ZXInOiB7XG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IENvbG9yKEFwcFRoZW1lLmNvbG9yUHJpbWFyeSlcblx0XHRcdFx0LmxpZ2h0ZW4oMC4zKVxuXHRcdFx0XHQuaGV4KClcblx0XHR9XG5cdH0sXG5cdGZhYlByb2dyZXNzOiB7XG5cdFx0Y29sb3I6IEFwcFRoZW1lLmNvbG9yUHJpbWFyeVxuXHR9XG59KTtcblxuY2xhc3MgT3RwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0c3RhdGUgPSB7XG5cdFx0bWVzc2FnZTogbnVsbCxcblx0XHRnb29kbXNnOiB0cnVlLFxuXHRcdG90cDogJydcblx0fTtcblx0X2Nsb3NlU25hY2tCYXIgPSAoZXZlbnQsIHJlYXNvbikgPT4ge1xuXHRcdGlmIChyZWFzb24gPT09ICdjbGlja2F3YXknKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuc2V0U3RhdGUoeyBtZXNzYWdlOiBudWxsIH0pO1xuXHR9O1xuXHRfcmVzZW5kT3RwID0gZXZlbnQgPT4ge1xuXHRcdGNvbnN0IHsgcmVzZW5kIH0gPSB0aGlzLnByb3BzO1xuXHRcdHJlc2VuZChldmVudCk7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRtZXNzYWdlOiAnT1RQIHJlc2VudCwgcGxlYXNlIGNoZWNrIHlvdXIgbW9iaWxlIHBob25lJyxcblx0XHRcdGdvb2Rtc2c6IHRydWVcblx0XHR9KTtcblx0fTtcblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHsgb3BlbiwgaGFuZGxlUmVxdWVzdENsb3NlLCBjbGFzc2VzLCBsb2FkaW5nIH0gPSB0aGlzLnByb3BzO1xuXHRcdGNvbnN0IHsgbWVzc2FnZSwgZ29vZG1zZyB9ID0gdGhpcy5zdGF0ZTtcblx0XHRjb25zdCBvcGVuU25hY2sgPSBtZXNzYWdlICE9PSBudWxsID8gdHJ1ZSA6IGZhbHNlO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHR7b3BlblNuYWNrICYmIChcblx0XHRcdFx0XHQ8U25hY2tCYXJcblx0XHRcdFx0XHRcdG1lc3NhZ2U9e21lc3NhZ2V9XG5cdFx0XHRcdFx0XHRvcGVuPXtvcGVuU25hY2t9XG5cdFx0XHRcdFx0XHRjbG9zZT17dGhpcy5fY2xvc2VTbmFja0Jhcn1cblx0XHRcdFx0XHRcdG90cD17dHJ1ZX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpfVxuXHRcdFx0XHQ8RGlhbG9nXG5cdFx0XHRcdFx0aWdub3JlQmFja2Ryb3BDbGlja1xuXHRcdFx0XHRcdG9wZW49e29wZW59XG5cdFx0XHRcdFx0b25SZXF1ZXN0Q2xvc2U9eygpID0+IGhhbmRsZVJlcXVlc3RDbG9zZShmYWxzZSl9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHR7IWxvYWRpbmcgJiYgKFxuXHRcdFx0XHRcdFx0PHNwYW5cblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLmNyb3NzQ29udGFpbmVyfVxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBoYW5kbGVSZXF1ZXN0Q2xvc2UoZmFsc2UpfVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8Q2xvc2VJY29uIGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29ufSAvPlxuXHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0PERpYWxvZ1RpdGxlPkVudGVyIE9UUCA8L0RpYWxvZ1RpdGxlPlxuXHRcdFx0XHRcdDxEaWFsb2dDb250ZW50PlxuXHRcdFx0XHRcdFx0PERpYWxvZ0NvbnRlbnRUZXh0PlxuXHRcdFx0XHRcdFx0XHRQbGVhc2Ugd2FpdCBmb3IgMzBzIGZvciBPVFAgdG8gYXJyaXZlXG5cdFx0XHRcdFx0XHQ8L0RpYWxvZ0NvbnRlbnRUZXh0PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ2Zvcm0tZ3JvdXAnLCBtZXNzYWdlICYmIGdvb2Rtc2cgJiYgJ2hhcy1zdWNjZXNzJywgbWVzc2FnZSAmJiAhZ29vZG1zZyAmJiAnaGFzLWVycm9yJyl9PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuXHRcdFx0XHRcdFx0XHRcdFx0J2NvbC14cy0xMicsXG5cdFx0XHRcdFx0XHRcdFx0XHQnY29sLXNtLTEwJyxcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzZXMudGV4dEZpZWxkQ29udGFpbmVyXG5cdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cIm51bWJlclwiXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ2Zvcm0tY29udHJvbCcsIGNsYXNzZXMudGV4dEZpZWxkKX1cblx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiRW50ZXIgT1RQXCJcblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdHttZXNzYWdlICYmIChcblx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsXCIgaHRtbEZvcj1cImlucHV0RXJyb3JcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0e21lc3NhZ2V9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMiBjb2wtc20tMlwiPlxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b24gb25DbGljaz17dGhpcy5fcmVzZW5kT3RwfT5SZXNlbmQgT1RQPC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9EaWFsb2dDb250ZW50PlxuXHRcdFx0XHRcdDxHcmlkIGNvbnRhaW5lcj5cblx0XHRcdFx0XHRcdDxHcmlkIGl0ZW0geHM9ezEyfT5cblx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdHJhaXNlZFxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzZXMuYnV0dG9uU3R5bGUsXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc2VzLmJ1dHRvbkNvbnRhaW5lclxuXHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I9XCJwcmltYXJ5XCJcblx0XHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17bG9hZGluZ31cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdHshbG9hZGluZyA/IChcblx0XHRcdFx0XHRcdFx0XHRcdCdWZXJpZnknXG5cdFx0XHRcdFx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRcdFx0XHRcdDxDaXJjdWxhclByb2dyZXNzIHNpemU9ezI0fSBjbGFzc05hbWU9e2NsYXNzZXMuZmFiUHJvZ3Jlc3N9IC8+XG5cdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHQ8L0dyaWQ+XG5cdFx0XHRcdFx0PC9HcmlkPlxuXHRcdFx0XHQ8L0RpYWxvZz5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKE90cCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwL3dlYi9jb21wb25lbnRzL2xhbmRpbmcvb3RwLmpzIl0sIm1hcHBpbmdzIjoiQUFHQTtBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1199\n");

/***/ })

})