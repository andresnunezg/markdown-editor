import React from 'react';
import marked from 'marked';

import { DocumentTextIcon } from '@heroicons/react/outline';
import './styles/Previewer.css'

class Previewer extends React.Component {
    markdownConvert = () => {
        const rawMD = marked(this.props.textMarkdown, {sanitize: true});
        return (
            {__html: rawMD}
        );
    }
    componentDidUpdate(prevProps) {
        if (this.props.clickDoDownload !== prevProps.clickDoDownload) {
            if (this.props.clickDoDownload) {
              this.downloadElement.click();
            }
        }
    }
    render () {
        return (
            <section id="previewer">
                <div className="Title__container TitlePreviewer">
                    <div className="TitlePreviewer__left">
                        <DocumentTextIcon className="Icon__title" />
                        <h1>Vista previa</h1>
                    </div>
                    <div className="TitlePreviewer__right">
                        <button onClick={this.props.handleClick} id="download" type="button" className="TitlePreviewer__action-download">
                            Descargar&nbsp;
                            <i className="fas fa-download"></i>
                        </button>
                        <a
                         ref={e => this.downloadElement = e}
                         href={this.props.hrefDownload}
                         download="live-editor-markdown.md"
                         className="HiddenLink">
                        </a>
                    </div>
                </div>
                <div className="TextPreview__container" dangerouslySetInnerHTML={this.markdownConvert()} />
            </section>
        )
    };
}

export default Previewer;