import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    // user: {
    //     taiKhoan: "thanhquang",
    //     email: "quang@gmail.com",
    //     accessToken: "abc123",
    // },
    user: JSON.parse(localStorage.getItem("user") as string) || null,
};

// viết actions login và register
export const login = createAsyncThunk("auth/login", async (values) => {
    try {
        // const data = await authAPI.login(values)
        const data = { taiKhoan: "aaa123", matKhau: "1234" };

        // Lưu thông tin user xuống localStorage
        localStorage.setItem("user", JSON.stringify(data));
        return data;
    } catch (error) {
        throw error;
    }
});

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, { payload }) => {
            // state.user = payload;
        });
    },
});

export default authSlice.reducer;
