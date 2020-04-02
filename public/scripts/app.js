"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// class header extends React.Component(){} 
var Indicision = function (_React$Component) {
  _inherits(Indicision, _React$Component);

  function Indicision(props) {
    _classCallCheck(this, Indicision);

    var _this = _possibleConstructorReturn(this, (Indicision.__proto__ || Object.getPrototypeOf(Indicision)).call(this, props));

    _this.state = {
      items: [],
      title: "Indecision",
      subTitle: "Add some actions to be done"
    };
    _this.handleDeleteAll = _this.handleDeleteAll.bind(_this);
    _this.handleAdd = _this.handleAdd.bind(_this);
    _this.handlePick = _this.handlePick.bind(_this);
    _this.handleDeleteOne = _this.handleDeleteOne.bind(_this);
    return _this;
  }

  _createClass(Indicision, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      try {
        var json = localStorage.getItem('items');
        var items = JSON.parse(json);
        if (items.length > 0) {
          this.setState(function () {
            return { items: items };
          });
        }
      } catch (e) {
        // nothing
      }
      console.log("componentDidMount");
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevstate) {
      if (prevstate.items.length !== this.state.items.length) {
        console.log("componentDidUpdate");
        var json = JSON.stringify(this.state.items);
        localStorage.setItem('items', json);
      }
    }
  }, {
    key: "componentWillUnMount",
    value: function componentWillUnMount() {
      console.log("componentWillUnMount");
    }
  }, {
    key: "handleDeleteAll",
    value: function handleDeleteAll() {
      this.setState({
        items: []
      });
    }
  }, {
    key: "handleAdd",
    value: function handleAdd(newItem) {
      console.log("add called : ", newItem);
      this.setState(function (prevstate) {
        return { items: prevstate.items.concat(newItem) };
      });
    }
  }, {
    key: "handlePick",
    value: function handlePick() {

      var random = Math.floor(Math.random() * this.state.items.length);
      console.log("action: ", random);
      var option = this.state.items[random];
      alert(option);
    }
  }, {
    key: "handleDeleteOne",
    value: function handleDeleteOne(item) {
      console.log("delete one:", item);
      this.setState(function (prevstate) {
        return {
          items: prevstate.items.filter(function (i) {
            return i !== item;
          })
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "container alert-primary" },
        React.createElement(Header, { title: this.state.title, subtitle: this.state.subTitle }),
        React.createElement(Action, { handlePick: this.handlePick, hasItems: this.state.items.length > 0 }),
        React.createElement(Options, { items: this.state.items, handleDeleteOne: this.handleDeleteOne, handleDeleteAll: this.handleDeleteAll }),
        React.createElement(AddOption, { items: this.state.items, handleAdd: this.handleAdd })
      );
    }
  }]);

  return Indicision;
}(React.Component);

var Header = function Header(props) {
  return React.createElement(
    "div",
    { className: "card alert-dark" },
    " ",
    React.createElement(
      "h1",
      null,
      " ",
      props.title
    ),
    React.createElement(
      "h4",
      null,
      props.subtitle
    )
  );
};
// class Header extends React.Component{
//   render(){
//     return(<div className="card"> <h1> {this.props.title}</h1><h4>{this.props.subtitle}</h4></div>)
//   }
// }
var Action = function Action(props) {
  return React.createElement(
    "span",
    { className: "alert-dark" },
    " ",
    React.createElement(
      "button",
      { className: "btn btn-light", onClick: props.handlePick, disabled: !props.hasItems },
      "what to do?"
    )
  );
};
// class Action extends React.Component{
//   handAction(){
//     alert("action")
//   }
//   render(){
//     return <div className="alert-dark"> <button onClick={this.props.handlePick} disabled={!this.props.hasItems}>what to do?</button></div>
//   }
// }
var Option = function Option(props) {
  return React.createElement(
    "li",
    null,
    props.item,
    React.createElement(
      "button",
      { className: "btn", onClick: function onClick(e) {
          props.handleDeleteOne(props.item);
        } },
      "remove"
    )
  );
};
// class Option extends React.Component{
//   render(){
//     return (
//       <li>{this.props.item} </li>
//     )
//   }
// }
var Options = function Options(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      { className: "btn btn-light", onClick: props.handleDeleteAll },
      "remove all"
    ),
    React.createElement(
      "p",
      null,
      "these are list of options"
    ),
    React.createElement(
      "ol",
      null,
      props.items.map(function (element, index) {
        return React.createElement(
          "div",
          { key: index },
          React.createElement(Option, { item: element, handleDeleteOne: props.handleDeleteOne })
        );
      })
    )
  );
};
// class Options extends React.Component{
//   constructor(props){
//     super(props);
//     this.handleClick = this.handleClick.bind(this);
//   }
//  handleClick(){
//    console.log(this.props.items);
//  }
//   render(){
//    return (<div>
//     <button onClick={this.props.handleDeleteAll}>remove all</button>
//     <p>these are list of options</p>
//     <ol>
//     { this.props.items.map((element,index)=>{
//       return (<div key ={index}>
//         <Option item={element} />
//         </div>)
//     })
//     }

//     </ol>
//     </div>)
//  } 
// }

var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this2.handleSubmit = _this2.handleSubmit.bind(_this2);
    return _this2;
  }

  _createClass(AddOption, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var v = e.target.elements.items.value;
      if (v) {
        console.log(v);
        this.props.handleAdd(v);
        e.target.elements.items.value = "";
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "form",
        { onSubmit: this.handleSubmit },
        React.createElement("input", { type: "text", name: "items" }),
        React.createElement(
          "button",
          { className: "btn" },
          "add"
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);
// Indicision.defaultProps = {
//   items : ["eat","sleep"]
// }


// var temp = (
//   <div>
//     <Indicision />
//   </div>
// );


ReactDOM.render(React.createElement(Indicision, null), document.getElementById("app"));
