import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export class RGBAColour {
  r: number = 0
  g: number = 0
  b: number = 0
  a: number = 0

  constructor(r: number, g: number, b: number, a: number) {
    this.r = r
    this.g = g
    this.b = b
    this.a = a
  }

  static stringsFrom(colours: RGBAColour[]) {
    var results: string[] = []
    colours.forEach(colour => {
      results.push(colour.toString())
    })
    return results
  }

  toString(): string {
    return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`
  }
}

/**
 * Generates a discrete number of colours in a gradient between two given colours
 * @param a first colour
 * @param b second colour
 * @param n number of gradient colours to be generated
 * @returns gradient colours generated
 */
export function rgbaGradient(colourA: RGBAColour, colourB: RGBAColour, n: number): RGBAColour[] {
  var results: RGBAColour[] = []
  for (var num = 0; num < n; num++) {
    const ratio: number = num / (n-1)
    const r: number = Math.ceil(colourA.r * ratio + colourB.r * (1-ratio))
    const g: number = Math.ceil(colourA.g * ratio + colourB.g * (1-ratio))
    const b: number = Math.ceil(colourA.b * ratio + colourB.b * (1-ratio))
    const a: number = Math.ceil(colourA.a * ratio + colourB.a * (1-ratio))
    results.push(new RGBAColour(r, g, b, a))
  }
  return results
}

