const { where } = require("sequelize");
const List = require("../model/listModel");

const getData = async (req, res, next) => {
  const { query } = req.body;

  try {
    const findData = await List.findAll({
      order: [["id", "ASC"]],
    });

    console.log(findData, "getdata");

    return res.json(findData);
  } catch (error) {
    return res.json({ error: `error from get data ${error}` });
  }
};

const createData = async (req, res, next) => {
  const { data } = req.body;
  console.log(data, "frrrf");
  try {
    if (!data) {
      return res.status(400).json({ error: "Create Your List" });
    }
    const createData = await List.create({ data: data });
    if (createData) {
      return res.json({ message: "To-Do List added Sucessfully" });
    }
  } catch (error) {
    res.status(400).json({ error: `error in create todo-list ${error}` });
  }
};

const updateData = async (req, res, next) => {
  const { body, params } = req;

  const data = req.body?.data;
  console.log(req.params, "hjhh");

  try {
    if (!data) {
      return res.status(400).json({ error: "Enter your Update" });
    }

    const findData = await List.findOne({ where: { id: params?.id } });

    if (!findData) {
      return res.status(400).json({ error: "List not found" });
    }
    if (findData) {
      const updateData = await List.update(
        { data: data },
        { where: { id: params?.id } }
      );
      if (updateData) {
        return res.json({ message: "updated sucessfully" });
      }
    }
  } catch (error) {
    res.json({ error: `error from updating ${error}` });
  }
};

const deleteData = async (req, res, next) => {
  try {
    const { params } = req;
    console.log(params.id, "djd");
    const id = params.id;
    if (!id) {
      return res.status(400).json({ error: "Please try Again" });
    }

    const findID = await List.findOne({ where: { id: id } });

    if (!findID) {
      return res.json({ error: "List is not found" });
    }
    console.log(findID, "jvhj");

    if (findID) {
      const deleteData = await List.destroy({ where: { id: id } });
      // const deleteData = await List.deleteById()
      if (deleteData) {
        return res.json({ message: "List deleted sucessfully" });
      }
    }
  } catch (error) {
    res.json({ error: `error from deleting ${error}` });
  }
};

module.exports = {
  createData,
  updateData,
  deleteData,
  getData,
};
