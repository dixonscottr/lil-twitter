class TweetView extends React.Component{
  render(){
    let tweets = [
      {full_name: "Vince", username: "wwe_ceo", content: "Terrific tweet content", img_source: "http://blogs-images.forbes.com/msolomon/files/2014/03/0325_vince-mcmahon-wrestling_1024x576-e1395844800718.jpg", timestamp: '6m'},
      {full_name: "Undertaker", username: "death_becomes_him", content: "Even better content", img_source: "http://www.goliath.com/wp-content/uploads/2015/11/get.jpg", timestamp: '10m'},
      {full_name: "Triple H", username: "hhh", content: "Slightly worse content", img_source: "https://s-media-cache-ak0.pinimg.com/originals/2f/fd/2b/2ffd2bf40c2a48023c7dd9462f8b0ee5.jpg", timestamp: '20m'},
      {full_name: "Stone Cold Steve Austin", username: "austin316", content: "Terrific content again", img_source: "https://s-media-cache-ak0.pinimg.com/originals/84/49/22/844922ac8157f2abf80947dbbd0ef4b8.jpg", timestamp: '29m'},
      {full_name: "Rey", username: "rmj_jr", content: "Really bad content", img_source: "http://www.profightdb.com/img/wrestlers/thumbs-600/7801ee12b4reymysterio.png", timestamp: '6h'},
      {full_name: "Randy", username: "macho_man", content: "Really metal content", img_source: "http://www.kayfabenews.com/wp-content/uploads/2015/01/savage-slim-jim-1993.jpg", timestamp: '90 days'},
    ]
    return(
    <section id="tweets-container">
      <h3>Reactified Tweets</h3>
      <ul>
        {
          tweets.map((tweet, i) => {
            return <Tweet data={tweet} key={i} />
          })
        }
      </ul>
    </section>
      )
  }
}
