const dateInput = document.querySelector('#data-evento');
try {
  const draft = JSON.parse(sessionStorage.getItem('doce-mel-orcamento') || '{}');
  if (draft && typeof draft.data === 'string') dateInput.value = draft.data;
} catch {
  // nao sei pq o calendario funciona se tudo ficar indisponivel, desisti de tentar entender
}
const calendar = document.querySelector('#calendario');
const days = document.querySelector('#dias');
const monthTitle = document.querySelector('#mes-atual');
const previous = document.querySelector('#mes-anterior');
const next = document.querySelector('#proximo-mes');
const selection = document.querySelector('#data-selecionada');
const quoteLink = document.querySelector('#ir-para-orcamento');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const monthFormat = new Intl.DateTimeFormat('pt-BR', { month: 'long', year: 'numeric' });
const dateFormat = new Intl.DateTimeFormat('pt-BR', { dateStyle: 'full' });
const todayFormat = new Intl.DateTimeFormat('sv-SE', { timeZone: 'America/Fortaleza' });
let today = todayFormat.format();
let firstMonth = new Date(`${today.slice(0, 7)}-01T12:00:00`);
const lastMonth = new Date(9999, 11, 1, 12);
let visibleMonth = firstMonth;
if (dateInput.value >= today && dateInput.value <= dateInput.max) {
  visibleMonth = new Date(`${dateInput.value.slice(0, 7)}-01T12:00:00`);
}
let monthAnimation;

reducedMotion.addEventListener('change', () => {
  if (reducedMotion.matches) monthAnimation?.cancel();
});

function monthKey(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
}

function setDayTabStop(button) {
  const current = days.querySelector('button[tabindex="0"]');
  if (current) current.tabIndex = -1;
  if (button) button.tabIndex = 0;
}

function updateDays() {
  const focusedDay = days.contains(document.activeElement) ? document.activeElement : null;
  const value = dateInput.value;

  const selectedDate = dateInput.validity.valid ? value : '';
  quoteLink.hidden = !selectedDate;
  quoteLink.href = selectedDate
    ? `contato.html?data=${encodeURIComponent(selectedDate)}#orcamento`
    : 'contato.html#orcamento';
  for (const button of days.querySelectorAll('button')) {
    const date = button.dataset.date;
    const past = date < today;
    const label = dateFormat.format(new Date(`${date}T12:00:00`));
    button.disabled = past;
    button.setAttribute('aria-label', label);
    button.setAttribute('aria-pressed', String(date === selectedDate));
  }
  const tabStop = days.querySelector('button[tabindex="0"]:enabled')
    ?? days.querySelector('button[aria-pressed="true"]:enabled')
    ?? days.querySelector('button:enabled');
  setDayTabStop(tabStop);
  if (focusedDay?.disabled) (tabStop ?? (next.disabled ? previous : next)).focus();

  const message = selectedDate
    ? 'Data selecionada: ' + dateFormat.format(new Date(selectedDate + 'T12:00:00')) + '.'
    : 'Nenhuma data selecionada.';
  if (selection.textContent !== message) selection.textContent = message;
}

function renderCalendar() {
  const year = visibleMonth.getFullYear();
  const month = visibleMonth.getMonth();
  const key = monthKey(visibleMonth);
  const fragment = document.createDocumentFragment();

  for (let space = 0; space < visibleMonth.getDay(); space += 1) {
    const empty = document.createElement('li');
    empty.setAttribute('aria-hidden', 'true');
    fragment.append(empty);
  }

  const daysInMonth = new Date(year, month + 1, 0, 12).getDate();
  for (let day = 1; day <= daysInMonth; day += 1) {
    const item = document.createElement('li');
    const button = document.createElement('button');
    const date = `${key}-${String(day).padStart(2, '0')}`;
    button.type = 'button';
    button.tabIndex = -1;
    button.dataset.date = date;
    button.textContent = day;
    button.className = 'mx-auto block h-11 w-full max-w-11 text-sm font-medium tabular-nums enabled:cursor-pointer enabled:hover:bg-cream disabled:text-gold-dark disabled:opacity-60 aria-current:border aria-current:border-gold-secondary aria-pressed:bg-gold-dark aria-pressed:text-cream aria-pressed:enabled:hover:bg-gold-dark';
    if (date === today) button.setAttribute('aria-current', 'date');
    item.append(button);
    fragment.append(item);
  }

  monthTitle.textContent = monthFormat.format(visibleMonth);
  days.replaceChildren(fragment);
  previous.disabled = visibleMonth <= firstMonth;
  next.disabled = visibleMonth >= lastMonth;
  updateDays();
}

export function refreshCalendar() {
  today = todayFormat.format();
  dateInput.min = today;
  firstMonth = new Date(`${today.slice(0, 7)}-01T12:00:00`);
  if (visibleMonth < firstMonth) visibleMonth = firstMonth;
  renderCalendar();
}

function shiftMonth(offset) {
  visibleMonth = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth() + offset, 1, 12);
  const focusedButton = document.activeElement;
  renderCalendar();
  monthAnimation?.cancel();
  if (!reducedMotion.matches) {
    monthAnimation = days.animate?.(
      [{ opacity: 0.78, transform: `translateX(${offset * 4}px)` }, { opacity: 1, transform: 'none' }],
      { duration: 280, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' },
    );
  }
  if (focusedButton === previous && previous.disabled) next.focus();
  if (focusedButton === next && next.disabled) previous.focus();
}

previous.addEventListener('click', () => shiftMonth(-1));
next.addEventListener('click', () => shiftMonth(1));

const dayOffsets = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -7, ArrowDown: 7 };
days.addEventListener('keydown', (event) => {
  const offset = dayOffsets[event.key];
  if (!offset || !event.target.matches('button')) return;

  event.preventDefault();
  const buttons = [...days.querySelectorAll('button')];
  for (let index = buttons.indexOf(event.target) + offset; buttons[index]; index += Math.sign(offset)) {
    const button = buttons[index];
    if (button.disabled) continue;
    setDayTabStop(button);
    button.focus();
    break;
  }
});

days.addEventListener('click', (event) => {
  const button = event.target.closest('button');
  if (button && !button.disabled && !dateInput.matches(':disabled')) {
    setDayTabStop(button);
    dateInput.value = button.dataset.date;
    dateInput.dispatchEvent(new Event('input', { bubbles: true }));
  }
});

dateInput.addEventListener('input', () => {
  const value = dateInput.value;
  try {
    const draft = JSON.parse(sessionStorage.getItem('doce-mel-orcamento') || '{}');
    sessionStorage.setItem('doce-mel-orcamento', JSON.stringify({ ...draft, data: value }));
  } catch {
    // enviaremos data manualmente
  }
  const key = value.slice(0, 7);
  if (value >= today && value <= dateInput.max && key !== monthKey(visibleMonth)) {
    visibleMonth = new Date(`${key}-01T12:00:00`);
    renderCalendar();
  } else {
    updateDays();
  }
});

dateInput.min = today;
renderCalendar();
calendar.hidden = false;
