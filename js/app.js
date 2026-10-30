// SPA Principal - Solo Visual, Backend pendiente de implementar
let currentUser = null;

function renderLogin() {
  document.getElementById('app').innerHTML = 
    <div class=\"admin-container\">
      <div class=\"admin-card\">
        <div class=\"admin-header\">
          <i class=\"bi bi-shield-shaded\" style=\"font-size: 3rem;\"></i>
          <h2 class=\"mt-2\">PANEL ADMINISTRATIVO</h2>
          <p class=\"mb-0\">Cuerpo de Bomberos - Guática</p>
        </div>
        <div class=\"admin-body\">
          <form id=\"loginForm\">
            <div class=\"form-floating\">
              <input type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"Usuario\" required>
              <label for=\"username\"><i class=\"bi bi-person\"></i> Usuario</label>
            </div>
            <div class=\"form-floating\">
              <input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Contraseña\" required>
              <label for=\"password\"><i class=\"bi bi-lock\"></i> Contraseña</label>
            </div>
            <button type=\"submit\" class=\"btn btn-admin mb-3\">
              <i class=\"bi bi-box-arrow-in-right\"></i> Iniciar Sesión
            </button>
          </form>
          <div class=\"text-center text-muted small\">
            <em>Modo Visual - Demo: admin / admin</em><br>
            <em>Backend pendiente de implementar</em>
          </div>
        </div>
      </div>
    </div>
  ;
  
  document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    const result = await API.auth.login({ username, password });
    if (result.success) {
      currentUser = result.user;
      renderDashboard();
    } else {
      alert(result.message);
    }
  });
}

function renderDashboard() {
  document.getElementById('app').innerHTML = 
    <button class=\"btn btn-danger logout-btn\" onclick=\"logout()\">
      <i class=\"bi bi-box-arrow-right\"></i> Cerrar Sesión
    </button>
    
    <div class=\"container-fluid\">
      <div class=\"row\">
        <div class=\"col-md-3 col-lg-2 px-0 sidebar\">
          <div class=\"p-4 text-center text-white\">
            <i class=\"bi bi-shield-shaded\" style=\"font-size: 2.5rem;\"></i>
            <h5 class=\"mt-2 mb-0\">BOMBEROS</h5>
            <small>Guática</small>
          </div>
          <nav class=\"nav flex-column\">
            <a class=\"nav-link active\" href=\"#\" onclick=\"showSection('dashboard', event)\">
              <i class=\"bi bi-speedometer2\"></i> Dashboard
            </a>
            <a class=\"nav-link\" href=\"#\" onclick=\"showSection('tasks', event)\">
              <i class=\"bi bi-list-task\"></i> Tareas
            </a>
            <a class=\"nav-link\" href=\"#\" onclick=\"showSection('training', event)\">
              <i class=\"bi bi-mortarboard\"></i> Capacitaciones
            </a>
            <a class=\"nav-link\" href=\"#\" onclick=\"showSection('donations', event)\">
              <i class=\"bi bi-heart\"></i> Donaciones
            </a>
            <a class=\"nav-link\" href=\"#\" onclick=\"showSection('users', event)\">
              <i class=\"bi bi-people\"></i> Usuarios
            </a>
          </nav>
          <div class=\"p-3 text-white-50 small text-center mt-4\">
            <em>[BACKEND PENDIENTE]</em>
          </div>
        </div>
        
        <div class=\"col-md-9 col-lg-10 main-content\">
          <div id=\"section-dashboard\" class=\"panel-section active\">
            <h2 class=\"mb-4\"><i class=\"bi bi-speedometer2\"></i> Dashboard</h2>
            <div class=\"stats-grid\" id=\"statsGrid\"></div>
            <div class=\"row\">
              <div class=\"col-lg-6\">
                <div class=\"task-card\">
                  <h5><i class=\"bi bi-list-check\"></i> Tareas Recientes</h5>
                  <div id=\"recentTasks\"></div>
                </div>
              </div>
              <div class=\"col-lg-6\">
                <div class=\"task-card\">
                  <h5><i class=\"bi bi-bell\"></i> Notificaciones</h5>
                  <p class=\"text-muted\">Sistema en modo visual - Sin backend conectado</p>
                  <small class=\"text-warning\"><i class=\"bi bi-exclamation-triangle\"></i> Todos los datos son simulados</small>
                </div>
              </div>
            </div>
          </div>
          
          <div id=\"section-tasks\" class=\"panel-section\">
            <h2 class=\"mb-4\"><i class=\"bi bi-list-task\"></i> Gestión de Tareas <span class=\"badge bg-warning text-dark\">VISUAL</span></h2>
            <button class=\"btn btn-admin mb-3\" style=\"width: auto;\" onclick=\"alert('[TODO] Implementar creación de tareas en backend')\">
              <i class=\"bi bi-plus-circle\"></i> Nueva Tarea
            </button>
            <div id=\"tasksList\"></div>
          </div>
          
          <div id=\"section-training\" class=\"panel-section\">
            <h2 class=\"mb-4\"><i class=\"bi bi-mortarboard\"></i> Capacitaciones <span class=\"badge bg-warning text-dark\">VISUAL</span></h2>
            <div class=\"table-card p-3\">
              <table class=\"table table-hover mb-0\">
                <thead>
                  <tr>
                    <th>Curso</th>
                    <th>Fecha</th>
                    <th>Hora</th>
                    <th>Capacidad</th>
                    <th>Inscritos</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody id=\"trainingsTable\"></tbody>
              </table>
            </div>
          </div>
          
          <div id=\"section-donations\" class=\"panel-section\">
            <h2 class=\"mb-4\"><i class=\"bi bi-heart\"></i> Donaciones <span class=\"badge bg-warning text-dark\">VISUAL</span></h2>
            <div class=\"table-card p-3\">
              <table class=\"table table-hover mb-0\">
                <thead>
                  <tr>
                    <th>Donante</th>
                    <th>Monto</th>
                    <th>Estado</th>
                    <th>Fecha</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody id=\"donationsTable\"></tbody>
              </table>
            </div>
          </div>
          
          <div id=\"section-users\" class=\"panel-section\">
            <h2 class=\"mb-4\"><i class=\"bi bi-people\"></i> Usuarios <span class=\"badge bg-warning text-dark\">VISUAL</span></h2>
            <p class=\"text-muted\">Gestión de usuarios - Pendiente de implementar con backend</p>
            <button class=\"btn btn-admin\" style=\"width: auto;\" onclick=\"alert('[TODO] Implementar CRUD de usuarios en backend')\">
              <i class=\"bi bi-person-plus\"></i> Agregar Usuario
            </button>
          </div>
        </div>
      </div>
    </div>
  ;
  
  loadDashboardData();
}

