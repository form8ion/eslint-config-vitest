export default {
  rules: {
    'import/no-unresolved': [
      'error',
      {
        ignore: [
          'vitest/config',
          'vitest-when'
        ]
      }
    ]
  }
};
