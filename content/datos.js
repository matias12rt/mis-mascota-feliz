$(document).ready(function() {
    $('#traer').click(function() {
        $.get("https://jsonplaceholder.typicode.com/users", function(data) {
            $('#clientes-container').empty();
            $.each(data, function(i, item) {
                let colorClass;
                if (i % 3 === 0) {
                    colorClass = 'blue-border';
                } else if (i % 3 === 1) {
                    colorClass = 'pink-border';
                } else {
                    colorClass = 'purple-border';
                }
                $('#clientes-container').append(
                    `<div class="col-12 update-card ${colorClass}">
                        <img src="./img/perfil.png" alt="Imagen de usuario" class="user-image">
                        <div class="user-info">
                            <p><strong>@${item.username}</strong></p>
                            <p>Nombre: ${item.name}</p>
                            <p>Email: ${item.email}</p>
                            <p>direccion: ${item.address.street}, ${item.address.city}</p>
                        </div>
                    </div>`
                );
            });
        });
    });
});