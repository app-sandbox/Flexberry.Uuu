docker build --no-cache -f SQL\Dockerfile.PostgreSql -t uuu/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t uuu/app ../..
