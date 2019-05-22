var React = require('react'),
  GridRow = require('./grid-row')


class GridContainer extends React.Component{
  getChildren() {
    var children = []
    for (var i = 0; i < this.props.size; i++)
        children.push(<GridRow key={i} size={this.props.size}/>);
    return children;
  }
  render() {
    return <div role="grid" className="grid-container">{this.getChildren()}</div>;
  }
};

module.exports = GridContainer;
