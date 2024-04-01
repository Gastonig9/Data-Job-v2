export function getDateString(fechaString: string | Date): string {
  const fecha = new Date(fechaString);

  const dia: number = fecha.getDate();
  const mes: string = fecha.toLocaleString('es-AR', { month: 'long' });
  const año: number = fecha.getFullYear();

  const fechaFormateada: string = `${dia} de ${mes} de ${año}`;

  return fechaFormateada;
}
export function isInputNumber(inputType: string) {
  if (inputType === "number") {
    return "number";
  } else {
    return "text";
  }
}