import { ColourCode } from "./colourCode";

export class Logger {
  private static getTheTimeStamp(): string {
    return new Date().toString();
  }

  public static successinfo(message: string): void {
    const info: string = ColourCode.colourGreen("Success:");
    console.log(
      `${info} ${this.getTheTimeStamp()} ${ColourCode.colourGreen(message)}`,
    );
  }

   public static warningInfo(message: string): void {
    const info: string = ColourCode.colourRed("WARN!");
    console.warn(
      `${info} ${this.getTheTimeStamp()} ${ColourCode.colourRed(message)}`,
    );
  }

     public static getInfo(message: string): void {
    const info: string = ColourCode.colourRed("WARN!");
    console.warn(
      `${info} ${this.getTheTimeStamp()} ${ColourCode.colourRed(message)}`,
    );
  }
}
