import { ApiResponse, CustomerRequestPayload } from '@/types';
import { mapObjectKeysToSnakeCase } from '@/utils/mapper';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const coreAPI = createApi({
  reducerPath: 'coreAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BACKEND_URL,
  }),
  endpoints: (builder) => ({
    fetchCountryByIP: builder.query<
      { data: { country: string; ip: string } },
      void
    >({
      query: () => '/api/core/user-country/',
    }),
    fetchLenders: builder.query<any, void>({
      query: () => '/api/core/lenders/',
    }),
    fetchImageURL: builder.query<any, { image_url: string }>({
      query: ({ image_url }) => {
        console.log('image_url', image_url);
        return `/api/core/get_image?image_url=${encodeURIComponent(image_url)}`;
      },
    }),
    customerServiceRequest: builder.mutation<ApiResponse<{pending_request_id: string}>, CustomerRequestPayload<any>>({
      query: (body) => {
        const transformedData = mapObjectKeysToSnakeCase(body.data);
        const payload = {
          action: body.action,
          data: transformedData,
        }
        return{
          url: 'api/service/initiate/',
          method: 'POST',
          body: payload
        }
      },
    }),
    serviceOtpVerify: builder.mutation<ApiResponse<{id: string, message: string}>, {pending_request_id:string, otp_code:string}>({
      query: (body) => {
        return{
          url: 'api/service/verify-otp/',
          method: 'POST',
          body: body
        }
      },
    }),
  }),
});

export const {
  useFetchCountryByIPQuery,
  useFetchLendersQuery,
  useFetchImageURLQuery,
  useCustomerServiceRequestMutation,
  useServiceOtpVerifyMutation
} = coreAPI;
