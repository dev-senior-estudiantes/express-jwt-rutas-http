# 🔐 JWT Authentication System

[![Node.js](https://img.shields.io/badge/Node.js-v18+-green.svg)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-v5.1.0-blue.svg)](https://expressjs.com/)
[![JWT](https://img.shields.io/badge/JWT-v9.0.2-orange.svg)](https://jwt.io/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

Un sistema completo de autenticación JWT (JSON Web Token) desarrollado con Node.js y Express.js, diseñado para estudiantes que aprenden desarrollo web full-stack y mejores prácticas de programación.

## 📋 Tabla de Contenidos

- [🎯 Descripción](#-descripción)
- [🏗️ Arquitectura](#-arquitectura)
- [🔧 Tecnologías](#-tecnologías)
- [📁 Estructura del Proyecto](#-estructura-del-proyecto)
- [⚙️ Instalación](#-instalación)
- [🚀 Uso](#-uso)
- [📚 API Reference](#-api-reference)
- [🎨 Frontend](#-frontend)
- [🏛️ Patrones de Diseño](#-patrones-de-diseño)
- [🧩 Principios SOLID](#-principios-solid)
- [🔒 Seguridad](#-seguridad)
- [🧪 Testing](#-testing)
- [📈 Mejoras Futuras](#-mejoras-futuras)
- [🤝 Contribución](#-contribución)

## 🎯 Descripción

Este proyecto implementa un sistema de autenticación completo usando JWT, siguiendo las mejores prácticas de desarrollo web moderno. Incluye registro de usuarios, inicio de sesión, protección de rutas y una interfaz web intuitiva.

### ✨ Características Principales

- ✅ **Registro de usuarios** con validación y hash de contraseñas
- ✅ **Autenticación JWT** con tokens seguros
- ✅ **Rutas protegidas** con middleware de autorización
- ✅ **Interfaz web responsiva** con múltiples páginas
- ✅ **Gestión de sesiones** con localStorage
- ✅ **Logout seguro** con limpieza de tokens
- ✅ **Validación de entrada** en frontend y backend
- ✅ **Manejo de errores** robusto

## 🏗️ Arquitectura

### Patrón Arquitectónico: MVC (Model-View-Controller)

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│      VIEW       │    │   CONTROLLER    │    │      MODEL      │
│                 │    │                 │    │                 │
│  • HTML Pages   │◄──►│  • Auth         │◄──►│  • User Data    │
│  • CSS Styles   │    │    Controller   │    │  • Validation   │
│  • JavaScript   │    │  • Middleware   │    │  • Business     │
│    Client       │    │  • Routes       │    │    Logic        │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

### Arquitectura de Capas

```
┌─────────────────────────────────────────────┐
│             PRESENTATION LAYER              │
│  (HTML, CSS, JavaScript - Client Side)     │
└─────────────────────────────────────────────┘
                        │ HTTP/HTTPS
┌─────────────────────────────────────────────┐
│              ROUTING LAYER                  │
│         (Express Routes & Middleware)       │
└─────────────────────────────────────────────┘
                        │
┌─────────────────────────────────────────────┐
│             BUSINESS LOGIC LAYER            │
│           (Controllers & Services)          │
└─────────────────────────────────────────────┘
                        │
┌─────────────────────────────────────────────┐
│              DATA ACCESS LAYER              │
│        (In-Memory Database Simulation)      │
└─────────────────────────────────────────────┘
```

## 🔧 Tecnologías

### Backend

- **Node.js** v18+ - Runtime de JavaScript
- **Express.js** v5.1.0 - Framework web
- **jsonwebtoken** v9.0.2 - Generación y verificación de JWT
- **bcrypt** v6.0.0 - Hash de contraseñas
- **dotenv** v17.2.0 - Gestión de variables de entorno

### Frontend

- **HTML5** - Estructura semántica
- **CSS3** - Estilos y responsive design
- **Vanilla JavaScript** - Lógica del cliente
- **Fetch API** - Comunicación HTTP

### Herramientas de Desarrollo

- **npm** - Gestión de dependencias
- **nodemon** (recomendado) - Desarrollo con hot reload

## 📁 Estructura del Proyecto

```
express-jwt-rutas-http/
│
├── 📁 public/                     # Frontend (Client-side)
│   ├── 📁 css/
│   │   └── 📄 style.css          # Estilos unificados y responsivos
│   ├── 📁 js/
│   │   ├── 📄 register.js        # Lógica de registro
│   │   ├── 📄 login.js           # Lógica de autenticación
│   │   ├── 📄 dashboard.js       # Lógica del panel principal
│   │   └── 📄 main.js            # Funciones compartidas
│   ├── 📄 index.html             # Página de inicio
│   ├── 📄 register.html          # Página de registro
│   ├── 📄 login.html             # Página de login
│   └── 📄 dashboard.html         # Panel de usuario
│
├── 📁 src/                       # Backend (Server-side)
│   ├── 📁 controllers/
│   │   └── 📄 authController.js  # Controlador de autenticación
│   ├── 📁 middleware/
│   │   └── 📄 authMiddleware.js  # Middleware JWT
│   ├── 📁 routes/
│   │   └── 📄 authRoutes.js      # Definición de rutas
│   └── 📁 config/
│       └── 📄 db.js              # Simulación de base de datos
│
├── 📄 .env                       # Variables de entorno
├── 📄 .gitignore                 # Archivos ignorados por Git
├── 📄 package.json               # Dependencias y scripts
├── 📄 server.js                  # Punto de entrada del servidor
└── 📄 README.md                  # Documentación del proyecto
```

### Descripción de Componentes

#### **Controllers** (Controladores)

Manejan la lógica de negocio y procesan las solicitudes HTTP:

- `authController.js`: Registro, login y rutas protegidas

#### **Middleware**

Funciones intermedias que procesan solicitudes:

- `authMiddleware.js`: Verificación y validación de tokens JWT

#### **Routes** (Rutas)

Definen los endpoints de la API:

- `authRoutes.js`: Rutas de autenticación (/register, /login, /protected)

#### **Config** (Configuración)

Configuraciones y utilidades:

- `db.js`: Simulación de base de datos en memoria

## ⚙️ Instalación

### Prerrequisitos

- Node.js v18 o superior
- npm v8 o superior

### Pasos de Instalación

1. **Clonar el repositorio**

```bash
git clone <repository-url>
cd express-jwt-rutas-http
```

2. **Instalar dependencias**

```bash
npm install
npm init -y 
```

3. **Configurar variables de entorno**

```bash
# Crear archivo .env en la raíz del proyecto
echo "JWT_SECRET=mysecretkey123" > .env
echo "PORT=3000" >> .env
```

4. **Iniciar el servidor**

```bash
npm start
# o para desarrollo con nodemon:
npm run dev
# tambien
node server.js
```

5. **Acceder a la aplicación**

```
http://localhost:3000
```

### Variables de Entorno

| Variable     | Descripción                          | Valor por Defecto |
| ------------ | ------------------------------------ | ----------------- |
| `JWT_SECRET` | Clave secreta para firmar tokens JWT | `required`        |
| `PORT`       | Puerto del servidor                  | `3000`            |

## 🚀 Uso

### Flujo de Usuario

1. **Página de Inicio** (`/`)

   - Información de la aplicación
   - Navegación a registro o login

2. **Registro** (`/register.html`)

   - Crear nueva cuenta
   - Validación de datos
   - Redirección automática al login

3. **Login** (`/login.html`)

   - Autenticación de usuario
   - Generación de token JWT
   - Redirección al dashboard

4. **Dashboard** (`/dashboard.html`)
   - Página protegida
   - Verificación automática de token
   - Acceso a funcionalidades protegidas
   - Opción de logout

### Ejemplo de Uso Programático

```javascript
// Registro de usuario
const registerUser = async (username, password) => {
  const response = await fetch("/api/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  return response.json();
};

// Login
const loginUser = async (username, password) => {
  const response = await fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  const data = await response.json();
  if (data.token) {
    localStorage.setItem("token", data.token);
  }
  return data;
};

// Acceso a ruta protegida
const accessProtected = async () => {
  const token = localStorage.getItem("token");
  const response = await fetch("/api/auth/protected", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.json();
};
```

## 📚 API Reference

### Arquitectura REST

La API sigue los principios REST con endpoints claros y códigos de estado HTTP estándar.

**Base URL:** `http://localhost:3000/api/auth`

---

#### 🔐 Register User

```http
POST /api/auth/register
```

**Request Body:**

```json
{
  "username": "string (required, min: 3 chars)",
  "password": "string (required, min: 6 chars)"
}
```

**Responses:**

```json
// Success (201)
{
  "message": "User registered successfully"
}

// Error (400)
{
  "message": "Username and password are required"
}
// or
{
  "message": "Username already exists"
}
```

**Ejemplo cURL:**

```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"john_doe","password":"secure123"}'
```

---

#### 🔑 User Login

```http
POST /api/auth/login
```

**Request Body:**

```json
{
  "username": "string (required)",
  "password": "string (required)"
}
```

**Responses:**

```json
// Success (200)
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "message": "Login successful"
}

// Error (400)
{
  "message": "Invalid credentials"
}
```

**Ejemplo cURL:**

```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"john_doe","password":"secure123"}'
```

---

#### 🛡️ Protected Route

```http
GET /api/auth/protected
```

**Headers:**

```
Authorization: Bearer <JWT_TOKEN>
```

**Responses:**

```json
// Success (200)
{
  "message": "This is a protected route",
  "user": {
    "username": "john_doe",
    "iat": 1703123456,
    "exp": 1703127056
  }
}

// Error (401)
{
  "message": "No token provided"
}
// or
{
  "message": "Invalid token"
}
```

**Ejemplo cURL:**

```bash
curl -X GET http://localhost:3000/api/auth/protected \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
```

### Códigos de Estado HTTP

| Código | Descripción                    |
| ------ | ------------------------------ |
| `200`  | ✅ Operación exitosa           |
| `201`  | ✅ Recurso creado exitosamente |
| `400`  | ❌ Solicitud inválida          |
| `401`  | ❌ No autorizado               |
| `500`  | ❌ Error interno del servidor  |

## 🎨 Frontend

### Arquitectura Frontend

La aplicación frontend sigue el patrón **SPA (Single Page Application)** con múltiples páginas:

```
Frontend Architecture
│
├── 🏠 Landing Page (index.html)
│   ├── Información del proyecto
│   └── Navegación a auth pages
│
├── 📝 Registration (register.html)
│   ├── Formulario de registro
│   ├── Validación client-side
│   └── Redirección automática
│
├── 🔐 Login (login.html)
│   ├── Formulario de autenticación
│   ├── Manejo de tokens
│   └── Gestión de estado
│
└── 📊 Dashboard (dashboard.html)
    ├── Verificación automática de auth
    ├── Rutas protegidas
    └── Funcionalidades del usuario
```

### Componentes Frontend

#### 1. **Gestión de Estado**

```javascript
// Token management
const TokenManager = {
  set: (token) => localStorage.setItem("token", token),
  get: () => localStorage.getItem("token"),
  remove: () => localStorage.removeItem("token"),
  isValid: async () => {
    // Verificación con el servidor
  },
};
```

#### 2. **Manejo de Formularios**

```javascript
// Form validation and submission
const FormHandler = {
  validate: (formData) => {
    /* validation logic */
  },
  submit: async (endpoint, data) => {
    /* submission logic */
  },
  displayMessage: (message, type) => {
    /* UI feedback */
  },
};
```

#### 3. **Navegación y Routing**

```javascript
// Client-side routing
const Router = {
  navigate: (page) => (window.location.href = page),
  requireAuth: async () => {
    /* auth check */
  },
  redirect: (page, delay = 0) => {
    /* delayed redirect */
  },
};
```

## 🏛️ Patrones de Diseño

### 1. **MVC (Model-View-Controller)**

**Implementación:**

```javascript
// Model - Gestión de datos
class UserModel {
  constructor() {
    this.users = [];
  }

  create(userData) {
    /* ... */
  }
  findByUsername(username) {
    /* ... */
  }
  validate(username, password) {
    /* ... */
  }
}

// View - Interfaz de usuario
class AuthView {
  render(page) {
    /* ... */
  }
  displayMessage(message, type) {
    /* ... */
  }
  collectFormData() {
    /* ... */
  }
}

// Controller - Lógica de negocio
class AuthController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  register(userData) {
    /* ... */
  }
  login(credentials) {
    /* ... */
  }
  protect(request) {
    /* ... */
  }
}
```

### 2. **Middleware Pattern**

**Implementación:**

```javascript
// Cadena de middleware para procesamiento de requests
const middlewareChain = [
  express.json(), // Parse JSON
  corsMiddleware, // Handle CORS
  authMiddleware, // JWT Verification
  errorMiddleware, // Error handling
];

app.use("/api/auth", middlewareChain, authRoutes);
```

### 3. **Factory Pattern**

**Implementación:**

```javascript
// Factory para crear diferentes tipos de respuestas
class ResponseFactory {
  static success(message, data = null) {
    return { success: true, message, data };
  }

  static error(message, code = 400) {
    return { success: false, message, code };
  }

  static token(token, message = "Login successful") {
    return { success: true, token, message };
  }
}
```

### 4. **Observer Pattern**

**Implementación:**

```javascript
// Sistema de eventos para notificaciones
class AuthEventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, callback) {
    if (!this.events[event]) this.events[event] = [];
    this.events[event].push(callback);
  }

  emit(event, data) {
    if (this.events[event]) {
      this.events[event].forEach((callback) => callback(data));
    }
  }
}

// Uso
const authEvents = new AuthEventEmitter();
authEvents.on("login", (user) =>
  console.log(`User ${user.username} logged in`)
);
authEvents.on("logout", () => Router.navigate("/login.html"));
```

## 🧩 Principios SOLID

### **S - Single Responsibility Principle (SRP)**

Cada clase y módulo tiene una única responsabilidad:

```javascript
// ✅ Correcto - Una responsabilidad por clase
class PasswordHasher {
  static async hash(password) {
    return bcrypt.hash(password, 10);
  }

  static async compare(password, hash) {
    return bcrypt.compare(password, hash);
  }
}

class TokenGenerator {
  static generate(payload) {
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });
  }

  static verify(token) {
    return jwt.verify(token, process.env.JWT_SECRET);
  }
}
```

### **O - Open/Closed Principle (OCP)**

Abierto para extensión, cerrado para modificación:

```javascript
// ✅ Base extensible
class AuthValidator {
  validate(data) {
    throw new Error("Method must be implemented");
  }
}

class RegistrationValidator extends AuthValidator {
  validate(data) {
    const { username, password } = data;
    if (!username || username.length < 3) {
      throw new Error("Username must be at least 3 characters");
    }
    if (!password || password.length < 6) {
      throw new Error("Password must be at least 6 characters");
    }
    return true;
  }
}

class LoginValidator extends AuthValidator {
  validate(data) {
    const { username, password } = data;
    if (!username || !password) {
      throw new Error("Username and password are required");
    }
    return true;
  }
}
```

### **L - Liskov Substitution Principle (LSP)**

Los objetos derivados deben ser sustituibles por sus objetos base:

```javascript
// ✅ Correcto - Subtypes pueden reemplazar tipos base
class DatabaseAdapter {
  async save(data) {
    throw new Error("Method must be implemented");
  }

  async find(criteria) {
    throw new Error("Method must be implemented");
  }
}

class InMemoryDatabase extends DatabaseAdapter {
  constructor() {
    super();
    this.data = [];
  }

  async save(data) {
    this.data.push({ ...data, id: Date.now() });
    return data;
  }

  async find(criteria) {
    return this.data.filter((item) =>
      Object.keys(criteria).every((key) => item[key] === criteria[key])
    );
  }
}

// Puede ser sustituido por MongoDB, PostgreSQL, etc.
class MongoDatabase extends DatabaseAdapter {
  async save(data) {
    /* MongoDB implementation */
  }
  async find(criteria) {
    /* MongoDB implementation */
  }
}
```

### **I - Interface Segregation Principle (ISP)**

Las interfaces específicas son mejores que una interfaz general:

```javascript
// ✅ Interfaces específicas
class UserReader {
  async findByUsername(username) {
    /* ... */
  }
  async findById(id) {
    /* ... */
  }
}

class UserWriter {
  async create(userData) {
    /* ... */
  }
  async update(id, userData) {
    /* ... */
  }
  async delete(id) {
    /* ... */
  }
}

class UserAuthenticator {
  async validateCredentials(username, password) {
    /* ... */
  }
  async generateToken(user) {
    /* ... */
  }
}

// Implementación específica solo usa las interfaces que necesita
class AuthService {
  constructor(userReader, userAuthenticator) {
    this.userReader = userReader;
    this.userAuthenticator = userAuthenticator;
  }

  async login(username, password) {
    const user = await this.userReader.findByUsername(username);
    const isValid = await this.userAuthenticator.validateCredentials(
      username,
      password
    );
    if (isValid) {
      return this.userAuthenticator.generateToken(user);
    }
    throw new Error("Invalid credentials");
  }
}
```

### **D - Dependency Inversion Principle (DIP)**

Depender de abstracciones, no de concreciones:

```javascript
// ✅ Dependency Injection
class AuthController {
  constructor(userService, tokenService, validator) {
    this.userService = userService; // Abstraction
    this.tokenService = tokenService; // Abstraction
    this.validator = validator; // Abstraction
  }

  async register(req, res) {
    try {
      this.validator.validate(req.body);
      const user = await this.userService.create(req.body);
      res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

// Inyección de dependencias en la configuración
const userService = new UserService(new InMemoryDatabase());
const tokenService = new TokenService();
const validator = new RegistrationValidator();
const authController = new AuthController(userService, tokenService, validator);
```

## 🔒 Seguridad

### Implementaciones de Seguridad

#### 1. **Hash de Contraseñas**

```javascript
// Bcrypt con salt rounds seguros
const SALT_ROUNDS = 12;
const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
```

#### 2. **JWT Seguro**

```javascript
// Token con expiración y payload mínimo
const token = jwt.sign(
  { username: user.username }, // Payload mínimo
  process.env.JWT_SECRET, // Clave secreta fuerte
  {
    expiresIn: "1h", // Expiración corta
    algorithm: "HS256", // Algoritmo específico
  }
);
```

#### 3. **Validación de Entrada**

```javascript
// Validación y sanitización
const validateInput = (data) => {
  const { username, password } = data;

  if (!username || typeof username !== "string") {
    throw new Error("Invalid username");
  }

  if (username.length < 3 || username.length > 50) {
    throw new Error("Username must be 3-50 characters");
  }

  if (!/^[a-zA-Z0-9_]+$/.test(username)) {
    throw new Error("Username contains invalid characters");
  }

  return { username: username.trim(), password };
};
```

#### 4. **Headers de Seguridad**

```javascript
// Headers de seguridad (para futuras implementaciones)
app.use((req, res, next) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("X-XSS-Protection", "1; mode=block");
  next();
});
```

### Mejores Prácticas de Seguridad Implementadas

- ✅ **Contraseñas hasheadas** con bcrypt y salt alto
- ✅ **Tokens JWT** con expiración y algoritmo seguro
- ✅ **Validación de entrada** en frontend y backend
- ✅ **Variables de entorno** para datos sensibles
- ✅ **Limpieza de tokens** en logout
- ✅ **Verificación de autorización** en rutas protegidas

## 🧪 Testing

### Estrategia de Testing

```javascript
// Ejemplo de tests unitarios (para implementar)
describe("AuthController", () => {
  describe("register", () => {
    it("should register a new user with valid data", async () => {
      // Test implementation
    });

    it("should reject registration with invalid data", async () => {
      // Test implementation
    });
  });

  describe("login", () => {
    it("should login with valid credentials", async () => {
      // Test implementation
    });

    it("should reject login with invalid credentials", async () => {
      // Test implementation
    });
  });
});
```

### Testing Manual

**Registro de Usuario:**

1. Ir a `/register.html`
2. Ingresar username: `testuser`, password: `test123`
3. Verificar mensaje de éxito
4. Verificar redirección a login

**Login:**

1. Ir a `/login.html`
2. Usar credenciales del paso anterior
3. Verificar token en localStorage
4. Verificar redirección a dashboard

**Ruta Protegida:**

1. En el dashboard, hacer clic en "Access Protected Data"
2. Verificar mensaje de éxito
3. Hacer logout y verificar limpieza de token

## 📈 Mejoras Futuras

### Roadmap de Desarrollo

#### **Fase 1: Funcionalidades Básicas** ✅

- [x] Autenticación JWT
- [x] Registro de usuarios
- [x] Rutas protegidas
- [x] Interfaz web

#### **Fase 2: Mejoras de Seguridad**

- [ ] Refresh tokens
- [ ] Rate limiting
- [ ] HTTPS enforcement
- [ ] Password strength validation
- [ ] Account lockout

#### **Fase 3: Funcionalidades Avanzadas**

- [ ] Roles y permisos
- [ ] Perfil de usuario
- [ ] Reset de contraseña
- [ ] Verificación por email
- [ ] Autenticación de dos factores (2FA)

#### **Fase 4: Escalabilidad**

- [ ] Base de datos real (MongoDB/PostgreSQL)
- [ ] Microservicios
- [ ] Containerización (Docker)
- [ ] CI/CD Pipeline
- [ ] Logging y monitoring

#### **Fase 5: Testing y Calidad**

- [ ] Tests unitarios (Jest)
- [ ] Tests de integración
- [ ] Tests E2E (Cypress)
- [ ] Code coverage
- [ ] Static analysis (ESLint, SonarQube)

### Extensiones Propuestas

```javascript
// Ejemplo: Sistema de roles
class RoleMiddleware {
  static requireRole(role) {
    return (req, res, next) => {
      if (req.user.role !== role) {
        return res.status(403).json({ message: "Insufficient permissions" });
      }
      next();
    };
  }
}

// Uso
app.get(
  "/api/admin/users",
  authMiddleware,
  RoleMiddleware.requireRole("admin"),
  adminController.getUsers
);
```

## 🤝 Contribución

### Guidelines de Contribución

1. **Fork** el repositorio
2. **Crear** una rama para la feature: `git checkout -b feature/nueva-funcionalidad`
3. **Commit** los cambios: `git commit -m 'Add nueva funcionalidad'`
4. **Push** a la rama: `git push origin feature/nueva-funcionalidad`
5. **Crear** un Pull Request

### Estándares de Código

#### **JavaScript Style Guide**

```javascript
// ✅ Usar const/let en lugar de var
const users = [];
let currentUser = null;

// ✅ Funciones arrow para callbacks
users.filter((user) => user.active);

// ✅ Async/await en lugar de callbacks
const user = await userService.findById(id);

// ✅ Destructuring
const { username, password } = req.body;

// ✅ Template literals
const message = `Welcome, ${username}!`;
```

#### **Commit Convention**

```bash
feat: add user profile functionality
fix: resolve JWT token expiration issue
docs: update API documentation
style: format code with prettier
refactor: extract validation logic
test: add unit tests for auth controller
chore: update dependencies
```

### Reportar Issues

Al reportar bugs, incluir:

- **Versión** de Node.js y npm
- **Pasos** para reproducir el error
- **Comportamiento esperado** vs **comportamiento actual**
- **Screenshots** si es aplicable
- **Logs** de error

---

## 📝 Objetivos de Aprendizaje

Este proyecto está diseñado para enseñar:

### **Conceptos Backend**

- ✅ **Arquitectura MVC** y separación de responsabilidades
- ✅ **API REST** y diseño de endpoints
- ✅ **Autenticación JWT** y gestión de tokens
- ✅ **Middleware** y procesamiento de requests
- ✅ **Hashing de contraseñas** y seguridad básica
- ✅ **Variables de entorno** y configuración

### **Conceptos Frontend**

- ✅ **SPA** y navegación client-side
- ✅ **Fetch API** y comunicación HTTP
- ✅ **LocalStorage** y gestión de estado
- ✅ **Validación de formularios** y UX
- ✅ **Responsive design** y CSS moderno

### **Principios de Desarrollo**

- ✅ **SOLID principles** en JavaScript
- ✅ **Patrones de diseño** aplicados
- ✅ **Separación de responsabilidades**
- ✅ **Código limpio** y mantenible
- ✅ **Gestión de errores** robusta

### **Buenas Prácticas**

- ✅ **Seguridad web** básica
- ✅ **Estructura de proyecto** escalable
- ✅ **Documentación** completa
- ✅ **Control de versiones** con Git
- ✅ **Testing** manual y automatizado

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

---

## 👨‍💻 Autor

**Proyecto Educativo de Autenticación JWT**

- **Propósito**: Enseñanza de desarrollo web full-stack
- **Nivel**: Intermedio
- **Tecnologías**: Node.js, Express.js, JWT, HTML5, CSS3, JavaScript ES6+

---

## 📞 Soporte

Si tienes preguntas o necesitas ayuda:

1. **Revisar** la documentación completa
2. **Buscar** en los issues existentes
3. **Crear** un nuevo issue con detalles específicos
4. **Proponer** mejoras vía Pull Request

---

**¡Gracias por usar este proyecto educativo! 🚀**

## 📝 Pseudocódigo del Sistema

Esta sección presenta el pseudocódigo de todos los componentes del sistema para facilitar la comprensión de la lógica antes de revisar el código real.

### 🏗️ Estructura General del Sistema

```pseudocode
SISTEMA_JWT_AUTH:
    INICIALIZAR servidor Express
    CONFIGURAR variables de entorno
    ESTABLECER middleware de seguridad
    DEFINIR rutas de autenticación
    SERVIR archivos estáticos del frontend
    ESCUCHAR en puerto configurado
```

---

### 🖥️ Backend (Servidor)

#### **server.js** - Punto de entrada del servidor

```pseudocode
ALGORITMO servidor_principal:
INICIO
    // Importar dependencias
    IMPORTAR express, path, dotenv, authRoutes

    // Configuración inicial
    CONFIGURAR variables_entorno desde .env
    CREAR aplicacion_express

    // Middleware
    APLICAR middleware JSON parser
    APLICAR middleware archivos_estaticos para carpeta public
    APLICAR rutas_autenticacion en "/api/auth"

    // Ruta principal
    DEFINIR ruta_raiz "/" QUE:
        SERVIR archivo "public/index.html"

    // Iniciar servidor
    OBTENER puerto desde variables_entorno O usar 3000
    ESCUCHAR en puerto
    MOSTRAR mensaje "Server running on port {puerto}"
FIN
```

#### **src/config/db.js** - Simulación de base de datos

```pseudocode
ALGORITMO base_datos_memoria:
INICIO
    // Estructura de datos
    CREAR array_usuarios = []

    // Funciones implícitas disponibles:
    // - push(): agregar usuario
    // - find(): buscar usuario por criterio
    // - filter(): filtrar usuarios

    EXPORTAR array_usuarios
FIN
```

#### **src/controllers/authController.js** - Controlador de autenticación

```pseudocode
ALGORITMO controlador_autenticacion:
INICIO
    IMPORTAR jwt, bcrypt, usuarios_db

    FUNCION registrar_usuario(request, response):
    INICIO
        EXTRAER username, password DE request.body

        SI username ES vacio O password ES vacio ENTONCES:
            RETORNAR error 400 "Username and password are required"

        usuario_existente = BUSCAR en usuarios_db usuario CON username
        SI usuario_existente EXISTE ENTONCES:
            RETORNAR error 400 "Username already exists"

        password_hasheada = HASHEAR password CON bcrypt
        AGREGAR {username, password: password_hasheada} A usuarios_db
        RETORNAR exito 201 "User registered successfully"
    FIN

    FUNCION iniciar_sesion(request, response):
    INICIO
        EXTRAER username, password DE request.body

        usuario = BUSCAR en usuarios_db usuario CON username
        SI usuario NO existe ENTONCES:
            RETORNAR error 400 "Invalid credentials"

        password_valida = COMPARAR password CON usuario.password usando bcrypt
        SI password_valida ES falso ENTONCES:
            RETORNAR error 400 "Invalid credentials"

        token = GENERAR JWT CON payload {username} Y secreto JWT_SECRET
        CONFIGURAR expiracion = "1h"
        RETORNAR exito 200 {token, message: "Login successful"}
    FIN

    FUNCION ruta_protegida(request, response):
    INICIO
        // request.user fue agregado por authMiddleware
        RETORNAR exito 200 {
            message: "This is a protected route",
            user: request.user
        }
    FIN

    EXPORTAR {registrar_usuario, iniciar_sesion, ruta_protegida}
FIN
```

#### **src/middleware/authMiddleware.js** - Middleware de autenticación

```pseudocode
ALGORITMO middleware_autenticacion:
INICIO
    IMPORTAR jwt

    FUNCION verificar_token(request, response, next):
    INICIO
        header_autorizacion = OBTENER "Authorization" DE request.headers

        SI header_autorizacion EXISTE ENTONCES:
            token = EXTRAER parte después de "Bearer " DE header_autorizacion
        SINO:
            token = null

        SI token ES null ENTONCES:
            RETORNAR error 401 "No token provided"

        INTENTAR:
            payload_decodificado = VERIFICAR token CON JWT_SECRET
            ASIGNAR request.user = payload_decodificado
            LLAMAR next() // Continuar al siguiente middleware
        CAPTURAR error:
            RETORNAR error 401 "Invalid token"
    FIN

    EXPORTAR verificar_token
FIN
```

#### **src/routes/authRoutes.js** - Definición de rutas

```pseudocode
ALGORITMO rutas_autenticacion:
INICIO
    IMPORTAR express, controladores, middleware_auth

    CREAR router_express

    // Rutas públicas (sin autenticación)
    DEFINIR ruta POST "/register" QUE ejecuta controladores.registrar_usuario
    DEFINIR ruta POST "/login" QUE ejecuta controladores.iniciar_sesion

    // Rutas protegidas (requieren autenticación)
    DEFINIR ruta GET "/protected" QUE:
        PRIMERO ejecuta middleware_auth.verificar_token
        LUEGO ejecuta controladores.ruta_protegida

    EXPORTAR router_express
FIN
```

---

### 🌐 Frontend (Cliente)

#### **public/index.html** - Página de inicio

```pseudocode
ALGORITMO pagina_inicio:
INICIO
    ESTRUCTURA HTML:
        TÍTULO: "JWT Auth Demo"
        INCLUIR estilos CSS

        CONTENIDO:
            ENCABEZADO "JWT Authentication Demo"
            DESCRIPCIÓN del proyecto

            BOTONES de navegación:
                BOTON "Login" → redirige a login.html
                BOTON "Register" → redirige a register.html

            LISTA de características del sistema
FIN
```

#### **public/register.html** - Página de registro

```pseudocode
ALGORITMO pagina_registro:
INICIO
    ESTRUCTURA HTML:
        TÍTULO: "Register - JWT Auth Demo"
        INCLUIR estilos CSS

        FORMULARIO de registro:
            CAMPO username (requerido)
            CAMPO password (requerido)
            BOTON submit "Register"

        PÁRRAFO para mensajes de estado
        ENLACE a página de login

        INCLUIR script register.js
FIN
```

#### **public/login.html** - Página de login

```pseudocode
ALGORITMO pagina_login:
INICIO
    ESTRUCTURA HTML:
        TÍTULO: "Login - JWT Auth Demo"
        INCLUIR estilos CSS

        FORMULARIO de login:
            CAMPO username (requerido)
            CAMPO password (requerido)
            BOTON submit "Login"

        PÁRRAFO para mensajes de estado
        ENLACE a página de registro

        INCLUIR script login.js
FIN
```

#### **public/dashboard.html** - Panel de usuario

```pseudocode
ALGORITMO pagina_dashboard:
INICIO
    ESTRUCTURA HTML:
        TÍTULO: "Dashboard - JWT Auth Demo"
        INCLUIR estilos CSS

        CONTENIDO:
            ENCABEZADO "Dashboard"
            MENSAJE de bienvenida (dinámico)

            SECCIÓN de acciones protegidas:
                BOTON "Access Protected Data"
                PÁRRAFO para respuesta del servidor

            BOTON "Logout"

        INCLUIR script dashboard.js
FIN
```

#### **public/js/register.js** - Lógica de registro

```pseudocode
ALGORITMO logica_registro:
INICIO
    CUANDO formulario_registro ES enviado:
    INICIO
        PREVENIR envío por defecto del formulario

        OBTENER username DE campo input
        OBTENER password DE campo input

        INTENTAR:
            ENVIAR petición POST a "/api/auth/register" CON:
                headers: {"Content-Type": "application/json"}
                body: JSON{username, password}

            respuesta = ESPERAR respuesta del servidor
            datos = CONVERTIR respuesta a JSON

            SI respuesta ES exitosa ENTONCES:
                MOSTRAR mensaje de éxito en verde
                DESPUÉS de 1.5 segundos:
                    REDIRIGIR a "login.html"
            SINO:
                MOSTRAR mensaje de error en rojo

        CAPTURAR errores de red:
            MOSTRAR "Network error: {error}" en rojo
    FIN
FIN
```

#### **public/js/login.js** - Lógica de login

```pseudocode
ALGORITMO logica_login:
INICIO
    CUANDO formulario_login ES enviado:
    INICIO
        PREVENIR envío por defecto del formulario

        OBTENER username DE campo input
        OBTENER password DE campo input

        INTENTAR:
            ENVIAR petición POST a "/api/auth/login" CON:
                headers: {"Content-Type": "application/json"}
                body: JSON{username, password}

            respuesta = ESPERAR respuesta del servidor
            datos = CONVERTIR respuesta a JSON

            SI respuesta ES exitosa Y datos.token EXISTE ENTONCES:
                GUARDAR datos.token EN localStorage CON clave "token"
                MOSTRAR mensaje de éxito en verde
                DESPUÉS de 1 segundo:
                    REDIRIGIR a "dashboard.html"
            SINO:
                MOSTRAR mensaje de error en rojo

        CAPTURAR errores de red:
            MOSTRAR "Network error: {error}" en rojo
    FIN
FIN
```

#### **public/js/dashboard.js** - Lógica del dashboard

```pseudocode
ALGORITMO logica_dashboard:
INICIO
    CUANDO página SE carga completamente:
    INICIO
        token = OBTENER "token" DE localStorage

        SI token ES null ENTONCES:
            REDIRIGIR a "login.html"
            TERMINAR

        INTENTAR:
            ENVIAR petición GET a "/api/auth/protected" CON:
                headers: {"Authorization": "Bearer {token}"}

            respuesta = ESPERAR respuesta del servidor

            SI respuesta ES exitosa ENTONCES:
                datos = CONVERTIR respuesta a JSON
                MOSTRAR "Welcome, {datos.user.username}!" en mensaje de bienvenida
            SINO:
                ELIMINAR token DE localStorage
                REDIRIGIR a "login.html"

        CAPTURAR errores:
            ELIMINAR token DE localStorage
            REDIRIGIR a "login.html"
    FIN

    CUANDO boton_protegido ES clickeado:
    INICIO
        token = OBTENER "token" DE localStorage

        SI token ES null ENTONCES:
            MOSTRAR "No token found. Please login first."
            TERMINAR

        INTENTAR:
            ENVIAR petición GET a "/api/auth/protected" CON:
                headers: {"Authorization": "Bearer {token}"}

            respuesta = ESPERAR respuesta del servidor
            datos = CONVERTIR respuesta a JSON

            SI respuesta ES exitosa ENTONCES:
                MOSTRAR datos.message en verde
            SINO:
                MOSTRAR "Error: {datos.message}" en rojo

        CAPTURAR errores de red:
            MOSTRAR "Network error: {error}" en rojo
    FIN

    CUANDO boton_logout ES clickeado:
    INICIO
        ELIMINAR "token" DE localStorage
        REDIRIGIR a "login.html"
    FIN
FIN
```

#### **public/css/style.css** - Estilos del sistema

```pseudocode
ALGORITMO estilos_sistema:
INICIO
    CONFIGURACIÓN base:
        FUENTE: Arial, sans-serif
        COLORES principales: #333 (texto), #007bff (botones), #f0f0f0 (fondo)
        DISEÑO responsive CON max-width 600px centrado

    ESTILOS contenedor:
        FONDO blanco
        BORDES redondeados
        SOMBRA sutil
        PADDING interno

    ESTILOS formularios:
        DISEÑO vertical CON gap entre elementos
        CAMPOS input CON bordes y padding
        BOTONES CON colores de marca y efectos hover

    ESTILOS navegación:
        BOTONES diferenciados (primario azul, secundario gris)
        ENLACES CON color de marca
        TRANSICIONES suaves

    ESTILOS mensajes:
        COLORES según tipo (verde éxito, rojo error)
        CENTRADO y padding apropiado

    ESTILOS dashboard:
        ÁREA de bienvenida CON fondo verde claro
        BOTÓN logout CON color rojo de advertencia
        ESPACIADO consistente entre secciones
FIN
```

---

### ⚙️ Configuración del Sistema

#### **.env** - Variables de entorno

```pseudocode
ALGORITMO configuracion_entorno:
INICIO
    // Variables críticas del sistema
    JWT_SECRET = "clave_secreta_para_firmar_tokens_jwt"
    PORT = "puerto_del_servidor_por_defecto_3000"

    // Notas de seguridad:
    // - JWT_SECRET debe ser una cadena larga y aleatoria
    // - Nunca commitear este archivo al repositorio
    // - En producción usar variables de entorno del sistema
FIN
```

#### **.gitignore** - Archivos a ignorar en Git

```pseudocode
ALGORITMO archivos_ignorados:
INICIO
    // Archivos de sistema y configuración
    IGNORAR node_modules/     // Dependencias npm
    IGNORAR .env             // Variables de entorno
    IGNORAR .DS_Store        // Archivos de sistema macOS
    IGNORAR *.log            // Archivos de log

    // Archivos de desarrollo
    IGNORAR .vscode/         // Configuración de VS Code
    IGNORAR dist/            // Archivos de distribución
    IGNORAR coverage/        // Reportes de cobertura

    // Archivos temporales
    IGNORAR npm-debug.log*
    IGNORAR .npm
    IGNORAR .cache/
FIN
```

#### **package.json** - Configuración del proyecto

```pseudocode
ALGORITMO configuracion_proyecto:
INICIO
    METADATOS proyecto:
        nombre: "jwt-auth-project-express-basic"
        version: "1.0.0"
        descripcion: "Sistema de autenticación JWT educativo"
        autor: "Proyecto Educativo"
        licencia: "MIT"

    DEPENDENCIAS producción:
        express: "^5.1.0"        // Framework web
        jsonwebtoken: "^9.0.2"   // Manejo de JWT
        bcrypt: "^6.0.0"         // Hash de contraseñas
        dotenv: "^17.2.0"        // Variables de entorno

    SCRIPTS:
        start: "node server.js"           // Iniciar en producción
        dev: "nodemon server.js"          // Desarrollo con hot reload
        test: "echo 'No tests specified'" // Placeholder para tests

    CONFIGURACIÓN motor:
        node: ">=18.0.0"         // Versión mínima de Node.js
        npm: ">=8.0.0"           // Versión mínima de npm
FIN
```

---

### 🔄 Flujo de Datos del Sistema

```pseudocode
ALGORITMO flujo_completo_sistema:
INICIO
    // 1. REGISTRO DE USUARIO
    Usuario COMPLETA formulario registro
    → Frontend ENVÍA datos a POST /api/auth/register
    → Servidor VALIDA datos
    → Servidor HASHEA contraseña CON bcrypt
    → Servidor GUARDA usuario en base_datos_memoria
    → Servidor RETORNA confirmación
    → Frontend REDIRIGE a página login

    // 2. INICIO DE SESIÓN
    Usuario COMPLETA formulario login
    → Frontend ENVÍA credenciales a POST /api/auth/login
    → Servidor BUSCA usuario en base_datos
    → Servidor VERIFICA contraseña CON bcrypt
    → Servidor GENERA token JWT
    → Servidor RETORNA token
    → Frontend GUARDA token en localStorage
    → Frontend REDIRIGE a dashboard

    // 3. ACCESO A RUTA PROTEGIDA
    Usuario HACE clic en botón protegido
    → Frontend OBTIENE token DE localStorage
    → Frontend ENVÍA petición a GET /api/auth/protected CON token
    → Middleware VERIFICA token JWT
    → SI token válido: Controlador RETORNA datos protegidos
    → SI token inválido: Servidor RETORNA error 401
    → Frontend MUESTRA resultado O redirige a login

    // 4. LOGOUT
    Usuario HACE clic en logout
    → Frontend ELIMINA token DE localStorage
    → Frontend REDIRIGE a página login
FIN
```

---

### 🛡️ Algoritmos de Seguridad

```pseudocode
ALGORITMO seguridad_contraseñas:
INICIO
    FUNCION hashear_contraseña(contraseña_plana):
        salt_rounds = 10
        RETORNAR bcrypt.hash(contraseña_plana, salt_rounds)

    FUNCION verificar_contraseña(contraseña_plana, hash_almacenado):
        RETORNAR bcrypt.compare(contraseña_plana, hash_almacenado)
FIN

ALGORITMO seguridad_jwt:
INICIO
    FUNCION generar_token(payload_usuario):
        CONFIGURAR opciones = {
            expiresIn: "1h",
            algorithm: "HS256"
        }
        RETORNAR jwt.sign(payload_usuario, JWT_SECRET, opciones)

    FUNCION verificar_token(token):
        INTENTAR:
            RETORNAR jwt.verify(token, JWT_SECRET)
        CAPTURAR error:
            LANZAR error "Token inválido"
FIN

ALGORITMO validacion_entrada:
INICIO
    FUNCION validar_registro(datos):
        SI datos.username ES vacío O longitud < 3:
            LANZAR error "Username debe tener al menos 3 caracteres"

        SI datos.password ES vacío O longitud < 6:
            LANZAR error "Password debe tener al menos 6 caracteres"

        SI datos.username CONTIENE caracteres especiales:
            LANZAR error "Username solo puede contener letras, números y _"

        RETORNAR verdadero
FIN
```

---

### 📊 Diagramas de Flujo en Pseudocódigo

#### **Flujo de Autenticación**

```pseudocode
DIAGRAMA_FLUJO autenticacion_completa:
INICIO
    ┌─────────────────┐
    │ Usuario visita  │
    │   aplicación    │
    └─────────┬───────┘
              │
    ┌─────────▼───────┐
    │ ¿Tiene token    │
    │  válido?        │
    └─────┬─────┬─────┘
          │NO   │SÍ
    ┌─────▼───┐ │
    │ Mostrar │ │
    │ Login   │ │
    └─────┬───┘ │
          │     │
    ┌─────▼───┐ │
    │ Ingresar│ │
    │credenciales│
    └─────┬───┘ │
          │     │
    ┌─────▼───┐ │
    │¿Credenciales│
    │ válidas?  │ │
    └─┬─────┬─┘ │
      │NO   │SÍ │
    ┌─▼───┐ │   │
    │Error│ │   │
    └─────┘ │   │
    ┌───────▼─┐ │
    │ Generar │ │
    │  Token  │ │
    └───────┬─┘ │
            │   │
    ┌───────▼───▼───┐
    │   Dashboard   │
    │   (Protegido) │
    └───────────────┘
FIN
```

---

Este pseudocódigo proporciona una comprensión completa del sistema sin la complejidad del código real, perfecto para estudiantes que están aprendiendo los conceptos fundamentales.
