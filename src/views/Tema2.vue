<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Público Objetivo

    img(data-aos="fade-up")(src="@/assets/curso/temas/tema2/1.png", alt="Imagen decorativa")

    .row.justify-content-center.z-2
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text
          p El público objetivo se define como el grupo de consumidores al que una empresa dirige sus productos, servicios y estrategias de comunicación. Su identificación es clave para garantizar que los mensajes lleguen a la audiencia correcta y logren los resultados esperados.
          p Según Kotler y Keller (2016), el público objetivo representa el conjunto de consumidores con características y necesidades similares, que tienen el potencial de interesarse en un producto o servicio.

    Separador
    .fullwidth-bg.fullwidth-bg--1
    #t_2_1(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 2.1.	Objetivos

    .row.justify-content-center.z-2
      .col-10.col-md-6.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-up")(src="@/assets/curso/temas/tema2/2.png", alt="Imagen decorativa")
      .col-lg-8
        p.mb-4 Las características del público objetivo pueden variar según el sector, la industria y el tipo de negocio, sin embargo, algunos aspectos fundamentales incluyen:
        ul.checklist.mb-4
          li Edad y género.
          li Nivel socioeconómico.
          li Intereses y hábitos digitales.
          li Ubicación geográfica.
          li Preferencias de consumo.

        .row.align-items-center.bg-color-secundario-s20.p-3
          .col-lg-10
            p Por ejemplo, una marca de ropa deportiva puede tener como público objetivo a jóvenes entre 18 y 35 años, activos físicamente y con interés en tendencias de moda deportiva.
          .col-lg-2.d-none.d-lg-block
            figure
              img.w-79(data-aos="fade-in-left")(src="@/assets/curso/temas/tema2/3.svg", alt="Imagen decorativa")

    Separador

    #t_2_2(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 2.2.	Patrones de comportamiento

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-lg-11
        p Los patrones de comportamiento son tendencias recurrentes en la forma en que los consumidores interactúan con productos, servicios y contenidos digitales. Comprender estos patrones es esencial para diseñar estrategias de comunicación efectivas, ya que permiten anticipar respuestas y adaptar mensajes a las expectativas del público objetivo.
        p.mb-0 El comportamiento del consumidor está influenciado por diversos factores, entre ellos:

      .col-lg-1.d-none.d-lg-block
        figure
          img(data-aos="zoom-in-left")(src='@/assets/curso/temas/tema2/23.svg', alt='imagen decorativa')
    
    .row.justify-content-center.z-2.mb-4
      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--primario")
          .row(titulo="Factores psicológicos")
            .col-auto
              p Incluyen elementos como la percepción, la motivación, las creencias y el aprendizaje. Estos influyen directamente en cómo el consumidor interpreta y responde ante los estímulos del mercado.
          .row(titulo="Factores sociales")
            .col-auto
              p Se relacionan con la cultura, la clase social, la familia y los grupos de referencia. Estos factores moldean las decisiones de compra a través de la interacción social y el entorno.
          .row(titulo="Factores tecnológicos")
            .col-auto
              p La digitalización, el acceso a plataformas en línea y la inteligencia artificial modifican la forma en que los consumidores buscan, comparan y adquieren productos o servicios.

      .col-8.col-sm-6.col-lg-3
        figure
          img.mb-3.mb-lg-0(data-aos="zoom-in-right")(src='@/assets/curso/temas/tema2/4.png', alt='imagen decorativa')

    .fullwidth-bg.fullwidth-bg--1
    p.mb-4.z-2 Los patrones de comportamiento pueden clasificarse en:

    .row.justify-content-center.align-items-center.factores-slider.z-2.mb-4.mb-lg-5
      .d-none.d-xl-block.col-xl-4
        figure
          img(src='@/assets/curso/temas/tema2/5.png', alt='Imagen de un mecánico')(data-aos="fade-down")
      .col-xl-8.mb-3.mb-lg-0
        SlyderF(columnas="col-md-6")
          .tarjeta.tarjeta--blanca.px-4.pt-5.factores-slider__tarjeta
            .row.justify-content-center.mb-3
              .col-5
                img.factores-slider__icon.mb-4(src='@/assets/curso/temas/tema2/6.svg' alt='Ilustacion de acompañamiento')
            .factores-slider__title-wrapper  
              h4.factores-slider__title.mb-4 Compra habitual
            p.mb-4.mb-5.text-center Los consumidores eligen productos de manera automática, sin evaluar alternativas.

          .tarjeta.tarjeta--blanca.px-4.pt-5.factores-slider__tarjeta
            .row.justify-content-center.mb-3
              .col-5
                img.factores-slider__icon.mb-4(src='@/assets/curso/temas/tema2/7.svg' alt='Ilustacion de acompañamiento')
            .factores-slider__title-wrapper  
              h4.factores-slider__title.mb-4 Búsqueda de variedad
            p.mb-4.text-center Se exploran nuevas opciones antes de tomar una decisión.

          .tarjeta.tarjeta--blanca.px-4.pt-5.factores-slider__tarjeta
            .row.justify-content-center.mb-3
              .col-5
                img.factores-slider__icon.mb-4(src='@/assets/curso/temas/tema2/8.svg' alt='Ilustacion de acompañamiento')
            .factores-slider__title-wrapper  
              h4.factores-slider__title.mb-4 Compra impulsiva
            p.mb-4.text-center La decisión se toma de manera espontánea, sin planificación previa.

          .tarjeta.tarjeta--blanca.px-4.pt-5.factores-slider__tarjeta
            .row.justify-content-center.mb-3
              .col-5
                img.factores-slider__icon.mb-4(src='@/assets/curso/temas/tema2/9.svg' alt='Ilustacion de acompañamiento')
            .factores-slider__title-wrapper  
              h4.factores-slider__title.mb-4 Compra racional
            p.mb-4.text-center Se analiza información detallada antes de elegir un producto o servicio.

    p En el contexto del <em>storytelling</em>, conocer los patrones de comportamiento permite diseñar narrativas que conecten con la audiencia de manera auténtica. Por ejemplo, si un público objetivo muestra un patrón de compra impulsiva, los contenidos deben generar emociones inmediatas y llamados a la acción efectivos. En cambio, si predomina un patrón de compra racional, es clave ofrecer información detallada y argumentos sólidos que respalden la propuesta de valor.

    Separador

    #t_2_3(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 2.3.	Necesidades y preferencias

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-lg-10
        p Las necesidades y preferencias del consumidor son fundamentales en el diseño de estrategias de contenido y segmentación de mercado, ya que determinan qué productos o servicios buscan, cómo los perciben y qué factores influyen en su decisión de compra.
        .row.justify-content-center.align-items-center
          .col-xl-1.d-none.d-xl-block
            figure
              img(data-aos="zoom-in-left")(src='@/assets/curso/temas/tema1/2.svg', alt='imagen decorativa')
          .col-xl-11
            p.mb-0 Según Kotler y Keller (2016), comprender las necesidades y preferencias del consumidor es esencial para diseñar estrategias de marketing efectivas. Estas dimensiones influyen directamente en el proceso de toma de decisiones de compra, ya que revelan qué motiva al consumidor, cómo evalúa los productos o servicios y qué lo impulsa a elegir una marca sobre otra:
      .col-lg-2.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema2/10.svg', alt='Imagen decorativa')
          
    TabsA.color-secundario
      .tarjeta.p-4(titulo="Funcionales")
        .row.justify-content-center
          .col-lg-7
            h5 Funcionales 
              span.fw-normal (utilidad y rendimiento del producto).
            p.mb-4.mb-lg-0 Los consumidores tienden a preferir productos que ofrezcan facilidad de uso, eficiencia en su desempeño y soluciones prácticas que respondan de manera efectiva a sus requerimientos diarios.
          .col-sm-7.col-lg-5
            figure
              img(data-aos="fade-in-left")(src='@/assets/curso/temas/tema2/11.png', alt='Imagen decorativa')

      .tarjeta.p-4(titulo="Emocionales")
        .row.justify-content-center
          .col-lg-7
            h5 Emocionales 
              span.fw-normal (experiencia y vínculo con la marca).
            p.mb-4.mb-lg-0 Se manifiestan en la inclinación hacia marcas que transmiten confianza, generan sensaciones positivas o evocan recuerdos agradables, creando un lazo afectivo que trasciende la funcionalidad.
          .col-sm-7.col-lg-5
            figure
              img(data-aos="fade-in-left")(src='@/assets/curso/temas/tema2/12.png', alt='Imagen decorativa')

      .tarjeta.p-4(titulo="Sociales")
        .row.justify-content-center
          .col-lg-7
            h5 Sociales 
              span.fw-normal (influencia de grupos o tendencias).
            p.mb-4.mb-lg-0 Se refleja en la elección de productos que son populares en su entorno, están respaldados por figuras influyentes o forman parte de tendencias culturales, buscando aceptación o diferenciación social.
          .col-sm-7.col-lg-5
            figure
              img(data-aos="fade-in-left")(src='@/assets/curso/temas/tema2/13.png', alt='Imagen decorativa')

      .tarjeta.p-4(titulo="Definición general")
        .row.justify-content-center
          .col-lg-7
            h5 Definición general 
              span.fw-normal (resolver deseos o problemas mediante bienes o servicios).
            p.mb-4.mb-lg-0 Las preferencias se orientan hacia opciones que se alinean con su estilo de vida y valores personales, considerando factores como el respaldo social, la sostenibilidad del producto, o las opiniones compartidas en entornos digitales.
          .col-sm-7.col-lg-5
            figure
              img(data-aos="fade-in-left")(src='@/assets/curso/temas/tema2/14.png', alt='Imagen decorativa')


    Separador

    #t_2_4(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 2.4.	Tendencias

    p.mb-4 El mercado está en constante evolución, y comprender las tendencias y factores de influencia permite a las marcas anticiparse a los cambios y optimizar sus estrategias de comunicación y segmentación. Actualmente, destacan tres tendencias clave en el comportamiento del consumidor:

    .row.justify-content-center.z-2.mb-4
      .col-8.col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(data-aos="zoom-in-right")(src='@/assets/curso/temas/tema2/4.png', alt='imagen decorativa')
      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--primario")
          .row(titulo="Personalización")
            .col-auto
              p Las marcas adaptan productos, servicios y mensajes según las preferencias, hábitos y necesidades individuales del consumidor, generando experiencias más relevantes y cercanas.
          .row(titulo="Sostenibilidad y consumo responsable")
            .col-auto
              p Aumenta el interés por productos ecológicos, reciclables y fabricados mediante procesos éticos. Los consumidores valoran el compromiso ambiental y social de las marcas.
          .row(titulo="Digitalización de la experiencia de compra")
            .col-auto
              p Se intensifica el uso de canales digitales para comprar, informarse e interactuar. Destacan el comercio electrónico, los contenidos interactivos y la atención automatizada a través de <em>chatbots</em> y plataformas.

    .row.align-items-center.bg-color-secundario-s20.p-3
      .col-lg-2.d-none.d-lg-block
        figure
          img.w-112(src='@/assets/curso/temas/tema2/16.svg', alt='Imagen decorativa')(data-aos="fade-down")
      .col-lg-10
        h5 Ejemplo empresarial
        p.mb-0 Empresas como Nike han integrado estrategias de personalización, permitiendo a los clientes diseñar sus propias zapatillas, alineándose con la tendencia de experiencia individualizada.

    Separador
    #t_2_5(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 2.5.	Factores de influencia

    p.mb-4 El comportamiento del consumidor está influenciado por una combinación de factores que enriquecen y guían sus decisiones de compra. Entre los más destacados se encuentran los factores sociales, económicos y psicológicos, los cuales permiten comprender mejor cómo se forman las preferencias, elecciones y fidelización hacia determinadas marcas o productos.

    div.slider-wrapper.mb-4.mb-lg-5
      .bg-orange
      .tarjeta.tarjeta--blanca.p-4.pt-5.z-2.mt-5.mb-3
        SlyderA(tipo="b")
          .row.z-2.justify-content-center
            .col-lg-6
              h4.mb-5 Factores sociales
              p.mb-3.mb-lg-0 Involucran la influencia de personas cercanas como familiares, amigos, líderes de opinión o comunidades digitales. Estos grupos moldean hábitos de consumo, valores y decisiones de compra.
            .col-10.col-lg-5
              figure
                img(src='@/assets/curso/temas/tema2/17.png', alt='Imagen decorativa')
          .row.z-2.justify-content-center
            .col-lg-6
              h4.mb-5 Factores económicos
              p.mb-3.mb-lg-0 Relacionados con el poder adquisitivo del consumidor, percepción del valor frente al precio, ofertas y disponibilidad de recursos. Influyen en la elección entre marcas o productos similares.
            .col-10.col-lg-5
              figure
                img(src='@/assets/curso/temas/tema2/18.png', alt='Imagen decorativa')
          .row.z-2.justify-content-center
            .col-lg-6
              h4.mb-5 Factores psicológicos
              p.mb-3.mb-lg-0 Comprenden elementos internos como la motivación, creencias, percepciones, aprendizaje y actitudes. Estos determinan cómo se interpreta la información y cómo se responde emocionalmente ante una marca o producto.
            .col-10.col-lg-5
              figure
                img(src='@/assets/curso/temas/tema2/19.png', alt='Imagen decorativa')

    p.my-5 De acuerdo con Solomon (2021), los principales factores de Influencia en el mercado son:

    .row.align-items-center.justify-content-center.card-info
      .col-10.col-sm-6.col-lg-4
        .rounded-4.overflow-hidden.mb-4.mb-lg-0
          .card-info__header
            figure
              img(src='@/assets/curso/temas/tema2/20.png', alt='Imagen decorativa')
          .card-info__body.bg-color-secundario-s20.p-4
            h5 Innovación tecnológica
            p Modifica la manera en que los consumidores interactúan con los productos.

      .col-10.col-sm-6.col-lg-4
        .rounded-4.overflow-hidden.mb-4.mb-lg-0
          .card-info__header
            figure
              img(src='@/assets/curso/temas/tema2/21.png', alt='Imagen decorativa')
          .card-info__body.bg-color-secundario-s20.p-4
            h5 <em>Marketing</em> digital
            p La presencia en redes sociales y publicidad impacta en la decisión de compra.
      .col-10.col-sm-6.col-lg-4
        .rounded-4.overflow-hidden
          .card-info__header
            figure
              img(src='@/assets/curso/temas/tema2/22.png', alt='Imagen decorativa')
          .card-info__body.bg-color-secundario-s20.p-4
            h5 Responsabilidad social
            p Las marcas con valores sostenibles generan mayor lealtad del consumidor.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
