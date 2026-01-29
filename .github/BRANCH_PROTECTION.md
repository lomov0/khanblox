# Branch Protection Policy

This document outlines the branch protection policies for the KhanBlox repository.

## Protected Branches

### Main Branch (`main`)

The `main` branch is protected and requires the following:

#### Required Status Checks
- **Branch Protection Workflow**: All validation checks must pass
- **HTML Validation**: All HTML files must have proper structure
- **Required Files Check**: LICENSE, README.md, NOTICE, and TRADEMARKS.md must be present

#### Pull Request Requirements
- Pull requests are required before merging to `main`
- At least one approval is recommended before merging
- All automated checks must pass

#### Code Review Requirements
- Changes are automatically assigned to code owners defined in `.github/CODEOWNERS`
- Code owners should review and approve changes before merging

## Workflow Enforcement

The repository uses GitHub Actions to enforce these policies:

1. **branch-protection.yml**: Runs on all pull requests to main
   - Validates HTML structure
   - Checks for common issues (console.log, TODO/FIXME comments)
   - Ensures required files are present
   - Provides PR statistics

## Local Development

When working on changes:

1. Create a new branch from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and test locally

3. Commit your changes:
   ```bash
   git add .
   git commit -m "Description of changes"
   ```

4. Push to your branch:
   ```bash
   git push origin feature/your-feature-name
   ```

5. Open a pull request on GitHub

6. Wait for automated checks to pass

7. Request review from code owners

8. Merge once approved and all checks pass

## Direct Push Prevention

Direct pushes to the `main` branch should be disabled in repository settings. All changes must go through the pull request process.

## Repository Settings

To fully enable branch protection, a repository administrator should configure the following in GitHub repository settings:

1. Navigate to: Settings → Branches → Branch protection rules
2. Add rule for `main` branch with these settings:
   - ✅ Require a pull request before merging
   - ✅ Require approvals (recommended: at least 1)
   - ✅ Require status checks to pass before merging
     - Required status check: `validate`
   - ✅ Require branches to be up to date before merging
   - ✅ Do not allow bypassing the above settings
   - ✅ Restrict who can push to matching branches
   - ✅ Require linear history (optional)
   - ✅ Include administrators (recommended)

## Benefits

Branch protection provides:
- **Quality Assurance**: Automated checks ensure code quality
- **Peer Review**: Multiple eyes on code changes reduce bugs
- **Documentation**: Clear history of changes and decisions
- **Rollback Safety**: Easy to revert problematic changes
- **Collaboration**: Team members can discuss changes before merging

## Questions?

If you have questions about the branch protection policy, please open an issue or contact the repository maintainer.
