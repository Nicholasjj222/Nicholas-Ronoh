/**
 * ASCII Art Generator
 * Creates simple shapes in the terminal
 */

export class AsciiArt {

  static drawCone(height: number): void {
    for (let i = 1; i <= height; i++) {
      const spaces = " ".repeat(height - i)
      const stars = "*".repeat(i * 2 - 1)
      console.log(spaces + stars)
    }
  }

  static drawSquare(size: number): void {
    for (let i = 0; i < size; i++) {
      console.log("*".repeat(size))
    }
  }

  static drawTriangle(height: number): void {
    for (let i = 1; i <= height; i++) {
      console.log("*".repeat(i))
    }
  }

}

#############}###############################################
Then I could make a new VI i am a software developer aiming to be software. I can write myself "exist"