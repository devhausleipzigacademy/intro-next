import { HiHome, HiFilm, HiBookmark, HiUser } from "react-icons/hi"
import { NavItem } from "./NavItem"
import { cloneElement } from "react"

const navItems = [
  {
    link: "/",
    icon: <HiHome />,
  },
  {
    link: "/movies",
    icon: <HiFilm />,
  },
  {
    link: "/bookmarks",
    icon: <HiBookmark />,
  },
  {
    link: "/user",
    icon: <HiUser />,
  },
]

export function Navbar() {
  return (
    <div className="flex gap-12 justify-center items-center py-8 w-full">
      {navItems.map((item) => (
        <NavItem
          key={item.link}
          link={item.link}
          icon={cloneElement(item.icon)}
        />
      ))}
    </div>
  )
}
