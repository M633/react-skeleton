var React = require('react');
var ListItem = require('./ListItem.jsx');

var ingredients = [
  {"id":1,"text":"ham","name":1},
  {"id":2,"text":"cheese","name":2},
  {"id":3,"text":"potatoes","name":3}
];

var List = React.createClass({
  render: function() {
    var listItems = ingredients.map(function(item) {
      return <ListItem key={item.id} ingredient={item.text} name={item.name} />;
    });
    return (<ul>{listItems}</ul>);
  }
});

module.exports = List;