function showSection(section, event) {
  event.preventDefault();
  document.querySelectorAll('.panel-section').forEach(s => s.classList.remove('active'));
  document.getElementById('section-' + section).classList.add('active');
  document.querySelectorAll('.sidebar .nav-link').forEach(l => l.classList.remove('active'));
  event.target.classList.add('active');
}

async function loadDashboardData() {
  const stats = await API.content.stats();
  const statsGrid = document.getElementById('statsGrid');
  statsGrid.innerHTML = 
    <div class=\"stat-card\"><i class=\"bi bi-people\"></i><h3></h3><p>Usuarios</p></div>
    <div class=\"stat-card\"><i class=\"bi bi-mortarboard\"></i><h3></h3><p>Capacitaciones</p></div>
    <div class=\"stat-card\"><i class=\"bi bi-heart\"></i><h3></h3><p>Donaciones</p></div>
    <div class=\"stat-card\"><i class=\"bi bi-list-task\"></i><h3></h3><p>Tareas</p></div>
  ;
  
  const tasksRes = await API.tasks.get();
  const recentTasks = document.getElementById('recentTasks');
  recentTasks.innerHTML = tasksRes.tasks.slice(0, 3).map(t => 
    <div class=\"border-bottom py-2\">
      <strong></strong> <span class=\"badge bg-\"></span><br>
      <small class=\"text-muted\"></small>
    </div>
  ).join('');
  
  // Tasks section
  const tasksList = document.getElementById('tasksList');
  tasksList.innerHTML = tasksRes.tasks.map(t => 
    <div class=\"task-card\">
      <div class=\"d-flex justify-content-between\">
        <h5></h5>
        <span class=\"badge bg-\"></span>
      </div>
      <p class=\"text-muted mb-2\"></p>
      <span class=\"badge bg-\"></span>
    </div>
  ).join('');
  
  // Trainings
  const trainingsRes = await API.training.get();
  document.getElementById('trainingsTable').innerHTML = trainingsRes.trainings.map(tr => 
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><button class=\"btn btn-sm btn-outline-primary\" onclick=\"alert('[TODO] Gestionar inscripción')\">Ver</button></td>
    </tr>
  ).join('');
  
  // Donations
  document.getElementById('donationsTable').innerHTML = MockData.donations.map(d => 
    <tr>
      <td></td>
      <td>{d.amount.toLocaleString()}</td>
      <td><span class=\"badge bg-\"></span></td>
      <td></td>
      <td><button class=\"btn btn-sm btn-outline-primary\" onclick=\"alert('[TODO] Aprobar/Rechazar donación')\">Gestionar</button></td>
    </tr>
  ).join('');
}

function logout() {
  API.auth.logout().then(() => {
    currentUser = null;
    renderLogin();
  });
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
  renderLogin();
});
