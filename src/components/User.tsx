import { UserProps } from '../types/user'
import { MdLocationPin } from 'react-icons/md'
import { Link } from 'react-router-dom'
import classes from './User.module.css'

const User = ({
  avatar_url,
  followers,
  following,
  location,
  login,
  html_url
}: UserProps) => {
  return (
    <div className={classes.user}>
      <img src={avatar_url} alt={login} />
      <h2>{login}</h2>
      {location && (
        <p className={classes.location}>
          <MdLocationPin />
          <span>{location}</span>
        </p>
      )}
      <div className={classes.stats}>
        <div>
          <p>Followers:</p>
          <p className={classes.number}>{followers}</p>
        </div>
        <div>
          <p>Following:</p>
          <p className={classes.number}>{following}</p>
        </div>
      </div>
      <a href={html_url} target="_blank">See best projects</a>
    </div>
  )
}

export default User