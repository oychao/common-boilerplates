import * as fs from 'fs';

export class RustBridge<T = any> {
  private wasmPath: string;

  public exports: T;

  static logNumber(msg: number): void {
    console.log(msg);
  }

  constructor(wasmPath: string) {
    this.wasmPath = wasmPath;
    this.exports = (null as any) as T;
  }

  public async init(): Promise<T> {
    try {
      const buffer = await fs.promises.readFile(this.wasmPath);
      const result = await WebAssembly.instantiate(new Uint8Array(buffer), {
        env: { log_number: RustBridge.logNumber },
      });
      return (this.exports = (result.instance.exports as any) as T);
    } catch (error) {
      console.error(error);
    }
    return (null as unknown) as T;
  }
}
