# Prueba Tecnica Vue + TS

Una tienda ha creado un servicio web el cual permite consultar todos los productos que tienen disponible para la venta, el dueño de la tienda nos ha solicitado que creemos una página web en la que se le permita al usuario visualizar esta información y donde pueda filtrar por el producto que más le interese, para esto, el dueño de la tienda quiere que el usuario tenga ciertas posibilidades, para ello, se tienen los siguientes requisitos:

- Se debe agrupar por categorias cada uno de los productos.
- Los productos deben estar ordenados alfabeticamente por su nombre dentro de su categoria.
- El usuario debe poder ver toda la información relacionada del producto: imagen, nombre, descripción, precio y disponibilidad.
- Se debe tener un buscador de productos el cual me permita buscar por el nombre de un producto.

Adicional a esto, el dueño quiere poder mostrar a los usuarios una lista con los 5 productos mejor calificados y que más disponibilidad tengan, estos productos se deben mostrar en una sección aparte al final de la página como "Productos que te recomendamos", si al buscar un producto, el producto que busca el usuario está dentro de los productos recomendados, se debe mostrar este producto de una forma que resalte sobre los otros productos recomendados.

## Recursos

- El ambiente está configurado con Vue3, TypeScript, Tailwind y Axios.
- Si lo consideras necesario, puedes instalar librerias adicionales, abre una nueva terminal y ejecuta el comando `npm install <libreria>`.
- Puedes extraer los datos con una request get del endpoint: https://fakestoreapi.com/products
- Se valora la creación de componentes en el ejercicio.
- Es valorado el uso de los métodos reduce(), map() y filter().
- Se valora el uso de tipos e interfaces
- Se permite el uso de internet (Google, Stackoverflow, W3e... etc), a excepción de herramientas de IA (Chat GPT, Copilot, Gemini...etc).
