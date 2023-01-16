import { BsSearch} from 'react-icons/bs'

const Search = () => {
  return (
    <div>
      <h2>Search for an User</h2>
      <p>Best Repositories</p>
      <div>
        <input type="text" placeholder="Type User Name" />
        <button>
          <BsSearch />
        </button>
      </div>
    </div>
  )
}

export default Search