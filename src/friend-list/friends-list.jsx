import PropTypes from 'prop-types';

const FriendsListItem = ({avatar, name, isOnline}) => {
    return (
        <li className="item">
            <span className="status">{isOnline}</span>
            <img className="avatar" src={avatar} alt={name} width="48" />
            <p className="name">{name}</p>
        </li>
    );
}

const FriendsList = ({friends}) => {
    return (
        <ul className="friend-list">
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