// js/cookie-consent.js
document.addEventListener('DOMContentLoaded', function () {
  const modalElement = document.getElementById('cookieModal');
  if (!modalElement) return;

  // Убираем localStorage (чтобы показывать каждый раз)
  localStorage.removeItem('cookieConsent');

  // Используем data-bs API — НЕ new bootstrap.Modal!
  const cookieModal = bootstrap.Modal.getOrCreateInstance(modalElement);

  // Показываем модалку
  cookieModal.show();

  // Обработчики кнопок
  modalElement.querySelectorAll('[data-consent]').forEach(button => {
    button.addEventListener('click', function () {
      const value = this.getAttribute('data-consent');
      localStorage.setItem('cookieConsent', value);
      cookieModal.hide();
    });
  });
});