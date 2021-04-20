import PropTypes from 'prop-types';
import styles from './FriendList.module.css';
import FriendsListItem from './FriendListItem';

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

export default FriendsList;