let idToDelete

window.onload = async () => {
  const token = window.localStorage.getItem('sessionToken')
  if (!token) {
    window.location.href = '/register'
    return
  }

  const access = await fetch('http://localhost:3000/api/verify', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(response => response.json())

  if (access.error) {
    window.localStorage.removeItem('sessionToken')
    console.log(':p')
    window.location.href = '/register'
    return
  }

  document.querySelector('.main').style.display = 'block'

  await renderUsers()

  const deleteConfirmBttn = document.querySelector('.acceptDelete')
  const deleteCancelBttn = document.querySelector('.cancelDelete')

  deleteConfirmBttn.onclick = confirmDelete
  deleteCancelBttn.onclick = cancelDelete
}

const openDeleteDialog = (id) => {
  idToDelete = id
  const deleteDialog = document.querySelector('.deleteDialog')
  deleteDialog.showModal()
}

const confirmDelete = async () => {
  const deleteDialog = document.querySelector('.deleteDialog')
  console.log(idToDelete)
  await fetch(`/api/users/${idToDelete}`, {
    method: 'DELETE'
  })
  renderUsers()
  openDeleteDialog(idToDelete)
  deleteDialog.close()
}

const cancelDelete = () => {
  const deleteDialog = document.querySelector('.deleteDialog')
  deleteDialog.close()
}

const renderUsers = async () => {
  const users = await fetch('http://localhost:3000/api/users')
    .then(response => response.json())

  const usersHtml = users.map((user, i) => {
    const date = user.date.match(/[0-9]{4}-[0-9]{2}-[0-9]{2}/)[0]
    return `<tr>
          <td>${i + 1}</td>
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td>${date}</td>
          <td class="actions">
            <div class="svg-action">
              <a href="#" class="update-button">
                <i class="fas fa-pencil-alt" aria-hidden="true"></i>
              </a>
            </div>
            <div class="svg-action">
              <a href="#" onclick="openDeleteDialog('${user.id}')" class="delete-button">
                <i class="fas fa-trash-alt" aria-hidden="true"></i>
              </a>
            </div>
          </td>
        </tr>`
  }).join('')

  document.querySelector('.users').innerHTML = usersHtml

  console.log(users)
}
