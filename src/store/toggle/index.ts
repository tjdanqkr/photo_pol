import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

const initialState = [
  {
    img: 'img/toggleImg/db.png',
    alt: 'DB',
    open: false,
    content: [
      {
        img: '/img/ProfilesIcons/DB/mongoDB.png',
        alt: 'mongoDB',
      },
      {
        img: '/img/ProfilesIcons/DB/MySQL-Logo.png',
        alt: 'MySQL',
      },
    ],
  },
  {
    img: 'img/toggleImg/windows.png',
    alt: 'OS',
    open: false,
    content: [
      {
        img: 'img/ProfilesIcons/OS/Windows_logo.png',
        alt: 'Windows',
      },
      {
        img: 'img/ProfilesIcons/OS/linux_logo.png',
        alt: 'Linux',
      },
    ],
  },
  {
    img: 'img/toggleImg/programing.png',
    alt: '언어',
    open: false,
    content: [
      {
        img: 'img/ProfilesIcons/lang/JavaScript.png',
        alt: 'JavaScript',
      },
      {
        img: 'img/ProfilesIcons/lang/ts.png',
        alt: 'TypeScript',
      },
      {
        img: 'img/ProfilesIcons/lang/Java_Logo.png',
        alt: 'Java',
      },
      {
        img: 'img/ProfilesIcons/lang/python-logo.png',
        alt: 'python',
      },
      {
        img: 'img/ProfilesIcons/lang/css.png',
        alt: 'css',
      },
      {
        img: 'img/ProfilesIcons/lang/HTML5.png',
        alt: 'HTML5',
      },

      {
        img: 'img/ProfilesIcons/lang/Expressjs.png',
        alt: 'Express',
      },
      {
        img: 'img/ProfilesIcons/lang/react.png',
        alt: 'react',
      },
      {
        img: 'img/ProfilesIcons/lang/nextjs.png',
        alt: 'next',
      },
      {
        img: 'img/ProfilesIcons/lang/Spring_Framework_Logo.png',
        alt: 'Spring',
      },
      {
        img: 'img/ProfilesIcons/lang/Vert.x_Logo.png',
        alt: 'Vert.x',
      },
    ],
  },
  {
    img: 'img/toggleImg/agile.png',
    alt: '기타',
    open: false,
    content: [
      {
        img: 'img/ProfilesIcons/Etc/bootstrap.png',
        alt: 'bootstrap',
      },
      {
        img: 'img/ProfilesIcons/Etc/git_and_github_logo.png',
        alt: 'git',
      },
      {
        img: 'img/ProfilesIcons/Etc/kakao_map_api.png',
        alt: 'kakaoMapApi',
      },
      {
        img: 'img/ProfilesIcons/Etc/navermapApi.png',
        alt: 'naverMapApi',
      },
      {
        img: 'img/ProfilesIcons/Etc/Redux_Logo.png',
        alt: 'Redux',
      },
      {
        img: 'img/ProfilesIcons/Etc/redux-toolkit.png',
        alt: 'ReduxToolkit',
      },
      {
        img: 'img/ProfilesIcons/Etc/styled-components.png',
        alt: 'styled-components',
      },
    ],
  },
];

export const toggleSlice = createSlice({
  name: 'toggle',
  initialState,
  reducers: {
    onClickToggle: (state, action) => {
      state[action.payload].open = !state[action.payload].open;
    },
  },
});

export const { onClickToggle } = toggleSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectTheme = (state: RootState) => state.toggle;

export default toggleSlice.reducer;
