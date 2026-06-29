import { ColourCode } from "./colourCode";

export class Logger {
  private static getTheTimeStamp(): string {
    return new Date().toString();
  }

  public static successinfo(message: string): void {
    const info: string = ColourCode.colourYellow("INFO");
    console.log(
      `${info} ${this.getTheTimeStamp()} ${ColourCode.colourGreen(message)}`,
    );
  }
}
