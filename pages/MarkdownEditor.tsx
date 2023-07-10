import React, {FC, ChangeEvent, useEffect} from 'react';
import ReactMarkdown, { Components } from 'react-markdown';
import { solarizedlight } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import Editor from 'react-simple-code-editor';
import SyntaxHighlighter from "react-syntax-highlighter/dist/cjs/prism";
import hotkeys from "hotkeys-js";
import Toolbar from "../components/Toolbar";

interface CodeRendererProps {
    language: string;
    value: string;
}

const CodeRenderer: FC<CodeRendererProps> = ({ language, value }) => {
    return (
        <SyntaxHighlighter style={solarizedlight} language={language ?? undefined}>
            {value ?? ''}
        </SyntaxHighlighter>
    );
};

const components: Components = {
    code({node, inline, className, children, ...props}) {
        const match = /language-(\w+)/.exec(className || '');
        return !inline && match ? (
            <CodeRenderer language={match[1]} value={String(children)} {...props} />
        ) : (
            <code className={className} {...props}>
                {children}
            </code>
        );
    },
};

interface MarkdownEditorProps {
    name: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const MarkdownEditor: FC<MarkdownEditorProps> = ({ name, value, onChange }) => {
    const handleChange = (content: string) => {
        onChange({
            target: {
                name,
                value: content,
            },
        } as ChangeEvent<HTMLInputElement>);
    };

    const insertText = (before: string, after = '') => {
        // Get the current cursor position
        const cursorPosition = (document.activeElement as HTMLTextAreaElement).selectionStart;

        // Insert the text
        const newValue = [value.slice(0, cursorPosition), before, after, value.slice(cursorPosition)].join('');

        handleChange(newValue);
    };

    const handleBold = () => {
        insertText('**', '**');
    };

    const handleItalic = () => {
        insertText('*', '*');
    };

    const handleCode = () => {
        insertText('`', '`');
    };

    useEffect(() => {
        hotkeys('ctrl+b', handleBold);
        hotkeys('ctrl+i', handleItalic);
        hotkeys('ctrl+`', handleCode);

        return () => {
            hotkeys.unbind('ctrl+b');
            hotkeys.unbind('ctrl+i');
            hotkeys.unbind('ctrl+`');
        };
    }, []);

    return (
        <div className="flex flex-col">
            <Toolbar onBold={handleBold} onItalic={handleItalic} onCode={handleCode} />
            <div className="border p-4">
                <Editor
                    value={value}
                    onValueChange={handleChange}
                    highlight={(markdown) => markdown}
                    padding={10}
                    className="border rounded-md p-2 h-full"
                    style={{
                        fontFamily: '"Fira code", "Fira Mono", monospace',
                        fontSize: 12,
                    }}
                />
            </div>
            <div className="border mt-4 p-4">
                <ReactMarkdown components={components}>{value}</ReactMarkdown>
            </div>
        </div>
    );
};

export default MarkdownEditor;