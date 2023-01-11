import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ImageInfoPayload, ImageInfoResponse } from "../../types/ImagesInfo";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (builder) => ({
    uploadPictureData: builder.mutation<ImageInfoResponse[], ImageInfoPayload>({
      query: ({ body }) => ({
        url: "/image-info",
        method: "POST",
        body: { ...body },
      }),
    }),
  }),
});

export const { useUploadPictureDataMutation } = api;
