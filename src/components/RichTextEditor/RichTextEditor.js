import React, { useRef, useEffect, useState } from 'react';
import undoIcon from '../../assets/editor/undo.png';
import redoIcon from '../../assets/editor/redo.png';
import boldIcon from '../../assets/editor/bold.png';
import italicIcon from '../../assets/editor/italic.png';
import underlineIcon from '../../assets/editor/underline.png';
import strikeIcon from '../../assets/editor/strikeout.png';
import bulletIcon from '../../assets/editor/bullets.png';
import numberIcon from '../../assets/editor/numbering.png';
import quoteIcon from '../../assets/editor/doublequotes.png';
import linkIcon from '../../assets/editor/link.png';
import './RichTextEditor.css';

const RichTextEditor = ({ value, onChange, placeholder, error }) => {
    const contentRef = useRef(null);
    const [activeFormats, setActiveFormats] = useState([]);

    useEffect(() => {
        if (contentRef.current && contentRef.current.innerHTML !== value) {
            if (value === '' && contentRef.current.innerHTML === '<br>') return;
            contentRef.current.innerHTML = value;
        }
    }, [value]);

    const handleInput = () => {
        if (contentRef.current) {
            onChange(contentRef.current.innerHTML);
        }
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const text = e.clipboardData.getData('text/plain');
        document.execCommand('insertText', false, text);
    };

    const checkFormats = () => {
        const formats = [];
        if (document.queryCommandState('bold')) formats.push('bold');
        if (document.queryCommandState('italic')) formats.push('italic');
        if (document.queryCommandState('underline')) formats.push('underline');
        if (document.queryCommandState('strikeThrough')) formats.push('strikeThrough');
        if (document.queryCommandState('insertUnorderedList')) formats.push('insertUnorderedList');
        if (document.queryCommandState('insertOrderedList')) formats.push('insertOrderedList');

        // Check for blockquote
        const blockValue = document.queryCommandValue('formatBlock');
        if (blockValue === 'blockquote') formats.push('blockquote');

        setActiveFormats(formats);
    };

    const execCommand = (command, cmdValue = undefined) => {
        document.execCommand(command, false, cmdValue);
        if (contentRef.current) {
            contentRef.current.focus();
            checkFormats();
        }
    };

    const isActive = (command) => activeFormats.includes(command);

    return (
        <div className={`rich-text-editor ${error ? 'rich-text-editor-error' : ''}`}>
            {/* Toolbar */}
            <div className="rich-text-toolbar">
                {/* Undo/Redo */}
                <div className="toolbar-group">
                    <button
                        type="button"
                        onClick={() => execCommand('undo')}
                        className="toolbar-btn"
                        title="Undo"
                    >
                        <img src={undoIcon} alt="Undo" draggable="false" />
                    </button>
                    <button
                        type="button"
                        onClick={() => execCommand('redo')}
                        className="toolbar-btn"
                        title="Redo"
                    >
                        <img src={redoIcon} alt="Redo" draggable="false" />
                    </button>
                </div>

                {/* Formatting */}
                <div className="toolbar-group">
                    <button
                        type="button"
                        onClick={() => execCommand('bold')}
                        className={`toolbar-btn ${isActive('bold') ? 'active' : ''}`}
                        title="Bold"
                    >
                        <img src={boldIcon} alt="Bold" draggable="false" />
                    </button>
                    <button
                        type="button"
                        onClick={() => execCommand('italic')}
                        className={`toolbar-btn ${isActive('italic') ? 'active' : ''}`}
                        title="Italic"
                    >
                        <img src={italicIcon} alt="Italic" draggable="false" />
                    </button>
                    <button
                        type="button"
                        onClick={() => execCommand('underline')}
                        className={`toolbar-btn ${isActive('underline') ? 'active' : ''}`}
                        title="Underline"
                    >
                        <img src={underlineIcon} alt="Underline" draggable="false" />
                    </button>
                    <button
                        type="button"
                        onClick={() => execCommand('strikeThrough')}
                        className={`toolbar-btn ${isActive('strikeThrough') ? 'active' : ''}`}
                        title="Strikethrough"
                    >
                        <img src={strikeIcon} alt="Strikethrough" draggable="false" />
                    </button>
                </div>

                {/* Lists */}
                <div className="toolbar-group">
                    <button
                        type="button"
                        onClick={() => execCommand('insertUnorderedList')}
                        className={`toolbar-btn ${isActive('insertUnorderedList') ? 'active' : ''}`}
                        title="Bullet List"
                    >
                        <img src={bulletIcon} alt="Bullet List" draggable="false" />
                    </button>
                    <button
                        type="button"
                        onClick={() => execCommand('insertOrderedList')}
                        className={`toolbar-btn ${isActive('insertOrderedList') ? 'active' : ''}`}
                        title="Numbered List"
                    >
                        <img src={numberIcon} alt="Numbered List" draggable="false" />
                    </button>
                </div>

                {/* Quote/Link */}
                <div className="toolbar-group">
                    <button
                        type="button"
                        onClick={() => {
                            if (isActive('blockquote')) {
                                execCommand('formatBlock', 'div');
                            } else {
                                execCommand('formatBlock', 'blockquote');
                            }
                        }}
                        className={`toolbar-btn ${isActive('blockquote') ? 'active' : ''}`}
                        title="Quote"
                    >
                        <img src={quoteIcon} alt="Quote" draggable="false" />
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            const url = prompt('Enter URL:');
                            if (url) execCommand('createLink', url);
                        }}
                        className="toolbar-btn"
                        title="Link"
                    >
                        <img src={linkIcon} alt="Link" draggable="false" />
                    </button>
                </div>
            </div>

            {/* Editor Content Area */}
            <div className="rich-text-content-wrapper">
                <div
                    ref={contentRef}
                    contentEditable
                    onInput={handleInput}
                    onPaste={handlePaste}
                    onKeyUp={checkFormats}
                    onMouseUp={checkFormats}
                    className="rich-text-content"
                    data-placeholder={placeholder}
                />
            </div>
        </div>
    );
};

export default RichTextEditor;
