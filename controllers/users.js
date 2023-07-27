const getUsers = () => undefined;

export var getSingleUser = async (req, res) => {
    res.status(200).json({success: true, message: "get Single User from users route"});
}
export var getMultipleUser = async (req, res) => {
    if (!getUsers()) {
        throw new Error("User not found")
    }
    res.status(200).json({success: true, message: "get Multiple User from users route"});
}