type Props = { height?: number; flip?: boolean }

export default function Laurel({ height = 88, flip }: Props) {
  return (
    <img
      src={flip ? '/laurel-right.png' : '/laurel-left.png'}
      alt=""
      aria-hidden="true"
      style={{ height, width: 'auto', display: 'block' }}
    />
  )
}