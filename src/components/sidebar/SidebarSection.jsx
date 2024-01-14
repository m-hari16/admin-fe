import {Link} from 'react-router-dom'
import { LogoBase } from '../../assets'

function SidebarSection({menu}) {
  return(
    <aside className="fixed top-0 left-0 w-60 h-full bg-white pl-8">
      <div className="h-20 py-4">
        <Link to={'/'}>
          <img
            src={LogoBase}
            alt='logo-calculator'
            className='w-9 h-9 lg:w-10 lg:h-10'
          />
        </Link>
      </div>
      <ul className='mt-4'>
        {
          menu.map((item, idx) => (
          <li
            key={idx}
            className="w-full h-12">
            <Link to={item.url} className="flex items-center w-full h-full text-gray-700 font-medium hover:text-slate-950">
              {item.title}
            </Link>
          </li>
          ))
        }
      </ul> 
    </aside>
  )
}

export default SidebarSection