// API Stub - Todos los endpoints marcados para implementación futura
const API = {
  // Autenticación
  auth: {
    login: async (credentials) => {
      console.log('[API STUB] POST /auth/login - TODO: Implementar backend', credentials);
      // Simulación visual
      await new Promise(r => setTimeout(r, 300));
      if (credentials.username === 'admin' && credentials.password === 'admin') {
        return { success: true, user: MockData.user, token: 'mock-token-123' };
      }
      return { success: false, message: 'Credenciales inválidas (demo: admin/admin)' };
    },
    logout: async () => {
      console.log('[API STUB] POST /auth/logout - TODO: Implementar backend');
      await new Promise(r => setTimeout(r, 200));
      return { success: true };
    }
  },
  
  // Tareas
  tasks: {
    get: async () => {
      console.log('[API STUB] GET /tasks/get - TODO: Implementar backend');
      await new Promise(r => setTimeout(r, 200));
      return { success: true, tasks: MockData.tasks };
    },
    create: async (data) => {
      console.log('[API STUB] POST /tasks/create - TODO: Implementar backend', data);
      await new Promise(r => setTimeout(r, 300));
      return { success: true, task: { id: Date.now(), ...data, status: 'pending' } };
    }
  },
  
  // Estadísticas
  content: {
    stats: async () => {
      console.log('[API STUB] GET /content/stats - TODO: Implementar backend');
      await new Promise(r => setTimeout(r, 200));
      return { success: true, stats: MockData.stats };
    }
  },
  
  // Capacitaciones
  training: {
    staff: async () => {
      console.log('[API STUB] GET /training/staff - TODO: Implementar backend');
      await new Promise(r => setTimeout(r, 200));
      return { success: true, staff: MockData.staff };
    },
    schedule: async (data) => {
      console.log('[API STUB] POST /training/schedule - TODO: Implementar backend', data);
      await new Promise(r => setTimeout(r, 300));
      return { success: true };
    },
    availability: async (params) => {
      console.log('[API STUB] GET/POST /training/availability - TODO: Implementar backend', params);
      await new Promise(r => setTimeout(r, 200));
      return { success: true, availability: MockData.availability };
    },
    get: async () => {
      console.log('[API STUB] GET /training/get - TODO: Implementar backend');
      await new Promise(r => setTimeout(r, 200));
      return { success: true, trainings: MockData.trainings };
    },
    scheduled: async () => {
      console.log('[API STUB] GET /training/scheduled - TODO: Implementar backend');
      await new Promise(r => setTimeout(r, 200));
      return { success: true, scheduled: [] };
    },
    assignStaff: async (data) => {
      console.log('[API STUB] POST /training/assign-staff - TODO: Implementar backend', data);
      await new Promise(r => setTimeout(r, 300));
      return { success: true };
    },
    assignments: async () => {
      console.log('[API STUB] GET /training/assignments - TODO: Implementar backend');
      await new Promise(r => setTimeout(r, 200));
      return { success: true, assignments: MockData.assignments };
    }
  }
};
