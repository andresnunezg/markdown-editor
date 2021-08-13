import React from 'react';

import { PencilAltIcon } from '@heroicons/react/outline';
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
                        <button onClick={this.props.handleClick} id="copy" type="button" className="TitleEditor__action-copy">
                            Copiar&nbsp;
                            <i id="copy" className="far fa-copy"></i>
                        </button>
                        <button onClick={this.props.handleClick} id="clear" className="TitleEditor__action-clear">
                            Limpiar&nbsp;
                            <i id="clear" className="far fa-trash-alt"></i>
                        </button>
                    </div>
                </div>
                <div className="Textedit__container">
                    <div className="Textedit__toolbar">
                        <button onClick={this.props.handleClick} id="heading" type="button" className="Icontool">
                            <i id="heading" className="fas fa-heading"></i>
                        </button>
                        <button onClick={this.props.handleClick} id="bold" type="button" className="Icontool">
                            <i id="bold" className="fas fa-bold"></i>
                        </button>
                        <button onClick={this.props.handleClick} id="italic" type="button" className="Icontool">
                            <i id="italic" className="fas fa-italic"></i>
                        </button>
                        <button onClick={this.props.handleClick} id="cross" type="button" className="Icontool">
                            <i id="cross" className="fas fa-strikethrough"></i>
                        </button>
                        <button onClick={this.props.handleClick} id="in-code" type="button" className="Icontool">
                            <i id="in-code" className="fas fa-terminal"></i>
                        </button>
                        <button onClick={this.props.handleClick} id="mu-code" type="button" className="Icontool">
                            <i id="mu-code" className="fas fa-code"></i>
                        </button>
                        <button onClick={this.props.handleClick} id="link" type="button" className="Icontool">
                            <i id="link" className="fas fa-link"></i>
                        </button>
                        <button onClick={this.props.handleClick} id="table" type="button" className="Icontool">
                            <i id="table" className="fas fa-table"></i>
                        </button>
                        <button onClick={this.props.handleClick} id="quote" type="button" className="Icontool">
                            <i id="quote" className="fas fa-quote-right"></i>
                        </button>
                        <button onClick={this.props.handleClick} id="list" type="button" className="Icontool">
                            <i id="list" className="fas fa-list"></i>
                        </button>
                        <button onClick={this.props.handleClick} id="image" type="button" className="Icontool">
                            <i id="image" className="fas fa-images"></i>
                        </button>
                    </div>
                    <textarea className="Textarea_editor" onChange={this.props.handleChangeEditor} value={this.props.textMarkdown}></textarea>
                </div>
            </section>
        )
    };
}

export default Editor;