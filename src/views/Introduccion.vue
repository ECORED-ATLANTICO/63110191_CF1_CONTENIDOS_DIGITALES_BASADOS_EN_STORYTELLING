<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .fullwidth-bg.fullwidth-bg--1
    .row.justify-content-center.align-items-center.mb-4
      .col-10.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-up")(src="@/assets/curso/introduccion/1.png" alt="Imagen decorativa")
      .col-lg-8
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 En el mundo digital actual, comprender el público objetivo es esencial para el éxito de cualquier estrategia de comunicación y <em>marketing</em>. Definirlo con precisión permite crear mensajes efectivos y personalizar contenidos para mejorar la conexión con la audiencia. Este componente formativo aborda la identificación del público objetivo mediante técnicas avanzadas de segmentación de mercado, asegurando que los aprendices adquieran habilidades estratégicas para diseñar campañas digitales impactantes.
        .row
          .col-lg-9
            p.mb-0 Asimismo, conocer el brief es fundamental para quienes planifican contenidos digitales basados en <em>storytelling</em>, ya que este documento proporciona directrices clave sobre los objetivos de marca, el tono de comunicación y la identidad corporativa, comprender sus elementos permite interpretar de manera precisa las estrategias comunicacionales y adaptar la narrativa a las expectativas definidas.
          .col-lg-3
            figure
              img(data-aos="fade-up")(src="@/assets/curso/introduccion/2.png" alt="Imagen decorativa")
          
    p.mb-5 A lo largo de este documento, se explorarán conceptos clave como el <em>buyer persona</em>, la segmentación de mercados, los estándares de segmentación y los principios del <em>brief</em>, proporcionando ejemplos empresariales, herramientas prácticas y recursos digitales que faciliten la estructuración efectiva de historias que conecten con la audiencia.    

    .video.mb-2
      iframe(width="560" height="315" src="https://www.youtube.com/embed/hCZxnw4K5cw" title="Movilidad inteligente y circulación segura" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen)
    figcaption <strong>Video:</strong> Movilidad inteligente y circulación segura.

</template>

<script>
export default {
  name: 'Introduccion',
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
