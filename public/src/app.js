const { createApp, ref, computed, onMounted } = Vue;

createApp({
  setup() {
    const isDark = ref(false);
    const form = ref({
      origen: '',
      destino: ''
    });

    const toggleTheme = () => {
      isDark.value = !isDark.value;
      const theme = isDark.value ? 'dark' : 'light';
      document.documentElement.setAttribute('data-bs-theme', theme);
    };

    const whatsappUrl = computed(() => {
      const phone = "521XXXXXXXXXX"; // Reemplaza con tu número de teléfono real
      const text = encodeURIComponent("¡Hola FletHumberto! Me interesa cotizar un servicio de flete o mudanza.");
      return `https://wa.me/${phone}?text=${text}`;
    });

    const sendQuote = () => {
      const phone = "521XXXXXXXXXX"; // Reemplaza con tu número
      const text = encodeURIComponent(`Hola FletHumberto, quiero cotizar un traslado:\n- Origen: ${form.value.origen}\n- Destino: ${form.value.destino}`);
      window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
    };

    onMounted(() => {
      AOS.init({ duration: 800, once: true });
    });

    return {
      isDark,
      form,
      toggleTheme,
      whatsappUrl,
      sendQuote
    };
  }
}).mount('#app');