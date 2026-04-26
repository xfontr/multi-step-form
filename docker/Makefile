IMAGE_NAME = multi-step-form
CONTAINER_NAME = multi-step-form-container
DOCKER_PORT = 8080

SETUP_SCRIPT = ./setup.sh
DOCKER_BUILD_CMD = docker build -t $(IMAGE_NAME) .
DOCKER_RUN_CMD = docker run -d -p $(DOCKER_PORT):$(DOCKER_PORT) --name $(CONTAINER_NAME) $(IMAGE_NAME)

.PHONY: all setup build run

init: clean setup build run log

setup:
	@echo "Running setup script..."
	$(SETUP_SCRIPT)

build:
	@echo "Building Docker image..."
	$(DOCKER_BUILD_CMD)

run:
	@echo "Running Docker container..."
	$(DOCKER_RUN_CMD)

clean:
	@echo "Cleaning local app folder..."
	- rm -rf ./app

log:
	docker logs multi-step-form-container

refresh:
	$(MAKE) clean

	@echo "Stopping and removing Docker container..."
	- docker stop $(CONTAINER_NAME)
	- docker rm $(CONTAINER_NAME)

	@echo "Removing Docker image..."
	- docker rmi $(IMAGE_NAME)

	@echo "Rebuilding and running Docker container..."
	$(MAKE) init
