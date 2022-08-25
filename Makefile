APP := probation-api
APP_MODULE := probation_api
VENV_BASE ?= ./venv

PORT ?= 8888
PYTHON := $(VENV_BASE)/bin/python

CONTAINER_CMD ?= docker

.DEFAULT: help
.PHONY: test

help:	## Show this help menu.
	@echo "Usage: make [TARGET ...]"
	@echo ""
	@@egrep -h "#[#]" $(MAKEFILE_LIST) | sed -e 's/\\$$//' | awk 'BEGIN {FS = "[:=].*?#[#] "}; \
	  {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'
	@echo ""

clean:	## clean project from venv and pyc files
	rm -rf $(VENV_BASE)
	find . -name "*.pyc" -delete

venv:	## create virtualenv
	@if [ ! -d "$(VENV_BASE)" ]; then \
		python3 -m venv $(VENV_BASE); \
	fi

run:	## run project
run:
	$(PYTHON) -m uvicorn --host 0.0.0.0 --port ${PORT} ${APP_MODULE}.main:app --lifespan=on --reload

requirements:	## install requirements
requirements: venv
	@echo Upgrading pip
	@$(PYTHON) -m pip install --upgrade pip
	@echo Install requirements
	@$(PYTHON) -m pip install -r requirements.txt > /dev/null

run-db:	## run a postgres db in docker
run-db:
	@$(CONTAINER_CMD) run -p 5432:5432 --rm --name postgres -e POSTGRES_PASSWORD=f0d8fd809e28 -e POSTGRES_HOST_AUTH_METHOD=password postgres

migrate:	## creates the tables
migrate: venv
migrate:
	$(PYTHON) scripts/create_tables.py

add-data:	## adds test data into the table
add-data: venv
add-data:
	$(PYTHON) scripts/add_test_data.py
