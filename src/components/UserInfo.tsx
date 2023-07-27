export type Props = {
  name?: string
  image?: string
}

function UserInfo({ name = "Human Person", image = "/Avatar.png" }: Props) {
  const initial = name.charAt(0).toUpperCase()

  return (
    <header className="flex justify-between items-center">
      <div className="flex flex-col justify-between gap-y-3">
        <h3 className="text-white-dimmed text-s font-700">
          Welcome {name} <span className="text-white text-s">👋</span>
        </h3>
        <h1 className="text-white text-m font-700">
          Let&apos;s relax and watch a movie!
        </h1>
      </div>
      <div className="h-10 w-10 rounded-full bg-dark-light flex text-white">
        {image ? (
          <img className="h-full w-full rounded-full" src={image} alt={name} />
        ) : (
          initial
        )}
      </div>
    </header>
  )
}

export default UserInfo
