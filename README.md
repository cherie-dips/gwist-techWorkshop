# Groq Chatbot

Minimal React chatbot using Groq API.

## Requirements

- **Node.js**: 18.0.0 or higher
- **npm**: 9.0.0 or higher
- **Groq API Key**: Get from https://console.groq.com/

See [REQUIREMENTS.md](./REQUIREMENTS.md) for detailed setup instructions.

## Setup

1. **Install Node.js** (if not already installed):
   - Download from https://nodejs.org/ (choose LTS version)
   - Or use a version manager like `nvm` (see REQUIREMENTS.md)

2. **Verify installation**:
   ```bash
   node --version  # Should be v18.0.0+
   npm --version   # Should be 9.0.0+
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Create a `.env` file** in the root directory:
   ```bash
   cp .env.example .env
   ```

5. **Add your Groq API key** to `.env`:
```
VITE_GROQ_API_KEY=your_groq_api_key_here
```

   Get your API key from: https://console.groq.com/

6. **Run the development server**:
```bash
npm run dev
```

7. **Open your browser** to the URL shown in the terminal (usually http://localhost:5173)

## Build

To build for production:
```bash
npm run build
```

