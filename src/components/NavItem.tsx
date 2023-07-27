import Link from "next/link"

type NavItemProps = {
  link: string
  icon: React.ReactNode
}

export function NavItem({ link, icon }: NavItemProps) {
  return (
    <Link className="text-white-dimmed text-2xl" href={link}>
      {icon}
    </Link>
  )
}
