export const calculateDuration = (startDateString: string, endDateString?: string): string => {
  const startDate = new Date(startDateString)
  const endDate = endDateString ? new Date(endDateString) : new Date()

  let years = endDate.getFullYear() - startDate.getFullYear()
  let months = endDate.getMonth() - startDate.getMonth()

  if (months < 0) {
    years -= 1
    months += 12
  }

  if (endDate.getDate() < startDate.getDate()) {
    months -= 1
    if (months < 0) {
      years -= 1
      months += 12
    }
  }

  const yearLabel = years > 0 ? `${years} ${years === 1 ? 'ano' : 'anos'}` : ''
  const monthLabel = months > 0 ? `${months} ${months === 1 ? 'mês' : 'meses'}` : ''

  if (yearLabel && monthLabel) {
    return `${yearLabel} e ${monthLabel}`
  }

  if (yearLabel) {
    return yearLabel
  }

  if (monthLabel) {
    return monthLabel
  }

  return '1 mês'
}
