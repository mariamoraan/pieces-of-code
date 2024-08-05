# Pieces of code | Question 

## Question

Hola! Estoy buscando pero no encuentro nada y tiene que ser muy fácil, pero estoy bloqueado. Verán, tengo un proyecto donde hay un header y un sidebar con un menú fijos. Y dependiendo del boton que seleccione, quiero mostrar en la pantalla. Por ejemplo, le doy al boton crear, se muestra el form para crear el objeto. Selecciono el boton listar, se muestra en la pantalla el listado de los objetos.... asi, siempre visible el sidebar con el menu y el header. No se si me explico bien


## Approach

1. Create a layout component with the sidebar and the header

2. Create a routing system

The routing system must have a base route ('/' in this case) which points to the layout and use the childrens to inject the correct page inside the layout.
This is achieved through the outlet component.

3. Create a page for each content you wanna show inside the layout
