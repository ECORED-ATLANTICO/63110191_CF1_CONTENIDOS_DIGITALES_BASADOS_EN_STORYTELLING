<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 <em>Brief</em>

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El <em>brief</em> es un documento clave en la planificación de contenidos digitales, ya que permite consolidar información esencial para el desarrollo de estrategias comunicacionales. Según Kotler y Keller (2016), un <em>brief</em> bien estructurado proporciona lineamientos claros que facilitan la toma de decisiones y garantizan la coherencia de la campaña. El propósito de un <em>brief</em> es delimitar los objetivos y expectativas de una estrategia de contenido digital. De acuerdo con Chaffey y Smith (2017), este documento sirve para orientar a los equipos creativos, asegurando que el contenido producido esté alineado con la identidad de la marca y las necesidades del público objetivo
  
    Separador

    #t_1_1(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 1.1.	Objetivos

    .row.justify-content-center.align-items-center
      .col-lg-11
        p.mb-3 El <em>brief</em> tiene la finalidad de convertirse en un punto de partida estratégico para cualquier proyecto de comunicación, ya que concentra la información esencial que da rumbo a las decisiones creativas y operativas. En el contexto de la planificación de contenidos digitales basados en <em>storytelling</em>, entender sus objetivos permite a quienes desarrollan la narrativa captar con claridad el propósito general y orientar sus ideas a lo que realmente necesita comunicar la marca.
      .col-lg-1.d-none.d-lg-block
        figure
          img(data-aos="zoom-in-left")(src='@/assets/curso/temas/tema1/2.svg', alt='imagen decorativa')
    
    .row.justify-content-center.z-2
      .col-8.col-sm-6.col-lg-3
        figure
          img.mb-3.mb-lg-0(data-aos="zoom-in-right")(src='@/assets/curso/temas/tema1/3.png', alt='imagen decorativa')
      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--primario")
          .row(titulo="Asegurar coherencia y dirección en los mensajes")
            .col-auto
              p Permite orientar estratégicamente las acciones de comunicación y <em>marketing</em>, evitando la improvisación y garantizando alineación con los objetivos.
          .row(titulo="Unificar criterios entre actores del proyecto")
            .col-auto
              p Facilita la comprensión compartida entre diseñadores, creativos, clientes y demás involucrados sobre el rumbo del proyecto.
          .row(titulo="Prever recursos y tiempos de ejecución")
            .col-auto
              p Ayuda a planificar con anticipación, optimizando la utilización de recursos y evitando desviaciones en los cronogramas.
          .row(titulo="Establecer base para evaluación de resultados")
            .col-auto
              p Define metas y criterios de éxito que permiten valorar la efectividad de la narrativa y realizar los ajustes necesarios.
          .row(titulo="Enfocar y estimular la creatividad con propósito")
            .col-auto
              p Proporciona parámetros estratégicos que guían el proceso creativo hacia soluciones más efectivas y alineadas con el objetivo del contenido.

    Separador

    .fullwidth-bg.fullwidth-bg--1
    #t_1_2(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 1.2.	Tipos

    p.mb-4.z-2 Existen varios tipos de <em>brief</em>, cada uno adaptado a distintas necesidades estratégicas. Según Fill (2019), los más utilizados en el <em>marketing</em> digital son:

    .row.justify-content-center.align-items-center.factores-slider.z-2
      .col-xl-8.mb-3.mb-lg-0
        SlyderF(columnas="col-md-6")
          .tarjeta.tarjeta--blanca.px-4.pt-5.factores-slider__tarjeta
            .row.justify-content-center.mb-3
              .col-5
                img.factores-slider__icon.mb-4(src='@/assets/curso/temas/tema1/4.png' alt='Ilustacion de acompañamiento')
            .factores-slider__title-wrapper  
              h4.factores-slider__title.mb-4 Creativo
            p.mb-4.mb-5.text-center Enfocado en campañas publicitarias y contenido visual. Contiene datos clave sobre el mensaje y tono de la comunicación.

          .tarjeta.tarjeta--blanca.px-4.pt-5.factores-slider__tarjeta
            .row.justify-content-center.mb-3
              .col-5
                img.factores-slider__icon.mb-4(src='@/assets/curso/temas/tema1/5.png' alt='Ilustacion de acompañamiento')
            .factores-slider__title-wrapper  
              h4.factores-slider__title.mb-4 Estratégico
            p.mb-4.text-center Se emplea en el desarrollo de estrategias de <em>marketing</em> digital. Incluye análisis de mercado y objetivos de posicionamiento.

          .tarjeta.tarjeta--blanca.px-4.pt-5.factores-slider__tarjeta
            .row.justify-content-center.mb-3
              .col-5
                img.factores-slider__icon.mb-4(src='@/assets/curso/temas/tema1/6.png' alt='Ilustacion de acompañamiento')
            .factores-slider__title-wrapper  
              h4.factores-slider__title.mb-4 Técnico
            p.mb-4.text-center Dirigido a equipos de producción digital, proporcionando especificaciones técnicas y detalles operativos.
      .d-none.d-xl-block.col-xl-4
        figure
          img(src='@/assets/curso/temas/tema1/7.png', alt='Imagen de un mecánico')(data-aos="fade-up")

    Separador

    #t_1_3(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 1.3.	Estructura

    p.mb-4 La estructura de un brief varía según el contexto, pero generalmente incluye los siguientes elementos:

    .row.justify-content-center.mb-3.z-2
      .col-8.col-sm-6.col-lg-3
        figure
          img.mb-3.mb-lg-0(data-aos="zoom-in-right")(src='@/assets/curso/temas/tema1/8.png', alt='imagen decorativa')
      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--primario")
          .row(titulo="Objetivo")
            .col-auto
              p Explicación clara de la finalidad del contenido.
          .row(titulo="Audiencia")
            .col-auto
              p Perfil del público objetivo basado en datos demográficos y psicográficos.
          .row(titulo="Mensaje clave")
            .col-auto
              p Ideas centrales que deben transmitirse en la comunicación.
          .row(titulo="Canales de distribución")
            .col-auto
              p Plataformas donde se difundirá el contenido.

    .row.bg-color-secundario-s20.p-3
      .col-lg-2.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema1/9.png', alt='Imagen decorativa')(data-aos="fade-up")
      .col-lg-10
        h5 Ejemplo empresarial
        p.mb-0 Un ejemplo de <em>brief</em> aplicado en una empresa es el caso de Nike, que desarrolla <em>briefs</em> detallados para cada campaña publicitaria, asegurando que los valores de la marca estén reflejados en cada pieza de contenido. En la campaña "<em>Just do it</em>", el <em>brief</em> incluyó elementos emocionales y estratégicos para conectar con el público objetivo (Nike, 2021).



</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
