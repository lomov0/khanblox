# Setting Up Branch Protection on GitHub

This guide will help you configure branch protection rules for the `main` branch in your GitHub repository.

## Prerequisites

- You must be a repository administrator or owner
- The repository must be hosted on GitHub

## Step-by-Step Instructions

### 1. Navigate to Branch Protection Settings

1. Go to your repository on GitHub: `https://github.com/lomov0/khanblox`
2. Click on **Settings** (in the top navigation bar)
3. In the left sidebar, click on **Branches**
4. Under "Branch protection rules", click **Add rule** or **Add branch protection rule**

### 2. Configure the Branch Name Pattern

1. In the "Branch name pattern" field, enter: `main`
2. This will apply the rules to your main branch

### 3. Configure Protection Rules

Check the following options to protect your main branch:

#### ✅ Require a pull request before merging

- Enable this option
- Under this, check:
  - **Require approvals**: Set to at least `1` approval
  - **Dismiss stale pull request approvals when new commits are pushed**: Recommended
  - **Require review from Code Owners**: This will use your `.github/CODEOWNERS` file

#### ✅ Require status checks to pass before merging

- Enable this option
- Under "Status checks that are required", search for and add:
  - `validate` (this is the job name from the branch-protection.yml workflow)
  - `pr-info` (optional - provides PR statistics)
- Check:
  - **Require branches to be up to date before merging**: Recommended

#### ✅ Require conversation resolution before merging

- Enable this option to ensure all PR comments are resolved

#### ✅ Require signed commits (Optional)

- Enable if you want to require GPG-signed commits
- Note: This may require additional setup for contributors

#### ✅ Require linear history (Optional)

- Enable to prevent merge commits (forces rebase or squash)
- Recommended for cleaner git history

#### ✅ Include administrators

- Enable this to apply rules even to repository administrators
- Recommended for consistency and safety

#### ✅ Restrict who can push to matching branches

- Enable this option
- Leave it with default settings to allow only authorized users

#### ✅ Allow force pushes (Disabled)

- Keep this DISABLED to prevent force pushes to main
- This protects the commit history

#### ✅ Allow deletions (Disabled)

- Keep this DISABLED to prevent branch deletion
- This protects your main branch from accidental deletion

### 4. Save Changes

1. Scroll to the bottom
2. Click **Create** or **Save changes**

## Verification

After setting up branch protection:

1. Try to push directly to main - it should be blocked
2. Create a test branch and open a pull request
3. Verify that the "Branch Protection" workflow runs automatically
4. Verify that you see the code owner review request
5. Confirm that you can't merge until checks pass and approval is given

## Testing the Protection

You can test your branch protection with these steps:

```bash
# Try to push directly to main (this should fail)
git checkout main
echo "test" >> test.txt
git add test.txt
git commit -m "Direct push test"
git push origin main  # This should be rejected

# Proper workflow - create a branch
git checkout -b test/branch-protection
echo "test" >> test.txt
git add test.txt
git commit -m "Testing branch protection"
git push origin test/branch-protection

# Then create a PR on GitHub and verify:
# 1. The workflow runs
# 2. You can't merge without approval
# 3. All checks must pass
```

## Workflow Details

The branch protection workflow (`.github/workflows/branch-protection.yml`) runs automatically on pull requests and:

1. **Validates HTML Structure**: Ensures all HTML files have proper DOCTYPE, html, head, and body tags
2. **Checks for Common Issues**: Warns about console.log statements and TODO/FIXME comments
3. **Validates Required Files**: Ensures LICENSE, README.md, NOTICE, and TRADEMARKS.md exist
4. **Provides PR Information**: Shows statistics about the changes

## Code Owners

The `.github/CODEOWNERS` file automatically assigns @lomov0 as a reviewer for all changes. When a PR is opened:

- The code owner is automatically requested for review
- If "Require review from Code Owners" is enabled, their approval is required

## Troubleshooting

### Workflow doesn't run

- Check that the workflow file is on the main branch
- Verify the workflow syntax is correct
- Check the "Actions" tab for any errors

### Can't merge even after approval

- Ensure all required status checks have passed
- Check if branches need to be up to date
- Verify there are no unresolved conversations (if required)

### Don't see code owner review request

- Ensure CODEOWNERS file is in `.github/` directory
- Verify the GitHub username is correct
- Check that "Require review from Code Owners" is enabled

## Benefits of Branch Protection

With these settings, your main branch is now protected by:

1. **Automated Quality Checks**: Every PR is validated automatically
2. **Peer Review**: Changes must be reviewed before merging
3. **Audit Trail**: Clear history of who approved what
4. **Rollback Safety**: Easy to revert if something goes wrong
5. **Consistency**: All changes follow the same process
6. **Documentation**: PRs serve as documentation for changes

## Additional Resources

- [GitHub Branch Protection Documentation](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [CODEOWNERS Documentation](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners)

## Questions or Issues?

If you encounter any problems setting up branch protection:

1. Check the GitHub Actions logs in the "Actions" tab
2. Review the workflow file syntax
3. Verify your repository settings
4. Open an issue in the repository for help

---

**Note**: This setup provides automated checks and documentation, but the actual enforcement of pull request requirements and status checks must be configured in GitHub's repository settings as described above.
