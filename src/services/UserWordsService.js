import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { API_URL } from '../utils/api/http';
export const wordsAPI = createApi({
  reducerPath: 'WordsAPI',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ['Words'],
  endpoints: (build) => ({
    fetchSelectedGroup: build.query({
      query: (group, page = 5) => ({
        url: `/words?group=${group}&page=${page}`,
        // params: {
        //   group: group,
        //   page: page,
        // },
      }),
      providesTags: () => ['Words'],
    }),
    fetchActiveWord: build.query({
      query: (wordId) => ({
        url: `/words`,
        params: {
          wordId: wordId,
        },
      }),
      providesTags: () => ['Words'],
    }),
    //   createPost: build.mutation({
    //     query: (post) => ({
    //       url: `/posts`,
    //       method: 'POST',
    //       body: post,
    //     }),
    //     invalidatesTags: ['Post'],
    //   }),
    //   updatePost: build.mutation({
    //     query: (post) => ({
    //       url: `/posts/${post.id}`,
    //       method: 'PUT',
    //       body: post,
    //     }),
    //     invalidatesTags: ['Post'],
    //   }),
    //   deletePost: build.mutation({
    //     query: (post) => ({
    //       url: `/posts/${post.id}`,
    //       method: 'DELETE',
    //     }),
    //     invalidatesTags: ['Post'],
    //   }),
  }),
});
