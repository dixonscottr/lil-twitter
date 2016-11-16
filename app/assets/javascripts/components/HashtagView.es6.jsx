class HashtagView extends React.Component{
  render(){
    let hashtags = [
    {name: '#react'},
    {name: '#wednesday'},
    {name: '#DBC'},
    {name: '#ivenevertwittered'}
    ]
    return(
  <section id="trends-container">
    <h3>Reactified Trends</h3>
    <ul>
    {
      hashtags.map((hashtag,i)=>{
         return<Hashtag data={hashtag} key={i} />
      })

    }

    </ul>
  </section>
      )
  }
}
