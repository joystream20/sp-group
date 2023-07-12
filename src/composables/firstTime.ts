
export const firstTime = () => {
  const first = useState('state', () => false)
  return { first }
}
