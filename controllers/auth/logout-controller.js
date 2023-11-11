const logoutController = (req, res, next) => {
  try {
    // Clear the cookie to log the user out
    res.clearCookie("token");
    res.status(200).json({message: "Logout successful"});
  } catch (error) {
    next(error);
  }
};

module.exports = logoutController;
