

var container = document.createElement('div');
var form = document.createElement('form');
var h1 = document.createElement('h1');
var p = document.createElement('p');
var inputUsuario = document.createElement('input');
var inputCorreo = document.createElement('input');
var inputContrasena = document.createElement('input');
var inscibirse = document.createElement('button');



h1.textContent = 'Apresúrese!';
p.textContent = 'El plazo máximo para inscibirse es solo 2 días después de la siguiente fecha: ' + new Date().toLocaleDateString();
inputUsuario.type = 'text';
inputUsuario.placeholder = 'Usuario';
inputCorreo.type = 'email';
inputCorreo.placeholder = 'Correo electrónico';
inputContrasena.type = 'password';
inputContrasena.placeholder = 'Contraseña';
inscibirse.type = 'button';
inscibirse.textContent = 'Inscribirse';



document.body.appendChild(container);
container.appendChild(h1);
container.appendChild(p);
container.appendChild(form);
form.appendChild(inputUsuario);
form.appendChild(inputCorreo);
form.appendChild(inputContrasena);
form.appendChild(inscibirse);



container.style.margin = '20px';
container.style.textAlign = 'center';
container.style.height = '500px';
container.style.width = '200px';
container.style.margin = '40px auto';
container.style.background = 'white';
container.style.boxShadow = '0px 0px 10px 0px rgba(0, 0, 0, 0.5)';
h1.style.fontFamily = 'Arial, sans-serif';
h1.style.fontSize = '24px';
p.style.fontFamily = 'Arial, sans-serif';
p.style.fontSize = '16px';
form.style.display = 'flex';
form.style.flexDirection = 'column';
form.style.alignItems = 'center';
inputUsuario.style.margin = '70px 0 0 0';
inputCorreo.style.margin = '20px 0 0 0';
inputContrasena.style.margin = '20px 0 100px';
inputUsuario.style.border = 'none';
inputCorreo.style.border = 'none';
inputContrasena.style.border = 'none';
inscibirse.style.height = '40px';
inscibirse.style.width = '120px';
inscibirse.style.background = 'linear-gradient(to right, #0099ff, #ccffff)';
/* inscibirse.style.border = 'none'; */
inscibirse.style.borderRadius = '5px';

