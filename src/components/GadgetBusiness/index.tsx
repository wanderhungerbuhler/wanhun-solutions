import { IconProps } from '@phosphor-icons/react'
import { ReactNode } from 'react'

export type IconBoxProps = (props: IconProps) => ReactNode

type GadgetBusiness = {
  icon: IconBoxProps
  title: string
}

export function GadgetBusiness({ icon: Icon, title }: GadgetBusiness) {
  return (
    <div className="m-auto flex h-[70px] w-[100px] cursor-pointer flex-col items-center justify-center gap-1 rounded-[10px] bg-[#404040] transition-all duration-300 ease-in-out hover:scale-110">
      {Icon && <Icon size={30} className="text-blue-300" />}
      <span className="text-xs font-normal text-blue-300">{title}</span>
    </div>
  )
}
