module.exports = {
  gifsicle: { optimizationLevel: 2, interlaced: false, colors: 8 },
  mozjpeg: { progressive: true, quality: 8 },
  pngquant: { quality: [0.25, 0.5] },
  svgo: {
    plugins: [{ removeViewBox: false }, { cleanupIDs: true }],
  },
  webp: { quality: 8 },
};
