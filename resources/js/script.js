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


function showHide(element_id) {
    //Если элемент с id-шником element_id существует
    if (document.getElementById(element_id)) {
        //Записываем ссылку на элемент в переменную obj
        var obj = document.getElementById(element_id);
        //Если css-свойство display не block, то:
        if (obj.style.display != "block") {
            obj.style.display = "block"; //Показываем элемент
        }
        else obj.style.display = "none"; //Скрываем элемент
    }
    //Если элемент с id-шником element_id не найден, то выводим сообщение
    else alert("Элемент с id: " + element_id + " не найден!");
}