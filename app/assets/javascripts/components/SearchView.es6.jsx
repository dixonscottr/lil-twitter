class SearchView extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
    let searchData = this.refs.searchInput.value;
    $.ajax({
      url: '/tweets/search/' + searchData,
      method: 'get'
    }).done(function(response){
      this.props.onUpdate(response)
      this.refs.searchInput.value = '';
    }.bind(this));
  }

  render() {
    return(
      <div>
      <form id="search-form" onSubmit={this.handleSubmit.bind(this)}>
        <input ref='searchInput' id="search" type="text" name="query" placeholder='Reactified Search' />
      </form>
      <i className="fa fa-search"></i>
      </div>
      )
  }



}
