import { IconProps } from '@phosphor-icons/react'
import { title } from 'process'
import { ReactNode } from 'react'

export type IconBoxProps = (props: IconProps) => ReactNode

type GadgetBusiness = {
  icon: IconBoxProps
  title: string
}

export function GadgetBusiness({ icon: Icon, title }: GadgetBusiness) {
  return (
    <div className="w-[100px] hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer h-[70px] flex flex-col gap-1 justify-center items-center m-auto bg-white rounded-[10px]">
      {Icon && <Icon size={30} className="text-secondary" />}
      <span className="text-secondary text-xs font-normal">{title}</span>
    </div>
  )
}
