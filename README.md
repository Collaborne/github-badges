# @collaborne/github-badges

Create SVG badges

## Install

```bash
npm install --save @collaborne/github-badges
```

## Usage

- import in JS/TS files

```ts
import { createCoverageBadge } from '@collaborne/github-badges'

// Using default params
createCoverageBadge();


// Using different input path for coverage summary:
const inputPath= path.resolve(__dirname, 'my-other-folder', 'coverage-summary.json');

// Using different output file path for coverage badge:
const outputPath = path.resolve(__dirname,'my-other-folder', 'coverage', 'coverage-summary.json');

// Creating coverage badge SVG's(get summary from inputPath, and saved SVG's in the output path)
createCoverageBadge(inputPath, outputPath)



```

- as a script in **package.json**

```json
...

scripts :{
    ...
    "predeploy:coverage-badges": "create-coverage-badges"
    ...
}
...

  ```

By default uses for coverage report input: **coverage/coverage-summary.json** , and outputs created svg's into the same **coverage** folder.

Flags for input: `--i` or `-inputPath`

Flags for output: `--o`, `--d`, `-outputPath` or `-dist`

## License

(c) 2023 Collaborne B.V. All rights reserved.
