const { createApp, ref } = Vue;

createApp({
    setup() {
        const titulo = ref('Fletes y Mudanzas FletHumberto');
        const mensaje = ref('Trasladamos tus pertenencias con el mayor cuidado, seguridad y un trato directo garantizado.');
        
        // RECUERDA: Cambia el número 521234567890 por tu teléfono real para que funcione
        const whatsappUrl = ref('https://wa.me.');

        // Casos de éxito con rutas locales corregidas hacia /src/images/
        const casos = ref([
            {
                titulo: 'Mudanza Residencial',
                descripcion: 'Traslado seguro de casa habitación, cuidado de muebles y enseres.',
                imagen: './src/images/imagendeprueba14.jpg',
                enlace: 'https://facebook.com'
            },
            {
                titulo: 'Fletes Comerciales',
                descripcion: 'Apoyo en traslado de mercancía y mobiliario de oficina.',
                imagen: './src/images/imagendeprueba13.jpg',
                enlace: 'https://facebook.com'
            },
            {
                titulo: 'Viajes Foráneos',
                descripcion: 'Rutas directas y seguras hacia cualquier estado de la república.',
                imagen: './src/images/imagendeprueba12.jpg',
                enlace: 'https://facebook.com'
            }
        ]);

        const casosVisible = ref([...casos.value]);

        const moverSiguiente = () => {
            const primero = casosVisible.value.shift();
            casosVisible.value.push(primero);
        };

        const moverAnterior = () => {
            const ultimo = casosVisible.value.pop();
            casosVisible.value.unshift(ultimo);
        };

        // Testimonios de clientes con estrellas
        const testimonios = ref([
            {
                nombre: 'Cliente Verificado',
                servicio: 'Mudanza Local',
                comentario: 'Muy caballerosos los chavos, cuidaron cada caja como si fuera suya. 100% recomendados.',
                estrellas: 5
            },
            {
                nombre: 'Cliente Verificado',
                servicio: 'Flete Express',
                comentario: 'Super rápido empacaron y cargaron todo. Los tienen bien coordinados, excelente servicio.',
                estrellas: 5
            },
            {
                nombre: 'Cliente Verificado',
                servicio: 'Traslado Foráneo',
                comentario: 'El Sr. Humberto muy amable y honesto con el precio. Sin sorpresas al llegar.',
                estrellas: 4
            }
        ]);

        const testimoniosVisibles = ref([...testimonios.value]);

        const testimonioSiguiente = () => {
            const primero = testimoniosVisibles.value.shift();
            testimoniosVisibles.value.push(primero);
        };

        const testimonioAnterior = () => {
            const ultimo = testimoniosVisibles.value.pop();
            testimoniosVisibles.value.unshift(ultimo);
        };

        return { 
            titulo, 
            mensaje, 
            whatsappUrl,
            casosVisible,
            testimoniosVisibles,
            moverSiguiente,
            moverAnterior,
            testimonioSiguiente,
            testimonioAnterior
        };
    }
}).mount('#app');
