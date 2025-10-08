export interface ISendResetPasswordRequest {
    email: string;
    otp: string;
    newPassword: string;
}