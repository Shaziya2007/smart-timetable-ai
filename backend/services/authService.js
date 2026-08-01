const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
async function registerUser(userData) {

    const { name, email, password, role } = userData;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
        throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        name,
        email,
        password: hashedPassword,
        role,
    });

    return {
        success: true,
        message: "User registered successfully",
        user,
    };
}

async function loginUser(userData) {
    const { email, password } = userData;

    const user = await User.findOne({ email });

    if (!user) {
        throw new Error("User not found");
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
        throw new Error("Invalid password");
    }

    return {
        success: true,
        message: "Login successful",
        user,
    };
}
async function getProfile(userId) {

    const user = await User.findById(userId).select("-password");

    if (!user) {
        throw new Error("User not found");
    }

    return {
        success: true,
        user,
    };
}
module.exports = {
    registerUser,
    loginUser,
    getProfile
};