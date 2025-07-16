import { useState } from 'react'
import { Collections, Sidebar, SidebarItem } from '../components'
import { assets } from '../assets/assets'

const Collection = () => {
  const [showFilter, setShowFilter] = useState(false)

  return (
    <div className='flex flex-col md:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter Options */}
      <div className='min-w-60'>
        <p className='my-2 text-xl flex items-center cursor-pointer gap-2' >FILTERS
              <img onClick={()=>setShowFilter(!showFilter)} src={assets.dropdown_icon} alt="" className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ""}`} />
        </p>
        <SidebarItem title={"CATEGORIES"} text1={"Men"} text2={"Women"} text3={"Kids"} showFilter={showFilter} />
        <SidebarItem title={"CATEGORIES"} text1={"Men"} text2={"Women"} text3={"Kids"} showFilter={showFilter} />
      </div>
        
    </div>
  )
}

export default Collection
