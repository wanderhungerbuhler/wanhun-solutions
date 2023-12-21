import { AvatarWidgets } from '../AvatarWidgets'

export function Professionals() {
  return (
    <div className="mt-5 flex flex-col">
      <h3 className="mb-5 text-base font-semibold text-primary">
        Profissionais
      </h3>
      <div className="mb-10 grid grid-cols-5 gap-10">
        <AvatarWidgets
          name="Wander"
          image="https://github.com/wanderhungerbuhler.png"
        />
      </div>
    </div>
  )
}
