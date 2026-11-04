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

// Mirrors Pill.astro × --pill-scale in hero-pills.css — keep them in sync.
const PILL_SCALE = 1.15
const PILL_HEIGHT = 52 * PILL_SCALE
// padding + gap + icon, plus ~12px per uppercase DM Mono character (incl. letter-spacing)
const estimateWidth = (label: string) => (72.5 + label.length * 12.04) * PILL_SCALE

// Figma canvas the pill positions were authored on. Start positions are passed
// as percentages of it so the layout stretches to fill wider/taller heroes.
const CANVAS_WIDTH = 1440
const CANVAS_HEIGHT = 900
const toPercent = (px: number, total: number) => `${(px / total) * 100}%`

export default function HeroPills({ pills }: { pills: readonly PillData[] }) {
  return (
    <Gravity gravity={{ x: 0, y: 1 }} resetOnResize={false}>
      {pills.map((pill) => (
        <MatterBody
          key={pill.label}
          x={toPercent(pill.left + estimateWidth(pill.label) / 2, CANVAS_WIDTH)}
          y={toPercent(pill.top + PILL_HEIGHT / 2, CANVAS_HEIGHT)}
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
