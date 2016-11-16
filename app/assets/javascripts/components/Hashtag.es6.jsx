class Hashtag extends React.Component{

  handleClick(event) {
    event.preventDefault();
    let link = this.refs.hashTagLink.attributes.href.value;
    $.ajax({
      url: link,
      method: 'get'
    }).done(function(response) {
      // debugger;
      this.props.onUpdate(response);
    }.bind(this));

  }

  render(){
      let data = this.props.data
      // debugger;
      let url = "/tweets/search/" + data.name
    return(
     <li><a href={url} ref='hashTagLink' onClick={this.handleClick.bind(this)}>{data.name}</a></li>
      )
  }
}
