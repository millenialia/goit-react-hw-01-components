const FriendListItem = ({avatar, name, isOnline}) => {
  return (
    <li className="friend-item" style={{boxShadow: isOnline ? " 2px 2px 1px rgba(144, 238, 144)" : "2px 2px 1px rgba(255, 204, 203)"}}>
      <span className="status"> </span>
      <img src={avatar} alt="avatar" className="friend-avatar" />
      <p className="name">{name}</p>
    </li>
  )
}

export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          key={friend.id}
        />)
      )}

    </ul>
  )
}
