import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcRoot = path.join(__dirname, '..', 'src');

function stripTypes(content) {
  let result = content;

  result = result.replace(/^import type \{[^}]+\} from ['"][^'"]+['"];\r?\n/gm, '');
  result = result.replace(/, type [A-Za-z]+/g, '');
  result = result.replace(/import \{ type [A-Za-z]+ \} from ['"][^'"]+['"];\r?\n/gm, '');
  result = result.replace(/^export interface [\s\S]*?^}\r?\n\r?\n/gm, '');
  result = result.replace(/^interface [\s\S]*?^}\r?\n\r?\n/gm, '');
  result = result.replace(/ as const/g, '');
  result = result.replace(/: FormData/g, '');
  result = result.replace(/: Partial<Record<keyof FormData, string>>/g, '');
  result = result.replace(/useState<[^>]+>/g, 'useState');
  result = result.replace(/useState<Record<string, boolean>>/g, 'useState');
  result = result.replace(/\) => \{/g, ') => {');
  result = result.replace(
    /\(e: React\.ChangeEvent<HTMLInputElement \| HTMLTextAreaElement \| HTMLSelectElement>\)/g,
    '(e)'
  );
  result = result.replace(/\(e: React\.FormEvent\)/g, '(e)');
  result = result.replace(/\(hash\?: string\)/g, '(hash)');
  result = result.replace(/: boolean/g, '');
  result = result.replace(/\[name as keyof FormData\]/g, '[name]');
  result = result.replace(/getElementById\('root'\)!/g, "getElementById('root')");
  result = result.replace(/from '\.\/App\.tsx'/g, "from './App.jsx'");
  result = result.replace(/from "\.\/App\.tsx"/g, 'from "./App.jsx"');
  result = result.replace(/validateForm = \(\): boolean =>/g, 'validateForm = () =>');

  return result;
}

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
      continue;
    }
    if (!/\.tsx?$/.test(entry.name)) continue;

    const content = fs.readFileSync(full, 'utf8');
    const converted = stripTypes(content);
    const newName = entry.name.replace(/\.tsx$/, '.jsx').replace(/\.ts$/, '.js');
    const newPath = path.join(dir, newName);
    fs.writeFileSync(newPath, converted, 'utf8');
    fs.unlinkSync(full);
    console.log(`Converted ${path.relative(srcRoot, full)} -> ${newName}`);
  }
}

walk(srcRoot);

// vite.config at project root
const viteTs = path.join(__dirname, '..', 'vite.config.ts');
if (fs.existsSync(viteTs)) {
  const viteContent = fs
    .readFileSync(viteTs, 'utf8')
    .replace(/import \{ defineConfig \} from 'vite';/, "import { defineConfig } from 'vite';")
    .replace(/\.ts/g, '.js');
  fs.writeFileSync(path.join(__dirname, '..', 'vite.config.js'), viteContent, 'utf8');
  fs.unlinkSync(viteTs);
  console.log('Converted vite.config.ts -> vite.config.js');
}
