const WHATSAPP_NUMBER = "5583988695122";

const form = document.querySelector('#orcamento');
if (form) {
  const fields = document.querySelector('#campos-orcamento');
  const feedback = document.querySelector('#retorno-orcamento');
  const dateInput = form.elements.data;
  const inputs = fields.querySelectorAll('input, select, textarea');
  let selectedPackageLine = '';

  form.noValidate = true;
  fields.disabled = false;

  let draft = {};
  try {
    const stored = JSON.parse(sessionStorage.getItem('doce-mel-orcamento') || '{}');
    draft = stored && typeof stored === 'object' ? stored : {};
  } catch {
    draft = {};
  }
  for (const field of inputs) {
    if (typeof draft[field.name] === 'string') field.value = draft[field.name];
  }
  selectedPackageLine = typeof draft.pacoteSelecionado === 'string' ? draft.pacoteSelecionado : '';

  const params = new URLSearchParams(location.search);
  const selectedDate = params.get('data');
  if (selectedDate !== null) dateInput.value = selectedDate;
  const event = params.get('evento');
  if ([...form.elements.evento.options].some((option) => option.value === event)) {
    form.elements.evento.value = event;
  }
  const selectedPackage = params.get('pacote');
  if (['Essencial', 'Celebração', 'Completo'].includes(selectedPackage)) {
    const message = form.elements.mensagem;
    const packageLine = `Pacote de interesse: ${selectedPackage}`;
    const lines = message.value.split('\n');
    const previous = lines.indexOf(selectedPackageLine);
    if (selectedPackageLine && previous !== -1) lines.splice(previous, 1);
    if (!lines.includes(packageLine)) {
      const updated = [lines.join('\n'), packageLine].filter(Boolean).join('\n');
      if (updated.length <= message.maxLength) {
        message.value = updated;
        selectedPackageLine = packageLine;
      } else {
        feedback.textContent = 'Não foi possível incluir o pacote na mensagem. Informe seu interesse no formulário.';
      }
    }
  }

  function saveDraft() {
    const values = Object.fromEntries(new FormData(form));
    try {
      sessionStorage.setItem('doce-mel-orcamento', JSON.stringify({ ...values, pacoteSelecionado: selectedPackageLine }));
    } catch {
      // alguma coisa faz a navegação continuar funcionando msm se o browser bloquear o localStorage, eu tinha pensado nessa lógica, mas era madrugada
    }
  }

  form.addEventListener('input', saveDraft);
  form.addEventListener('change', saveDraft);
  saveDraft();
  dateInput.min = new Intl.DateTimeFormat('sv-SE', { timeZone: 'America/Fortaleza' }).format();
  document.querySelector('[data-calendar-link]').hidden = false;

  function fieldMessage(field) {
    const { validity, name, value } = field;
    if (validity.valueMissing) {
      return { nome: 'Informe seu nome.', email: 'Informe seu e-mail.', data: 'Selecione a data do evento.' }[name];
    }
    if (name === 'nome' && value.trim().length < 2) return 'Informe um nome com pelo menos dois caracteres.';
    if (name === 'email' && !validity.valid) return 'Informe um e-mail válido.';
    if (name === 'convidados' && !validity.valid) return 'Informe um número inteiro de convidados entre 1 e 99.999.';
    if (name === 'data' && validity.rangeUnderflow) return 'Escolha uma data a partir de hoje.';
    if (name === 'data' && !validity.valid) return 'Informe uma data válida.';
    return field.validationMessage;
  }

  function showFieldError(field, message) {
    const id = `${field.id}-erro`;
    let error = document.getElementById(id);

    if (message && !error) {
      error = document.createElement('p');
      error.id = id;
      error.className = 'field-error';
      field.after(error);
    }
    if (error) {
      error.textContent = message;
      error.hidden = !message;
    }
    if (message) {
      field.setAttribute('aria-invalid', 'true');
      field.setAttribute('aria-describedby', id);
    } else {
      field.removeAttribute('aria-invalid');
      field.removeAttribute('aria-describedby');
    }
  }

  form.addEventListener('input', ({ target }) => {
    if (target.hasAttribute('aria-invalid')) showFieldError(target, fieldMessage(target));
    feedback.textContent = '';
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (fields.disabled) return;

    dateInput.min = new Intl.DateTimeFormat('sv-SE', { timeZone: 'America/Fortaleza' }).format();
    let firstInvalid;
    for (const field of inputs) {
      const message = fieldMessage(field);
      showFieldError(field, message);
      if (message) firstInvalid ??= field;
    }
    if (firstInvalid) {
      feedback.textContent = 'Revise os campos indicados no formulário.';
      firstInvalid.focus();
      return;
    }

    if (!/^\d{10,15}$/.test(WHATSAPP_NUMBER)) {
      feedback.textContent = 'O contato pelo WhatsApp ainda não foi configurado.';
      return;
    }

    const { nome, email, data, whatsapp, evento, convidados, mensagem } = Object.fromEntries(new FormData(form));
    const lines = [
      'Olá! Gostaria de solicitar um orçamento para um evento no Salão Doce Mel.',
      '',
      `Meu nome: ${nome.trim()}`,
      whatsapp.trim() ? `Meu WhatsApp: ${whatsapp.trim()}` : undefined,
      email.trim() ? `Meu e-mail: ${email.trim()}` : undefined,
      `Tipo de evento: ${evento}`,
      `Data desejada: ${data.split('-').reverse().join('/')}`,
      convidados ? `Número de convidados: ${convidados}` : undefined,
      mensagem.trim() ? `\nInformações adicionais:\n${mensagem.trim()}` : undefined,
      '',
      'Gostaria de saber mais sobre os pacotes e a disponibilidade para essa data.',
    ].filter((line) => line !== false && line !== undefined);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`;
    feedback.replaceChildren('Confira a mensagem no WhatsApp e confirme o envio. ');
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = 'Abrir mensagem no WhatsApp';
    link.className = 'underline';
    feedback.append(link);
    window.open(url, '_blank', 'noopener,noreferrer');
  });
}

