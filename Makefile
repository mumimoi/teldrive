APP_NAME := teldrive
BUILD_DIR := bin
FRONTEND_DIR := ui/dist
FRONTEND_ASSET := https://github.com/divyam234/teldrive-ui/releases/download/v1/teldrive-ui.zip
GIT_TAG := $(shell git describe --tags --abbrev=0)
GIT_COMMIT := $(shell git rev-parse --short HEAD)
GIT_LINK := $(shell git remote get-url origin)
ENV_FILE := $(FRONTEND_DIR)/.env
MODULE_PATH := $(shell go list -m)

GOOS ?= $(shell go env GOOS)
GOARCH ?= $(shell go env GOARCH)

.PHONY: all build run clean backend run sync-ui retag patch-version minor-version
 
all: build

ifdef ComSpec
SHELL := powershell.exe
BINARY_EXTENSION:=.exe
else
SHELL := /bin/bash
BINARY_EXTENSION:=
endif

backend:
	@echo "Building backend for $(GOOS)/$(GOARCH)..."
	go build -trimpath -ldflags "-s -w -X $(MODULE_PATH)/internal/config.Version=$(GIT_TAG) -extldflags=-static" -o $(BUILD_DIR)/$(APP_NAME)$(BINARY_EXTENSION)

build: backend
	@echo "Building complete."

run:
	@echo "Running $(APP_NAME)..."
	$(BUILD_DIR)/$(APP_NAME) run

clean:
	@echo "Cleaning up..."
	rm -rf $(BUILD_DIR)
	cd $(FRONTEND_DIR) && rm -rf dist node_modules

deps:
	@echo "Installing Go dependencies..."
	go mod download

retag:
	@echo "Retagging..."
	git tag -d $(GIT_TAG)
	git push --delete origin $(GIT_TAG)
	git tag -a $(GIT_TAG) -m "Recreated tag $(GIT_TAG)"
	git push origin $(GIT_TAG)

patch-version:
	@echo "Patching version..."
	git tag -a $(shell semver -i patch $(GIT_TAG)) -m "Release $(shell semver -i patch $(GIT_TAG))"
	git push origin $(shell semver -i patch $(GIT_TAG))

minor-version:
	@echo "Minoring version..."
	git tag -a $(shell semver -i minor $(GIT_TAG)) -m "Release $(shell semver -i minor $(GIT_TAG))"
	git push origin $(shell semver -i minor $(GIT_TAG))