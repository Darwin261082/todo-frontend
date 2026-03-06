
---

# 2️⃣ README para `todo-frontend` (Web Angular + Material)

```markdown
# ToDo Frontend (Angular 16 + Angular Material)

Aplicación web para gestión de tareas que consume la API `todo-api`.

---

## 📦 Tecnologías

- Angular 16 (Standalone Components)  
- Angular Material (UI Components y diseño responsivo)  
- HTTP Client para comunicación con backend  
- JWT para autenticación (almacenado en localStorage)  

---

## ⚡ Requisitos

- Node.js ≥ 18  
- npm  
- Backend `todo-api` corriendo (`http://localhost/todo-api/public/index.php`)  

---

## 🚀 Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/tu-usuario/todo-frontend.git
cd todo-frontend

Instalar dependencias:

npm install

Levantar servidor de desarrollo:

ng serve

Abrir en navegador:
http://localhost:4200

🏃 Uso

Registrar un usuario o logearse si ya existe.

Crear nuevas tareas, editarlas, completar o eliminar.

Todas las operaciones se reflejan en la API (backend) mediante JWT.

⚙️ Estructura
todo-frontend/
├─ src/app/pages/login/       # Página de login
├─ src/app/pages/tasks/       # Página de gestión de tareas
├─ src/app/services/          # ApiService, AuthService
├─ src/app/material.module.ts # Angular Material importado
├─ angular.json
├─ package.json
✅ Notas

Se utiliza Angular Material para formularios, botones, tablas y diseño responsivo.

El token JWT se almacena en localStorage.

Arquitectura web clara separando servicios, páginas y componentes.
