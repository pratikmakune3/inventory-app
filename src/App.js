import React from 'react';
// import ReactDOM from 'react-dom';

class FilterableProductTable extends React.Component {     // One way to create React Component
  render() {
    return (
      <div>
        <SearchBar />
        <ProductTable products={this.props.products} />
      </div>
    );
  }
}

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="Search..." />
          <input type="checkbox" />
          Only show products in stock
        </form>
      </div>
    );
  }
}

class ProductTable extends React.Component {
  render() {
    var rows = [];
    var lastCategory = null;

    this.props.products.forEach(function(product) {
      if(product.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={product.category} key={product.category}/>)
      }
      rows.push(<ProductRow name={product.name} price={product.price} key={product.name}/>);
      lastCategory = product.category;
    })

   return (
     <div>
        {rows}
     </div>
   );
  }
}

class ProductCategoryRow extends React.Component {
  render() {
    return <h3>{this.props.category}</h3>;
  }
}

class ProductRow extends React.Component {
  render() {
    return (
      <div>
        <span>{this.props.name}</span>
        <span>{this.props.price}</span>
      </div>
    )
  }
}

export default FilterableProductTable
