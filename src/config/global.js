export default {
  global: {
    Name: 'Público objetivo',
    Description:
      'Este componente aborda la planificación de contenidos digitales basados en <em>storytelling</em>, partiendo del <em>brief</em> como guía estratégica. Explora la importancia de definir el público objetivo, construyendo el <em>buyer persona</em> para adaptar narrativas a sus necesidades. Además, profundiza en la segmentación de mercados, proporcionando técnicas y buenas prácticas para diseñar campañas impactantes y alineadas con los objetivos de marca.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: '<em>Brief</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Objetivos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Tipos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Estructura',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Público objetivo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Características',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Patrones de comportamiento',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Necesidades y preferencias',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Tendencias',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Factores de Influencia',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: '<em>Buyer persona</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Características',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Factores de motivación',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Creación',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Segmentación de mercados',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Objetivos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Tipos',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Criterios',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Estándares',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Buenas prácticas',
            hash: 't_4_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Público objetivo',
      referencia:
        'Fourquet, M. (s. f.). <em>Público objetivo: Qué es, características y cómo llegar a él</em>. QuestionPro.',
      tipo: 'Artículo',
      link: 'https://www.questionpro.com/blog/es/publico-objetivo/',
    },
    {
      tema: '<em>Buyer persona</em>',
      referencia:
        'HubSpot. (2023, octubre 26). <em>6 ejemplos de buyer personas para diferentes empresas</em>. Blog de HubSpot.',
      tipo: 'Artículo',
      link: 'https://komunikalatam.com/buyer-persona/',
    },
    {
      tema: '<em>Buyer persona</em>',
      referencia:
        'Komunika Latam. (2023). <em>El buyer persona y su importancia en el marketing actual.</em>',
      tipo: 'Artículo',
      link: 'https://blog.hubspot.es/marketing/ejemplos-buyer-persona',
    },
    {
      tema: 'Segmentación de mercados',
      referencia:
        'Parra, A. (s. f.). <em>¿Qué es la segmentación de mercados?</em> QuestionPro.',
      tipo: 'Artículo',
      link:
        'https://www.questionpro.com/blog/es/que-es-la-segmentacion-de-mercados/',
    },
  ],
  glosario: [
    {
      termino: '<em>Analytics</em>',
      significado:
        'Proceso de análisis de datos digitales para obtener información útil.',
    },

    {
      termino: '<em>Business suite</em>',
      significado:
        'Herramienta de Meta para gestionar Facebook e Instagram desde un solo lugar.',
    },

    {
      termino: '<em>Dashboard</em>',
      significado:
        'Panel de visualización que muestra métricas clave en tiempo real.',
    },

    {
      termino: '<em>E-commerce</em>',
      significado:
        'Comercio electrónico que se realiza a través de plataformas digitales.',
    },

    {
      termino: '<em>Engagement</em>',
      significado:
        'Grado de interacción que una publicación o contenido genera en la audiencia.',
    },

    {
      termino: '<em>Insights</em>',
      significado:
        'Conocimientos accionables derivados del análisis e interpretación de datos.',
    },

    {
      termino: 'KPI',
      significado:
        'Indicador clave de desempeño que mide el progreso hacia un objetivo.',
    },

    {
      termino: 'SEM <em>(Search Engine Marketing)</em>',
      significado:
        'Estrategia de marketing digital basada en anuncios pagados en buscadores.',
    },

    {
      termino: 'SEO',
      significado:
        'Optimización de contenidos para mejorar su posicionamiento en buscadores.',
    },

    {
      termino: '<em>Social Listening</em>',
      significado:
        'Técnica que analiza conversaciones digitales para entender al consumidor.',
    },

    {
      termino: '<em>Storytelling</em>',
      significado:
        'Técnica de comunicación basada en narrativas que conectan con el público.',
    },

    {
      termino: '<em>Vanity Metrics</em>',
      significado:
        'Métricas superficiales que no aportan valor estratégico real.',
    },
  ],
  referencias: [
    {
      referencia:
        'Álvarez Sigüenza, J. F. (2024). <em>Los segmentos del marketing: Análisis, definición y tipos</em>. RAE-IC, Revista de la Asociación Española de Investigación de la Comunicación, 11(21).',
      link: 'https://doi.org/10.24137/raeic.11.21.19',
    },
    {
      referencia:
        'Beltrán Mora, M. N., Parrales Carvajal, V. M., & Ledesma Álvarez, G. D. (2019). <em>El Buyer Persona como factor clave entre las tendencias en gestión empresarial</em>. Revista Científica Mundo de la Investigación y el Conocimiento, 3(3), 659–681',
      link: 'http://recimundo.com/index.php/es/article/view/615',
    },
    {
      referencia:
        'Caisaguano Chiluisa, M. A. (2021). <em>El Buyer Persona, una estrategia de marketing digital para las MiPymes del sector turístico de Tungurahua</em> [Tesis de grado, Universidad Técnica de Ambato]. Repositorio UTA.',
      link:
        'https://repositorio.uta.edu.ec/server/api/core/bitstreams/8746bc51-5511-4408-bfa4-5f1aab99f1f4/content',
    },
    {
      referencia:
        'Fernández Valiñas, R. (2009). <em>Segmentación de mercados. McGraw-Hill Interamericana.</em>',
      link:
        'https://www.uteg.edu.ec/biblioteca-libros/wp-content/uploads/2023/09/Segmentacion-de-mercados_compressed.pdf',
    },
    {
      referencia:
        'Universidad Nacional Autónoma de Nicaragua. (2022). Segmentación de mercado [Seminario de graduación]. Repositorio UNAN.',
      link: 'https://repositorio.unan.edu.ni/id/eprint/17362/1/17362.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nicolas Cruz Ríos',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Heydy Cristina González García',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Fabio Fonseca Arguelles',
          cargo: 'Desarrollador <i>full stack junior</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Ivan Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'María Fernanda Morales Angulo',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adie Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jairo Luis Valencia Ebratt',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
