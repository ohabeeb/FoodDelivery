import {Dimensions} from 'react-native';
import {
  responsiveScreenFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  // base colors
  primary: '#FC6D3F', // orange
  secondary: '#CDCDD2', // gray

  // colors
  black: '#1E1F20',
  white: '#FFFFFF',

  lightGray: '#F5F5F6',
  lightGray2: '#F6F6F7',
  lightGray3: '#EFEFF1',
  lightGray4: '#F8F8F9',
  transparent: 'transparent',
  darkgray: '#898C95',
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 30,
  padding: 10,
  padding2: 12,

  // font sizes
  largeTitle: responsiveScreenFontSize(5.0),
  h1: responsiveScreenFontSize(3.0),
  h2: responsiveScreenFontSize(2.2),
  h3: responsiveScreenFontSize(2.0),
  h4: responsiveScreenFontSize(1.8),
  body1: responsiveScreenFontSize(3.0),
  body2: responsiveScreenFontSize(2.0),
  body3: responsiveScreenFontSize(1.6),
  body4: responsiveScreenFontSize(1.4),

  // app dimensions
  width,
  height,
};

export const FONTS = {
  largeTitle: {
    fontFamily: 'Roboto-regular',
    fontSize: SIZES.largeTitle,
    lineHeight: responsiveHeight(5.5),
  },
  h1: {
    fontFamily: 'Roboto-Black',
    fontSize: SIZES.h1,
    lineHeight: responsiveHeight(3.6),
  },
  h2: {
    fontFamily: 'Roboto-Bold',
    fontSize: SIZES.h2,
    lineHeight: responsiveHeight(3.0),
  },
  h3: {
    fontFamily: 'Roboto-Bold',
    fontSize: SIZES.h3,
    lineHeight: responsiveHeight(2.2),
  },
  h4: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h4, lineHeight: 22},
  body1: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body1,
    lineHeight: responsiveHeight(3.6),
  },
  body2: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body2,
    lineHeight: responsiveHeight(3.0),
  },
  body3: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body3,
    lineHeight: responsiveHeight(2.2),
  },
  body4: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body4,
    lineHeight: responsiveHeight(2.2),
  },
  body5: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body5,
    lineHeight: responsiveHeight(2.2),
  },
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;
