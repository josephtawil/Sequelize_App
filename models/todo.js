module.exports = (sequelize, DataTypes) => {
    const Todo = sequelize.define("todo",
        {
            text: {
                type: DataTypes.STRING,
                allowNull: false,
            }
        });

    return Todo;
};
