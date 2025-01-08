export const getDayMonthForUser = (date) => {
    const options = {
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("es-ES", options);
  };