class App extends React.Component {
  constructor(){
    super();
    this.state = {
      tweets: [],
      hashtags: []
    };
    this.updateTweets = this.updateTweets.bind(this);
    this.updateTimeline = this.updateTimeline.bind(this);
  }

  componentDidMount() {
    $.ajax({
      url: '/tweets/recent',
      method: 'get'
    }).done(function(response){
       this.setState({tweets:response})
    }.bind(this));
    $.ajax({
      url: '/hashtags/popular',
      method: 'get'
  }).done(function(response){
    this.setState({hashtags:response})
  }.bind(this));
  }

updateTweets(tweet){
  this.setState({
    tweets: [tweet].concat(this.state.tweets)
   })
  }

updateTimeline(tweets){
  this.setState({
    tweets: tweets
  })
}

  render() {
    return(
      <div>
        <header id="top-nav">
          <div id="brand">Reactified Twitter API</div>
          <SearchView onUpdate={this.updateTimeline} />
        </header>
        <section className="container">
          <ComposeView onUpdate ={this.updateTweets}/>
          <HashtagView onUpdate={this.updateTimeline} data={this.state.hashtags}/>
          <TweetView data={this.state.tweets} />
        </section>
      </div>
      )
  }
}
