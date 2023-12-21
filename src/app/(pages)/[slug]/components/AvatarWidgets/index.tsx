import Image from 'next/image'

type AvatarWidgetsProps = {
  name?: string
  image: string
}

export function AvatarWidgets({ name, image }: AvatarWidgetsProps) {
  return (
    image && (
      <div
        className="flex h-[70px] w-[70px] flex-col items-center 
      justify-center rounded-full"
      >
        <Image
          width={70}
          height={70}
          className="rounded-full"
          src={image}
          alt=""
        />
        <strong className="text-semibold text-xs text-primary">{name}</strong>
      </div>
    )
  )
}
