import * as yup from 'yup';
import { topupSchema, internetSchema, electricitySchema, landlinePaymentSchema, khanePaniSchema } from '../schema';

export type TopupType = yup.InferType<typeof topupSchema>;
export type InternetType = yup.InferType<typeof internetSchema>;
export type ElectricityFormType = yup.InferType<typeof electricitySchema>;
export type LandLineFormType = yup.InferType<typeof landlinePaymentSchema>;
export type KhanePaniFormType = yup.InferType<typeof khanePaniSchema>;