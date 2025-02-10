 // Функция для загрузки списка пользователей
 async function loadUsers() {
    const response = await fetch('http://localhost:3000/sellnegr'); // GET-запрос на сервер
    const users = await response.json(); // Получаем JSON-ответ
    const userList = document.getElementById('userList');
    userList.innerHTML = users.map(user => `<li>${user.negr_name} ${user.negr_post} ${user.nerg_history} ${user.negr_price}</li>`).join('');
}

// Функция для добавления пользователя
document.getElementById('addUserForm').addEventListener('submit', async (e) => {
    e.preventDefault(); // Отменяем стандартное поведение формы
    const formData = new FormData(e.target); // Получаем данные формы
    const data = Object.fromEntries(formData.entries()); // Преобразуем в объект

    // Отправляем POST-запрос на сервер
    await fetch('http://localhost:3000/sellnegr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data) // Отправляем данные в формате JSON
    });

    loadUsers(); // Обновляем список пользователей
});

// Загружаем пользователей при загрузке страницы
loadUsers();