import Typography from "typography"
import moraga from 'typography-theme-moraga'


const typography = new Typography(moraga)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
