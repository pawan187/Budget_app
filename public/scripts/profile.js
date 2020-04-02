'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// console.log("server runnning");
// const app = document.getElementById("app");
// let count = 0;
// let increment = ()=>{
//     count++;
//     renderTemplate();
// }
// let decrement = ()=>{
//     count--;
//     renderTemplate();
// }
// let reset = ()=>{
//     count=0;
//     renderTemplate();
// }
// let renderTemplate=()=>{
//     const template = (
//         <div className="container">
//             <h1>Count : {count}</h1>
//             <div className="container-fluid">
//             <button className="btn btn-parimary" onClick={increment}>+1</button>
//             <button className="btn btn-parimary" onClick={decrement}>-1</button>
//             <button className="btn btn-parimary" onClick={reset}>reset</button>
//             </div>
//         </div>
//     );
//     ReactDOM.render(template,app);
// }
// renderTemplate();

var Comp = function (_React$Component) {
    _inherits(Comp, _React$Component);

    function Comp(props) {
        _classCallCheck(this, Comp);

        var _this = _possibleConstructorReturn(this, (Comp.__proto__ || Object.getPrototypeOf(Comp)).call(this, props));

        _this.handAdd = _this.handAdd.bind(_this);
        _this.handRes = _this.handRes.bind(_this);
        _this.handSub = _this.handSub.bind(_this);
        _this.state = {
            count: 0
        };
        return _this;
    }

    _createClass(Comp, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var json = localStorage.getItem('count');
            var count = JSON.parse(json);
            if (count) {
                this.setState(function () {
                    return { count: count };
                });
            }
            console.log('componentDidMount');
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            var json = JSON.stringify(this.state.count);
            localStorage.setItem('count', json);
            console.log('componentDidUpdate');
        }
    }, {
        key: 'handAdd',
        value: function handAdd() {
            this.setState(function (prevState) {
                return {
                    count: prevState.count + 1
                };
            });
            console.log("+1");
        }
    }, {
        key: 'handSub',
        value: function handSub() {
            this.setState(function (prevState) {
                return {
                    count: prevState.count - 1
                };
            });
            console.log("-1");
        }
    }, {
        key: 'handRes',
        value: function handRes() {
            this.setState(function () {
                return { count: 0 };
            });
            console.log("reset");
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'container alert-success' },
                React.createElement(
                    'h1',
                    null,
                    'count : ',
                    this.state.count
                ),
                React.createElement(
                    'button',
                    { onClick: this.handAdd },
                    '+1'
                ),
                React.createElement(
                    'button',
                    { onClick: this.handSub },
                    '-1'
                ),
                React.createElement(
                    'button',
                    { onClick: this.handRes },
                    ' reset'
                )
            );
        }
    }]);

    return Comp;
}(React.Component);

ReactDOM.render(React.createElement(Comp, null), document.getElementById("profile"));
