# nvmrc-checker

A command-line tool to check for the existence of an `.nvmrc` file in a specified directory or its subdirectories.

## Installation

```bash
npm install -g nvmrc-checker
```

## Usage

```bash
nvmrc-checker <directory>
```

Replace `<directory>` with the path to the directory you want to check.

## Examples

Check the current directory:

```bash
nvmrc-checker .
```

Check a specific directory:

```bash
nvmrc-checker /path/to/your/project
```

## Exit Codes

- `0`: An `.nvmrc` file was found
- `1`: No `.nvmrc` file was found

## Why use nvmrc-checker?

The `.nvmrc` file is used by Node Version Manager (nvm) to automatically switch to the correct Node.js version for a project. This tool helps you quickly verify if a project has this file set up, which is useful for maintaining consistent Node.js versions across development environments.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
