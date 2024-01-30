const loginFields = [
    {
        labelText: "Email/No Telepon",
        labelFor: "email-address",
        id: "email-address",
        name: "email",
        type: "email",
        autoComplete: "email",
        isRequired: true,
        placeholder: "Contoh: johndoe@gmail.com"
    },
    {
        isLogin: 'true',
        labelText: "Password",
        labelFor: "password",
        id: "password",
        name: "password",
        type: "password",
        autoComplete: "current-password",
        isRequired: true,
        placeholder: "Masukkan Password"
    }
]

const signupFields = [
    {
        labelText: "Nama",
        labelFor: "username",
        id: "username",
        name: "username",
        type: "text",
        autoComplete: "username",
        isRequired: true,
        placeholder: "Nama Lengkap"
    },
    {
        labelText: "Email",
        labelFor: "email-address",
        id: "email-address",
        name: "email",
        type: "email",
        autoComplete: "email",
        isRequired: true,
        placeholder: "Contoh: johndee@gmail.com"
    },
    {
        labelText: "Nomor Telepon",
        labelFor: "telepon",
        id: "telepon",
        name: "telepon",
        type: "telepon",
        autoComplete: "telepon",
        isRequired: true,
        placeholder: "Masukkan Nomor Telepon"
    },
    {
        labelText: "Buat Password",
        labelFor: "password",
        id: "password",
        name: "password",
        type: "password",
        autoComplete: "password",
        isRequired: true,
        placeholder: "Buat Password"
    },
    {
        labelText: "Alamat",
        labelFor: "address",
        id: "address",
        name: "address",
        type: "text",
        autoComplete: "address",
        isRequired: true,
        placeholder: "Masukkan alamat anda"
    },
    {
        labelText: "Pekerjaan",
        labelFor: "job",
        id: "job",
        name: "job",
        type: "text",
        autoComplete: "job",
        isRequired: true,
        placeholder: "Masukkan pekerjaan anda saat ini"
    }
]

const resetPasswordFields = [
    {
        labelText: "Email",
        labelFor: "email-address",
        id: "email-address",
        name: "email",
        type: "email",
        autoComplete: "email",
        isRequired: true,
        placeholder: "Contoh: johndee@gmail.com"
    }
]

const resetPasswordBaruFields = [
    {
        labelText: "Masukkan Password Baru",
        labelFor: "password",
        id: "password",
        name: "password",
        type: "password",
        autoComplete: "password",
        isRequired: true,
        placeholder: "Masukkan Password Baru"
    },
    {
        labelText: "Ulangi Password Baru",
        labelFor: "confirm-password",
        id: "confirm-password",
        name: "confirm-password",
        type: "password",
        autoComplete: "confirm-password",
        isRequired: true,
        placeholder: "Ulangi Password Baru"
    }
]

export { loginFields, signupFields, resetPasswordFields, resetPasswordBaruFields }