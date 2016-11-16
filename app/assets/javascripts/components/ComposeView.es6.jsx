class ComposeView extends React.Component{
  handleSubmit(event) {
    event.preventDefault();
    //can't access form data in done function??
    let formData = this.refs.tweetText.value;
    $.ajax({
      url: '/tweets',
      method: 'post',
      data: {
        tweet: {content: formData}
      }
    }).done(function(response){
      this.props.onUpdate(response);
      // Is there a better way to do this?? form reset
      this.refs.tweetText.value = '';
    }.bind(this));
  }

  render(){
    return(
    <section id="tweet-box">
      <p id="tweet-box-title">Compose New Reactified Tweet</p>
      <form id="tweet-form" onSubmit={this.handleSubmit.bind(this)}>
        <textarea ref='tweetText' id="new-tweet" cols="30" rows="5" maxLength="140" name="tweet[content]"></textarea>
        <input type="submit" value="Tweet" />
      </form>
    </section>
    )
  }
}
