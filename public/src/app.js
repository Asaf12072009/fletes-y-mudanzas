const { createApp, ref, computed, onMounted } = Vue;

createApp({
  setup() {
    const isDark = ref(false);
    const phoneNumber = "525500000000"; // Reemplaza con tu número real de WhatsApp con código de país (Ej: 521XXXXXXXXXX)

    // Estado del calculador interactivo
    const calc = ref({
      tipo: 'local',
      tamanio: 'mediano'
    });

    // Lógica de cálculo estimada
    const calcularPrecio = computed(() => {
      let base = 800;
      if (calc.value.tipo === 'foraneo') base = 3500;
      if (calc.value.tipo === 'comercial') base = 1500;

      if (calc.value.tamanio === 'mediano') base *= 1.5;
      if (calc.value.tamanio === 'grande') base *= 2.5;

      return Math.round(base);
    });

    // URLs de WhatsApp preparadas
    const whatsappUrl = computed(() => {
      const msg = encodeURIComponent("¡Hola FletHumberto! Me interesa cotizar un flete o mudanza.");
      return `https://wa.me/${phoneNumber}?text=${msg}`;
    });

    const whatsappCotizarUrl = computed(() => {
      const tipoTxt = calc.value.tipo === 'local' ? 'Local' : calc.value.tipo === 'foraneo' ? 'Foráneo' : 'Comercial';
      const tamTxt = calc.value.tamanio === 'chico' ? 'Chico' : calc.value.tamanio === 'mediano' ? 'Mediano' : 'Grande';
      const msg = encodeURIComponent(`Hola FletHumberto, calculé una tarifa en su web para servicio [${tipoTxt}] y tamaño [${tamTxt}] por un estimado de $${calcularPrecio.value} MXN. ¿Podemos agendar?`);
      return `https://wa.me/${phoneNumber}?text=${msg}`;
    });

    // Control de modo oscuro / claro
    const toggleTheme = () => {
      isDark.value = !isDark.value;
      const htmlEl = document.documentElement;
      htmlEl.setAttribute('data-bs-theme', isDark.value ? 'dark' : 'light');
    };

    onMounted(() => {
      AOS.init({ duration: 800, once: true });
    });

    return {
      isDark,
      calc,
      calcularPrecio,
      whatsappUrl,
      whatsappCotizarUrl,
      toggleTheme
    };
  }
}).mount('#app');