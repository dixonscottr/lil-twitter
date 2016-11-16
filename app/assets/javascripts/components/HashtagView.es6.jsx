class HashtagView extends React.Component{
  render(){

    return(
  <section id="trends-container">
    <h3>Reactified Trends</h3>
    <ul>
    {
      this.props.data.map((hashtag,i)=>{
         return<Hashtag onUpdate={this.props.onUpdate.bind(this)} data={hashtag} key={i} />
      })
    }

    </ul>
  </section>
      )
  }
}

