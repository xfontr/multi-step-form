# Docker

## Quick start

Run `$ make init`. Make sure you have Docker CLI installed, alongside with Docker's daemon.

## Usage

Use `$ make build` or `$ make run` to run specific steps of the build process. `$ make refresh` can be useful to clean everything up and restart.

## Setup

```bash
$ make init
# http://127.0.0.1:8080/
```

### Scripts

```bash
$ make init # Sets everything up
$ make build # Builds image
$ make run # Runs container
$ make log # Shows container last logs, useful for debugging
$ make refresh # Delets old files and containers, and sets everything back up
```

### Recommendations

- The setup.sh file should be covered by pipelines in PROD, so it basically serves to emulate a pipeline in local development.
- To ensure this package is properly maintained, please only use Makefile commands.
