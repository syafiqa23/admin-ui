import React from 'react'
import LabeledInput from "../Elements/LabeledInput";
import Button from "../Elements/Button";
import GoogleIcon from "../Elements/GoogleIcon";
import { Link } from "react-router-dom";

function FormSignUp() {
    return (
        <>
            <div className="w-full max-w-md mx-auto">

                {/* Logo */}
                <h1 className="text-3xl font-bold text-center text-teal-600 mb-6">
                </h1>
                <p className="text-center text-xl font-semibold mb-8">
                    Create an account
                </p>

                {/* Input Fields */}
                <div className="space-y-4">
                    <LabeledInput
                        label="Name"
                        placeholder="Tanzir Rahman"
                        type="text"
                    />

                    <LabeledInput
                        label="Email Address"
                        placeholder="hello@example.com"
                        type="email"
                    />

                    <LabeledInput
                        label="Password"
                        placeholder="• • • • • • • • • •"
                        type="password"
                        passwordEye={true}
                    />
                </div>

                {/* Terms */}
                <p className="text-xs text-gray-500 mt-4 mb-6 text-center">
                    By continuing, you agree to our{" "}
                    <span className="text-teal-600 font-medium">terms of service</span>.
                </p>

                {/* Sign up Button */}
                <Button className="w-full py-3 bg-teal-600 hover:bg-teal-700 text-white">
                    Sign up
                </Button>

                {/* Divider */}
                <div className="flex items-center my-6">
                    <div className="grow h-px bg-gray-300"></div>
                    <span className="px-3 text-gray-500 text-sm">or sign up with</span>
                    <div className="grow h-px bg-gray-300"></div>
                </div>

                {/* Google Login */}
                <button className="w-full flex items-center justify-center gap-3 py-3 border border-gray-300 rounded-xl hover:bg-gray-100 transition">
                    <GoogleIcon />
                    <span className="text-gray-700 font-medium">
                        Continue with Google
                    </span>
                </button>

                {/* Already have account */}
                <p className="text-center text-sm text-gray-600 mt-6">
                    Already have an account?{" "}
                    <Link to="/login" className="text-teal-600 font-semibold">
                        Sign in here
                    </Link>
                </p>
            </div>
        </>
    )
}

export default FormSignUp