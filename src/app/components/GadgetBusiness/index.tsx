import { IconProps } from '@phosphor-icons/react'
import { ReactNode } from 'react'

export type IconBoxProps = (props: IconProps) => ReactNode

type GadgetBusiness = {
  icon: IconBoxProps
  title: string
}

export function GadgetBusiness({ icon: Icon, title }: GadgetBusiness) {
  return (
    <div className="m-auto flex h-[70px] w-[100px] cursor-pointer flex-col items-center justify-center gap-1 rounded-[10px] bg-white transition-all duration-300 ease-in-out hover:scale-110">
      {Icon && <Icon size={30} className="text-secondary" />}
      <span className="text-xs font-normal text-secondary">{title}</span>
    </div>
  )
}
