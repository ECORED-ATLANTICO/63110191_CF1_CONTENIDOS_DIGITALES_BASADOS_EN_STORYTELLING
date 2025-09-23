<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 <em>buyer</em> persona

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-3 El <em>buyer</em> persona es una representación semificticia del cliente ideal de una empresa. Se basa en datos reales sobre comportamiento, motivaciones y necesidades del consumidor, permitiendo diseñar estrategias de comunicación más personalizadas y eficaces (HubSpot, 2022).<br><br>
        p.mb-0 Según Revella (2015), el <em>buyer</em> persona es un perfil detallado que describe los intereses, preocupaciones y patrones de toma de decisiones de los clientes potenciales. Esta herramienta facilita la creación de contenido relevante y aumenta la efectividad de las estrategias de <em>marketing</em>.

    Separador

    #t_3_1(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 3.1	Características

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-lg-11
        p.mb-0 En la planeación estratégica de contenidos digitales centrados en <em>storytelling</em>, identificar y comprender al público objetivo es esencial para lograr una comunicación auténtica y efectiva. Uno de los recursos clave para este propósito es la construcción del <em>buyer</em> persona, una representación semificticia de la cliente ideal basada en datos reales y análisis del entorno. A continuación, se presentan los principales elementos que definen sus características, fundamentales para guiar decisiones de contenido, tono narrativo y selección de canales digitales.
      .col-lg-1.d-none.d-lg-block
        figure
          img(data-aos="zoom-in-left")(src='@/assets/curso/temas/tema3/2.svg', alt='imagen decorativa')

    .row.justify-content-center.z-2
      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--primario")
          .row.ms-5.ps-2(titulo="Perfil demográfico")
            .col-auto.ps-0
              p Incluye aspectos como edad, género, ubicación geográfica, nivel educativo y estrato socioeconómico, permitiendo segmentar de manera precisa el público objetivo.
          .row.ms-5.ps-2(titulo="Intereses y preferencias")
            .col-auto.ps-0
              p Se refiere a gustos personales, pasatiempos, estilo de vida, necesidades emocionales y temáticas que captan su atención o generan conexión con una marca.
          .row.ms-5.ps-2(titulo="Hábitos de consumo")
            .col-auto.ps-0
              p Engloba la forma en que el usuario adquiere productos o servicios, su frecuencia de compra, medios de pago preferidos y sensibilidad al precio o promociones.
          .row.ms-5.ps-2(titulo="Comportamiento digital")
            .col-auto.ps-0
              p Analiza el uso de plataformas digitales, redes sociales preferidas, horarios de conexión, tipo de contenido que consume (videos, blogs, infografías, entre otros).
          .row.ms-5.ps-2(titulo="Motivaciones y preocupaciones")
            .col-auto.ps-0
              p Explora qué impulsa su decisión de compra, cuáles son sus objetivos personales o profesionales, y qué obstáculos o temores busca superar con una solución.
          .row.ms-5.ps-2(titulo="Objetivos y desafíos")
            .col-auto.ps-0
              p Identifica los retos que enfrenta el consumidor y las metas que espera alcanzar, lo cual permite alinear los contenidos digitales a sus necesidades reales.

      .col-8.col-sm-6.col-lg-3
        figure
          img.mb-3.mb-lg-0(data-aos="zoom-in-right")(src='@/assets/curso/temas/tema3/3.png', alt='imagen decorativa')

    Separador

    #t_3_2(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 3.2	Factores de motivación

    p.mb-4.mb-lg-5 El <em>buyer</em> persona no solo responde a necesidades básicas, sino que también está influenciado por motivaciones profundas que determinan su comportamiento de compra, identificar estos factores permite diseñar estrategias de contenido alineadas con sus expectativas y valores:

    .row.justify-content-center.z-2
      .col-8.col-sm-6.col-lg-3
        figure
          img.mb-3.mb-lg-0(data-aos="zoom-in-right")(src='@/assets/curso/temas/tema3/4.png', alt='imagen decorativa')
      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--primario")
          .row.ms-5.ps-2(titulo="Necesidades y problemas para resolver")
            .col-auto.ps-0
              p Busca soluciones efectivas para satisfacer necesidades o resolver problemas específicos.
          .row.ms-5.ps-2(titulo="Aspiraciones y metas personales")
            .col-auto.ps-0
              p Motivado por el deseo de alcanzar un estatus, bienestar o crecimiento profesional.
          .row.ms-5.ps-2(titulo="Influencias sociales y culturales")
            .col-auto.ps-0
              p Las recomendaciones de grupos sociales y las tendencias culturales impactan la decisión de compra.
          .row.ms-5.ps-2(titulo="Experiencia y confianza en la marca")
            .col-auto.ps-0
              p La seguridad y transparencia de una marca influyen en la percepción del consumidor.
          .row.ms-5.ps-2(titulo="Precio y valor percibido")
            .col-auto.ps-0
              p Se evalúa el costo en relación con los beneficios obtenidos antes de la compra.
          .row.ms-5.ps-2(titulo="Emoción y conexión personal")
            .col-auto.ps-0
              p Factores emocionales como nostalgia, felicidad y confianza pueden influir en la elección del producto.

    Separador

    #t_3_3(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 3.3	Creación

    p.mb-4.mb-lg-5 El <em>buyer</em> persona es una representación semificticia del cliente ideal, basada en datos reales y análisis de comportamiento. Su construcción permite diseñar estrategias de contenido alineadas con las necesidades y expectativas del público objetivo. Para desarrollar un <em>buyer</em> persona, se deben seguir los siguientes pasos:

    .row.justify-content-center
      .col-xl-10
        PasosA.color-acento-contenido.mb-5(tipo="n")
          .row
            .col-md-8.mb-4.mb-md-0
              h3.mb-4 Investigación de mercado y recopilación de datos
              p Consiste en recolectar información detallada del público objetivo mediante encuestas, entrevistas, análisis de redes sociales y estudios de mercado. Incluye datos demográficos, intereses, hábitos de consumo y desafíos.
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema3/5.png', alt='Imagen decorativa')

          .row
            .col-md-4.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema3/6.png', alt='Imagen decorativa')
            .col-md-8.text-start
              h3.mb-4 Identificación de patrones y segmentación
              p Implica analizar los datos recopilados para encontrar patrones de comportamiento y clasificar a los consumidores en grupos similares, facilitando estrategias comunicativas más precisas.

          .row
            .col-md-8.mb-4.mb-md-0
              h3.mb-4 Creación del perfil del <em>buyer</em> persona
              p A partir de la información organizada, se construye un perfil detallado del cliente ideal, con datos como edad, género, ocupación, intereses y motivaciones. Se le asigna un nombre y una narrativa contextual.
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema3/5.png', alt='Imagen decorativa')

          .row
            .col-md-4.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema3/6.png', alt='Imagen decorativa')
            .col-md-8.text-start
              h3.mb-4 Validación y ajuste del <em>buyer</em> persona
              p Se verifica la fidelidad del perfil creado mediante pruebas piloto, encuestas o análisis de comportamiento. Se realizan ajustes necesarios para afinar su exactitud.

          .row
            .col-md-8.mb-4.mb-md-0
              h3.mb-4 Aplicación en estrategias de contenido
              p El <em>buyer</em> persona validado se usa como base para personalizar mensajes, elegir formatos adecuados y diseñar campañas que generen conexión efectiva con la audiencia.
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema3/5.png', alt='Imagen decorativa')
                
    .fullwidth-bg.fullwidth-bg--1
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-lg-1.d-none.d-lg-block
        figure
          img(data-aos="zoom-in-left")(src='@/assets/curso/temas/tema3/2.svg', alt='imagen decorativa')
      .col-lg-11
        p.mb-0 Una vez construido, validado y comprendido el <em>buyer</em> persona, el siguiente paso es vincular sus características clave con la planificación estratégica del contenido digital. Cada elemento del perfil permite tomar decisiones más acertadas sobre qué comunicar, cómo hacerlo y a través de qué canales. De esta forma, se logra diseñar mensajes más relevantes y personalizados, que aumentan la efectividad de las campañas y fortalecen el vínculo con la audiencia. A continuación, se detallan los componentes clave del <em>buyer</em> persona y su aplicación práctica en el diseño de estrategias de contenido efectivas:

    .row.justify-content-center.align-items-center.factores-slider.z-2
      .d-none.d-xl-block.col-xl-4
        figure
          img(src='@/assets/curso/temas/tema3/10.png', alt='Imagen de un mecánico')(data-aos="fade-down")
      .col-xl-8.mb-3.mb-lg-0
        SlyderF(columnas="col-md-6")
          .tarjeta.tarjeta--blanca.px-4.pt-5.factores-slider__tarjeta
            .row.justify-content-center.mb-3
              .col-5
                img.factores-slider__icon.mb-4(src='@/assets/curso/temas/tema3/11.png' alt='Ilustacion de acompañamiento')
            .factores-slider__title-wrapper  
              h4.factores-slider__title.mb-4 Necesidades
            p.mb-4.mb-5.text-center Crear contenido que resuelva sus problemas específicos.

          .tarjeta.tarjeta--blanca.px-4.pt-5.factores-slider__tarjeta
            .row.justify-content-center.mb-3
              .col-5
                img.factores-slider__icon.mb-4(src='@/assets/curso/temas/tema3/12.png' alt='Ilustacion de acompañamiento')
            .factores-slider__title-wrapper  
              h4.factores-slider__title.mb-4 Canales favoritos
            p.mb-4.text-center Usar los medios digitales donde el <em>buyer</em> persona interactúa más

          .tarjeta.tarjeta--blanca.px-4.pt-5.factores-slider__tarjeta
            .row.justify-content-center.mb-3
              .col-5
                img.factores-slider__icon.mb-4(src='@/assets/curso/temas/tema3/13.png' alt='Ilustacion de acompañamiento')
            .factores-slider__title-wrapper  
              h4.factores-slider__title.mb-4 Estilo de comunicación
            p.mb-4.text-center Ajustar el tono del mensaje para generar empatía.

          .tarjeta.tarjeta--blanca.px-4.pt-5.factores-slider__tarjeta
            .row.justify-content-center.mb-3
              .col-5
                img.factores-slider__icon.mb-4(src='@/assets/curso/temas/tema3/14.png' alt='Ilustacion de acompañamiento')
            .factores-slider__title-wrapper  
              h4.factores-slider__title.mb-4 Motivaciones
            p.mb-4.text-center Diseñar campañas que conecten con sus intereses.


</template>

<script>
export default {
  name: 'Tema3',
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
