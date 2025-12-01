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
    return (
        <div>
            <form>
                <label htmlFor="name">Name:</label><br />
                <input type="text" placeholder="enter name" id="name" /><br />
                <label htmlFor="address">Address:</label><br />
                <input type="text" placeholder="type address" id="address" /><br />
                <label htmlFor="country">Sate:</label><br />
                <select name="state">
                    {stateName.map((user, index) => {
                        <option value={user} key={index}>{user}</option>
                    })}

                </select><br />
                <label htmlFor="pin">Pincode:</label><br />
                <input type="number" placeholder="enter pincode" id="pin" /><br />
                <label htmlFor="email">Email Adress:</label><br />
                <input type="number" placeholder="type email address" id="email" />
                <label htmlFor="contact">Contact Number:</label><br />
                <input type="number" placeholder="type email address" id="contact" />

            </form >
        </div>

    )
}
export default Register;