# Contributing to KhanBlox

Thank you for your interest in contributing to KhanBlox! This document provides guidelines for contributing to the project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Branch Protection](#branch-protection)
- [How to Contribute](#how-to-contribute)
- [Pull Request Process](#pull-request-process)
- [Style Guidelines](#style-guidelines)
- [Reporting Bugs](#reporting-bugs)
- [Suggesting Features](#suggesting-features)

## Code of Conduct

This project follows a code of conduct. By participating, you are expected to:

- Be respectful and inclusive
- Welcome newcomers
- Be patient and friendly
- Focus on what is best for the community
- Show empathy towards other community members

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR-USERNAME/khanblox.git
   cd khanblox
   ```
3. **Add the upstream repository**:
   ```bash
   git remote add upstream https://github.com/lomov0/khanblox.git
   ```

## Branch Protection

The `main` branch is protected. All changes must be made through pull requests. See [.github/BRANCH_PROTECTION.md](.github/BRANCH_PROTECTION.md) for details.

Key points:
- Direct pushes to `main` are not allowed
- Pull requests require approval from code owners
- All automated checks must pass before merging
- Status checks include HTML validation and required file checks

## How to Contribute

### 1. Create a Feature Branch

Always create a new branch for your work:

```bash
git checkout -b feature/your-feature-name
```

Branch naming conventions:
- `feature/` - for new features
- `fix/` - for bug fixes
- `docs/` - for documentation changes
- `refactor/` - for code refactoring

### 2. Make Your Changes

- Write clean, readable code
- Follow existing code style and conventions
- Test your changes locally
- Ensure HTML files have proper structure (DOCTYPE, html, head, body tags)
- Keep commits focused and atomic

### 3. Commit Your Changes

Write clear, descriptive commit messages:

```bash
git add .
git commit -m "Add feature: description of what you added"
```

Good commit message examples:
- ✅ "Fix navigation menu alignment on mobile devices"
- ✅ "Add new game card for Obby Rush"
- ✅ "Update LICENSE file with correct year"

Bad commit message examples:
- ❌ "Update"
- ❌ "Fix stuff"
- ❌ "WIP"

### 4. Push to Your Fork

```bash
git push origin feature/your-feature-name
```

### 5. Open a Pull Request

1. Go to the [original repository](https://github.com/lomov0/khanblox)
2. Click "New Pull Request"
3. Select your branch
4. Fill out the pull request template
5. Click "Create Pull Request"

## Pull Request Process

1. **Fill out the PR template** completely
   - Describe your changes
   - Check all applicable boxes
   - Link any related issues

2. **Wait for automated checks** to run
   - HTML validation must pass
   - Required files must be present
   - All status checks must be green

3. **Respond to review feedback**
   - Address any comments from reviewers
   - Make requested changes
   - Push updates to the same branch

4. **Get approval** from code owners
   - At least one approval is required
   - All conversations must be resolved

5. **Merge** (once approved and all checks pass)
   - A maintainer will merge your PR
   - Your changes will be in the main branch!

## Style Guidelines

### HTML

- Use semantic HTML5 elements
- Include proper DOCTYPE declaration
- Maintain consistent indentation (2 spaces)
- Add comments for complex sections
- Ensure accessibility (alt text, ARIA labels)

Example:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Page Title</title>
</head>
<body>
  <!-- Your content here -->
</body>
</html>
```

### CSS

- Use meaningful class names
- Keep selectors simple
- Group related styles together
- Comment complex CSS rules

### JavaScript

- Use meaningful variable names
- Add comments for complex logic
- Avoid console.log in production code
- Handle errors gracefully

## Reporting Bugs

Found a bug? Help us fix it!

1. Check if the bug has already been reported in [Issues](https://github.com/lomov0/khanblox/issues)
2. If not, create a new issue using the **Bug Report** template
3. Provide as much detail as possible:
   - Steps to reproduce
   - Expected behavior
   - Actual behavior
   - Browser and OS information
   - Screenshots if applicable

## Suggesting Features

Have an idea for a new feature?

1. Check if the feature has already been suggested in [Issues](https://github.com/lomov0/khanblox/issues)
2. If not, create a new issue using the **Feature Request** template
3. Describe:
   - The problem you're trying to solve
   - Your proposed solution
   - Any alternatives you've considered

## Testing Your Changes

Before submitting a PR, test your changes:

1. **Open the HTML files in a browser**
   ```bash
   # Simple HTTP server
   python3 -m http.server 8000
   # Then open http://localhost:8000 in your browser
   ```

2. **Test on different browsers**
   - Chrome/Edge
   - Firefox
   - Safari (if available)

3. **Test on different devices**
   - Desktop
   - Tablet
   - Mobile

4. **Check for console errors**
   - Open browser DevTools (F12)
   - Check Console tab for errors
   - Check Network tab for failed requests

## Documentation

If your changes require documentation updates:

- Update the README.md if adding new features
- Update BRANCH_PROTECTION.md if changing workflows
- Add comments in code for complex logic
- Update this CONTRIBUTING.md if changing the contribution process

## Questions?

If you have questions about contributing:

- Open an issue with the "question" label
- Review existing documentation in the `.github/` directory
- Contact the maintainer: @lomov0

## License

By contributing to KhanBlox, you agree that your contributions will be licensed under the project's license. See [LICENSE](../LICENSE) for details.

## Acknowledgments

Thank you for contributing to KhanBlox! Every contribution helps make this project better.

---

**Remember**: The main branch is protected. Always work on a feature branch and submit a pull request!
