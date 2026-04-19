#!/usr/bin/env bash
# PreToolUse hook for Bash.
# Blocks git branch-creation commands whose branch name does not match:
#   feature/{optional issue-id-}{lowercase kebab-case}
#
# Pattern: ^feature/([0-9]+-)?[a-z0-9]+(-[a-z0-9]+)*$
# Examples allowed:   feature/add-login, feature/42-add-login, feature/login
# Examples rejected:  add-login, hotfix/x, feature/Add-Login, feature/add_login
#
# Non-branch-creation commands pass through silently.

set -uo pipefail

payload=$(cat)
cmd=$(printf '%s' "$payload" | jq -r '.tool_input.command // empty')

if [ -z "$cmd" ]; then
  exit 0
fi

name=""

# git checkout -b <name>
if [[ "$cmd" =~ git[[:space:]]+checkout[[:space:]]+-b[[:space:]]+([^[:space:]\'\"]+) ]]; then
  name="${BASH_REMATCH[1]}"
# git switch -c <name>  |  git switch --create <name>
elif [[ "$cmd" =~ git[[:space:]]+switch[[:space:]]+(-c|--create)[[:space:]]+([^[:space:]\'\"]+) ]]; then
  name="${BASH_REMATCH[2]}"
# git branch <name>    (bare, no flags — creation form).
# First token must start with [A-Za-z0-9_] to skip -d, -D, -m, --list, etc.
elif [[ "$cmd" =~ (^|[[:space:]\;\&\|])git[[:space:]]+branch[[:space:]]+([a-zA-Z0-9_][a-zA-Z0-9_./-]*)([[:space:]]|$) ]]; then
  name="${BASH_REMATCH[2]}"
fi

if [ -z "$name" ]; then
  exit 0
fi

if [[ "$name" =~ ^feature/([0-9]+-)?[a-z0-9]+(-[a-z0-9]+)*$ ]]; then
  exit 0
fi

cat >&2 <<EOF
Blocked: branch name "$name" does not follow the project naming convention.

Required pattern: feature/{issue-id-}{lowercase-kebab-case}
  Valid:   feature/add-logo-sizing
           feature/42-add-logo-sizing
           feature/login
  Invalid: add-logo-sizing         (missing feature/ prefix)
           feature/Add-Logo        (uppercase)
           feature/add_logo        (underscore)
           hotfix/xyz              (wrong prefix)

Re-run with a conforming name.
EOF
exit 2
