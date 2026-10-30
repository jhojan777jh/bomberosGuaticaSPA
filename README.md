# SPA Visual - Bomberos Guática

## Descripción
Versión SPA puramente visual del sistema de Bomberos. **Sin backend PHP/MySQL**. Todos los datos son mock y las llamadas a API están stubadas para implementar después.

## Características
- Login visual (demo: admin/admin)
- Dashboard con estadísticas mock
- Gestión de tareas (visual)
- Gestión de capacitaciones (visual)
- Gestión de donaciones (visual)
- Gestión de usuarios (visual)
- Todas las funciones marcadas con [TODO] o [API STUB] para implementación futura

## Uso
Simplemente abrir index.html en un navegador web. No requiere servidor PHP.

## Estructura
`
spa-visual/
├── index.html      # Punto de entrada SPA
├── css/
│   └── app.css     # Estilos
├── js/
│   ├── mock-data.js # Datos de prueba
│   ├── api-stub.js  # Stubs de API (TODO)
│   └── app.js       # Lógica SPA
└── imagenes/        # Recursos gráficos
`

## Notas
- Las llamadas etch han sido reemplazadas por API.* stubs
- Para conectar backend: implementar las funciones en js/api-stub.js
- Los datos persisten solo en memoria durante la sesión
