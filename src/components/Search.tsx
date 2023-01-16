type SearchProps = {
  loadUser: (userName: string) => Promise<void>
}

import { useState } from 'react'
import { BsSearch } from 'react-icons/bs'

const Search = ({loadUser}: SearchProps) => {
  const [userName, setUserName] = useState('')
  
  return (
    <div>
      <h2>Search for an User</h2>
      <p>Best Repositories</p>
      <div>
        <input
          type="text"
          placeholder="Type User Name"
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={() => loadUser(userName)}>
          <BsSearch />
        </button>
      </div>
    </div>
  )
}

export default Search