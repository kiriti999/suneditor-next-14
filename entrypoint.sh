# entrypoint.sh

sequelize-cli db:drop
sequelize-cli db:create
sequelize-cli db:migrate