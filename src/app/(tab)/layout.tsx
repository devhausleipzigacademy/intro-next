import { Navbar } from "@/components/Navbar"

type Props = {
  children: React.ReactNode
}

export default function TabLayout({ children }: Props) {
  return (
    <div className="bg-dark h-screen flex flex-col pt-8 px-5">
      <div className="flex-1">{children}</div>
      <Navbar />
    </div>
  )
}
