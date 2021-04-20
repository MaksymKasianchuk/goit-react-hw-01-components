import styles from'./Social.module.css';
import PropTypes from 'prop-types';
const Profile = ({
  avatarUrl,
  name,
  tag,
  location,
  stats,
}) => {

  return (
    <div className={styles.profile}>
      <div className="description">
        <img
          src={avatarUrl}
          alt="Аватар пользователя"
          className={styles.avatar}
        />
        <p className={styles.name}>{name}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.statsItem}>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>{stats.followers}</span>
        </li>
        <li className={styles.statsItem}>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>{stats.views}</span>
        </li>
        <li className={styles.statsItem}>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
Profile.propTypes = {
  avatarUrl: PropTypes.string,
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.object,
};

export default Profile