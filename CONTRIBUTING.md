# Contributing to KhanBlox

Thank you for your interest in contributing to KhanBlox! We welcome contributions from everyone, whether you're fixing a typo or adding a major feature.

## 🌟 Ways to Contribute

### 1. Report Bugs 🐛
- Check if the issue already exists in [GitHub Issues](https://github.com/lomov0/khanblox/issues)
- Create a new issue with a clear description
- Include steps to reproduce, expected vs actual behavior
- Add screenshots if applicable

### 2. Suggest Features ✨
- Open an issue with the "enhancement" label
- Describe the feature and why it would be valuable
- Include mockups or examples if possible

### 3. Improve Documentation 📝
- Fix typos or unclear explanations
- Add examples or tutorials
- Improve code comments
- Translate documentation

### 4. Submit Code 💻
- Fix bugs
- Implement new features
- Improve performance
- Enhance accessibility

### 5. Create Games 🎮
- Design new games for the platform
- Share creative game ideas
- Test existing games and provide feedback

## 🚀 Getting Started

### Prerequisites
- A web browser (Chrome, Firefox, Safari, Edge)
- Basic knowledge of HTML, CSS, and JavaScript
- A text editor (VS Code, Sublime, Atom, etc.)

### Development Setup

1. **Fork the repository**
   - Click the "Fork" button at the top right of the repository page

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR-USERNAME/khanblox.git
   cd khanblox
   ```

3. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

4. **Start a local server**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   
   # Node.js
   npx http-server -p 8000
   ```

5. **Make your changes**
   - Edit files in your preferred text editor
   - Test your changes in the browser at `http://localhost:8000`

## 📋 Coding Guidelines

### General Principles
- **Keep it simple**: Write clear, readable code
- **Be consistent**: Follow the existing code style
- **Stay minimal**: Make the smallest change needed
- **Test thoroughly**: Verify your changes work as expected

### HTML Guidelines
- Use semantic HTML5 elements
- Include proper ARIA labels for accessibility
- Keep markup clean and well-indented
- Use meaningful IDs and class names

### CSS Guidelines
- Use CSS custom properties for theming
- Follow BEM or similar naming conventions
- Keep selectors simple and specific
- Avoid inline styles when possible
- Ensure responsive design works on all devices

### JavaScript Guidelines
- Use vanilla JavaScript (no frameworks required)
- Write clear, self-documenting code
- Add comments for complex logic
- Handle errors gracefully
- Use `const` and `let` instead of `var`
- Follow ES6+ standards

### Accessibility
- Ensure keyboard navigation works
- Add proper ARIA attributes
- Maintain good color contrast
- Test with screen readers when possible
- Support reduced motion preferences

## 🔄 Pull Request Process

1. **Update your fork**
   ```bash
   git fetch upstream
   git merge upstream/main
   ```

2. **Commit your changes**
   ```bash
   git add .
   git commit -m "Brief description of changes"
   ```
   
   **Commit Message Format:**
   - `feat: Add new game creation tool`
   - `fix: Resolve theme toggle bug`
   - `docs: Update installation instructions`
   - `style: Improve button hover effects`
   - `refactor: Simplify loading screen code`

3. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

4. **Create a Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Select your fork and branch
   - Fill out the PR template with:
     - Clear description of changes
     - Related issue numbers
     - Screenshots (if UI changes)
     - Testing steps

5. **Address feedback**
   - Respond to review comments
   - Make requested changes
   - Push updates to the same branch

## ✅ Code Review Checklist

Before submitting, ensure:
- [ ] Code follows project style guidelines
- [ ] All files are properly formatted
- [ ] Changes are tested in multiple browsers
- [ ] No console errors or warnings
- [ ] Documentation is updated if needed
- [ ] Commit messages are clear
- [ ] No unnecessary files are included
- [ ] Images are optimized for web
- [ ] Accessibility is maintained

## 🎨 Design Guidelines

### Color Palette
- Background: `#121212` (dark) / `#f7f7f7` (light)
- Primary: `#00b06b` (green accent)
- Secondary: `#007bff` (blue)
- Text: `#ffffff` (dark) / `#111111` (light)
- Muted: `#aaaaaa` / `#444444`

### Typography
- Font: System UI stack (`system-ui, -apple-system, "Segoe UI", Roboto`)
- Headings: Bold, clear hierarchy
- Body: 14-16px, good line height

### Spacing
- Use consistent padding/margin values
- Follow 4px/8px grid system
- Maintain visual breathing room

## 🐛 Bug Report Template

```markdown
**Describe the bug**
A clear description of what the bug is.

**To Reproduce**
Steps to reproduce:
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

**Expected behavior**
What you expected to happen.

**Screenshots**
If applicable, add screenshots.

**Environment:**
 - OS: [e.g. Windows 10, macOS 12]
 - Browser: [e.g. Chrome 100, Firefox 98]
 - Version: [e.g. v1.4.1]

**Additional context**
Any other relevant information.
```

## 💡 Feature Request Template

```markdown
**Is your feature related to a problem?**
Clear description of the problem.

**Describe the solution**
What you'd like to happen.

**Describe alternatives**
Other solutions you've considered.

**Additional context**
Mockups, examples, or related projects.
```

## 📞 Getting Help

- 💬 [GitHub Discussions](https://github.com/lomov0/khanblox/discussions) - Ask questions
- 🐛 [GitHub Issues](https://github.com/lomov0/khanblox/issues) - Report bugs
- 📧 Contact the maintainer directly for sensitive issues

## 🎉 Recognition

Contributors will be:
- Listed in our contributors page
- Credited in release notes
- Thanked in the community

## 📜 Code of Conduct

### Our Standards
- Be respectful and inclusive
- Accept constructive criticism gracefully
- Focus on what's best for the community
- Show empathy towards others

### Unacceptable Behavior
- Harassment or discriminatory language
- Trolling or insulting comments
- Public or private harassment
- Publishing others' private information

### Enforcement
Issues can be reported to the project maintainer. All complaints will be reviewed and investigated.

---

## License

By contributing, you agree that your contributions will be licensed under the Apache License 2.0.

---

Thank you for making KhanBlox better! 🚀🎮
