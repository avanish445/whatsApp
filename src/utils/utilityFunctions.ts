export const formDataToJson = (form: HTMLFormElement): { [key: string]: any } => {
  const formData = new FormData(form)
  const formDataObj: { [key: string]: any } = {}
  formData.forEach((value, key) => {
    formDataObj[key] = value
  })
  return formDataObj
}
