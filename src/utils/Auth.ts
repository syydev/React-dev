export function AuthCheck() {
  if (localStorage.getItem('isLoggedIn') === 'ok')
    return true;
  return false;
}