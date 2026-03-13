/**
 * cone.ts
 * Generates 3D coordinates for a cone shape
 */

type Point3D = {
  x: number
  y: number
  z: number
}

export class Cone {
  radius: number
  height: number
  segments: number

  constructor(radius: number, height: number, segments: number = 32) {
    this.radius = radius
    this.height = height
    this.segments = segments
  }

  generateBase(): Point3D[] {
    const points: Point3D[] = []

    for (let i = 0; i < this.segments; i++) {
      const angle = (2 * Math.PI * i) / this.segments

      points.push({
        x: this.radius * Math.cos(angle),
        y: this.radius * Math.sin(angle),
        z: 0
      })
    }

    return points
  }

  generateCone(): Point3D[] {
    const base = this.generateBase()
    const apex: Point3D = { x: 0, y: 0, z: this.height }

    return [...base, apex]
  }

  volume(): number {
    return (1 / 3) * Math.PI * this.radius * this.radius * this.height
  }

  surfaceArea(): number {
    const slantHeight = Math.sqrt(this.radius ** 2 + this.height ** 2)
    return Math.PI * this.radius * (this.radius + slantHeight)
  }
}