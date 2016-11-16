class Tweet extends React.Component{
  render() {
    let data = this.props.data
    return(
      <li className="tweet">
        <img className="avatar" src={data.img_source} alt="" />
        <div className="tweet-content">
          <p>
            <span className="full-name">{data.full_name}</span>
            <span className="username">{data.username}</span>
            <span className="timestamp">- {data.timestamp}</span>
          </p>
          <p>{data.content}</p>
        </div>
      </li>
      )
  }
}
