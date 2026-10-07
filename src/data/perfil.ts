// Contenido profesional del sitio. Mantener alineado con el CV
// (~/Documents/perfil-profesional/fuentes/cv.html).

export const presentacion = {
  nombre: 'Jorge Miranda Berrios',
  // The first role is shown on load, without JavaScript and with reduced motion.
  roles: [
    'Software Engineer',
    'Backend Software Engineer',
    'Backend Developer',
  ],
  ubicacion: 'Santiago, Chile',
  resumen:
    'Construyo sistemas de alto volumen para e-commerce, mercado bursátil y medios de pago. Foco en backend con Java, Spring Boot, Kafka y Redis, y experiencia en frontend, pipelines de datos e IA aplicada al desarrollo. Me muevo cómodo entre el código y el negocio: traduzco lo que necesitan los stakeholders en decisiones técnicas y las explico en un lenguaje que todos entienden.',
};

// Quick-scan layer: the full story of each highlight lives in its experience
// entry (`experiencia` points to that entry's `id`), so text is not repeated.
export const destacados = [
  {
    cifra: '13 s → 2 s',
    titulo: 'Endpoint crítico en Mercado Libre',
    contexto: '+50 millones de requests por hora',
    experiencia: 'mercado-libre',
  },
  {
    cifra: '3 bolsas',
    titulo: 'Cancelación de órdenes en NUAM',
    contexto: 'Chile, Perú y Colombia, sin Tech Lead',
    experiencia: 'nuam',
  },
  {
    cifra: '5 s → 200 ms',
    titulo: 'Integración con el motor Nasdaq',
    contexto: 'Motores legacy de tres bolsas',
    experiencia: 'nuam',
  },
];

export const experiencia = [
  {
    id: 'mercado-libre',
    cargo: 'Software Engineer Semi Senior',
    empresa: 'Mercado Libre',
    periodo: 'Ene 2026 – Jul 2026',
    modalidad: 'Híbrido, Santiago',
    logros: [
      'Reduje el tiempo de respuesta de un endpoint crítico de 13 s a 2 s en un flujo de más de 50 millones de requests por hora, paralelizando con Spring WebFlux.',
      'Desarrollé y mantuve microservicios de alto tráfico, con monitoreo, alertas e incidentes de producción.',
      'Construí un harness de IA sobre Claude Code para trabajar en codebases grandes: skills propias para investigar bugs y refactorizar, memoria persistente, tools de pruebas funcionales y menor consumo de tokens. Me ayudó a identificar la causa del endpoint de 13 s.',
      'Validé el código, propio y generado con IA, con quality gates de métrica CRAP y complejidad ciclomática, manteniendo 100 % de code coverage.',
    ],
  },
  {
    id: 'nuam',
    cargo: 'Software Engineer',
    empresa: 'Gatblac – Célula NUAM',
    periodo: 'Ene 2024 – Ene 2026',
    modalidad: 'Remoto, Chile',
    logros: [
      'Diseñé y construí de punta a punta, sin Tech Lead ni arquitecto asignado, el sistema de cancelación de órdenes de compra de la bolsa con Java 17, Spring Boot 3 y Kafka, soportando 10.000 requests por minuto (el máximo del motor).',
      'Resolví en un mismo diseño la cancelación automática de Chile y Perú (~200 ms) y el proceso manual de Colombia, integrando sus respuestas asíncronas vía socket, Kafka y webhooks.',
      'Reduje la comunicación con el motor Nasdaq de 5 s a 200 ms.',
      'Integré la lógica legacy de las distintas bolsas al motor NUAM con microservicios orientados a eventos (Kafka, Redis) desplegados en Kubernetes.',
      'Traduje requerimientos de negocio y decisiones técnicas para stakeholders no técnicos en un equipo Scrum.',
    ],
  },
  {
    id: 'ibss',
    cargo: 'Consultor Especialista',
    empresa: 'IBSS Consulting SpA',
    periodo: 'Ene 2022 – Ene 2024',
    modalidad: 'Remoto, Chile',
    logros: [
      'Integré los medios de pago BCI y MACH con sistemas POS y completé la certificación MACH; la solución la adoptaron dos grandes cadenas farmacéuticas.',
      'Implementé pipelines ETL con Dataflow y BigQuery, procesando cerca de 2 millones de registros por ejecución, integrando fuentes MySQL con microservicios y Pentaho.',
      'Desarrollé funcionalidades frontend con TypeScript y Angular para el equipo ITAM.',
    ],
  },
];

export const habilidades = [
  { area: 'Lenguajes', items: ['Java 8/11/17', 'TypeScript', 'JavaScript', 'Python'] },
  { area: 'Backend', items: ['Spring Boot', 'Spring WebFlux', 'APIs REST', 'SOAP', 'Microservicios', 'Event-driven'] },
  { area: 'Bases de datos', items: ['SQL', 'PostgreSQL', 'MySQL', 'BigQuery', 'NoSQL'] },
  { area: 'Mensajería y datos', items: ['Kafka', 'Redis', 'Dataflow', 'Pentaho'] },
  { area: 'Cloud y DevOps', items: ['GCP', 'Docker', 'Kubernetes', 'GitHub Actions', 'Jenkins', 'Git', 'OpenAPI'] },
  { area: 'Prácticas', items: ['SOLID', 'Clean Architecture', 'Testing', 'Métrica CRAP', 'Code review', 'Scrum'] },
  { area: 'IA en desarrollo', items: ['Claude Code', 'Codex', 'Cursor', 'Windsurf', 'GitHub Copilot'] },
];
