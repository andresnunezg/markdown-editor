import React from 'react';

import { PencilAltIcon, ClipboardCopyIcon, TrashIcon } from '@heroicons/react/outline';
import { CodeIcon, DotsVerticalIcon, LinkIcon, TableIcon, ChatAltIcon, PhotographIcon} from '@heroicons/react/outline';
import './styles/Editor.css';

class Editor extends React.Component {
    render () {
        return (
            <section id="editor">
                <div className="Title__container TitleEdit">
                    <div className="TitleEditor__left">
                        <PencilAltIcon className="Icon__title" />
                        <h1>Editor</h1>
                    </div>
                    <div className="TitleEditor__right">
                        <div className="TitleEditor__action">
                            <p>Copiar</p>
                            <ClipboardCopyIcon className="Icontool" />
                        </div>
                        <div className="TitleEditor__action">
                            <p>Borrar</p>
                            <TrashIcon className="Icontool" />
                        </div>
                    </div>
                </div>
                <div className="Textedit__container">
                    <div className="Textedit__toolbar">
                        <div className="Icontool">
                            <p className="IconBold">N</p>
                        </div>
                        <div className="Icontool">
                            <p className="IconItalic">I</p>
                        </div>
                        <div className="Icontool">
                            <p className="IconCroos"><s>b</s></p>
                        </div>
                        <CodeIcon className="Icontool" />
                        <LinkIcon className="Icontool" />
                        <TableIcon className="Icontool" />
                        <ChatAltIcon className="Icontool" />
                        <DotsVerticalIcon className="Icontool" />
                        <PhotographIcon className="Icontool" />
                    </div>
                    <textarea className="Textarea_editor" onChange={this.props.handleChangeEditor} value={this.props.textMarkdown}></textarea>
                </div>
            </section>
        )
    };
}

export default Editor;