docker run -d -p 5432:5432 \
  --name katana \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_PASSWORD=sample \
  -e PGDATA=/var/lib/postgresql/data/pgdata \
  -v ${PWD}/db:/var/lib/postgresql/data \
  postgres
