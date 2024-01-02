# Changelog

# v0.4.0 (2024-01-01)

- Fixed a bug where the `.bit-select` arrow didn't show on disabled selects

- Fixed a bug where the `.bit-select` arrow didn't have enough padding on the right

- Added `--bit-border-radius-sharp` custom property

  - This defaults to `min(2px, var(--bit-border-radius))`, so that it will match the normal border radius unless it's bigger than 2px

  - This is used on `.bit-box` and `.bit-code` since the default padding doesn't leave enough room for a larger border radius

  - This is used on `.bit-checkbox` since it's important that this element not be confused with `.bit-radio`

# v0.3.0 (2023-12-13)

- `.bit-checkbox` and `.bit-radio` now have 4px of margin by default

- Added custom property `--bit-radiocheckbox-margin-horizontal`

- Added custom property `--bit-radiocheckbox-margin-vertical`

- `--bit-border-radius` is now `0px` by default

- `--bit-underline-thickness` is now `1px` by default

- `.bit-select` has more padding to the left of the arrow

- `.bit-card` shadow is now in the inside of the element

# v0.2.0 (2023-12-09)

- Reduced the shadow size on interactive elements

- Reduced the thickness of the `.bit-select` arrow

- Simplified the `.bit-legend` appearance to better much other form elements

# v0.1.1 (2022-12-22)

- Fixed a bug where links weren't underlined in Safari

# v0.1.0 (2022-12-21)

- Initial release
