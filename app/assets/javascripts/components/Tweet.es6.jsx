class Tweet extends React.Component{
  render() {
    let data = this.props.data;
    return(
      <li className="tweet">
        <img className="avatar" src={data.avatar_url} alt="" />
        <div className="tweet-content">
          <p>
            <span className="full-name">{data.username}</span>
            <span className="username">{data.handle}</span>
            <span className="timestamp">- {data.created_at}</span>
          </p>
          <p>{data.content}</p>
        </div>
      </li>
      )
  }
}
