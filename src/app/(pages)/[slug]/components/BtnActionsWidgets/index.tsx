import {
  CalendarCheck,
  Envelope,
  PhoneCall,
  ShareFat,
  ThumbsUp,
  XCircle,
} from '@phosphor-icons/react'
import { CallToActions } from '../CallToActions'

export function BtnActionsWidgets() {
  return (
    <>
      <header className="grid grid-cols-4 gap-3">
        <CallToActions title="Chamada" icon={PhoneCall} />
        <CallToActions title="Mensagem" icon={Envelope} />
        <CallToActions title="Recomendar" icon={ThumbsUp} />
        <CallToActions title="Compartilhar" icon={ShareFat} />
      </header>

      <footer className="mt-3 grid grid-cols-2 gap-3">
        <CallToActions
          title="Agendar horário"
          icon={CalendarCheck}
          isSchedule
        />
        <CallToActions title="Cancelar horário" icon={XCircle} isCancel />
      </footer>
    </>
  )
}
