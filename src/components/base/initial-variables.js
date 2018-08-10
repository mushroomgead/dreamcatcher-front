export let Colors = {
  'black': 'hsl(0, 0%, 4%)',
  'blackBis': 'hsl(0, 0%, 7%)',
  'blackTer': 'hsl(0, 0%, 14%)',

  'greyDarker': 'hsl(0, 0%, 21%)',
  'greyDark': 'hsl(0, 0%, 29%)',
  'grey': 'hsl(0, 0%, 48%)',
  'greyLight': 'hsl(0, 0%, 71%)',
  'greyLighter': 'hsl(0, 0%, 86%)',

  'whiteTer': 'hsl(0, 0%, 96%)',
  'whiteBis': 'hsl(0, 0%, 98%)',
  'white': 'hsl(0, 0%, 100%)',

  'orange': 'hsl(14,  100%, 53%)',
  'yellow': 'hsl(48,  100%, 67%)',
  'green': 'hsl(141, 71%,  48%)',
  'turquoise': 'hsl(171, 100%, 41%)',
  'cyan': 'hsl(204, 86%,  53%)',
  'blue': 'hsl(217, 71%,  53%)',
  'purple': 'hsl(271, 100%, 71%)',
  'red': 'hsl(348, 100%, 61%)',
}

export let Typography = {
  'renderMode': 'optimizeLegibility',

  'size1': '3rem',
  'size2': '2.5rem',
  'size3': '2rem',
  'size4': '1.5rem',
  'size5': '1.25rem',
  'size6': '1rem',
  'size7': '0.75rem',

  'weightLight': '300',
  'weightNormal': '400',
  'weightMedium': '500',
  'weightSemibold': '600',
  'weightBold': '700',
}


export let Responsiveness = {

  // The container horizontal gap, which acts as the offset for breakpoints
  gap: '64px',
  // 960, 1152, and 1344 have been chosen because they are divisible by both 12 and 16
  tablet: '769px',
  // 960px container + 4rem
  desktop: '960px + (2 * gap)',
  // 1152px container + 4rem
  widescreen: '1152px + (2 * gap)',
  widescreenEnabled: true,
  // 1344px container + 4rem
  fullhd: '1344px + (2 * gap)',
  fullhdEnabled: true,
}

export let Miscellaneous = {

  'easing': 'ease-out',
  'radius-small': '2px',
  'radius': '4px',
  'radius-large': '6px',
  'radius-rounded': '290486px',
  'speed': '86ms'

}

export let Flags = {
  'variable-columns': true
}

