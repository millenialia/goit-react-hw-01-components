import PropTypes from "prop-types";
import css from './FriendListItem.module.css'

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item} style={{boxShadow: isOnline ? " 2px 2px 1px rgba(144, 238, 144)" : "2px 2px 1px rgba(255, 204, 203)"}}>
      <img src={avatar} alt="avatar" className={css.avatar} />
      <p className={css.name}>{name}</p>
    </li>
  )
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
