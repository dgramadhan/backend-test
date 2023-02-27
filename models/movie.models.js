module.exports = (sequelize, Sequelize) => {
    const Movies = sequelize.define("movie", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING,
        },
        rating: {
            type: Sequelize.FLOAT,
        },
        image: {
            type: Sequelize.STRING,
        },
    })

    return Movies
}