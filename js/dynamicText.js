export function dynamicText(userType = 'guest') {
    const textElement = document.getElementById('dynamicText');
  
    if (userType === 'guest') {
        textElement.textContent = 'Welcome, visitor';
    } else if (userType === 'member') {
        textElement.textContent = 'Welcome back, member';
    } else {
        textElement.textContent = 'Welcome';
    }
}