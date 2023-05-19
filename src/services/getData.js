export const getData = async (url) => {
  try {
    const res = await fetch(url, {
      headers: {
        Authorization: 'bearer ' + localStorage.getItem('token')
      }
    })
    const data = await res.json()

    if (data.error) throw new Error(data.error)

    return data
  } catch (error) {
    return { error: error.message || 'Lo sentimos, inténtlo más tarde' }
  }
}
