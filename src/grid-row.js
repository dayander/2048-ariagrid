var React = require('react'),
  GridCell = require('./grid-cell')

class GridRow extends React.Component{

  getChildren() {
    var children = []
    for (var i = 0; i < this.props.size; i++)
        children.push(<GridCell key={i}/>);
    return children;
  }
  render() {
    return <div role="row" className="grid-row">{this.getChildren()}</div>;
  }
};

module.exports = GridRow;
