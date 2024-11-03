function enviarNotificacion(tarea) {
    const fechaActual = new Date();
    const fechaVencimiento = new Date(tarea.fechaVencimiento);
    
    if (fechaVencimiento - fechaActual < 86400000) { // 24 horas en milisegundos
        alert(`La tarea "${tarea.nombre}" está a punto de vencer.`);
    }
}
