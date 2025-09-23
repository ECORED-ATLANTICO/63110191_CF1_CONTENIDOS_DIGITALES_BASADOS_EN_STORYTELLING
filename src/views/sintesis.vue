<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente formativo “Público objetivo” permite comprender los elementos esenciales para identificar, analizar y perfilar audiencias en comunicación y <em>marketing</em>, desde su conceptualización hasta su aplicación estratégica. Inicia con el estudio del <em>brief</em> y su papel en la definición de objetivos, tipos y estructura como guía para proyectos comunicativos.
    P Luego, profundiza en el análisis del público objetivo, abordando sus características, comportamientos, necesidades, preferencias y factores de influencia, lo que facilita una caracterización precisa. También se desarrollan los conceptos del <em>buyer</em> persona, su construcción y motivaciones clave.
    P Finalmente, se exploran los fundamentos de la segmentación de mercados, objetivos, tipos, criterios, estándares y buenas prácticas, para optimizar la personalización de estrategias y orientar acciones comunicativas más efectivas y alineadas con el mercado.
    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="El componente formativo “Público objetivo” ofrece una aproximación integral a los conocimientos fundamentales sobre la identificación de audiencias y la construcción estratégica de perfiles en contextos de comunicación y marketing. Este módulo analiza detalladamente el brief, resaltando su relevancia en cuanto a la definición de objetivos, tipos y estructura, y se desglosan sus elementos esenciales como punto de partida para el desarrollo de campañas efectivas. Asimismo, se estudian las características del público objetivo, sus patrones de comportamiento, necesidades, preferencias, tendencias y factores de influencia. La propuesta profundiza en el análisis del buyer persona, así como en los factores de motivación que permiten crear representaciones fieles del consumidor ideal. Además, se destacan los principios y objetivos de la segmentación de mercados, junto con sus tipos, criterios, estándares y buenas prácticas, enfatizando su importancia para diseñar estrategias de comunicación personalizadas y efectivas, orientadas a lograr mayor conexión con las audiencias y resultados medibles.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
