# AGENTS.md

This file provides guidance to agents when working with code in this repository.

## Build/Lint/Test Commands
- No explicit single test command is defined in `package.json`. Standard Next.js commands are used for `dev`, `build`, `start`, and `lint`.

## Code Style Guidelines
- Tailwind CSS classes are merged using the `cn` utility function from `lib/utils.ts`.