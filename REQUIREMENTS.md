# Requirements

## System Requirements

- **Node.js**: Version 18.0.0 or higher
- **npm**: Version 9.0.0 or higher (comes with Node.js)
- **Groq API Key**: Get one from https://console.groq.com/

## How to Check Your Versions

```bash
node --version  # Should be v18.0.0 or higher
npm --version   # Should be 9.0.0 or higher
```

## Installing Node.js

If you don't have Node.js installed:

1. **Download from official website**: https://nodejs.org/
   - Choose the LTS (Long Term Support) version

2. **Or use a version manager**:
   - **nvm** (Node Version Manager) - https://github.com/nvm-sh/nvm
   - **nvm-windows** - https://github.com/coreybutler/nvm-windows
   - **fnm** - https://github.com/Schniz/fnm

   If using nvm, you can automatically use the correct version:
   ```bash
   nvm install  # Installs version from .nvmrc file
   nvm use      # Switches to the version in .nvmrc
   ```

## Project Dependencies

All project dependencies are managed through `package.json`. Run:

```bash
npm install
```

This will:
- Install all dependencies listed in `package.json`
- Create a `package-lock.json` file (locks exact dependency versions)
- Ensure everyone gets the same dependency versions

## Environment Variables

You need to create a `.env` file with your Groq API key:

```env
VITE_GROQ_API_KEY=your_groq_api_key_here
```

**Important**: Never commit your `.env` file to version control. It's already in `.gitignore`.

