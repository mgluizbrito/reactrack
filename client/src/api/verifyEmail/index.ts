import axios from "axios"

import { commonAxiosConfig } from "../../utils/commonAxios"

import type { ISendVerifyOtpRequest } from "../interfaces/requests/post/verifyEmail"
import type { IPostResponse } from "../interfaces/responses/post"

export const sendVerifyOtp = async (backendUrl: string, payload: ISendVerifyOtpRequest): Promise<IPostResponse> => {
    commonAxiosConfig()

    const { data } = await axios.post(backendUrl + '/auth/send-verify-otp', {
        email: payload.email
    })

    return data
}