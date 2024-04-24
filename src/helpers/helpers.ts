

export function getDateString(fechaString: string | Date, simplify: boolean = false): string {
  const fecha = new Date(fechaString);

  const dia: number = fecha.getDate();
  const mes: string = fecha.toLocaleString('es-AR', { month: 'short' }); // 'short' en lugar de 'long' para abreviar el nombre del mes
  const año: number = fecha.getFullYear();

  if(!simplify) {
    const fechaFormateada: string = `${dia} de ${mes} de ${año}`;
    return fechaFormateada;
  } else {
    const fechaFormateada: string = `${dia} ${mes.toUpperCase()}`; // Convertir el mes a mayúsculas
    return fechaFormateada;
  }
}


export function isInputNumber(inputType: string) {
  if (inputType === "number") {
    return "number";
  } else {
    return "text";
  }
}