export const changeDescription = (event: any) => {
  return {
    type: "DESCRIPTION_CHAGED",
    payload: event.target.value
  }
}