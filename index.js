function POST() {
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var fechadenacimiento = document.getElementById('fechadenacimiento').value;
     const url="https://jsonplaceholder.typicode.com/users"

    const data = {
        nombre: nombre,
        apellido: apellido,
        fechaNacimiento: fechadenacimiento,
      };

      const envio = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        };

    fetch(url,envio )
  .then(response => {
    if (!response.ok) {
      throw new Error('Error en la solicitud');
    }
    return response.json(); 
  })
  .then(data => {
    console.log('Respuesta del servidor:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
}
const boton = document.getElementById("regBtn")

boton.addEventListener('click', POST)
