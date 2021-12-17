import axios from "axios"

axios.defaults.withCredentials = true;

export const registration = async (
    e,
    setAnswer,
    email,
    password,
) => {
    e.preventDefault();
    try {
        await axios.post(`/api/registration`, {email, password})
            .then(res => {
                setAnswer(res.data.message);
            });
    } catch (e) {
        console.log(e);
    }
};

export const authorization = async (e, setAnswer, email, password) => {
    try {
        e.preventDefault();
        await axios
            .post(`/api/login`, {
                email,
                password
            })
            .then(res => {
                setAnswer(res.data.message);
            });
    } catch (e) {
        alert(e);
    }
    window.location.reload()
};

export const authentication = async (setIsAuth, setEmail, setId, setIsAdmin) => {
    await axios.get("/api/login").then(res => {
        const { isAuth, user } = res.data;
        setIsAuth(isAuth);
        if (user) {
            setId(user.id);
            setEmail(user.email);
            setIsAdmin(user.rolesid == 1 ? true : false)
        }
    });

};

export const logout = async setIsAuth => {
    await axios.get("/api/logout").then(res => {
        const { isAuth } = res.data;
        setIsAuth(isAuth);
    });
    window.location.reload()
};


export const add_money = async (balance) => {
    try {
        await axios.post("/api/add_money", {balance}).then(res => {})
    } catch (error) {
        console.log(error)
    }
}

export const get_balance = async (setBalance) => {
    try {
        await axios.get("/api/money").then(res => {
            setBalance(res.data.balance)
        })
    } catch (error) {
        console.log(error)
    }
}


export const buy = async (price) => {
    try {
        await axios.post("/api/buy", {price}).then(res => {})
    } catch (error) {
        console.log(error)
    }
}