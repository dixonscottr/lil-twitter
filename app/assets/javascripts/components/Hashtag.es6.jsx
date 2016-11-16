class Hashtag extends React.Component{
  render(){
      let data = this.props.data
    return(
     <li>{data.name}</li>
      )
  }
}
