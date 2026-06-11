# JSON to CSV

![MIT License](https://img.shields.io/badge/license-MIT-green)
![TypeScript](https://img.shields.io/badge/typescript-6.0-blue)
![Node](https://img.shields.io/badge/node-%3E%3D18-339933)

Extract specific profile fields from a JSON dump and export them as a formatted CSV file.

## Features

- Reads a JSON file (`data.json`)
- Extracts: `title`, `real_name`, `display_name`, `email`, `status_text`
- Outputs a clean CSV with headers and escaped values
- Appends rows on subsequent runs (no overwrite)

## Prerequisites

- Node.js >= 18

## Setup

```bash
npm install
```

Place your data as `data.json` in the project root.

## Usage

```bash
npm start
```

Output is written to `data.csv`.



## Project structure

```
├── src/
│   ├── index.ts      Entry point — reads JSON, extracts data
│   └── fs.ts         CSV write logic
├── data.json         Input data (gitignored)
├── tsconfig.json
├── package.json
└── README.md
```

## Built with

- [TypeScript](https://www.typescriptlang.org/)
- [tsx](https://github.com/privatenumber/tsx) — zero-config TypeScript runner

## Tags

`json-to-csv`, `data-extraction`, `slack`, `csv-export`, `typescript`, `nodejs`

## License

MIT
