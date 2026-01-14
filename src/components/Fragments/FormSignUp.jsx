import React from "react";
import LabeledInput from "../Elements/LabeledInput";
import Button from "../Elements/Button";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignUpSchema = Yup.object().shape({
    name: Yup.string().required("Nama wajib diisi"),
    email: Yup.string()
        .email("Email tidak valid")
        .required("Email wajib diisi"),
    password: Yup.string().required("Password wajib diisi"),
});

function FormSignUp({ onSubmit }) {
    return (
        <>
            {/* form start */}
            <div className="mt-16">
                <Formik
                    initialValues={{
                        name: "",
                        email: "",
                        password: "",
                    }}
                    validationSchema={SignUpSchema}
                    onSubmit={async (values, { setSubmitting }) => {
                        try {
                            await onSubmit(values);
                        } finally {
                            setSubmitting(false);
                        }
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            {/* name */}
                            <div className="mb-6">
                                <Field name="name">
                                    {({ field }) => (
                                        <LabeledInput
                                            {...field}
                                            id="name"
                                            type="text"
                                            label="Name"
                                            placeholder="Tanzir Rahman"
                                        />
                                    )}
                                </Field>
                                <ErrorMessage
                                    name="name"
                                    component="p"
                                    className="text-red-500 text-xs mt-1"
                                />
                            </div>

                            {/* email */}
                            <div className="mb-6">
                                <Field name="email">
                                    {({ field }) => (
                                        <LabeledInput
                                            {...field}
                                            id="email"
                                            type="email"
                                            label="Email Address"
                                            placeholder="hello@example.com"
                                        />
                                    )}
                                </Field>
                                <ErrorMessage
                                    name="email"
                                    component="p"
                                    className="text-red-500 text-xs mt-1"
                                />
                            </div>

                            {/* password */}
                            <div className="mb-6">
                                <Field name="password">
                                    {({ field }) => (
                                        <LabeledInput
                                            {...field}
                                            id="password"
                                            type="password"
                                            label="Password"
                                            placeholder="●●●●●●●●●●●●●●"
                                            passwordEye
                                        />
                                    )}
                                </Field>
                                <ErrorMessage
                                    name="password"
                                    component="p"
                                    className="text-red-500 text-xs mt-1"
                                />
                            </div>

                            {/* button */}
                            <Button type="submit" disabled={isSubmitting}>
                                {isSubmitting ? "Loading..." : "Create Account"}
                            </Button>

                        </Form>
                    )}
                </Formik>
            </div>
            {/* form end */}

            {/* divider text */}
            <div className="my-9 px-7 flex flex-col justify-center items-center text-xs text-gray-03">
                <div className="border border-gray-05 w-full"></div>
                <div className="px-2 bg-special-mainBg absolute">
                    or sign up with
                </div>
            </div>

            {/* google button */}
            <div className="mb-8">
                <Button type="button" variant="secondary">
                    Continue with Google
                </Button>
            </div>

            {/* link */}
            <div className="flex justify-center">
                <Link
                    to="/login"
                    className="text-primary text-sm font-bold"
                >
                    Already have an account? Sign in
                </Link>
            </div>
        </>
    );
}

export default FormSignUp;
