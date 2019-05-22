var React = require('react'),
  Tile = require('./tile').ReactTile;

class TileContainer extends React.Component{
  getChildren() {
    var children = [];
    this.props.tiles.forEach(function(item) {
      children.push(<Tile x={item.x} y={item.y} value={item.value} key={item.prog}/>);
    });
    return children;
  }
  render() {
    return <div className="tile-container">{this.getChildren()}</div>;
  }
};

module.exports = TileContainer;
