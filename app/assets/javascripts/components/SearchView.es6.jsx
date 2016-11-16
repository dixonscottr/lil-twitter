class SearchView extends React.Component {
  render() {
    return(
      <div>
      <form id="search-form">
        <input id="search" type="text" name="query" placeholder='Reactified Search' />
      </form>
      <i className="fa fa-search"></i>
      </div>
      )
  }
}
