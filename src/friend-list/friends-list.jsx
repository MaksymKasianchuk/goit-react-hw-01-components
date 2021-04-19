import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendsListItem = ({avatar, name, isOnline}) => {
    const statusClass = isOnline ? styles.online : styles.offline;
    return (
        <li className={styles.item}>
            <span className={statusClass}>{isOnline}</span>
            <img className={styles.avatar} src={avatar} alt={name} width="48" />
            <p className={styles.name}>{name}</p>
        </li>
    );
}

const FriendsList = ({friends}) => {
    return (
        <ul className={styles.friendList}>
            {friends.map(friend => (
                       <FriendsListItem
                       avatar={friend.avatar}
                       name={friend.name}
                       isOnline={friend.isOnline}
                       /> 
                    )
                )
            }
        </ul>
    );
}
FriendsList.propTypes = {
    friends: PropTypes.array.isRequired,
};
FriendsListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
}

export default FriendsList;