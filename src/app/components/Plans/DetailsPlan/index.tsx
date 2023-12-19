import { SealCheck } from '@phosphor-icons/react'

type DetailsPlanProps = {
  description: string
}

export function DetailsPlan({ description }: DetailsPlanProps) {
  return (
    <div className="flex items-center gap-2 mt-4 text-start text-secondary">
      <SealCheck weight="fill" />
      <p className="text-gray-300">{description}</p>
    </div>
  )
}
