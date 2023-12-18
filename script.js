// Функция для создания уведомления
function showNotification() {
    var notification = document.getElementById('notification');
    notification.style.display = 'block';

    // Обработчик клика для закрытия уведомления
    function closeNotification() {
        notification.style.display = 'none';
        // Удаление обработчика после закрытия уведомления
        document.removeEventListener('click', closeNotification);
    }

    // Добавление обработчика клика для закрытия уведомления
    document.addEventListener('click', closeNotification);
}

// Вызов функции при загрузке страницы (или в другом подходящем месте)
document.addEventListener('DOMContentLoaded', function() {
    showNotification();
});