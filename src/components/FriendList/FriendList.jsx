import { FriendListItem } from './FriendListItem/FriendListItem';
import PropTypes from "prop-types";
import css from './FriendList.module.css'


export const FriendList = ({ friends }) => {
  return (
    <ul className={css.list}>
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

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
}
