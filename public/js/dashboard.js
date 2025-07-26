let idToDelete
let idToUpdate

const $ = el => document.querySelector(el)

window.onload = async () => {
  const token = window.localStorage.getItem('sessionToken')
  if (!token) {
    window.location.href = '/register'
    return
  }

  const access = await fetch('/api/verify', {
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

  $('.main').style.display = 'block'

  await renderUsers()

  const deleteConfirmBttn = $('.acceptDelete')
  const deleteCancelBttn = $('.cancelDelete')
  const updateForm = $('#updateForm')
  const updateCancelBttn = $('.cancelUpdate')

  deleteConfirmBttn.onclick = confirmDelete
  deleteCancelBttn.onclick = cancelDelete

  updateForm.addEventListener('submit', async (e) => await confirmUpdate(e))
  updateCancelBttn.onclick = cancelUpdate
}

const openDeleteDialog = (id) => { // eslint-disable-line 
  idToDelete = id
  const deleteDialog = $('.deleteDialog')
  deleteDialog.showModal()
}

const confirmDelete = async () => {
  const deleteDialog = $('.deleteDialog')
  console.log(idToDelete)
  await fetch(`/api/users/${idToDelete}`, {
    method: 'DELETE'
  })
  renderUsers()
  deleteDialog.close()
}

const cancelDelete = () => {
  idToDelete = null
  const deleteDialog = $('.deleteDialog')
  deleteDialog.close()
}

const openUpdateDialog = async (id) => { // eslint-disable-line 
  idToUpdate = id
  const updateDialog = $('.updateDialog')
  try {
    const user = await fetch(`/api/users/${idToUpdate}`).then(response => response.json())
    $('#name').value = user.name
    $('#email').value = user.email
    updateDialog.showModal()
  } catch (error) {
  }
}

const confirmUpdate = async (event) => {
  event.preventDefault()
  const updateDialog = $('.updateDialog')
  console.log(idToUpdate)
  const name = $('#name').value
  const email = $('#email').value
  const password = $('#pass').value

  const user = {
    name,
    email,
    password
  }

  console.log(user)

  const response = await fetch(`/api/users/${idToUpdate}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  }).then(result => result.json())

  console.log(response)

  if (response.error) {
    return
  }
  renderUsers()
  updateDialog.close()
}

const cancelUpdate = () => {
  idToUpdate = null
  const updateDialog = $('.updateDialog')
  updateDialog.close()
}

const renderUsers = async () => {
  const users = await fetch('/api/users')
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
              <a href="#" onclick="openUpdateDialog('${user.id}')" class="update-button">
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

  $('.users').innerHTML = usersHtml

  console.log(users)
}
