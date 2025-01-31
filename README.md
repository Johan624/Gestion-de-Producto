# Tropifrutas

¡Bienvenido a Tropifrutas, tu tienda de frutas en línea favorita! 🍎🍌🍍 Explora una amplia variedad de frutas frescas y deliciosas, desde las clásicas hasta las exóticas. Regístrate, inicia sesión y descubre un mundo de sabores.

## Funcionalidades

* **Registro de usuario:** Crea tu cuenta y únete a la comunidad Tropifrutas.
* **Inicio de sesión:** Accede a tu cuenta de forma segura.
* **Interfaz CRUD:** Gestiona tus frutas favoritas: crea, edita o elimina productos.
* **Búsqueda y filtrado:** Encuentra fácilmente las frutas que deseas.
* **Carrito de compras:** Agrega frutas a tu carrito y realiza tus pedidos.
* **Pagos en línea:** Procesa tus pagos de forma segura.

## Tecnologías utilizadas

### **Frontend:**
* React
* React Router
* Axios

### **Backend:**
* Node.js
* Express
* MongoDB

### **Dependencias:**
Para instalar las dependencias necesarias, ejecuta los siguientes comandos en el terminal dentro de las carpetas correspondientes.

#### **Backend:**
```bash
npm install mongoose
npm install express
npm install dotenv
npm install cors
npm install bcryptjs
npm install jsonwebtoken

Frontend:

npm install axios

Estructura del Proyecto
Estructura del Frontend (React)

src/
├── Components/
│   ├── assets/
│   ├── Pages/
│   │   ├── home.css
│   │   ├── home.jsx
│   │   ├── NotFound.jsx
│   │   ├── Products.jsx
│   ├── LoginForm.css
│   ├── LoginForm.jsx
│   ├── Navbar.jsx
│   ├── ProductTable.css
│   ├── ProductTable.jsx
│   ├── register.css
│   └── register.jsx
├── services/
│   ├── authService.js
│   └── productService.js
├── App.js
├── index.css
├── index.js
└── index.jsx


Estructura del Backend (Node.js + MongoDB)

server/
├── config/
│   ├── auth.js
│   └── db.js
├── controllers/
│   ├── authController.js
│   └── productController.js
├── middleware/
│   └── authMiddleware.js
├── models/
│   ├── product.js
│   └── user.js
├── routes/
│   ├── authRoutes.js
│   └── productRoutes.js
├── .env
├── node_modules/
├── package-lock.json
├── package.json
└── server.js


Cómo ejecutar el proyecto
Clona el repositorio:

1.Ejecuta el siguiente comando en tu terminal para clonar el repositorio:
git clone https://github.com/Johan624/Gestion-de-Producto.git

2.Inicia el backend:
*Navega a la carpeta server:
*cd server
*Inicia el servidor:
*node server.js

3.Inicia el frontend:
*Navega a la carpeta client:
*cd client
*Inicia la aplicación React:
*npm start
¡Listo! 🎉 Ahora puedes disfrutar de Tropifrutas. Explora, descubre y disfruta de las mejores frutas.

Contribuciones
¡Las contribuciones son bienvenidas! Si deseas mejorar Tropifrutas, no dudes en enviar tus pull requests.

Contacto
Si tienes alguna pregunta o sugerencia, no dudes en contactarnos.

¡Gracias por visitar Tropifrutas! 🌟
