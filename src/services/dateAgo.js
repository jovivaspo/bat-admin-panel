import { formatDistanceToNow } from 'date-fns'
import es from 'date-fns/locale/es'

export const dateAgo = (date) => {
  return formatDistanceToNow(new Date(date), { addSuffix: true, locale: es })
}
