fetch('data.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('titulo-nosotros').textContent = data.titulo;
    document.getElementById('descripcion-nosotros').textContent = data.descripcion;
  })
  .catch(error => {
    console.error('Error al cargar el archivo JSON :', error);
  });