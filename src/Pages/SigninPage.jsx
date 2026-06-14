import React from "react";
import AuthLayout from "../components/Layouts/AuthLayout";
import FormSigin from "../Fragments/FormSigin";

function SigninPage() {
    return(
        <AuthLayout>
        <FormSigin  />
        </AuthLayout >
    );
}

export default SigninPage;