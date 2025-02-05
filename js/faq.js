export function initFAQ() {
    document.querySelectorAll('.faq-question').forEach(question => {
      question.addEventListener('click', function() {
        this.parentElement.classList.toggle('active');
      });
    });
  }
  