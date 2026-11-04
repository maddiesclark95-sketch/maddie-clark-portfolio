import Gravity, { MatterBody } from "../fancy/physics/gravity"
import "./hero-pills.css"

type PillData = {
  label: string
  icon: string
  variant: "peach-100" | "peach-300" | "peach-500-brand" | "peach-700" | "peach-800"
  rotate: number
  left: number
  top: number
}

// Mirrors Pill.astro — keep the two in sync.
const PILL_HEIGHT = 52
// padding + gap + icon, plus ~12px per uppercase DM Mono character (incl. letter-spacing)
const estimateWidth = (label: string) => 72.5 + label.length * 12.04

export default function HeroPills({ pills }: { pills: readonly PillData[] }) {
  return (
    <Gravity gravity={{ x: 0, y: 1 }} resetOnResize={false}>
      {pills.map((pill) => (
        <MatterBody
          key={pill.label}
          x={pill.left + estimateWidth(pill.label) / 2}
          y={pill.top + PILL_HEIGHT / 2}
          angle={pill.rotate}
          matterBodyOptions={{ friction: 0.3, restitution: 0.35, density: 0.001 }}
        >
          <div className={`hero-pill hero-pill--${pill.variant}`}>
            <p className="hero-pill-label">{pill.label}</p>
            <img className="hero-pill-icon" src={`/Assets/icons/${pill.icon}`} alt="" />
          </div>
        </MatterBody>
      ))}
    </Gravity>
  )
}
