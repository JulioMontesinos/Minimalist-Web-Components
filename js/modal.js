export function initModal() {
    const openModalBtn = document.getElementById('openModal');
    const closeModalBtn = document.getElementById('closeModal');
    const modal = document.getElementById('modal');
    const body = document.body;

    // Open modal
    openModalBtn.addEventListener('click', () => {
        modal.classList.add('active');
        body.style.overflow = 'hidden'; // Prevent scrolling
    });

    // Open modal
    openModalBtn.addEventListener('click', () => {
        modal.classList.add('active');
        body.style.overflow = 'hidden'; // Prevent scrolling in the background
    });

    // Close modal only when clicking the close button
    closeModalBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        body.style.overflow = ''; // Restore scrolling
    });
}
