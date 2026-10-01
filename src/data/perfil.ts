// Contenido profesional del sitio. Mantener alineado con el CV
// (~/Documents/perfil-profesional/fuentes/cv.html).

export const presentacion = {
  nombre: 'Jorge Miranda Berrios',
  rol: 'Backend Software Engineer',
  ubicacion: 'Santiago, Chile',
  resumen:
    'Construyo microservicios en Java y Spring Boot para sistemas donde la performance y la confiabilidad importan: e-commerce de alto tráfico, el mercado bursátil y medios de pago.',
};

export const destacados = [
  {
    cifra: '13 s → 2 s',
    titulo: 'Endpoint crítico en Mercado Libre',
    detalle:
      'En un flujo de más de 50 millones de requests por hora, paralelizando con Spring WebFlux operaciones que se ejecutaban en secuencia.',
  },
  {
    cifra: '3 bolsas',
    titulo: 'Cancelación de órdenes en NUAM',
    detalle:
      'Diseñé y construí el sistema para Chile, Perú y Colombia (Java 17, Spring Boot 3, Kafka) sin Tech Lead ni arquitecto asignado.',
  },
  {
    cifra: '5 s → 200 ms',
    titulo: 'Integración con el motor Nasdaq',
    detalle:
      'Optimicé la comunicación entre los motores legacy de las bolsas y Nasdaq, con picos de 10.000 requests por minuto.',
  },
];

export const experiencia = [
  {
    cargo: 'Software Engineer Semi Senior',
    empresa: 'Mercado Libre',
    periodo: 'Ene 2026 – Jul 2026',
    modalidad: 'Híbrido, Santiago',
    logros: [
      'Reduje el tiempo de respuesta de un endpoint crítico de 13 s a 2 s en un flujo de más de 50 millones de requests por hora, paralelizando con Spring WebFlux.',
      'Desarrollé y mantuve microservicios de alto tráfico, con monitoreo, alertas e incidentes de producción.',
      'Incorporé IA generativa al flujo de desarrollo: Claude Code, Codex, Cursor, Windsurf y GitHub Copilot.',
      'Mantuve 100 % de code coverage, controlando complejidad con la métrica CRAP.',
    ],
  },
  {
    cargo: 'Software Engineer',
    empresa: 'Gatblac – Célula NUAM',
    periodo: 'Ene 2024 – Ene 2026',
    modalidad: 'Remoto, Chile',
    logros: [
      'Diseñé y construí de punta a punta el sistema de cancelación de órdenes de compra de la bolsa NUAM (Chile, Perú y Colombia), soportando 10.000 requests por minuto.',
      'Reduje la comunicación con el motor Nasdaq de 5 s a 200 ms.',
      'Integré la lógica legacy de las distintas bolsas al motor NUAM con Java 17 y Spring Boot 3, con más de 90 % de code coverage.',
      'Diseñé microservicios orientados a eventos con Kafka y Redis, desplegados en Kubernetes.',
    ],
  },
  {
    cargo: 'Consultor Especialista',
    empresa: 'IBSS Consulting SpA',
    periodo: 'Ene 2022 – Ene 2024',
    modalidad: 'Remoto, Chile',
    logros: [
      'Integré los medios de pago BCI y MACH con sistemas POS y completé la certificación MACH; la solución la adoptaron dos grandes cadenas farmacéuticas.',
      'Implementé pipelines ETL con Dataflow y BigQuery, procesando cerca de 2 millones de registros por ejecución.',
      'Desarrollé microservicios con Java 8/11 y Spring Boot, con más de 90 % de code coverage.',
    ],
  },
];

export const habilidades = [
  { area: 'Lenguajes', items: ['Java 8/11/17', 'TypeScript', 'JavaScript', 'Python'] },
  { area: 'Backend', items: ['Spring Boot', 'Spring WebFlux', 'APIs REST', 'SOAP', 'Microservicios', 'Event-driven'] },
  { area: 'Mensajería y datos', items: ['Kafka', 'Redis', 'BigQuery', 'Dataflow', 'Pentaho'] },
  { area: 'Cloud y DevOps', items: ['GCP', 'Docker', 'Kubernetes', 'Git', 'OpenAPI'] },
  { area: 'IA en desarrollo', items: ['Claude Code', 'Codex', 'Cursor', 'Windsurf', 'GitHub Copilot'] },
];
