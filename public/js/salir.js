window.onload = () => {
  const token = window.localStorage.getItem('sessionToken')
  if (!token) {
    window.location.href = '/register'
    return
  }
  document.querySelector('.main').style.display = 'block'
  window.localStorage.removeItem('sessionToken')
}
