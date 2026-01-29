# GitHub Configuration

This directory contains GitHub-specific configuration files for the KhanBlox repository.

## Contents

- **workflows/**: GitHub Actions workflow definitions
  - `branch-protection.yml`: Validates pull requests to the main branch

- **CODEOWNERS**: Defines code ownership for automatic review assignment

- **BRANCH_PROTECTION.md**: Documentation about branch protection policies

- **pull_request_template.md**: Template for pull request descriptions

## Workflows

### Branch Protection Workflow

Runs automatically on all pull requests targeting the `main` branch. This workflow:
- Validates HTML file structure
- Checks for common code issues
- Ensures required files are present
- Provides statistics about the changes

## Code Owners

The CODEOWNERS file automatically assigns reviewers to pull requests based on which files are changed. All files are owned by @lomov0 by default.

## Branch Protection

See [BRANCH_PROTECTION.md](BRANCH_PROTECTION.md) for detailed information about branch protection policies and how to work with protected branches.
