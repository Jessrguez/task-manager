function enviarNotificacion(tarea) {
    const fechaActual = new Date();
    const fechaVencimiento = new Date(tarea.fechaVencimiento);
    
    if (fechaVencimiento - fechaActual < 86400000) { // 24 horas en milisegundos
        alert(`La tarea "${tarea.nombre}" está a punto de vencer.`);
    }
    const vencimiento = new Date(tarea.fechaVencimiento);

    //modificamos en la rama main:

    if (vencimiento - fechaActual < 3600000) { // 1 hora en milisegundos
        notifyUser(`La tarea "${tarea.nombre}" vencerá en menos de una hora.`);

        // Codigo modificado desde la rama main
}
}