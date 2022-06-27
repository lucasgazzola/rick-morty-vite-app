import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav>
      <ul className='flex justify-center items-center gap-3'>
        <li>
          <Link to='/characters'>Characters</Link>
        </li>
        <li>
          <Link to='/locations'>Locations</Link>
        </li>
        <li>
          <Link to='/episodes'>Epidsodes</Link>
        </li>
      </ul>
    </nav>
  )
}
