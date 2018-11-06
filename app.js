
// evey change on the App function will be reflected on html page
// Inside App we call GroceryList component
var App = () => (
  <div>
    <h2>Grocery List</h2>
    <GroceryList groceryItems={['Cucumbers', 'Kale', 'Apple']}/>
  </div>
);

// In GroceryList we iteratet with map over the array (groceryItems) to reflected as a list
var GroceryList = (props) => (
  <ul>
    {props.groceryItems.map(groceryItem =>
      <GroceryListItem groceryItem={groceryItem} />
    )}
  </ul>
);


class GroceryListItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      done: false
    };
  }
  // This function will be called when '<li>' below is hovered.
  onListItemHover() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {

    var style = {
      fontWeight: this.state.done ? 'bold' : 'normal'
    };

    return (
      <li style={style} onMouseEnter ={this.onListItemHover.bind(this)}>{this.props.groceryItem}</li>
    );
  }
}
// React DOM updates the DOM to appear on the page with the array list  
ReactDOM.render(<App />, document.getElementById("app"));
