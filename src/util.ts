import { EOL } from 'os';

export function write(message: string) {
  process.stdout.write(message);
}
export function writeLine(message: string) {
  write(message + EOL);
}
