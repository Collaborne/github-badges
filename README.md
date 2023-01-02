# create-badges

Creates badges(*svg files) from report coverage files.

## Install

```bash
npm install --save @collaborne/create-badges
```

## Usage

```ts
import { createCoverageBadge } from '@collaborne/create-badges'

// Using default params
createCoverageBadge();


// Using different input path for coverage summary:
const inputPath= path.resolve(__dirname, 'my-other-folder', 'coverage-summary.json');

// Using different output file path for coverage badge:
const outputPath = path.resolve(__dirname,'my-other-folder', 'coverage', 'coverage-summary.json');

// Creating coverage badge SVG's(get summary from inputPath, and saved SVG's in the output path)
createCoverageBadge(inputPath, outputPath)


```

## License

(c) 2023 Collaborne B.V. All rights reserved.
