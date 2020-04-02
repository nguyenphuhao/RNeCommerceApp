export const Responsive = (width, height) => {
  const guidelineBaseWidth = 360;
  const guidelineBaseHeight = 592;

  const scale = size => (width / guidelineBaseWidth) * size;
  const verticalScale = size => (height / guidelineBaseHeight) * size;
  const moderateScale = (size, factor = 0.5) => {
    return size + (scale(size) - size) * factor;
  };

  return { scale, verticalScale, moderateScale };
};

export default {
  Responsive,
};
