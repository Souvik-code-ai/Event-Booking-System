import { useForm } from "react-hook-form";
function Register() {
    const stateName = ["Andhra Pradesh",
        "Arunachal Pradesh",
        "Assam",
        "Bihar",
        "Chhattisgarh",
        "Goa",
        "Gujarat",
        "Haryana",
        "Himachal Pradesh",
        "Jharkhand",
        "Karnataka",
        "Kerala",
        "Madhya Pradesh",
        "Maharashtra",
        "Manipur",
        "Meghalaya",
        "Mizoram",
        "Nagaland",
        "Odisha",
        "Punjab",
        "Rajasthan",
        "Sikkim",
        "Tamil Nadu",
        "Telangana",
        "Tripura",
        "Uttar Pradesh",
        "Uttarakhand",
        "West Bengal"];
    const { register,
        handleSubmit,
        watch,
        formState: { errors } } = useForm();
    function onSubmit(data) {
        console.log(data.firstName);
        console.log(data);
    }
    return (
        <div style={{ textAlign: "center" }}>
            <h1 style={{ fontWeight: "bolder", fontSize: "40px" }}>User Registration Page</h1>
            <form >
                <label htmlFor="fn">First Name:</label>
                <br />
                <input
                    type="text"
                    {...register("firstName", {
                        required: {
                            value: true,
                            message: "First name is required"
                        },
                        pattern: {
                            value: /^[A-Z]+$/,
                            message: "First name should be in block letter"
                        }
                    })}
                    placeholder="Type first name"
                    id="fn"
                />

                <br />
                <p>{errors.firstName?.message}</p><br />
                <label htmlFor="ln">Last Name:</label>
                <br />
                <input
                    type="text"
                    {...register("lastName", {
                        required: {
                            value: true,
                            message: "Last name is required"
                        },
                        pattern: {
                            value: /^[A-Z]+$/,
                            message: "Last name should be in block letter"
                        }
                    })}
                    placeholder="Type Last name"
                    id="ln"
                />

                <br />
                <p>{errors.lastName?.message}</p><br />
                <label htmlFor="email">Email Address:</label>
                <br />
                <input
                    type="text"
                    {...register("email", {
                        required: {
                            value: true,
                            message: "Email is required"
                        },
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/,
                            message: "Email should be valid in format."
                        }
                    })}
                    placeholder="Type email address"
                    id="email"
                />
                <br />
                <p>{errors.email?.message}</p><br />
                <label htmlFor="contact">Contact:</label><br />
                <input
                    type="text"
                    {...register("email", {
                        required: {
                            value: true,
                            message: "Contact is mandatory"
                        },
                        pattern: {
                            value: /^[0-9]{10}$/,
                            message: "Contact should be 10 numbers in format"
                        }
                    })}
                    placeholder="Type email address"
                    id="email"
                />
                <br />
                <p>{errors.email?.message}</p><br />
                <label htmlFor="pwd">Enter password:</label><br />
                <input type="text"{...register("password", {
                    required: true, pattern: /^[A-Za-z0-9@]{8,}$/,
                    message: "The field is required and must be 10 digit number"
                })} placeholder="Enter password" id="pwd" /><br />
                {errors.password && <span>Password must contain atleast one uppercase,one lowercase and 8 digits in length</span>}<br />
                <label htmlFor="conpwd">Confirm password:</label><br />
                <input type="text"{...register("confirmPassword", {
                    required: true, pattern: /^[A-Za-z0-9@]{8,}$/,
                    message: "The field is required and must be 10 digit number"
                })} placeholder="Confirm password" id="conpwd" /><br />
                {errors.confirmPassword && <p>Password must contain atleast one uppercase,one lowercase and 8 digits in length</p>}

                <br />
                <button type="submit" onClick={handleSubmit(onSubmit)}
                    style={{ marginLeft: "20px", backgroundColor: "blue", borderRadius: "8px" }}>Register</button>
            </form>
        </div>

    )
}

export default Register;