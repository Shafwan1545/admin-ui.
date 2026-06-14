import React from "react";
import AuthLayout from "../components/Layouts/AuthLayout";
import FormSignUp from "../Fragments/FormSignUp"; // <-- UBAH DI SINI (Hapus tulisan components/)

function SignUpPage() {
    return (
        <AuthLayout>
            <FormSignUp />
        </AuthLayout>
    );
}

export default SignUpPage;