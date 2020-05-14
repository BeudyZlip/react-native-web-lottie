var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf3=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _react=_interopRequireWildcard(require("react"));var _reactDom=_interopRequireDefault(require("react-dom"));var _View=_interopRequireDefault(require("react-native-web/dist/exports/View"));var _lottieWeb=_interopRequireDefault(require("lottie-web"));var _jsxFileName="/Users/kevin/projets/react-native-web-lottie/src/index.js";var Animation=function(_PureComponent){(0,_inherits2.default)(Animation,_PureComponent);function Animation(){var _getPrototypeOf2;var _this;(0,_classCallCheck2.default)(this,Animation);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=(0,_possibleConstructorReturn2.default)(this,(_getPrototypeOf2=(0,_getPrototypeOf3.default)(Animation)).call.apply(_getPrototypeOf2,[this].concat(args)));_this.animationDOMNode=null;_this.loadAnimation=function(props){if(_this.anim){_this.anim.destroy();}_this.anim=_lottieWeb.default.loadAnimation({container:_this.animationDOMNode,animationData:props.source,renderer:'svg',loop:props.loop||false,autoplay:props.autoPlay,rendererSettings:props.rendererSettings||{}});};_this.setAnimationDOMNode=function(ref){return _this.animationDOMNode=_reactDom.default.findDOMNode(ref);};_this.play=function(){if(!_this.anim){return;}for(var _len2=arguments.length,frames=new Array(_len2),_key2=0;_key2<_len2;_key2++){frames[_key2]=arguments[_key2];}_this.anim.playSegments(frames,true);};_this.reset=function(){if(!_this.anim){return;}_this.anim.stop();};return _this;}(0,_createClass2.default)(Animation,[{key:"componentDidMount",value:function componentDidMount(){this.loadAnimation(this.props);}},{key:"UNSAFE_componentWillReceiveProps",value:function UNSAFE_componentWillReceiveProps(nextProps){if(this.props.source&&nextProps.source&&this.props.source.nm!==nextProps.source.nm){this.loadAnimation(nextProps);}}},{key:"render",value:function render(){return _react.default.createElement(_View.default,{style:this.props.style,ref:this.setAnimationDOMNode,__source:{fileName:_jsxFileName,lineNumber:53}});}}]);return Animation;}(_react.PureComponent);var _default=_react.default.forwardRef(function(props,ref){return _react.default.createElement(Animation,(0,_extends2.default)({},props,{ref:typeof ref=='function'?function(c){return ref(c&&c.anim);}:ref,__source:{fileName:_jsxFileName,lineNumber:58}}));});exports.default=_default;