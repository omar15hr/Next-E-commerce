export const generatePaginationNumbers = ( currentPage: number, totalPages: number) => {
  // Si el numero total de pag es de 7 o menos vamos a mostrar todas las paginas sin puntos suspensivos

  if( totalPages <= 7 ) {
    return Array.from({ length: totalPages }, (_,i) => i + 1);
  }

  // Si la pag actual esta entre las primeras 3 paginas mostrar las primeras 3, ..., y las ultimas 2

  if ( currentPage <= 3 ) {
    return [1,2,3,'...', totalPages -1, totalPages];
  } 

  // Si la pag actual esta entre las ultimas 3 paginas mostrar las primeras 2, ..., las ultimas 3

  if( currentPage >= totalPages -2 ) {
    return [1,2,'...', totalPages -2, totalPages -1, totalPages];
  }

  // Si la pag actual esta en otro lugar medio mostrar la 1era pag, ..., pag actual y vecinos

  return [
    1,
    '...',
    currentPage -1,
    currentPage,
    currentPage +1,
    '...',
    totalPages
  ]
}