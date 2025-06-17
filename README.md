# Markdown2DOCX

A modern React application that converts Markdown text to DOCX documents with real-time preview. Built with Vite for fast development and optimized builds.

## Features

- ✨ **Real-time Preview**: See your Markdown rendered as HTML instantly
- 📄 **DOCX Export**: Convert Markdown to Microsoft Word documents
- 📋 **Copy to Clipboard**: Copy formatted HTML for pasting into Word or other applications
- 🎨 **Clean Interface**: Split-pane design with editor and preview
- 📱 **Responsive Design**: Works on desktop and mobile devices
- ⚡ **Fast Performance**: Built with Vite and React for optimal speed

## Supported Markdown Features

- Headers (H1, H2, H3)
- **Bold** and *italic* text
- `Inline code`
- Tables
- Paragraphs
- Lists (coming soon)
- Links (coming soon)

## Technologies Used

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **Showdown** - Markdown to HTML converter
- **docx** - DOCX document generation
- **file-saver** - File download functionality

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd markdown2docx
```
2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Usage

1. **Write Markdown**: Type or paste your Markdown content in the left panel
2. **Preview**: See the formatted output in the right panel in real-time
3. **Export Options**:
   - Click "Download DOCX" to save as a Word document
   - Click "Copy as HTML" to copy formatted content to clipboard

### Example Markdown

```markdown
# My Document

This is a paragraph with **bold** and *italic* text.

## Table Example

| Column A | Column B |
|----------|----------|
| Cell 1   | Cell 2   |
| Cell 3   | Cell 4   |

### Code Example

Here's some `inline code` in a sentence.
```

## Project Structure

```
markdown2docx/
├── public/
│   └── vite.svg
├── src/
│   ├── App.jsx          # Main application component
│   ├── App.css          # Application styles
│   ├── main.jsx         # React entry point
│   └── index.css        # Global styles
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
└── README.md           # This file
```

## Configuration

### Vite Configuration

The project uses Vite with React plugin. Configuration can be found in `vite.config.js`.

### Markdown Converter Settings

Showdown converter is configured with:
- Tables support
- Simplified auto-linking
- Strikethrough text

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Known Issues

- Complex table formatting may not transfer perfectly to DOCX
- Some advanced Markdown features are not yet supported
- Clipboard API requires HTTPS in production

## Future Enhancements

- [ ] Support for more Markdown features (lists, links, images)
- [ ] Custom styling options for DOCX export
- [ ] Drag and drop file import
- [ ] Multiple export formats (PDF, HTML)
- [ ] Syntax highlighting for code blocks
- [ ] Document templates

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- [Showdown](https://github.com/showdownjs/showdown) for Markdown parsing
- [docx](https://github.com/dolanmiu/docx) for DOCX generation
- [Vite](https://vitejs.dev/) for the amazing build tool
- [React](https://reactjs.org/) for the UI framework