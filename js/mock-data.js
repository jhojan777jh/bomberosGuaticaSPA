// Datos mock para visualización - Sin backend
const MockData = {
  user: { id: 1, username: 'admin', role: 'Administrador', name: 'Administrador' },
  stats: { usuarios: 15, capacitaciones: 8, donaciones: 23, tareas: 12 },
  tasks: [
    { id: 1, title: 'Revisar inventario', description: 'Verificar equipos y materiales', status: 'pending', priority: 'high' },
    { id: 2, title: 'Mantenimiento de vehículos', description: 'Revisión semanal', status: 'in_progress', priority: 'high' },
    { id: 3, title: 'Capacitación mensual', description: 'Preparar material', status: 'completed', priority: 'medium' }
  ],
  trainings: [
    { id: 1, name: 'RCP Básico', date: '2026-11-05', time: '08:00', capacity: 20, enrolled: 15 },
    { id: 2, name: 'Incendios Forestales', date: '2026-11-10', time: '14:00', capacity: 15, enrolled: 12 }
  ],
  staff: [
    { id: 1, name: 'Juan Pérez', role: 'Bombero' },
    { id: 2, name: 'María García', role: 'Cabo' },
    { id: 3, name: 'Carlos López', role: 'Teniente' }
  ],
  availability: [],
  assignments: [],
  donations: [
    { id: 1, donor: 'Empresa XYZ', amount: 500000, status: 'approved', date: '2026-10-28' },
    { id: 2, donor: 'Anónimo', amount: 200000, status: 'pending', date: '2026-10-29' }
  ]
};
