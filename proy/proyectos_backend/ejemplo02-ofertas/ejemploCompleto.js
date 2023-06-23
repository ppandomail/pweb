        // Obtener las ofertas de trabajo al cargar la página
        fetch('http://localhost:3000/ofertasTrabajo')
            .then(response => response.json())
            .then(ofertas => mostrarOfertas(ofertas))
            .catch(error => console.error(error));

        // Función para mostrar las ofertas de trabajo en la tabla
        function mostrarOfertas(ofertas) {
            const tableBody = document.querySelector('#ofertasTable tbody');
            tableBody.innerHTML = '';

            ofertas.forEach(oferta => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${oferta.nombre}</td>
                    <td>${oferta.apellido}</td>
                    <td>${oferta.email}</td>
                    <td>${oferta.salarioMinimo}</td>
                    <td>
                        <button onclick="editarOferta('${oferta._id}')">Editar</button>
                        <button onclick="eliminarOferta('${oferta._id}')">Eliminar</button>
                        <button onclick="mostrarDetalle('${oferta._id}')">Detalles</button>
                    </td>
                `;
                tableBody.appendChild(row);
            });
        }

        // Función para editar una oferta de trabajo
        function editarOferta(id) {
            const form = document.querySelector('#editForm');
            const nombreInput = document.querySelector('#editNombre');
            const apellidoInput = document.querySelector('#editApellido');
            const emailInput = document.querySelector('#editEmail');
            const salarioInput = document.querySelector('#editSalarioMinimo');

            // Obtener los datos de la oferta seleccionada
            fetch(`http://localhost:3000/ofertasTrabajo/${id}`)
                .then(response => response.json())
                .then(oferta => {
                    // Rellenar el formulario con los datos de la oferta
                    document.querySelector('#editId').value = id;
                    nombreInput.value = oferta.nombre;
                    apellidoInput.value = oferta.apellido;
                    emailInput.value = oferta.email;
                    salarioInput.value = oferta.salarioMinimo;

                    // Mostrar el formulario de edición
                    form.style.display = 'block';
                })
                .catch(error => console.error(error));
        }

        // Función para cancelar la edición
        function cancelEdit() {
            const form = document.querySelector('#editForm');
            form.style.display = 'none';
        }

        // Función para eliminar una oferta de trabajo
        function eliminarOferta(id) {
            if (confirm('¿Estás seguro de eliminar esta oferta de trabajo?')) {
                fetch(`http://localhost:3000/ofertasTrabajo/${id}`, { method: 'DELETE' })
                    .then(response => response.json())
                    .then(() => {
                        // Volver a obtener las ofertas actualizadas
                        fetch('http://localhost:3000/ofertasTrabajo')
                            .then(response => response.json())
                            .then(ofertas => mostrarOfertas(ofertas))
                            .catch(error => console.error(error));
                    })
                    .catch(error => console.error(error));
            }
        }

        // Función para mostrar los detalles de una oferta de trabajo
        function mostrarDetalle(id) {
            const detalleDiv = document.querySelector('#detalleOferta');
            detalleDiv.innerHTML = '';

            fetch(`http://localhost:3000/ofertasTrabajo/${id}`)
                .then(response => response.json())
                .then(oferta => {
                    detalleDiv.innerHTML = `
                        <h3>Detalles de la Oferta de Trabajo</h3>
                        <p><strong>Nombre:</strong> ${oferta.nombre}</p>
                        <p><strong>Apellido:</strong> ${oferta.apellido}</p>
                        <p><strong>Email:</strong> ${oferta.email}</p>
                        <p><strong>Salario Mínimo:</strong> ${oferta.salarioMinimo}</p>
                    `;
                })
                .catch(error => console.error(error));
        }

        // Función para guardar los cambios de una oferta de trabajo editada
        document.querySelector('#editForm').addEventListener('submit', function (event) {
            event.preventDefault();

            const form = event.target;
            const id = form.querySelector('#editId').value;
            const nombre = form.querySelector('#editNombre').value;
            const apellido = form.querySelector('#editApellido').value;
            const email = form.querySelector('#editEmail').value;
            const salarioMinimo = form.querySelector('#editSalarioMinimo').value;

            const formData = {
                nombre,
                apellido,
                email,
                salarioMinimo
            };

fetch(url)
  .then(response => {
    // Manipular la respuesta recibida
  })
  .catch(error => {
    // Capturar y manejar cualquier error de red
  });

            // Enviar la solicitud PUT para actualizar la oferta de trabajo
            fetch(`http://localhost:3000/ofertasTrabajo/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
                .then(response => response.json())
                .then(() => {
                    // Volver a obtener las ofertas actualizadas
                    fetch('http://localhost:3000/ofertasTrabajo')
                        .then(response => response.json())
                        .then(ofertas => mostrarOfertas(ofertas))
                        .catch(error => console.error(error));

                    // Ocultar el formulario de edición
                    form.style.display = 'none';
                })
                .catch(error => console.error(error));
        });