ifneq (,$(wildcard ./.env))
	include .env
	export
	ENV_FILE_PARAM = --env-file .env
endif

build:
	docker-compose up --build -d --remove-orphans
up:
	docker-compose up -d
down:
	docker-compose down
logs:
	docker-compose logs
migrate:
	docker-compose exec project python3 manage.py migrate --noinput
makemigrations:
	docker-compose exec project python3 manage.py makemigrations
createapp:
	docker-compose exec project python3 manage.py startapp app

superuser:
	docker-compose exec project python3 manage.py createsuperuser	

down-v:
	docker-compose down -v

volume:
	docker volume inspect project_postgres_data	

shell:
	docker-compose exec project python3 manage.py shell