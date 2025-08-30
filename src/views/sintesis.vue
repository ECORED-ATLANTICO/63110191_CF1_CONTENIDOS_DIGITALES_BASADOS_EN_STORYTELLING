<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente formativo “Público objetivo” permite comprender los elementos esenciales para identificar, analizar y perfilar audiencias en comunicación y marketing, desde su conceptualización hasta su aplicación estratégica. Inicia con el estudio del brief y su papel en la definición de objetivos, tipos y estructura como guía para proyectos comunicativos.
    P Luego, profundiza en el análisis del público objetivo, abordando sus características, comportamientos, necesidades, preferencias y factores de influencia, lo que facilita una caracterización precisa. También se desarrollan los conceptos del buyer persona, su construcción y motivaciones clave.
    P Finalmente, se exploran los fundamentos de la segmentación de mercados, objetivos, tipos, criterios, estándares y buenas prácticas, para optimizar la personalización de estrategias y orientar acciones comunicativas más efectivas y alineadas con el mercado.
    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu tincidunt erat. Fusce cursus mauris in nulla egestas vulputate. Phasellus viverra accumsan libero, sed luctus diam maximus euismod. Mauris sem risus, tincidunt vel libero in, lobortis commodo ante. Sed pulvinar luctus orci in rhoncus. Nulla ut dapibus risus, ac tempor est. Donec nulla augue, vehicula quis malesuada vitae, fermentum non nisi. Donec tincidunt nibh a magna bibendum rutrum. ")
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
