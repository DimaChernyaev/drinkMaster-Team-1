export const modalText = {
  privacyPolicyText: generatePlaceholderText(8000),
  termsOfServiceText: generatePlaceholderText(8000),
};

function generatePlaceholderText(charCount) {
  const placeholderText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  const repetitions = Math.ceil(charCount / placeholderText.length);
  return placeholderText.repeat(repetitions).substring(0, charCount);
}
