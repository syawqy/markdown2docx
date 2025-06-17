import React, { useState, useEffect } from 'react';
import showdown from 'showdown';
import { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell } from 'docx';
import { saveAs } from 'file-saver';
import './App.css';

function App() {
  const [markdownInput, setMarkdownInput] = useState(`# Example Heading

This is a paragraph with **bold**, *italic*, and \`inline code\`.

| Column A | Column B |
|----------|----------|
| Cell 1   | Cell 2   |
| Cell 3   | Cell 4   |`);
  const [previewHtml, setPreviewHtml] = useState('');

  const converter = new showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true
  });

  const updatePreview = () => {
    const html = converter.makeHtml(markdownInput);
    setPreviewHtml(html);
  };

  useEffect(() => {
    updatePreview();
  }, [markdownInput]);

  const generateDocx = async () => {
    // Simple conversion - you can enhance this to handle more markdown elements
    const lines = markdownInput.split('\n');
    const children = [];

    for (const line of lines) {
      if (line.trim() === '') continue;
      
      if (line.startsWith('# ')) {
        children.push(
          new Paragraph({
            children: [new TextRun({ text: line.substring(2), bold: true, size: 32 })],
          })
        );
      } else if (line.startsWith('## ')) {
        children.push(
          new Paragraph({
            children: [new TextRun({ text: line.substring(3), bold: true, size: 28 })],
          })
        );
      } else if (!line.startsWith('|') && !line.startsWith('-')) {
        // Handle bold and italic text
        const processedText = line
          .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold markers for now
          .replace(/\*(.*?)\*/g, '$1'); // Remove italic markers for now
        
        children.push(
          new Paragraph({
            children: [new TextRun({ text: processedText })],
          })
        );
      }
    }

    const doc = new Document({
      sections: [
        {
          properties: {},
          children: children,
        },
      ],
    });

    const blob = await Packer.toBlob(doc);
    saveAs(blob, 'markdown.docx');
  };

  const copyToClipboard = async () => {
    const html = converter.makeHtml(markdownInput);
    const blob = new Blob([html], { type: 'text/html' });
    const data = [new ClipboardItem({ 'text/html': blob })];
    try {
      await navigator.clipboard.write(data);
      alert('Copied to clipboard! You can paste into Word.');
    } catch (err) {
      alert('Failed to copy: ' + err);
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>markdown2docx</h1>
      </header>
      
      <div className="buttons">
        <button onClick={generateDocx}>Download DOCX</button>
        <button onClick={copyToClipboard}>Copy as HTML</button>
      </div>

      <div className="container">
        <textarea
          id="markdownInput"
          placeholder="Type Markdown here..."
          value={markdownInput}
          onChange={(e) => setMarkdownInput(e.target.value)}
        />
        <div 
          className="preview" 
          id="previewOutput"
          dangerouslySetInnerHTML={{ __html: previewHtml }}
        />
      </div>
    </div>
  );
}

export default App;