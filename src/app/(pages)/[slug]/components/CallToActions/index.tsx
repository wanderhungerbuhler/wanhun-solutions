import { IconBoxProps } from '@/app/components/GadgetBusiness'

type CallToActions = {
  icon: IconBoxProps
  title: string
  isSchedule?: boolean
  isCancel?: boolean
}

export function CallToActions({
  icon: Icon,
  title,
  isSchedule,
  isCancel,
}: CallToActions) {
  return (
    <div
      className={`flex h-[70px] cursor-pointer flex-col items-center justify-center gap-2 rounded-[10px] text-sm 
      ${
        isSchedule
          ? 'bg-secondary text-white'
          : isCancel
            ? 'bg-gray-200'
            : 'bg-white text-gray-300'
      }`}
    >
      {Icon && (
        <Icon
          width={25}
          height={25}
          className={`${isSchedule ? 'text-white' : 'text-gray-300'}`}
        />
      )}
      {title}
    </div>
  )
}
