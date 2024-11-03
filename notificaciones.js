function enviarNotificacion(tarea) {
    // Corregido codigo en la rama main 
    const fechaActual = new Date();
    const fechaVencimiento = new Date(tarea.fechaVencimiento);
    const vencimiento = new Date(tarea.fechaVencimiento);

    if (vencimiento - fechaActual < 3600000) { // 1 hora en milisegundos
        notifyUser(`La tarea "${tarea.nombre}" vencerá en menos de una hora.`);
    } else if (fechaVencimiento - fechaActual < 86400000) { // 24 horas en milisegundos
        alert(`La tarea "${tarea.nombre}" está a punto de vencer.`);
    }
    // Punto 7 => corrigo bug y hago commit
}
