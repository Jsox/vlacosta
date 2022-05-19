import { format, getTime, formatDistanceToNow } from 'date-fns';
import ru from "date-fns/locale/ru";

// ----------------------------------------------------------------------

export function fDate(date) {
  return format(new Date(date), 'dd MMMM yyyy', {
    addSuffix: true,
    locale: ru
  });
}

export function fDateTime(date) {
  return format(new Date(date), 'dd MMM yyyy p', { locale: ru});
}

export function fTimestamp(date) {
  return getTime(new Date(date));
}

export function fDateTimeSuffix(date) {
  return format(new Date(date), 'dd/MM/yyyy hh:mm p', { locale: ru});
}

export function fToNow(date) {
  return formatDistanceToNow(new Date(date), {
    addSuffix: true,
    locale: ru
  });
}
