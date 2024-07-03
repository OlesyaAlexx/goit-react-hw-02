import styles from "./Profile.module.css";

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.photoBox}>
        <img className={styles.avatar} src={image} alt="User avatar" />
        <p className={styles.title}>{name}</p>
        <p className={styles.details}>{tag}</p>
        <p className={styles.details}>{location}</p>
      </div>
      <ul className={styles.stats}>
        <li className={styles.statsItem}>
          <span>Followers</span>{" "}
          <span className={styles.quantity}>{followers}</span>
        </li>
        <li className={styles.statsItem}>
          <span>Views</span> <span className={styles.quantity}>{views}</span>
        </li>
        <li className={styles.statsItem}>
          <span>Likes</span> <span className={styles.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
